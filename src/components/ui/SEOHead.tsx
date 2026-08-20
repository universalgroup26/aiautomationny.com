import React, { useEffect } from "react";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSchemaInfo {
  name: string;
  description: string;
  category?: string;
  price?: string;
  url?: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile" | "product";
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  serviceInfo?: ServiceSchemaInfo;
  jsonLd?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "AI AUTOMATION NY | AI-Powered Business Growth Systems NYC",
  description = "Universal Tech & AI Automation NY builds 4–5 page AI-powered websites, 24/7 AI Voice Receptionists, Chatbots, and CRM Sales Pipelines for NYC businesses ($2,500 - $15,000+).",
  keywords = "AI Automation NY, Universal Tech AI, AI Voice Receptionist NYC, AI Business Growth System, GoHighLevel Setup NYC, AI Lead Qualification, 24/7 AI Chatbot, CRM Sales Automation New York, SDVOSB AI NYC, Veteran Owned AI Agency",
  canonicalUrl = "https://aiautomationny.com",
  ogImage = "https://aiautomationny.com/og-brand-image.jpg",
  ogType = "website",
  breadcrumbs,
  faqs,
  serviceInfo,
  jsonLd,
}) => {
  useEffect(() => {
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (nameAttr: string, nameValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (element) {
        element.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute(nameAttr, nameValue);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    // Standard Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("name", "author", "Universal Tech & AI Automation NY");
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMetaTag("name", "publisher", "Universal Tech INC");
    setMetaTag("name", "format-detection", "telephone=yes");
    setMetaTag("name", "theme-color", "#07152D");

    // Geo Local SEO Tags for New York City / Queens / Tri-State
    setMetaTag("name", "geo.region", "US-NY");
    setMetaTag("name", "geo.placename", "New York, Jackson Heights, Queens, NYC, Manhattan, Brooklyn");
    setMetaTag("name", "geo.position", "40.7484;-73.8915");
    setMetaTag("name", "ICBM", "40.7484, -73.8915");

    // Open Graph Tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:image:alt", title);
    setMetaTag("property", "og:site_name", "AI AUTOMATION NY");
    setMetaTag("property", "og:locale", "en_US");

    // Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);
    setMetaTag("name", "twitter:image:alt", title);

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", canonicalUrl);
      document.head.appendChild(link);
    }

    // Build Structured Data Graph
    const schemaGraph: any[] = [
      {
        "@type": "Organization",
        "@id": "https://aiautomationny.com/#organization",
        "name": "AI Automation NY",
        "alternateName": "Universal Tech INC AI Systems",
        "url": "https://aiautomationny.com",
        "logo": "https://aiautomationny.com/logo.png",
        "telephone": "+1-718-500-2221",
        "email": "contact@aiautomationny.com",
        "description": "Architects of Autonomous Enterprise. Production-grade AI Voice Receptionists, Chatbots, and CRM Sales Pipelines for NYC businesses and government contractors.",
        "foundingLocation": {
          "@type": "Place",
          "name": "Jackson Heights, Queens, New York"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3707 74th Street, Suite 8 (3rd FL)",
          "addressLocality": "Jackson Heights",
          "addressRegion": "NY",
          "postalCode": "11372",
          "addressCountry": "US"
        },
        "knowsAbout": [
          "Artificial Intelligence Automation",
          "AI Voice Receptionist Systems",
          "GoHighLevel CRM Integration",
          "Speed-to-Lead Follow-Up Workflows",
          "Database Reactivation Campaigns",
          "Multi-Agent LLM Orchestration",
          "SDVOSB Federal Government Contracting"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Government Certification",
            "name": "U.S. SBA Certified Service-Disabled Veteran-Owned Small Business (SDVOSB)"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "State Certification",
            "name": "New York State Certified Service-Disabled Veteran-Owned Business (SDVOB)"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://aiautomationny.com/#localbusiness",
        "name": "AI Automation NY - Universal Tech INC",
        "image": ogImage,
        "telephone": "+1-718-500-2221",
        "priceRange": "$$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Credit Card, ACH, Wire Transfer, Invoicing",
        "areaServed": [
          { "@type": "City", "name": "New York" },
          { "@type": "AdministrativeArea", "name": "Queens" },
          { "@type": "AdministrativeArea", "name": "Manhattan" },
          { "@type": "AdministrativeArea", "name": "Brooklyn" },
          { "@type": "AdministrativeArea", "name": "Bronx" },
          { "@type": "AdministrativeArea", "name": "Staten Island" },
          { "@type": "AdministrativeArea", "name": "Long Island" },
          { "@type": "State", "name": "New York State" }
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.7484,
          "longitude": -73.8915
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3707 74th Street, Suite 8 (3rd FL)",
          "addressLocality": "Jackson Heights",
          "addressRegion": "NY",
          "postalCode": "11372",
          "addressCountry": "US"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aiautomationny.com/#website",
        "url": "https://aiautomationny.com",
        "name": "AI AUTOMATION NY",
        "description": "Enterprise AI Automation, 24/7 AI Voice Receptionists, and CRM Systems for NYC Businesses",
        "publisher": { "@id": "https://aiautomationny.com/#organization" }
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": title,
        "description": description,
        "isPartOf": { "@id": "https://aiautomationny.com/#website" }
      }
    ];

    // Optional BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaGraph.push({
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumbs`,
        "itemListElement": breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": crumb.url.startsWith("http") ? crumb.url : `https://aiautomationny.com${crumb.url}`
        }))
      });
    }

    // Optional Service Schema
    if (serviceInfo) {
      schemaGraph.push({
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        "name": serviceInfo.name,
        "description": serviceInfo.description,
        "serviceType": serviceInfo.category || "AI Automation Service",
        "provider": { "@id": "https://aiautomationny.com/#organization" },
        "areaServed": { "@type": "State", "name": "New York" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Automation Implementations",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": serviceInfo.name,
              "description": serviceInfo.description,
              "priceCurrency": "USD",
              "price": serviceInfo.price || "2500.00"
            }
          ]
        }
      });
    }

    // Optional FAQPage Schema
    if (faqs && faqs.length > 0) {
      schemaGraph.push({
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      });
    }

    // Custom injected JSON-LD override if provided
    const finalJsonLd = jsonLd || {
      "@context": "https://schema.org",
      "@graph": schemaGraph
    };

    // Remove existing dynamic json-ld script
    const existingScript = document.getElementById("json-ld-structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    // Append updated script element
    const script = document.createElement("script");
    script.id = "json-ld-structured-data";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(finalJsonLd);
    document.head.appendChild(script);

  }, [title, description, keywords, canonicalUrl, ogImage, ogType, breadcrumbs, faqs, serviceInfo, jsonLd]);

  return null;
};
