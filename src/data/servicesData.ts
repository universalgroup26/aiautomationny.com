import { ServiceItem } from "../types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "ai-voice-receptionist",
    name: "AI Voice Receptionist",
    shortDescription: "Answer 100% of incoming business phone calls instantly with natural human-like voice AI.",
    category: "communication",
    headline: "YOUR BUSINESS CAN ANSWER EVEN WHEN YOUR TEAM CAN'T.",
    subheadline: "Never lose another high-value lead to voicemail or a competitor again. Our AI Voice Receptionist handles incoming calls 24/7/365 with custom scripts, real-time qualification, and direct calendar booking.",
    iconName: "PhoneCall",
    outcome: "Capture 100% of inbound calls and increase appointment bookings by up to 45%.",
    painPoints: [
      "Over 62% of incoming sales calls go unanswered after business hours or during peak service rushes.",
      "Callers hang up immediately when routed to generic voicemail and call your local competitor.",
      "Human front-desk staff burn hours answering basic repetitive FAQs instead of focusing on high-payoff work."
    ],
    workflowSteps: [
      { title: "Call Inbound", description: "Inbound phone call arrives from website, Google Business Profile, or marketing ad.", nodeType: "input" },
      { title: "AI Greeting", description: "AI Receptionist answers in <2 seconds with custom brand persona and warm voice tone.", nodeType: "action" },
      { title: "Real-time AI Intelligence", description: "Understands caller intent, answers FAQs, and asks qualification questions.", nodeType: "ai" },
      { title: "Booking & Route", description: "Checks real-time calendar availability, schedules appointment, and notifies service team.", nodeType: "crm" },
      { title: "Instant SMS Confirmation", description: "Sends SMS appointment confirmation and calendar link to customer.", nodeType: "output" }
    ],
    journeyMindMap: {
      start: "CALL ARRIVES ON PHONE LINE",
      branches: [
        {
          condition: "NEW LEAD / INQUIRY",
          steps: ["Qualify Urgent Needs", "Capture Name & Details", "Check Real-Time Calendar", "Book Appointment", "Update CRM & Send Confirmation SMS"]
        },
        {
          condition: "EXISTING CUSTOMER / SUPPORT",
          steps: ["Identify Contact in CRM", "Provide Status or FAQ Answer", "Transfer to On-Call Technician or Staff", "Log Interaction Notes"]
        }
      ]
    },
    keyFeatures: [
      { title: "Natural Human Tone", description: "Powered by modern neural speech engines with conversational turn-taking, subtle latency control, and custom local accents." },
      { title: "Real-Time CRM & Calendar Sync", description: "Directly integrates with Google Calendar, Outlook, GoHighLevel, HubSpot, and custom CRMs." },
      { title: "Smart Escalation & Live Transfer", description: "If a call requires human intervention (e.g., severe emergency), the AI seamlessly transfers the live call to your on-call technician." },
      { title: "Multi-Language Support", description: "Bilingually answers calls in English and Spanish for diverse New York market demographics." }
    ],
    industryUseCases: [
      { industry: "HVAC & Plumbing", useCase: "Dispatches emergency night calls, qualifies dispatch location, and schedules morning technician visits." },
      { industry: "Dental & Medical", useCase: "Answers after-hours appointment requests, answers basic insurance policy questions, and registers new patients." },
      { industry: "Law Firms", useCase: "Performs instant initial client intake, screens case eligibility, and books attorney consultation slots." }
    ],
    faqs: [
      { question: "Does the AI sound like a robotic automated phone tree?", answer: "No. Our AI Voice Receptionist uses natural speech synthesis with conversational turn-taking that sounds remarkably human, responsive, and friendly." },
      { question: "Can callers speak naturally or do they have to press numbers?", answer: "Callers speak completely naturally in full sentences. The AI understands context, accents, and complex multi-part questions." },
      { question: "What happens if a caller has a complex emergency?", answer: "The AI can be programmed with custom priority rules to immediately patch high-priority emergency calls to your duty manager or technician." }
    ],
    relatedServicesSlugs: ["ai-chatbot-booking", "crm-sales-automation", "lead-follow-up"]
  },
  {
    slug: "ai-chatbot-booking",
    name: "AI Chat & Booking",
    shortDescription: "Turn website visitors into scheduled calendar appointments automatically with conversational chat.",
    category: "communication",
    headline: "CONVERT WEBSITE VISITORS INTO BOOKED APPOINTMENTS 24/7.",
    subheadline: "Static contact forms waste qualified buyer intent. Our intelligent AI chat widget engages web visitors instantly, answers precise service inquiries, qualifies prospects, and locks in appointments in under 2 minutes.",
    iconName: "MessageSquare",
    outcome: "Boost web lead-to-appointment conversion rate from 3% to over 18%.",
    painPoints: [
      "Traditional web forms sit idle while 90% of website traffic leaves without leaving contact info.",
      "Prospects expect instant answers to pricing, availability, and service areas at midnight.",
      "Manual email back-and-forth to pick an appointment time causes leads to go cold."
    ],
    workflowSteps: [
      { title: "Visitor Engagement", description: "AI chat greets website visitor based on page context or intent.", nodeType: "input" },
      { title: "Smart Conversation", description: "Answers specific questions about pricing, timeline, and capabilities.", nodeType: "ai" },
      { title: "Qualification", description: "Gathers contact info, service type, urgency, and zip code.", nodeType: "action" },
      { title: "Interactive Booking", description: "Displays live calendar timeslots directly inside the chat window.", nodeType: "crm" },
      { title: "Automated Nurture", description: "Syncs lead to CRM and triggers pre-appointment SMS reminders.", nodeType: "output" }
    ],
    journeyMindMap: {
      start: "VISITOR LANDS ON WEBSITE",
      branches: [
        {
          condition: "WANTS A QUOTE OR SERVICE",
          steps: ["Interactive Needs Assessment", "Zip Code Service Validation", "Select Date & Time Slot", "Instant CRM Sync & SMS Confirmation"]
        },
        {
          condition: "HAS GENERAL QUESTIONS",
          steps: ["AI Answers from Business Knowledge Base", "Prompts for Consultation", "Captures Contact Info"]
        }
      ]
    },
    keyFeatures: [
      { title: "Context-Aware AI Knowledge", description: "Trained on your business documentation, pricing guides, service areas, and FAQs." },
      { title: "In-Widget Calendar Booking", description: "Visitors book without leaving your website or opening external links." },
      { title: "Multi-Channel Deployment", description: "Works seamlessly on desktop websites, mobile devices, Facebook Messenger, and Instagram DMs." },
      { title: "Lead Scoring & Tagging", description: "Automatically tags high-value leads in your CRM based on intent and budget." }
    ],
    industryUseCases: [
      { industry: "Home Services", useCase: "Qualifies homeowner project scope, estimates service window, and books estimate calls." },
      { industry: "Real Estate", useCase: "Schedules buyer property walk-throughs and screens pre-qualification status." },
      { industry: "Salons & Spas", useCase: "Books specialized treatments directly into booking software with deposit collection." }
    ],
    faqs: [
      { question: "Can the chat assistant check my real team calendar?", answer: "Yes. It syncs directly with Google Calendar, Outlook, GoHighLevel, and major booking platforms to prevent double bookings." },
      { question: "Can I customize the chat branding and avatar?", answer: "Absolutely. The chat widget, colors, avatar, tone, and brand messaging are customized to blend with your website." }
    ],
    relatedServicesSlugs: ["ai-powered-websites", "appointment-automation", "lead-follow-up"]
  },
  {
    slug: "ai-powered-websites",
    name: "AI-Powered Websites",
    shortDescription: "High-converting, lightning-fast business websites with embedded AI interaction layers.",
    category: "conversion",
    headline: "WEBSITES BUILT FOR CONVERSION, NOT JUST DECORATION.",
    subheadline: "Most business websites are online brochureware that leak leads. We build custom, ultra-fast AI-powered business engines engineered to turn traffic into qualified appointments.",
    iconName: "Globe",
    outcome: "Replace passive forms with interactive AI conversion funnels that multiply leads.",
    painPoints: [
      "Slow, outdated websites with high bounce rates and zero mobile optimization.",
      "No real-time response mechanisms to capture high-intent buyers.",
      "Disconnected analytics with no visibility into lead source attribution."
    ],
    workflowSteps: [
      { title: "Targeted Traffic", description: "Prospect arrives from local search, Google Ads, or social media.", nodeType: "input" },
      { title: "AI Value Hook", description: "Dynamic headline and interactive AI widget engage visitor immediately.", nodeType: "ai" },
      { title: "Guided Flow", description: "Interactive diagnostic tool or estimate calculator qualifies needs.", nodeType: "action" },
      { title: "Conversion Engine", description: "Captures verified phone number and books appointment into CRM.", nodeType: "crm" }
    ],
    journeyMindMap: {
      start: "PROSPECT ARRIVES ON SITE",
      branches: [
        {
          condition: "HIGH-INTENT BUYER",
          steps: ["Interactive AI Assistant Opens", "Guided Qualification", "Direct Calendar Booking", "CRM Pipeline Entry"]
        },
        {
          condition: "RESEARCHING OPTIONS",
          steps: ["Dynamic Case Study / Calculator", "Lead Magnet Download", "Automated Email/SMS Nurture"]
        }
      ]
    },
    keyFeatures: [
      { title: "Sub-Second Load Speeds", description: "Built with modern Next.js/React architecture for maximum Google PageSpeed performance." },
      { title: "Embedded AI Widgets", description: "Integrated AI voice demo, interactive quote calculators, and instant booking widgets." },
      { title: "Local SEO Architecture", description: "Schema-structured metadata targeting New York boroughs and regional service radiuses." },
      { title: "Mobile-First Conversion Layout", description: "Sticky CTAs, thumb-friendly touch targets, and tap-to-call integrations." }
    ],
    industryUseCases: [
      { industry: "Contractors & Builders", useCase: "Showcases project galleries alongside instant AI consultation scheduling." },
      { industry: "Law Firms", useCase: "Displays high-trust case verdicts with 24/7 AI intake chatbot." }
    ],
    faqs: [
      { question: "Do you redesign our existing website or build a new one?", answer: "We can either upgrade your current website architecture with embedded AI workflows or build a complete new high-performing web engine." }
    ],
    relatedServicesSlugs: ["ai-chatbot-booking", "crm-sales-automation", "reporting-analytics"]
  },
  {
    slug: "crm-sales-automation",
    name: "CRM & Sales Automation",
    shortDescription: "Centralize all leads, calls, texts, and deals into an automated pipeline that never loses track.",
    category: "operations",
    headline: "COMPLETE PIPELINE VISIBILITY AND ZERO MANUAL DATA ENTRY.",
    subheadline: "Stop managing leads across scattered sticky notes, text threads, and spreadsheets. We build a unified CRM command center that tracks every lead from first contact to closed revenue.",
    iconName: "Database",
    outcome: "Eliminate 80% of manual CRM data entry and increase sales pipeline velocity.",
    painPoints: [
      "Leads falling through the cracks because sales reps forget to follow up.",
      "No centralized view of active deals, revenue forecast, or team performance.",
      "Manual copy-pasting of lead info across forms, email, and calendars."
    ],
    workflowSteps: [
      { title: "Multi-Source Capture", description: "Phone, Web, Meta Ads, and Google leads flow into central CRM.", nodeType: "input" },
      { title: "Automated Lead Assignment", description: "Lead is scored, tagged, and assigned to the right team member.", nodeType: "action" },
      { title: "Pipeline Stage Trigger", description: "Automated SMS/Email tasks trigger based on deal stage changes.", nodeType: "crm" },
      { title: "Automated Contract/Invoice", description: "Generates quotes, digital contracts, and deposit payment links.", nodeType: "output" }
    ],
    journeyMindMap: {
      start: "NEW LEAD INGESTION",
      branches: [
        {
          condition: "NEW PIPELINE ENTRY",
          steps: ["Auto-Assign Rep", "Trigger 5-Minute Follow-Up", "Schedule Reminder Task", "Track Pipeline Value"]
        },
        {
          condition: "DEAL WON",
          steps: ["Trigger Onboarding Workflow", "Send Payment/Invoice", "Automate Review Request"]
        }
      ]
    },
    keyFeatures: [
      { title: "Unified Inbox", description: "Combine SMS, email, WhatsApp, phone calls, and web chat into one inbox." },
      { title: "Automated Pipeline Stages", description: "Deals advance automatically as leads book, reply, or pay deposits." },
      { title: "GoHighLevel & Custom Architecture", description: "Custom configured for your sales process with seamless API connections." },
      { title: "Sales Rep Performance Dashboards", description: "Track speed-to-lead, conversion percentages, and closed revenue per rep." }
    ],
    industryUseCases: [
      { industry: "Professional Services", useCase: "Automates proposal delivery, follow-up reminders, and contract signatures." },
      { industry: "Real Estate Brokers", useCase: "Tracks buyer/seller status across property stages with automated alerts." }
    ],
    faqs: [
      { question: "Can this integrate with our existing CRM like Salesforce or HubSpot?", answer: "Yes, we build custom bi-directional API bridges between your existing software stack and our AI automation layer." }
    ],
    relatedServicesSlugs: ["lead-follow-up", "appointment-automation", "reporting-analytics"]
  },
  {
    slug: "lead-follow-up",
    name: "Automated Follow-Up Systems",
    shortDescription: "Instant 60-second speed-to-lead response and multi-channel drip nurture across SMS, email, and call rings.",
    category: "conversion",
    headline: "THE SECRET TO CLOSING MORE LEADS IS SPEED TO LEAD.",
    subheadline: "If you don't respond to a lead in 5 minutes, your odds of qualifying them drop by 800%. Our automated follow-up engine responds in under 60 seconds and persistently nurtures until they book.",
    iconName: "Zap",
    outcome: "Achieve <60 second response times and re-engage up to 35% of silent leads.",
    painPoints: [
      "Taking hours or days to respond to web form inquiries.",
      "Sales reps giving up after 1 or 2 failed follow-up attempts.",
      "Cold leads sitting dormant with no automated long-term email/SMS nurture."
    ],
    workflowSteps: [
      { title: "Inbound Lead Alert", description: "New lead submitted on website or ad campaign.", nodeType: "input" },
      { title: "<60 Second AI SMS Response", description: "Personalized text message sent instantly to lead phone number.", nodeType: "action" },
      { title: "Multi-Touch Campaign", description: "Sequenced follow-up across SMS, Email, and Voicemail Drop over 14 days.", nodeType: "ai" },
      { title: "Conversion Hand-off", description: "When lead replies, AI books appointment or routes to sales team.", nodeType: "crm" }
    ],
    journeyMindMap: {
      start: "NEW LEAD RECEIVED",
      branches: [
        {
          condition: "LEAD REPLIES IMMEDIATELY",
          steps: ["AI Chat Takes Over", "Qualifies Intent", "Books Calendar Slot"]
        },
        {
          condition: "LEAD UNRESPONSIVE",
          steps: ["Day 1: Follow-Up SMS", "Day 2: Value Email", "Day 4: Voicemail Drop", "Day 7: Re-engagement Offer"]
        }
      ]
    },
    keyFeatures: [
      { title: "Under 60-Second Speed to Lead", description: "Instant automated outreach while prospect is still on your website or ad." },
      { title: "Ringless Voicemail Drops", description: "Delivers a courteous voice message straight to voicemail without ringing the phone." },
      { title: "Conversational AI Reply Engine", description: "AI detects positive replies, questions, or opt-outs intelligently." },
      { title: "Smart Time-of-Day Logic", description: "Respects timezone laws and business hours to prevent middle-of-the-night texts." }
    ],
    industryUseCases: [
      { industry: "Roofing & Contractors", useCase: "Follows up on estimate requests with automated project photo examples and pricing reminders." },
      { industry: "Mortgage & Insurance", useCase: "Nurtures quote requests over 30 days until rate/policy review is booked." }
    ],
    faqs: [
      { question: "Is automated SMS follow-up compliant with A2P 10DLC regulations?", answer: "Yes, we handle complete carrier registration, optical consent mechanisms, and 10DLC compliance." }
    ],
    relatedServicesSlugs: ["crm-sales-automation", "database-reactivation", "ai-voice-receptionist"]
  },
  {
    slug: "appointment-automation",
    name: "Appointment Automation",
    shortDescription: "Eliminate no-shows and double bookings with automated calendar scheduling and 2-way SMS reminders.",
    category: "conversion",
    headline: "FILL YOUR CALENDAR AND ELIMINATE COSTLY NO-SHOWS.",
    subheadline: "No-shows cost local service businesses thousands in lost billable hours. Our automated scheduling ecosystem sends timely SMS/email reminders, 2-way confirmation prompts, and easy rescheduling links.",
    iconName: "Calendar",
    outcome: "Reduce appointment no-show rates by up to 80%.",
    painPoints: [
      "High no-show rates wasting technician and service staff time.",
      "Manual phone calls to confirm tomorrow's appointment schedules.",
      "Friction in rescheduling leads to outright cancellations."
    ],
    workflowSteps: [
      { title: "Booking Confirmed", description: "Appointment scheduled via AI Voice, Chat, or Web.", nodeType: "input" },
      { title: "Calendar Lock", description: "Block timeslot, generate video link or technician dispatch card.", nodeType: "action" },
      { title: "24-Hour & 2-Hour Reminders", description: "Sends interactive SMS requiring customer 'C' to confirm or 'R' to reschedule.", nodeType: "ai" },
      { title: "No-Show Recovery", description: "If missed, immediately triggers automated rescheduling campaign.", nodeType: "output" }
    ],
    journeyMindMap: {
      start: "APPOINTMENT BOOKED",
      branches: [
        {
          condition: "CUSTOMER CONFIRMS 'C'",
          steps: ["Calendar Tagged Confirmed", "Dispatch Notice Sent to Team", "Post-Service Follow-up Scheduled"]
        },
        {
          condition: "CUSTOMER REQUESTS RESCHEDULE 'R'",
          steps: ["Interactive AI Rescheduling Link Sent", "Old Slot Freed Up Immediately", "New Slot Confirmed"]
        }
      ]
    },
    keyFeatures: [
      { title: "2-Way SMS Confirmation", description: "Customers reply '1' to confirm or '2' to reschedule directly via text." },
      { title: "Automated Buffer & Travel Time", description: "Configures travel buffers between service locations automatically." },
      { title: "Pre-Appointment Intake Forms", description: "Collects required forms or photos prior to the appointment date." },
      { title: "Deposit & Payment Collection", description: "Requires a booking deposit to lock in calendar slots and reduce ghosting." }
    ],
    industryUseCases: [
      { industry: "Medical & Dental", useCase: "Sends automated pre-appointment instructions and reduces open chair time." },
      { industry: "Auto Repair", useCase: "Sends vehicle drop-off reminders and estimates." }
    ],
    faqs: [
      { question: "Can it integrate with Google Calendar and specialized software?", answer: "Yes, it syncs bi-directionally with Google Calendar, Outlook, ServiceTitan, Dentrix, Calendly, and GHL." }
    ],
    relatedServicesSlugs: ["ai-voice-receptionist", "ai-chatbot-booking", "reputation-management"]
  },
  {
    slug: "database-reactivation",
    name: "Database Reactivation",
    shortDescription: "Turn dead customer contact lists into immediate revenue with automated reactivation campaigns.",
    category: "growth",
    headline: "UNEARTH HIDDEN REVENUE IN YOUR EXISTING CONTACT DATABASE.",
    subheadline: "You sitting on hundreds or thousands of past leads and inactive customers. Our Database Reactivation engine launches targeted, value-driven AI outreach campaigns that turn cold contacts into booked jobs in days.",
    iconName: "RefreshCw",
    outcome: "Generate thousands in new revenue from existing lists without spending a dollar on ad campaigns.",
    painPoints: [
      "Thousands of old leads sitting dormant in spreadsheets or old software.",
      "High acquisition costs on new ad campaigns while old database is ignored.",
      "Manual email blasts getting ignored or ending up in spam folders."
    ],
    workflowSteps: [
      { title: "Database Ingestion & Segment", description: "Clean, deduplicate, and segment historical contact list.", nodeType: "input" },
      { title: "Low-Pressure AI Outreach", description: "Send personalized, conversational SMS/email offer to micro-segments.", nodeType: "action" },
      { title: "AI Conversation Handling", description: "AI handles incoming replies, answers questions, and qualifies intent.", nodeType: "ai" },
      { title: "Immediate Booking", description: "Books re-engaged customers into open calendar slots.", nodeType: "output" }
    ],
    journeyMindMap: {
      start: "PAST CONTACT LIST (e.g. 2,000 Contacts)",
      branches: [
        {
          condition: "REPLIES WITH INTEREST",
          steps: ["AI Handles Question", "Presents Special Seasonal Offer", "Direct Calendar Booking", "New CRM Sale Record"]
        },
        {
          condition: "OPT-OUT / UNSUBSCRIBE",
          steps: ["Instant Automatic Opt-out Compliance", "Database Cleansed"]
        }
      ]
    },
    keyFeatures: [
      { title: "Micro-Batch Sending", description: "Drips outreach in controlled batches so your team is never overwhelmed with replies." },
      { title: "Conversational Offer Hooks", description: "Uses natural, low-pressure question hooks (e.g., 'Are you still looking for HVAC maintenance before winter?') rather than spammy graphics." },
      { title: "List Cleaning & Hygiene", description: "Filters out invalid phone numbers and landlines before sending." }
    ],
    industryUseCases: [
      { industry: "Dental Practices", useCase: "Re-activates patients overdue for 6-month cleanings and hygiene checkups." },
      { industry: "HVAC & Roofing", useCase: "Offers pre-season inspection tune-ups to past customer list." }
    ],
    faqs: [
      { question: "How many leads do we need for a Database Reactivation campaign?", answer: "Campaigns work exceptionally well with lists as small as 300 contacts or as large as 50,000+ contacts." }
    ],
    relatedServicesSlugs: ["lead-follow-up", "reputation-management", "crm-sales-automation"]
  },
  {
    slug: "reputation-management",
    name: "Reputation Management",
    shortDescription: "Automatically generate 5-star Google reviews and manage customer feedback effortlessly.",
    category: "growth",
    headline: "DOMINATE LOCAL SEARCH WITH A STEADY STREAM OF 5-STAR REVIEWS.",
    subheadline: "Local buyers choose the business with the most and best Google reviews. Our automated system requests reviews right after service completion, routes feedback, and responds to reviews automatically.",
    iconName: "Star",
    outcome: "Multiply Google review volume by 3x-5x and boost local map pack ranking.",
    painPoints: [
      "Happy customers forget to leave reviews while unhappy customers vent online.",
      "Staff forgets to manually ask for Google reviews after completing jobs.",
      "Low review count hurting Google Business Profile local search visibility."
    ],
    workflowSteps: [
      { title: "Job Completed in CRM", description: "Status changed to 'Job Finished' or 'Paid'.", nodeType: "input" },
      { title: "Automated SMS/Email Request", description: "Friendly personalized text sent asking for 30-second feedback.", nodeType: "action" },
      { title: "1-Click Review Link", description: "Directs customer directly to your Google Business Profile review box.", nodeType: "ai" },
      { title: "AI Review Response", description: "AI drafts professional, SEO-keyword rich replies to published reviews.", nodeType: "output" }
    ],
    journeyMindMap: {
      start: "SERVICE COMPLETED",
      branches: [
        {
          condition: "POSITIVE FEEDBACK (5-Stars)",
          steps: ["Direct to Google Review Page", "Automated Thank You Note", "AI SEO Reply Posted"]
        },
        {
          condition: "CONCERN / PRIVATE FEEDBACK",
          steps: ["Internal Feedback Form Opened", "Alert Sent to Owner/Manager", "Private Dispute Resolution"]
        }
      ]
    },
    keyFeatures: [
      { title: "Smart Timing Trigger", description: "Sends review prompts at the exact moment of maximum customer satisfaction." },
      { title: "Private Feedback Filter", description: "Captures concerns privately so you can resolve issues before public reviews are posted." },
      { title: "AI Keyword Reply Generator", description: "Responds to Google reviews automatically using local SEO keywords." }
    ],
    industryUseCases: [
      { industry: "Plumbing & Electrical", useCase: "Triggers SMS review link upon invoice payment." },
      { industry: "Lawyers & Doctors", useCase: "Collects high-trust patient/client ratings safely and ethically." }
    ],
    faqs: [
      { question: "Is this compliant with Google Review policies?", answer: "Yes, 100%. We follow Google's guidelines regarding review requests." }
    ],
    relatedServicesSlugs: ["appointment-automation", "database-reactivation", "ai-voice-receptionist"]
  },
  {
    slug: "marketing-automation",
    name: "Marketing Automation",
    shortDescription: "Automate ad lead capture, multi-channel marketing campaigns, and lead nurture funnels.",
    category: "growth",
    headline: "SCALE YOUR MARKETING EFFORTS WITHOUT INCREASING HEADCOUNT.",
    subheadline: "Connect Meta Ads, Google Ads, local SEO traffic, and social channels into an automated customer acquisition engine that tracks exact ROI per channel.",
    iconName: "TrendingUp",
    outcome: "Lower cost per acquisition (CPA) and measure true closed-revenue ad ROI.",
    painPoints: [
      "Wasting ad spend on leads that never get called or booked.",
      "No attribution visibility into which ad campaigns generate paying clients.",
      "Manual posting and campaign execution taking up hours each week."
    ],
    workflowSteps: [
      { title: "Ad Campaign Click", description: "User submits Meta Lead Form or clicks Google Search Ad.", nodeType: "input" },
      { title: "Instant AI Engagement", description: "Inbound lead instantly contacted via SMS & AI Chat.", nodeType: "action" },
      { title: "Attribution Tracking", description: "UTM source, campaign, and keyword tagged to lead record in CRM.", nodeType: "crm" },
      { title: "Revenue Closed Loop", description: "Closed sale data reported back to ad platforms to optimize ad algorithms.", nodeType: "output" }
    ],
    journeyMindMap: {
      start: "MARKETING AD / TRAFFIC",
      branches: [
        {
          condition: "META LEAD FORM SUBMITTED",
          steps: ["Instant Webhook to CRM", "Under 60s AI Response", "Direct Appointment Booking"]
        },
        {
          condition: "ORGANIC GOOGLE MAP VISIT",
          steps: ["AI Web Chat Engagement", "Instant Quote Request", "CRM Nurture Sequence"]
        }
      ]
    },
    keyFeatures: [
      { title: "Meta & Google Ad Webhooks", description: "Instant synchronization between ad platforms and your CRM pipeline." },
      { title: "Omni-Channel Messaging", description: "Nurture leads seamlessly across SMS, Email, Messenger, and Instagram." },
      { title: "Closed-Loop ROI Analytics", description: "Know exactly how many dollars in revenue came from each advertising dollar spent." }
    ],
    industryUseCases: [
      { industry: "Local Service Businesses", useCase: "Scales ad campaigns with guarantee that zero inbound ad leads are wasted." }
    ],
    faqs: [
      { question: "Can you work alongside our existing ad agency?", answer: "Yes! We handle the automation and lead conversion infrastructure while your ad team runs campaigns." }
    ],
    relatedServicesSlugs: ["crm-sales-automation", "reporting-analytics", "lead-follow-up"]
  },
  {
    slug: "api-integrations",
    name: "API & System Integrations",
    shortDescription: "Connect your existing software stack into one smooth, automated operational workflow.",
    category: "operations",
    headline: "ELIMINATE ISOLATED SOFTWARE SILOS AND DUPLICATE DATA ENTRY.",
    subheadline: "Your business shouldn't suffer because your tools don't talk to each other. We build custom API integrations and webhooks that unite your website, CRM, dispatch, billing, and accounting platforms.",
    iconName: "Share2",
    outcome: "Connect custom software tools into an automated, error-free workflow.",
    painPoints: [
      "Staff re-keying customer information into 3 different software platforms.",
      "Discrepancies between field software, billing systems, and accounting.",
      "Outdated legacy tools unable to communicate with modern AI applications."
    ],
    workflowSteps: [
      { title: "System Event Trigger", description: "Event occurs in System A (e.g., job completed in dispatch app).", nodeType: "input" },
      { title: "API Bridge / Webhook", description: "Custom secure middleware transforms and validates data payload.", nodeType: "ai" },
      { title: "Target Action Execution", description: "Updates System B (e.g., creates QuickBooks invoice) and notifies staff.", nodeType: "output" }
    ],
    journeyMindMap: {
      start: "DATA GENERATED IN APP A",
      branches: [
        {
          condition: "SUCCESSFUL API HANDSHAKE",
          steps: ["Validate Data Payload", "Sync to App B & App C", "Log Audit Trail"]
        },
        {
          condition: "DATA EXCEPTION / MISSING FIELD",
          steps: ["Flag Exception", "Send Alert to Admin", "Retry Logic Triggered"]
        }
      ]
    },
    keyFeatures: [
      { title: "Custom Webhook Architecture", description: "High-performance webhook endpoints for real-time event triggers." },
      { title: "GoHighLevel & Zapier / Make Bridging", description: "Robust integration setups with error logging and retry queues." },
      { title: "Secure Encryption & Rate Limiting", description: "Enterprise security standards ensuring sensitive customer data is protected." }
    ],
    industryUseCases: [
      { industry: "Multi-Location Enterprise", useCase: "Syncs location data across central ERP and local branch CRMs." }
    ],
    faqs: [
      { question: "What if our software doesn't have an open API?", answer: "We can often utilize web scraping, database connectors, or middleware adapters to bridge legacy software." }
    ],
    relatedServicesSlugs: ["business-process-automation", "crm-sales-automation", "reporting-analytics"]
  },
  {
    slug: "business-process-automation",
    name: "Business Process Automation",
    shortDescription: "Automate internal back-office workflows, document routing, and team dispatch tasks.",
    category: "operations",
    headline: "AUTOMATE BACK-OFFICE BOTTLENECKS AND FREE UP YOUR TEAM.",
    subheadline: "Transform manual admin chores into automated digital workflows. From intake forms and contract generation to technician dispatch alerts and internal task handoffs, we digitize your operations.",
    iconName: "Cpu",
    outcome: "Save 15+ administrative hours per employee every single week.",
    painPoints: [
      "Paperwork bottlenecks delaying project starts and invoicing.",
      "Lack of standardized operating procedures leading to human errors.",
      "Staff spending hours copying PDF forms into internal databases."
    ],
    workflowSteps: [
      { title: "Document / Intake Submission", description: "Client completes digital intake form.", nodeType: "input" },
      { title: "AI Document Parsing", description: "Extracts key metadata, contract variables, and compliance flags.", nodeType: "ai" },
      { title: "Task Routing & Approval", description: "Routes contract to manager for approval and dispatches task to team.", nodeType: "crm" },
      { title: "Automated Archive", description: "Archives document in cloud folder and updates accounting records.", nodeType: "output" }
    ],
    journeyMindMap: {
      start: "INTERNAL WORKFLOW INITIATED",
      branches: [
        {
          condition: "STANDARD WORKFLOW",
          steps: ["Auto-Fill Document", "Send E-Signature", "Dispatch Service Team", "Trigger Invoice"]
        },
        {
          condition: "APPROVAL NEEDED",
          steps: ["Send Slack/SMS Manager Alert", "Wait for Approval", "Resume Workflow"]
        }
      ]
    },
    keyFeatures: [
      { title: "AI Document Extraction", description: "Reads PDFs, invoices, and photos to extract structured data automatically." },
      { title: "Role-Based Task Notifications", description: "Sends SMS and Slack alerts to staff when their specific action is required." },
      { title: "Audit Trail & Compliance", description: "Complete timestamped history of every process step." }
    ],
    industryUseCases: [
      { industry: "Law & Accounting", useCase: "Automates client document gathering, folder creation, and task checklists." }
    ],
    faqs: [
      { question: "How do we identify which processes can be automated?", answer: "During our free AI Automation Audit, we map your current operational steps and pinpoint the highest ROI bottlenecks to automate first." }
    ],
    relatedServicesSlugs: ["api-integrations", "crm-sales-automation", "reporting-analytics"]
  },
  {
    slug: "reporting-analytics",
    name: "Analytics & Executive Dashboards",
    shortDescription: "Real-time visibility into lead conversion metrics, call volume, and sales ROI in one dashboard.",
    category: "operations",
    headline: "MAKE DATA-DRIVEN DECISIONS WITH REAL-TIME PIPELINE VISIBILITY.",
    subheadline: "Stop guessing which marketing channels work or where leads are dying. Our custom executive dashboards provide crystal-clear real-time metrics on call performance, response speed, and closed revenue.",
    iconName: "BarChart3",
    outcome: "Complete clarity on customer acquisition cost, conversion rate, and lifetime value.",
    painPoints: [
      "No clear picture of how many leads came in this week or how fast they were answered.",
      "Relying on end-of-month spreadsheets that are already outdated.",
      "Inability to hold sales reps accountable due to lack of activity tracking."
    ],
    workflowSteps: [
      { title: "Data Aggregation", description: "Pulls metrics live from Phone, Chat, CRM, Ads, and Billing.", nodeType: "input" },
      { title: "Real-Time Processing", description: "Calculates conversion percentages, speed to lead, and ROI.", nodeType: "ai" },
      { title: "Visual Dashboard Display", description: "Presents intuitive charts, leaderboards, and pipeline forecasts.", nodeType: "output" }
    ],
    journeyMindMap: {
      start: "REAL-TIME METRIC COLLECTION",
      branches: [
        {
          condition: "DAILY EXECUTIVE SUMMARY",
          steps: ["Compile Inbound Volume", "Calculate Conversion %", "Send Morning Briefing Email/SMS"]
        },
        {
          condition: "PERFORMANCE ANOMALY ALERT",
          steps: ["Detect Spike in Missed Calls", "Send Urgent Alert to Ops Manager"]
        }
      ]
    },
    keyFeatures: [
      { title: "Speed-to-Lead Tracker", description: "Measures exact seconds elapsed between lead submission and initial contact." },
      { title: "Call Conversion Analytics", description: "Tracks inbound call volume, AI answer percentage, and booked appointments." },
      { title: "Custom Executive Mobile App", description: "Check key business metrics right from your phone anytime." }
    ],
    industryUseCases: [
      { industry: "Multi-Unit Business Owners", useCase: "Compares lead conversion performance across different locations side by side." }
    ],
    faqs: [
      { question: "How frequently is the dashboard data refreshed?", answer: "Dashboards update in real time as calls are logged, chats occur, and CRM deals change stages." }
    ],
    relatedServicesSlugs: ["crm-sales-automation", "marketing-automation", "ai-powered-websites"]
  }
];
