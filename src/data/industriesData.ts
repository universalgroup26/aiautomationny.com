import { IndustryCategory, IndustryItem } from "../types";

export const INDUSTRIES_CATEGORIES: IndustryCategory[] = [
  {
    id: "home-services",
    name: "Home Services",
    description: "HVAC, Plumbing, Roofing, Electrical, Contractors, Cleaning & Restoration",
    industries: [
      {
        slug: "hvac",
        name: "HVAC Contractors",
        category: "home-services",
        categoryName: "Home Services",
        headline: "NEVER MISS AN EMERGENCY HEATING & COOLING CALL AGAIN.",
        subheadline: "When an AC breaks in July or a furnace dies in January, homeowners call the first company that answers. Our AI Voice & Chat system captures 100% of emergency HVAC calls and schedules service dispatches 24/7.",
        painPoints: [
          "Over 65% of lucrative emergency service calls occur after 6 PM or on weekends when office staff is off.",
          "Technicians on ladders can't answer ringing phones, causing homeowners to call competitors.",
          "Manual appointment reminders result in empty drive time when homeowners forget technician arrival windows."
        ],
        customerJourney: [
          { step: "1. Emergency Call Inbound", traditionalProblem: "Rings 6 times, goes to voicemail. Homeowner hangs up and calls competitor.", aiSolution: "AI Receptionist answers in 2 seconds, greets homeowner warmly, and identifies emergency status." },
          { step: "2. Qualification & Details", traditionalProblem: "Technician receives vague text 'Call back John about heater'.", aiSolution: "AI asks system type, age, error code, and address. Validates local service zone." },
          { step: "3. Dispatch & Booking", traditionalProblem: "Wait until 8 AM office hours to dispatch.", aiSolution: "AI offers immediate morning time slot, updates CRM, and sends technician SMS alert." },
          { step: "4. Confirmation & Reminders", traditionalProblem: "Homeowner forgets and leaves house.", aiSolution: "Automated 2-way SMS confirmation ensures homeowner is present for arrival window." }
        ],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "CRM & Pipeline Automation", "2-Way SMS Reminders", "Automated Google Review Collector"],
        voiceUseCase: "Handles late-night AC/heating emergency calls, qualifies issue urgency, and books next-day technician visits.",
        chatUseCase: "Provides instant estimate ranges on website for new unit installs and schedules free estimate visits.",
        crmUseCase: "Tracks job statuses from lead capture -> estimate -> job complete -> paid invoice -> automated review request.",
        followUpUseCase: "Nurtures open repair estimates automatically over 7 days until the homeowner approves.",
        appointmentUseCase: "Sends interactive SMS dispatch reminders with technician ETA tracking.",
        reviewUseCase: "Triggers immediate Google Review link right after invoice is marked paid.",
        faqs: [
          { question: "Can the AI distinguish between routine maintenance and emergency heating failures?", answer: "Yes. The AI uses custom diagnostic rules to identify true emergencies (e.g., freezing temperatures without heat) and can immediately patch the call to your on-call technician if needed." }
        ]
      },
      {
        slug: "plumbing",
        name: "Plumbing Services",
        category: "home-services",
        categoryName: "Home Services",
        headline: "INSTANT RESPONSE FOR EMERGENCY LEAKS, DRAINS & PLUMBING REPAIRS.",
        subheadline: "Water damage waits for no one. Secure high-margin plumbing leads in seconds with 24/7 AI voice answering and automated dispatch scheduling.",
        painPoints: [
          "Frantic homeowners hanging up on voicemail during burst pipe or drain backup emergencies.",
          "Dispatchers spending hours manually calling customers to confirm appointment windows.",
          "Cold quote requests for water heater replacements lost to faster-responding local plumbers."
        ],
        customerJourney: [
          { step: "1. Urgent Call", traditionalProblem: "Rings through to busy shop phone.", aiSolution: "AI Voice answers instantly, triaging leak or emergency type." },
          { step: "2. Address Capture", traditionalProblem: "Illegible voicemail message.", aiSolution: "AI records exact street address, job details, and property access notes." },
          { step: "3. Calendar Schedule", traditionalProblem: "Manual callback hours later.", aiSolution: "AI checks live dispatch calendar and books earliest open plumber window." }
        ],
        recommendedAutomationStack: ["AI Voice Receptionist", "CRM Pipeline", "Speed-to-Lead Follow-Up", "Review Automation"],
        voiceUseCase: "Answers emergency water leak calls 24/7 and collects job address and access instructions.",
        chatUseCase: "Qualifies drain cleaning vs full pipe replacement inquiries directly on your website.",
        crmUseCase: "Logs job photos, service notes, and automatically triggers post-service invoices.",
        followUpUseCase: "Sends automated 6-month drain checkup and seasonal pipe insulation reminders.",
        appointmentUseCase: "Sends automated 2-hour arrival window alerts with plumber bio.",
        reviewUseCase: "Asks satisfied plumbing customers for a 5-star Google review via 1-click SMS.",
        faqs: [
          { question: "Can it handle call dispatch for multiple plumbing vans?", answer: "Yes, the AI can check team availability by zip code or territory and route jobs accordingly." }
        ]
      },
      {
        slug: "roofing",
        name: "Roofing Contractors",
        category: "home-services",
        categoryName: "Home Services",
        headline: "CAPITIALIZE ON STORM LEADS AND HIGH-VALUE ROOF REPLACEMENTS.",
        subheadline: "Roof replacement leads are high-ticket. When severe weather hits or homeowners need roof inspections, our AI system ensures every lead is answered, qualified, and booked into your calendar.",
        painPoints: [
          "Losing $15,000+ roof replacement inquiries because staff couldn't answer during peak storm rushes.",
          "High ad spend on storm restoration without automated instant follow-up.",
          "Insurance claim inquiries getting stalled in long manual follow-up back-and-forths."
        ],
        customerJourney: [
          { step: "1. Inspection Request", traditionalProblem: "Form submission sits unread for 4 hours.", aiSolution: "AI texts homeowner within 30 seconds with instant booking calendar." },
          { step: "2. Address & Damage Qualification", traditionalProblem: "Rep drives to site blindly.", aiSolution: "AI gathers roof age, material, insurance involvement, and storm history." },
          { step: "3. Inspection Slot Locked", traditionalProblem: "Owner gets impatient and hires another roof inspector.", aiSolution: "Inspection locked in CRM with automated SMS confirmation." }
        ],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "Under 60s Lead Follow-Up", "CRM Pipeline"],
        voiceUseCase: "Answers inbound inspection inquiries and qualifies roof age, leak severity, and insurance claim status.",
        chatUseCase: "Engages web traffic with interactive roof cost estimation calculator and inspection scheduler.",
        crmUseCase: "Tracks roof replacement stages: Inspection -> Claim Filed -> Approved -> Contract Signed -> Build -> Review.",
        followUpUseCase: "Relentlessly follows up on open roof inspection proposals until decision is made.",
        appointmentUseCase: "Sends pre-inspection preparation checklists and team arrival notifications.",
        reviewUseCase: "Collects high-value photo reviews from satisfied roof replacement clients.",
        faqs: [{ question: "Can the AI handle storm-response surges?", answer: "Yes! The AI can handle hundreds of simultaneous incoming calls without busy signals or long hold times." }]
      },
      {
        slug: "electrical",
        name: "Electrical Services",
        category: "home-services",
        categoryName: "Home Services",
        headline: "SAFE, RELIABLE 24/7 ELECTRICIAN BOOKING & DISPATCH.",
        subheadline: "From electrical panel upgrades to emergency power outages, homeowners demand fast response. Our AI assistant handles inquiries, screens scope, and schedules service calls.",
        painPoints: ["Emergency power outage calls going to voicemail.", "Unqualified callers asking for estimates without providing job details.", "Technicians losing time on no-show service calls."],
        customerJourney: [
          { step: "1. Inquiry", traditionalProblem: "Unanswered call.", aiSolution: "AI Voice answers and identifies if issue is full outage or routine outlet install." },
          { step: "2. Schedule", traditionalProblem: "Manual callback.", aiSolution: "AI checks electrician schedule and books service appointment." }
        ],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "Appointment Reminders", "Review Management"],
        voiceUseCase: "Captures electric panel, EV charger, and emergency outage service details.",
        chatUseCase: "Schedules free estimates for home generator and panel upgrade projects.",
        crmUseCase: "Organizes residential and commercial electrical work orders.",
        followUpUseCase: "Nurtures panel upgrade quotes over 14 days.",
        appointmentUseCase: "Sends 2-way confirmation texts to eliminate no-shows.",
        reviewUseCase: "Collects 5-star Google ratings right after job sign-off.",
        faqs: [{ question: "Can it ask custom questions about panel amperage?", answer: "Yes, we customize intake questions to gather technical job scope prior to arrival." }]
      },
      {
        slug: "contractors",
        name: "General Contractors & Remodelers",
        category: "home-services",
        categoryName: "Home Services",
        headline: "STREAMLINE REMODELING INQUIRIES & CONSULTATION BOOKINGS.",
        subheadline: "Kitchen, bath, and full home remodels require thorough qualification. Our AI filters out tire-kickers and books serious homeowners directly with your project managers.",
        painPoints: ["Wasting hours on tire-kickers with $5,000 budgets for $50,000 remodels.", "Scattered lead communication across personal phones and emails.", "Slow response to high-value remodeling inquiries."],
        customerJourney: [
          { step: "1. Remodel Inquiry", traditionalProblem: "Inquiry sits in inbox.", aiSolution: "AI engages instantly, asking budget range and timeline." },
          { step: "2. Consultation Lock", traditionalProblem: "Prospect moves on.", aiSolution: "AI books on-site consultation for qualified homeowners." }
        ],
        recommendedAutomationStack: ["AI Chat & Booking", "CRM Sales Automation", "Lead Follow-Up", "Review Automation"],
        voiceUseCase: "Performs initial remodeling project intake and captures budget and timeline.",
        chatUseCase: "Interactive remodeling budget calculator and consultation booking.",
        crmUseCase: "Manages project pipeline from Design Consultation -> Estimate -> Contract -> Construction.",
        followUpUseCase: "Drips design ideas and client transformation stories to open leads.",
        appointmentUseCase: "Sends pre-consultation project prep guides.",
        reviewUseCase: "Collects glowing Google reviews upon project handover.",
        faqs: [{ question: "Can the AI screen for minimum budget requirements?", answer: "Yes! We can configure the AI to tactfully verify minimum project budgets before booking on-site consultations." }]
      },
      {
        slug: "cleaning-restoration",
        name: "Cleaning & Water Restoration",
        category: "home-services",
        categoryName: "Home Services",
        headline: "RAPID 24/7 DISPATCH FOR WATER DAMAGE & CLEANING SERVICES.",
        subheadline: "Water damage and mold restoration demand sub-minute response times. Secure emergency restoration projects before competitors with 24/7 instant AI voice dispatch.",
        painPoints: ["Water damage leads called 30 minutes late are already taken by competitors.", "Inconsistent recurring cleaning schedule management.", "High customer churn without automated follow-up."],
        customerJourney: [
          { step: "1. Emergency Flood Call", traditionalProblem: "Rings unanswered at 2 AM.", aiSolution: "AI answers in 2 seconds, logs water source and property damage extent." },
          { step: "2. Team Alert", traditionalProblem: "Delayed morning response.", aiSolution: "Instantly sends SMS alert to on-call restoration team." }
        ],
        recommendedAutomationStack: ["AI Voice Receptionist", "Speed-to-Lead Follow-Up", "CRM Pipeline", "Review Automation"],
        voiceUseCase: "Logs emergency water damage details 24/7 and dispatches duty crew.",
        chatUseCase: "Quotes residential and commercial recurring cleaning services.",
        crmUseCase: "Tracks restoration jobs from emergency intake to insurance claim payment.",
        followUpUseCase: "Nurtures residential cleaning quotes with seasonal discounts.",
        appointmentUseCase: "Automates recurring cleaning arrival reminders.",
        reviewUseCase: "Collects verified reviews from homeowners and property managers.",
        faqs: [{ question: "Can it alert emergency restoration crews via SMS/phone call?", answer: "Yes! The system can trigger urgent multi-channel alerts to your on-call crew leader immediately." }]
      }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare & Wellness",
    description: "Dental, Medical Offices, Home Care, Adult Day Care",
    industries: [
      {
        slug: "dental",
        name: "Dental Practices",
        category: "healthcare",
        categoryName: "Healthcare & Wellness",
        headline: "FILL OPEN DENTAL CHAIRS & REDUCE PATIENT NO-SHOWS.",
        subheadline: "Keep your hygiene and doctor schedules full. Our AI assistant handles patient inquiries, books appointments, collects intake details, and re-engages inactive patients.",
        painPoints: ["Front desk staff overwhelmed by ringing phones while checking in patients.", "High patient no-show rates wasting open chair time.", "Hundreds of past patients overdue for 6-month hygiene cleanings."],
        customerJourney: [
          { step: "1. Patient Call / Web Request", traditionalProblem: "On hold for 5 minutes.", aiSolution: "AI answers immediately, assisting with appointment booking or emergency toothache inquiries." },
          { step: "2. Calendar & Insurance Check", traditionalProblem: "Manual back-and-forth.", aiSolution: "AI captures insurance provider, service needed (Invisalign, Implant, Cleaning), and locks slot." }
        ],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "Database Reactivation", "Appointment Automation"],
        voiceUseCase: "Answers after-hours dental emergency calls and registers new patient appointment requests.",
        chatUseCase: "Guides prospective cosmetic and implant patients through treatments and schedules consultations.",
        crmUseCase: "Centralizes new patient inquiries, treatment plans, and recall statuses.",
        followUpUseCase: "Sends automated hygiene recall reminders to patients overdue by 6+ months.",
        appointmentUseCase: "Sends interactive 2-way SMS appointment confirmations to eliminate chair no-shows.",
        reviewUseCase: "Triggers SMS review requests after successful dental visits.",
        faqs: [{ question: "Does the AI diagnose medical or dental conditions?", answer: "No. The AI strictly handles administrative answering, appointment booking, and general practice FAQs without giving medical advice." }]
      },
      {
        slug: "medical",
        name: "Medical Offices & Clinics",
        category: "healthcare",
        categoryName: "Healthcare & Wellness",
        headline: "STREAMLINE PATIENT INTAKE & APPOINTMENT SCHEDULING.",
        subheadline: "Reduce phone hold times and administrative burden for medical staff. Our AI answers patient calls, collects initial intake info, and streamlines appointment scheduling.",
        painPoints: ["Frustrated patients stuck on long phone holds.", "High administrative staff turnover due to phone stress.", "Unconfirmed appointments causing schedule bottlenecks."],
        customerJourney: [
          { step: "1. Inbound Call", traditionalProblem: "10-minute hold time.", aiSolution: "AI Voice answers in 2 seconds, routes routine appointment inquiries efficiently." }
        ],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "Appointment Automation", "Review Management"],
        voiceUseCase: "Handles routine appointment booking, office hours FAQs, and directions.",
        chatUseCase: "Assists prospective patients on clinic website with appointment requests.",
        crmUseCase: "Tracks prospective patient leads and consultation requests.",
        followUpUseCase: "Nurtures specialist consultation leads with educational practice guides.",
        appointmentUseCase: "Sends 24-hour and 2-hour pre-visit reminders.",
        reviewUseCase: "Builds practice online reputation through post-visit review requests.",
        faqs: [{ question: "Can the AI handle bilingual patient inquiries?", answer: "Yes, our AI system supports fluent English and Spanish voice and text interactions." }]
      },
      {
        slug: "home-care",
        name: "Home Care Agencies",
        category: "healthcare",
        categoryName: "Healthcare & Wellness",
        headline: "RESPOND INSTANTLY TO FAMILY INQUIRIES & CAREGIVER APPLICANTS.",
        subheadline: "Families searching for home care for loved ones need compassionate, immediate answers. Our AI answers 24/7, qualifies care needs, and schedules consultations.",
        painPoints: ["Distressed family members calling after hours and getting voicemail.", "Caregiver applicant inquiries getting lost in general phone traffic.", "Long delay between initial contact and home care assessment."],
        customerJourney: [
          { step: "1. Family Inquiry", traditionalProblem: "Voicemail after 5 PM.", aiSolution: "AI answers warmly, gathers care requirements (companion, personal care, 24/7), and books assessment." }
        ],
        recommendedAutomationStack: ["AI Voice Receptionist", "Speed-to-Lead Follow-Up", "CRM Sales Automation", "Review Automation"],
        voiceUseCase: "Conducts compassionate care assessment intake 24/7.",
        chatUseCase: "Guides families through home care options, Medicaid/private pay FAQs, and consultation booking.",
        crmUseCase: "Tracks care leads from Initial Call -> Assessment -> Care Plan -> Active Client.",
        followUpUseCase: "Nurtures family decision-makers with helpful home care guides.",
        appointmentUseCase: "Confirms nurse/care director assessment visits.",
        reviewUseCase: "Requests testimonials from satisfied families.",
        faqs: [{ question: "Can the AI distinguish between client inquiries and caregiver job applicants?", answer: "Yes, the AI detects intent instantly and routes job seekers to a dedicated caregiver screening workflow." }]
      },
      {
        slug: "adult-day-care",
        name: "Adult Day Care Centers",
        category: "healthcare",
        categoryName: "Healthcare & Wellness",
        headline: "INCREASE CENTER ENROLLMENT & TOUR BOOKINGS AUTOMATICALLY.",
        subheadline: "Help families discover your adult day care facility. Our AI answers questions about programs, transportation, funding, and books facility tours.",
        painPoints: ["Center staff busy managing members during operational hours unable to answer phones.", "Families unaware of program benefits and Medicaid coverage.", "Low conversion from initial inquiry to facility tour."],
        customerJourney: [{ step: "1. Tour Request", traditionalProblem: "Unanswered call.", aiSolution: "AI Voice answers, explains program highlights, and schedules family tour." }],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "CRM Pipeline", "Follow-Up Automation"],
        voiceUseCase: "Answers program, hours, and transportation questions and books tour slots.",
        chatUseCase: "Provides interactive virtual facility tour overview and tour scheduler.",
        crmUseCase: "Manages enrollment leads through intake, tour, medical form, and enrollment stages.",
        followUpUseCase: "Sends automated tour reminders and follow-up checklists.",
        appointmentUseCase: "Confirms family tour appointments via SMS.",
        reviewUseCase: "Collects reviews from member families.",
        faqs: [{ question: "Can the AI provide info on transportation and meal options?", answer: "Yes, it is trained on your exact program amenities, shuttle services, and schedules." }]
      }
    ]
  },
  {
    id: "professional-services",
    name: "Professional Services",
    description: "Law Firms, Accounting, Insurance, Consulting",
    industries: [
      {
        slug: "law-firms",
        name: "Law Firms & Attorneys",
        category: "professional-services",
        categoryName: "Professional Services",
        headline: "24/7 CLIENT INTAKE & CONSULTATION BOOKING FOR LAW FIRMS.",
        subheadline: "In personal injury, family law, criminal defense, and immigration, prospective clients contact multiple firms. Our AI performs instant intake and secures consultations before other firms react.",
        painPoints: ["High cost-per-click Google Ad legal leads lost due to slow phone response.", "Attorneys spending billable hours screening unqualified cases.", "Inbound intake calls going to answering services that just take messages without qualifying."],
        customerJourney: [
          { step: "1. Prospective Client Inbound Call", traditionalProblem: "Generic answering service takes message.", aiSolution: "AI Voice conducts instant custom case screening." },
          { step: "2. Case Eligibility Screening", traditionalProblem: "Unqualified case booked.", aiSolution: "AI verifies incident date, jurisdiction, and injury/case type according to firm criteria." },
          { step: "3. Attorney Consultation Booked", traditionalProblem: "Client signs with competing firm.", aiSolution: "AI schedules consultation directly on attorney's calendar and sends intake link." }
        ],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "Under 60s Speed-to-Lead", "CRM Sales Automation"],
        voiceUseCase: "Conducts instant 24/7 case qualification and schedules initial consultation calls.",
        chatUseCase: "Web intake assistant that qualifies case criteria and collects incident details.",
        crmUseCase: "Manages case leads from Intake -> Screening -> Consultation -> Retainer Signed.",
        followUpUseCase: "Persistent SMS/Email follow-up to get signed retainer agreements returned.",
        appointmentUseCase: "Confirms consultation appointments and sends pre-meeting documents.",
        reviewUseCase: "Gathers client reviews upon successful case resolution.",
        faqs: [{ question: "Does the AI offer legal advice?", answer: "No. The AI strictly performs administrative intake, case criteria screening, and calendar scheduling under your firm's strict guidelines." }]
      },
      {
        slug: "accounting",
        name: "Accounting & CPA Firms",
        category: "professional-services",
        categoryName: "Professional Services",
        headline: "AUTOMATE CLIENT ONBOARDING & TAX SEASON APPOINTMENTS.",
        subheadline: "Tax season brings an avalanche of client inquiries. Our AI handles appointment bookings, document collection reminders, and client onboarding workflows effortlessly.",
        painPoints: ["Staff overwhelmed by tax season phone calls asking 'What is my appointment status?'.", "Chasing clients for missing tax documents and signatures.", "Off-season client retention and service cross-selling gaps."],
        customerJourney: [{ step: "1. Tax Appointment Inquiry", traditionalProblem: "Phone line busy for 20 minutes.", aiSolution: "AI answers, checks CPA schedule, and books tax prep consultation." }],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "Appointment Automation", "Business Process Automation"],
        voiceUseCase: "Schedules tax prep consultations and answers document requirement FAQs.",
        chatUseCase: "Embeds on CPA website to guide clients through service packages and booking.",
        crmUseCase: "Tracks client stages: Intake -> Document Received -> Prep -> Review -> Filed.",
        followUpUseCase: "Automates missing document reminder alerts via SMS.",
        appointmentUseCase: "Sends pre-appointment checklist of required tax documents.",
        reviewUseCase: "Collects 5-star Google reviews after successful tax filings.",
        faqs: [{ question: "Can the AI send customized lists of required tax documents?", answer: "Yes, it sends automated text/email checklists tailored to personal or business tax preparation." }]
      },
      {
        slug: "insurance",
        name: "Insurance Agencies",
        category: "professional-services",
        categoryName: "Professional Services",
        headline: "INSTANT QUOTE INTAKE & POLICY RENEWAL AUTOMATION.",
        subheadline: "Capture auto, home, commercial, and life insurance leads instantly. Our AI collects quote details, books producer calls, and automates annual policy review renewals.",
        painPoints: ["Shoppers requesting quotes online buying from the first agent who calls.", "Producers wasting time manually entering lead data into rating software.", "Losing existing policyholders due to lack of proactive annual policy reviews."],
        customerJourney: [{ step: "1. Quote Request", traditionalProblem: "Submitted after hours, agent calls next day.", aiSolution: "AI texts/calls lead within 30 seconds, collects policy drivers/details, and books producer call." }],
        recommendedAutomationStack: ["AI Voice Receptionist", "Speed-to-Lead Follow-Up", "Database Reactivation", "CRM Pipeline"],
        voiceUseCase: "Collects driver, property, or business details for insurance quotes 24/7.",
        chatUseCase: "Interactive quote intake assistant on agency website.",
        crmUseCase: "Manages quote pipelines and tracks policy binder status.",
        followUpUseCase: "Runs automated 30-day quote follow-up campaigns.",
        appointmentUseCase: "Schedules producer review appointments.",
        reviewUseCase: "Gathers client reviews after policy issuance.",
        faqs: [{ question: "Can it help re-engage past quoted leads?", answer: "Yes! Our Database Reactivation engine can text thousands of past quotes prior to renewal periods." }]
      },
      {
        slug: "consulting",
        name: "Consulting & Advisory Services",
        category: "professional-services",
        categoryName: "Professional Services",
        headline: "QUALIFY B2B PROSPECTS & BOOK STRATEGY CONSULTATIONS.",
        subheadline: "Streamline your business consulting client acquisition. Our AI screens prospect qualification metrics, delivers pre-call questionnaires, and schedules strategy calls.",
        painPoints: ["Consultants spending hours on calls with unqualified prospects.", "Low completion rates on lengthy manual lead intake forms.", "Lack of structured follow-up after sending project proposals."],
        customerJourney: [{ step: "1. Strategy Call Request", traditionalProblem: "Fills form, waits for email link.", aiSolution: "AI chat qualifies company size/revenue and opens calendar directly." }],
        recommendedAutomationStack: ["AI Chat & Booking", "CRM Sales Automation", "Lead Follow-Up", "Reporting Analytics"],
        voiceUseCase: "Conducts initial executive inquiry intake.",
        chatUseCase: "Interactive B2B assessment tool and strategy call booking.",
        crmUseCase: "Manages deal stages from Discovery -> Proposal -> Contract -> Active Engagement.",
        followUpUseCase: "Automates proposal follow-up sequences.",
        appointmentUseCase: "Sends pre-meeting agenda and preparation guides.",
        reviewUseCase: "Collects executive client testimonials.",
        faqs: [{ question: "Can it integrate with LinkedIn ad campaigns?", answer: "Yes, we connect LinkedIn Lead Gen forms directly to our automated speed-to-lead workflow." }]
      }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate & Property",
    description: "Realtors, Real Estate Brokers, Property Management",
    industries: [
      {
        slug: "realtors",
        name: "Realtors & Real Estate Agents",
        category: "real-estate",
        categoryName: "Real Estate & Property",
        headline: "INSTANT AI LEAD RESPONSE FOR BUYERS & SELLERS.",
        subheadline: "Real estate leads generated on Zillow, Meta, or Google cold in minutes. Our AI assistant instantly contacts incoming buyer and seller leads, qualifies criteria, and schedules showings or consultations.",
        painPoints: ["Agents in open houses or closings unable to call back new leads within 5 minutes.", "High cost of Zillow/Meta leads wasted due to slow response.", "Lack of persistent long-term nurture for buyers 6 months away from purchasing."],
        customerJourney: [
          { step: "1. New Property Lead", traditionalProblem: "Lead submitted while agent is driving.", aiSolution: "AI SMS sent in 30 seconds: 'Hi John! Saw you inquired about 123 Main St. Are you looking to tour this weekend?'" },
          { step: "2. Qualification", traditionalProblem: "Agent forgets pre-approval check.", aiSolution: "AI asks timeline, price range, and mortgage pre-approval status." },
          { step: "3. Showing Booked", traditionalProblem: "Buyer books showing with another agent.", aiSolution: "AI locks in showing slot and syncs to agent's calendar." }
        ],
        recommendedAutomationStack: ["AI Voice Receptionist", "Speed-to-Lead Follow-Up", "AI Chat & Booking", "Database Reactivation"],
        voiceUseCase: "Answers yard sign phone calls 24/7 and provides property details while capturing buyer contact info.",
        chatUseCase: "Interactive property search assistant on realtor website that captures contact details.",
        crmUseCase: "Tracks buyers and sellers across active pipelines.",
        followUpUseCase: "Long-term drip messaging providing market updates and new property alerts.",
        appointmentUseCase: "Schedules showing appointments and listing consultations.",
        reviewUseCase: "Collects 5-star Google reviews upon closing.",
        faqs: [{ question: "Can it integrate with my MLS or CRM like Follow Up Boss?", answer: "Yes! We integrate with Follow Up Boss, kvCORE, Lofty, and custom real estate CRMs." }]
      },
      {
        slug: "real-estate-brokers",
        name: "Real Estate Brokerages",
        category: "real-estate",
        categoryName: "Real Estate & Property",
        headline: "SCALE BROKERAGE LEAD DISTRIBUTION & AGENT RECRUITING.",
        subheadline: "Empower your entire brokerage with automated lead distribution, speed-to-lead AI, and automated agent recruitment workflows.",
        painPoints: ["Brokerage leads wasted when assigned to slow agents.", "Brokerage staff struggling to manage high lead volume across teams.", "Inconsistent agent recruitment pipeline."],
        customerJourney: [{ step: "1. Brokerage Lead Ingest", traditionalProblem: "Manual lead assignment.", aiSolution: "AI immediately engages lead, qualifies, and routes to top available agent." }],
        recommendedAutomationStack: ["AI Voice Receptionist", "CRM Sales Automation", "Marketing Automation", "API Integrations"],
        voiceUseCase: "Central brokerage phone tree with AI lead qualification and agent routing.",
        chatUseCase: "Brokerage website chat widget handling property inquiries and career applications.",
        crmUseCase: "Centralized brokerage lead dashboard with team conversion tracking.",
        followUpUseCase: "Recruiting nurture campaigns targeting local licensed real estate agents.",
        appointmentUseCase: "Confirms listing and recruiting interview appointments.",
        reviewUseCase: "Builds brokerage Google brand reputation.",
        faqs: [{ question: "Can it distribute leads using round-robin logic?", answer: "Yes, leads can be assigned based on speed-to-claim, round-robin, or agent tier." }]
      },
      {
        slug: "property-management",
        name: "Property Management Companies",
        category: "real-estate",
        categoryName: "Real Estate & Property",
        headline: "AUTOMATE TENANT INQUIRIES & MAINTENANCE REQUESTS.",
        subheadline: "Free your property managers from endless phone calls. Our AI screens tenant maintenance requests, answers rental availability questions, and schedules property tours.",
        painPoints: ["Property managers overwhelmed by routine tenant phone calls.", "After-hours maintenance emergencies handled inefficiently.", "Vacant rental units sitting empty due to slow tour scheduling."],
        customerJourney: [{ step: "1. Rental Listing Inquiry", traditionalProblem: "Tenant calls, gets voicemail, moves on.", aiSolution: "AI answers, provides rent/pet policy info, pre-qualifies income, and books self-guided or agent tour." }],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "Business Process Automation", "Appointment Automation"],
        voiceUseCase: "Handles maintenance triage calls and prospective tenant rental inquiries 24/7.",
        chatUseCase: "Provides instant rental vacancy info and pre-qualification tour booking.",
        crmUseCase: "Manages applicant pipeline from Inquiry -> Tour -> Application -> Lease Signed.",
        followUpUseCase: "Automates tenant lease renewal reminders.",
        appointmentUseCase: "Confirms property tour times and sends access codes.",
        reviewUseCase: "Collects tenant and property owner reviews.",
        faqs: [{ question: "Can it triage emergency maintenance like water floods versus routine paint fixes?", answer: "Yes, it categorizes urgency and notifies emergency vendors immediately for urgent calls." }]
      }
    ]
  },
  {
    id: "local-businesses",
    name: "Local Services & Retail",
    description: "Auto Repair, Salons & Spas, Restaurants, Retail",
    industries: [
      {
        slug: "auto-repair",
        name: "Auto Repair Shops",
        category: "local-businesses",
        categoryName: "Local Services & Retail",
        headline: "24/7 AUTO REPAIR SERVICE & DIAGNOSTIC BOOKING.",
        subheadline: "Keep your repair bays full. Our AI answers phone calls, quotes standard diagnostic services, and schedules drop-off appointments while your mechanics stay under the hood.",
        painPoints: ["Service advisors stuck on phone calls while customers wait at counter.", "Drivers calling after hours for tow-ins or repair appointments.", "Unconfirmed service drop-offs causing morning bay scheduling chaos."],
        customerJourney: [{ step: "1. Service Call", traditionalProblem: "Phone rings on loud shop floor.", aiSolution: "AI answers, records vehicle year/make/model and symptom, and books drop-off time." }],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "Appointment Automation", "Review Automation"],
        voiceUseCase: "Answers service inquiries, captures vehicle information, and books drop-off appointments.",
        chatUseCase: "Provides service estimate ranges and schedules diagnostic appointments.",
        crmUseCase: "Tracks vehicle service stages from Intake -> Diagnostic -> Customer Approved -> Ready for Pick-Up.",
        followUpUseCase: "Sends automated oil change and brake inspection reminders.",
        appointmentUseCase: "Sends 2-way SMS drop-off reminders.",
        reviewUseCase: "Collects 5-star Google reviews right after vehicle pickup.",
        faqs: [{ question: "Can the AI ask for vehicle Year, Make, and Model during call intake?", answer: "Yes, it collects full vehicle specifications and specific symptoms prior to booking." }]
      },
      {
        slug: "salons-spas",
        name: "Salons & Medical Spas",
        category: "local-businesses",
        categoryName: "Local Services & Retail",
        headline: "FILL STYLIST & MEDSPA CALENDARS WITHOUT PHONE INTERRUPTIONS.",
        subheadline: "Allow clients to book treatments anytime. Our AI answers questions about services, pricing, and availability, and locks in appointments with deposit collection.",
        painPoints: ["Receptionist busy checking out clients while phones ring unanswered.", "Last-minute cancellations leaving empty service hours.", "Clients calling late at night wanting to book weekend treatments."],
        customerJourney: [{ step: "1. Late Night Booking Request", traditionalProblem: "Closed salon, client calls competitor.", aiSolution: "AI Chat / Voice engages, checks specialist availability, collects booking deposit, and confirms slot." }],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "Database Reactivation", "Review Management"],
        voiceUseCase: "Answers service pricing questions and schedules client appointments.",
        chatUseCase: "Interactive service menu guide and booking widget.",
        crmUseCase: "Centralizes client preferences, treatment history, and re-booking schedules.",
        followUpUseCase: "Re-engages clients overdue for 4-week appointments.",
        appointmentUseCase: "Sends SMS reminders with pre-treatment instructions.",
        reviewUseCase: "Triggers post-appointment review requests.",
        faqs: [{ question: "Can it require a deposit to hold appointment slots?", answer: "Yes, we integrate booking deposit links to minimize last-minute cancellations." }]
      },
      {
        slug: "restaurants",
        name: "Restaurants & Catering",
        category: "local-businesses",
        categoryName: "Local Services & Retail",
        headline: "AUTOMATE RESERVATIONS & CATERING EVENT INQUIRIES.",
        subheadline: "Never let a busy dinner rush cause missed party reservations or lucrative catering orders. Our AI manages table bookings and captures catering event details 24/7.",
        painPoints: ["Hostess staff unable to answer ringing phone during busy dinner service.", "Lucrative high-dollar catering inquiries going unanswered.", "Manual party reservation tracking leading to double bookings."],
        customerJourney: [{ step: "1. Catering Inquiry", traditionalProblem: "Left on voicemail during lunch rush.", aiSolution: "AI Voice captures guest count, date, budget, and catering style, booking manager call." }],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "CRM Sales Automation", "Review Automation"],
        voiceUseCase: "Answers table reservation, menu, hours, and parking questions and logs catering inquiries.",
        chatUseCase: "Embedded website widget for party reservations and catering quotes.",
        crmUseCase: "Tracks catering leads from Inquiry -> Quote -> Tasting -> Contract -> Event Completed.",
        followUpUseCase: "Nurtures corporate catering accounts for holiday events.",
        appointmentUseCase: "Sends reservation confirmation texts.",
        reviewUseCase: "Collects Google reviews from happy diners.",
        faqs: [{ question: "Can it answer questions about gluten-free or dietary options?", answer: "Yes! It is trained on your exact menu, dietary tags, and reservation policies." }]
      },
      {
        slug: "retail",
        name: "Local Retail & Boutiques",
        category: "local-businesses",
        categoryName: "Local Services & Retail",
        headline: "DRIVE FOOT TRAFFIC & AUTOMATE LOCAL CUSTOMER ENQUIRIES.",
        subheadline: "Connect your physical store with digital customer communication. Our AI answers stock availability questions, store hours, and drives local shoppers into your store.",
        painPoints: ["Store employees interrupted constantly by phone calls asking 'Are you open today?' or 'Do you carry X brand?'.", "No mechanism to capture online visitor details for local sales events.", "Inactive customer lists receiving no outreach."],
        customerJourney: [{ step: "1. Store Inquiry", traditionalProblem: "Staff busy with in-store buyer.", aiSolution: "AI answers hours, address, parking, and brand availability." }],
        recommendedAutomationStack: ["AI Voice Receptionist", "AI Chat & Booking", "Database Reactivation", "Marketing Automation"],
        voiceUseCase: "Answers store hours, location, brand stock, and promotion inquiries.",
        chatUseCase: "Engages web visitors with local VIP store perks and inventory check.",
        crmUseCase: "Manages VIP local shopper SMS club.",
        followUpUseCase: "Sends SMS alerts for local sales events and new inventory arrivals.",
        appointmentUseCase: "Schedules VIP private shopping consultations.",
        reviewUseCase: "Collects Google reviews from store shoppers.",
        faqs: [{ question: "Can it inform shoppers about store location and parking details?", answer: "Yes, it provides clear directions, subway stops, and nearby parking garage recommendations." }]
      }
    ]
  }
];
