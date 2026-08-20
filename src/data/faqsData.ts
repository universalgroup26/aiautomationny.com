export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export const MAIN_FAQS: FAQItem[] = [
  {
    category: "General",
    question: "What exactly does AI Automation NY build for my business?",
    answer: "We build an end-to-end AI business operating system. This includes an 24/7 AI Voice Receptionist that answers your phones, AI web chat & booking widgets, speed-to-lead SMS response, automated CRM pipelines, appointment reminders, Google review collection, and database reactivation."
  },
  {
    category: "Voice & Phone",
    question: "Can the AI Voice Receptionist answer calls when my team is busy or after hours?",
    answer: "Yes! The AI can handle 100% of your incoming calls 24 hours a day, 7 days a week, 365 days a year. It can function as your main phone receptionist, handle rollover overflow during busy hours, or cover night/weekend shifts seamlessly."
  },
  {
    category: "Voice & Phone",
    question: "Does the AI sound robotic or artificial?",
    answer: "Not at all. We utilize ultra-modern neural voice models with natural inflection, conversational turn-taking, and subtle pause handling. Most callers speak with the AI assuming it is a courteous human staff member."
  },
  {
    category: "Integrations & CRM",
    question: "Will this system work with my current website and existing software?",
    answer: "Yes. Our systems integrate smoothly with WordPress, Wix, Squarespace, Webflow, Shopify, custom websites, Google Calendar, Outlook, GoHighLevel, HubSpot, Salesforce, ServiceTitan, Dentrix, and major industry platforms."
  },
  {
    category: "Appointments",
    question: "How does the AI schedule appointments without double booking?",
    answer: "The AI connects bi-directionally in real-time with your team calendar. Before offering a time slot to a customer, it checks active availability in milliseconds and locks the appointment instantly."
  },
  {
    category: "Human Control",
    question: "Can my staff step in and take over live conversations whenever they want?",
    answer: "Absolutely. You maintain total human override authority. If a staff member wants to answer an incoming text or phone call, they can jump into the unified inbox and take over instantly."
  },
  {
    category: "Implementation",
    question: "How long does implementation and setup take?",
    answer: "Our standard setup window is 10 to 14 business days. During this period, we audit your business workflow, program your custom AI knowledge base, train voice models, configure CRM pipelines, and perform testing before going live."
  },
  {
    category: "Pricing & Usage",
    question: "Are there any hidden usage fees or extra charges for calls/SMS?",
    answer: "No hidden fees. Every tier includes a generous monthly allowance of AI voice minutes, SMS messages, and system usage. Usage above plan limits is billed transparently at wholesale carrier rates."
  },
  {
    category: "Location",
    question: "Do you only work with businesses located in New York?",
    answer: "While we are headquartered in Jackson Heights, New York, and specialize heavily in the tri-state area (NYC, Long Island, Westchester, NJ, CT), our AI systems operate seamlessly for businesses across the entire United States."
  }
];
