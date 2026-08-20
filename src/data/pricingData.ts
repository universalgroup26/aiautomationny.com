import { PricingTier } from "../types";

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "ai-starter",
    name: "AI BUSINESS STARTER",
    setupFee: "$2,500",
    monthlyFee: "$297",
    tagline: "Turn your website into a 24/7 lead capture & booking system.",
    description: "For NYC small businesses that need their digital sales foundation professionally built.",
    idealFor: "Solo operators, single-location practices, or small businesses seeking core AI digital foundation.",
    features: [
      "Premium 4–5 Page AI-Powered Website (Mobile-First, Conversion UI/UX, Local SEO)",
      "CRM Setup, Sales Pipeline & Contact Lead Source Tracking",
      "Calendar Booking System with Automated Confirmation & Reminders",
      "Appointment-Ready AI Website Chatbot (24/7 FAQs, Lead Info Capture & AI Booking)",
      "Email + SMS Integration & Automated Missed-Call Text Back",
      "Up to 7 Custom Automation Workflows & Basic Sales Dashboard",
      "Google Business Profile Connection & Analytics Tracking Setup",
      "Staff Training & 30-Day Implementation Support"
    ],
    ctaText: "GET STARTED WITH STARTER"
  },
  {
    id: "ai-growth",
    name: "AI BUSINESS GROWTH",
    popular: true,
    setupFee: "$5,000",
    monthlyFee: "$597",
    tagline: "A complete AI lead generation and sales automation system.",
    description: "Universal Tech's primary package for growing NYC businesses — designed to drive ads & web traffic straight into qualified sales.",
    idealFor: "Established local service businesses, contractors, medical/dental practices, and growing teams.",
    features: [
      "Everything in AI BUSINESS STARTER, plus:",
      "Advanced 4–5 Page AI Website with Industry-Specific Conversion Messaging & Funnels",
      "Advanced CRM Architecture with Multiple Sales Pipelines",
      "Advanced Appointment-Ready AI Chatbot with Custom Knowledge Base & Human Handoff",
      "Multi-Channel AI Follow-Up (SMS + Email + FB/Instagram Lead Ads Integration)",
      "Missed-Call Automation, No-Response Recovery & Long-Term Lead Nurture",
      "Database Reactivation Campaigns & Automated Review Requests (Reputation Management)",
      "Up to 15 Automation Workflows & Zapier / Webhook Integrations",
      "Sales Dashboard, Conversion Tracking & 60-Day Implementation Support"
    ],
    ctaText: "LOCK IN GROWTH SYSTEM"
  },
  {
    id: "ai-pro",
    name: "AI BUSINESS PRO",
    setupFee: "$8,500",
    monthlyFee: "$997",
    tagline: "Your 24/7 AI-powered front office that answers, qualifies, & books.",
    description: "Deploys an autonomous AI workforce that answers phone calls, qualifies leads, manages multi-channel chats, and books appointments 24/7.",
    idealFor: "High-volume service providers, law firms, busy clinics, roofing/HVAC contractors, and real estate teams.",
    features: [
      "Everything in AI BUSINESS GROWTH, plus:",
      "AI Voice Receptionist (24/7 Call Answering, Custom Knowledge, Qualification, Routing & Summaries)",
      "Omnichannel AI (Website Chat, SMS AI, FB Messenger AI, Instagram AI & Email)",
      "Up to 30 Advanced Automation Workflows",
      "Smart Lead Routing, Lead Scoring & Instant Sales Notifications",
      "Advanced Nurture, Customer Reactivation & Review/Referral Automation",
      "API / Webhook Integrations & Custom Dashboards",
      "Advanced Reporting & Priority Support"
    ],
    ctaText: "SCALE WITH PRO WORKFORCE"
  },
  {
    id: "ai-elite",
    name: "AI BUSINESS ELITE",
    setupFee: "Starting at $15,000",
    monthlyFee: "$1,500 - $2,500+/mo",
    tagline: "Custom Enterprise AI Architecture & Multi-Agent Operations",
    description: "For complex multi-location enterprises, healthcare networks, corporate franchises, and multi-department organizations requiring tailored AI agents.",
    idealFor: "Multi-location groups, law firms, healthcare systems, larger contractors, and enterprise organizations.",
    features: [
      "Everything in AI BUSINESS PRO, plus:",
      "Custom AI Business Architecture & Multiple Specialized AI Agents",
      "Multi-Department & Multi-Location CRM with Multiple Calendars & Custom Routing",
      "Advanced AI Voice Configuration & Custom Neural Voice Tuning",
      "Custom API Integrations, Webhooks & External Software Bridges",
      "Sales, Customer Service & Internal Operations Custom Workflows",
      "Database Migration & Custom Management Dashboard",
      "Management Team Training, Priority SLA & Quarterly Strategy Optimization"
    ],
    ctaText: "REQUEST CUSTOM ELITE QUOTE"
  }
];
