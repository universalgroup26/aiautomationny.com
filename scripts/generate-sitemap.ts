import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { SERVICES_DATA } from "../src/data/servicesData";
import { INDUSTRIES_CATEGORIES } from "../src/data/industriesData";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://aiautomationny.com";
const TODAY = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format as required by Google SEO guidelines

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: string;
}

function generateSitemap() {
  console.log("🚀 Generating dynamic sitemap.xml for AI AUTOMATION NY...");

  const urls: SitemapUrl[] = [
    // Main Static Core Pages
    { loc: `${BASE_URL}/`, lastmod: TODAY, changefreq: "daily", priority: "1.0" },
    { loc: `${BASE_URL}/services`, lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
    { loc: `${BASE_URL}/industries`, lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
    { loc: `${BASE_URL}/pricing`, lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
    { loc: `${BASE_URL}/book-demo`, lastmod: TODAY, changefreq: "weekly", priority: "0.9" },
    { loc: `${BASE_URL}/how-it-works`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
    { loc: `${BASE_URL}/results`, lastmod: TODAY, changefreq: "weekly", priority: "0.8" },
    { loc: `${BASE_URL}/about`, lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: `${BASE_URL}/contact`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
    { loc: `${BASE_URL}/brand-assets`, lastmod: TODAY, changefreq: "monthly", priority: "0.5" },
  ];

  // Dynamic Service Pages
  SERVICES_DATA.forEach((service) => {
    urls.push({
      loc: `${BASE_URL}/services/${service.slug}`,
      lastmod: TODAY,
      changefreq: "weekly",
      priority: "0.8",
    });
  });

  // Dynamic Industry Pages
  INDUSTRIES_CATEGORIES.forEach((category) => {
    category.industries.forEach((industry) => {
      urls.push({
        loc: `${BASE_URL}/industries/${industry.slug}`,
        lastmod: TODAY,
        changefreq: "weekly",
        priority: "0.8",
      });
    });
  });

  // Construct XML adhering strictly to Sitemaps.org & Google Search Console specifications
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  const publicDir = path.join(__dirname, "..", "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, xmlContent.trim(), "utf-8");

  console.log(`✅ Successfully generated sitemap.xml with ${urls.length} indexed URLs at: ${sitemapPath}`);
}

generateSitemap();
