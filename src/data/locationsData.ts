export interface LocationItem {
  slug: string;
  name: string;
  boroughOrRegion: string;
  headline: string;
  subheadline: string;
  description: string;
  keyIndustries: string[];
}

export const LOCATIONS_DATA: LocationItem[] = [
  {
    slug: "new-york",
    name: "New York City",
    boroughOrRegion: "Metro NYC",
    headline: "AI AUTOMATION FOR NEW YORK CITY BUSINESSES",
    subheadline: "Stop losing fast-moving NYC leads to missed calls and delayed responses. Our AI Voice Receptionists and automated CRM funnels help New York businesses capture and book local clients 24/7.",
    description: "In the fast-paced New York market, buyers don't wait for callbacks. AI Automation NY provides local service contractors, practices, and professional firms across all five boroughs with custom 24/7 AI answering.",
    keyIndustries: ["HVAC & Plumbing", "Dental & Healthcare", "Law Firms", "Contractors", "Real Estate Brokers"]
  },
  {
    slug: "queens",
    name: "Queens, NY",
    boroughOrRegion: "Queens Borough",
    headline: "QUEENS AI AUTOMATION & 24/7 AI VOICE RECEPTIONISTS",
    subheadline: "Headquartered in Jackson Heights, Queens, we help Queens local businesses, contractors, and medical practices automate lead capture, booking, and customer communication.",
    description: "From Jackson Heights, Astoria, and Flushing to Forest Hills and Jamaica, Queens businesses face heavy local competition. Our AI solutions ensure your business answers every inbound call in under 2 seconds.",
    keyIndustries: ["Home Services", "Dental Clinics", "Auto Repair", "Restaurants & Catering", "Real Estate"]
  },
  {
    slug: "brooklyn",
    name: "Brooklyn, NY",
    boroughOrRegion: "Brooklyn Borough",
    headline: "AI AUTOMATION & CRM WORKFLOWS FOR BROOKLYN BUSINESSES",
    subheadline: "Modernize your Brooklyn business with automated AI chat, phone answering, and speed-to-lead follow-up systems.",
    description: "From Williamsburg and Downtown Brooklyn to Bay Ridge and Flatbush, we empower Brooklyn entrepreneurs with automated customer acquisition engines that never go off duty.",
    keyIndustries: ["Contractors & Remodelers", "Professional Services", "Healthcare", "Salons & Spas", "Retail"]
  },
  {
    slug: "manhattan",
    name: "Manhattan, NY",
    boroughOrRegion: "Manhattan Borough",
    headline: "ENTERPRISE AI AUTOMATION FOR MANHATTAN FIRMS & PRACTICES",
    subheadline: "High-value client intake and automated scheduling for Manhattan law firms, medical specialists, real estate agencies, and corporate services.",
    description: "Manhattan clientele expects immediate white-glove response. Our AI Voice & Intake systems screen leads, qualify criteria, and book consultations onto your team calendars instantly.",
    keyIndustries: ["Law Firms", "Medical Specialists", "Real Estate Brokers", "Financial & Accounting", "Consulting"]
  },
  {
    slug: "bronx",
    name: "The Bronx, NY",
    boroughOrRegion: "Bronx Borough",
    headline: "THE BRONX LOCAL BUSINESS AI AUTOMATION & PHONE SYSTEMS",
    subheadline: "Empower Bronx service contractors, auto shops, and medical centers with 24/7 AI answering and automated customer review generation.",
    description: "Capture every local lead in Riverdale, Pelham Bay, Mott Haven, and across the Bronx with automated SMS follow-up, instant phone response, and calendar scheduling.",
    keyIndustries: ["Plumbing & Electrical", "Medical Offices", "Auto Services", "Home Care", "Local Retail"]
  },
  {
    slug: "staten-island",
    name: "Staten Island, NY",
    boroughOrRegion: "Staten Island Borough",
    headline: "STATEN ISLAND CONTRACTOR & LOCAL SERVICE AI AUTOMATION",
    subheadline: "Automate emergency call dispatch, quote follow-up, and appointment booking for Staten Island homeowners and businesses.",
    description: "Staten Island homeowners need reliable local service. Our AI ensures your HVAC, roofing, or plumbing business responds in under 60 seconds to every web and phone inquiry.",
    keyIndustries: ["HVAC & Roofing", "Plumbing", "Law Practices", "Dental", "Auto Repair"]
  },
  {
    slug: "long-island",
    name: "Long Island, NY",
    boroughOrRegion: "Nassau & Suffolk Counties",
    headline: "LONG ISLAND AI AUTOMATION FOR HOME SERVICES & PRACTICES",
    subheadline: "Cover Nassau and Suffolk Counties with 24/7 AI Voice Receptionists, instant quote follow-up, and automated review collection.",
    description: "Long Island's expansive suburban market demands fast speed-to-lead. We connect your ad campaigns, phone lines, and calendars into a streamlined AI booking engine.",
    keyIndustries: ["Home Contractors", "Dental & Medical Practices", "Real Estate", "Law Firms", "Landscaping & Pool Services"]
  }
];
