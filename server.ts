import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { z } from "zod";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Domain Verification Route
const DOMAIN_VERIFICATION_TOKEN = process.env.DOMAIN_VERIFICATION_TOKEN || "domain-verified";
app.get("/domain-verification", (req, res) => {
  res.type("text/plain").send(DOMAIN_VERIFICATION_TOKEN);
});

// In-memory leads storage for demo & verification
interface LeadRecord {
  id: string;
  type: "audit" | "contact" | "demo" | "newsletter";
  businessName?: string;
  name: string;
  email: string;
  phone: string;
  industry?: string;
  leadVolume?: string;
  currentChallenge?: string;
  service?: string;
  message?: string;
  status: "new" | "contacted" | "qualified" | "booked";
  createdAt: string;
}

const leadStore: LeadRecord[] = [];

// GoHighLevel (GHL) API / Location Key
const GHL_PIT_KEY = process.env.GHL_API_KEY || "";

async function syncToGoHighLevel(leadData: {
  name: string;
  email: string;
  phone: string;
  businessName?: string;
  tags: string[];
  customFields?: Record<string, any>;
  source?: string;
}) {
  // 1. Direct GoHighLevel V2 LeadConnector API integration
  if (GHL_PIT_KEY) {
    try {
      const firstName = leadData.name.split(" ")[0] || leadData.name;
      const lastName = leadData.name.split(" ").slice(1).join(" ") || "";

      const payload = {
        name: leadData.name,
        firstName,
        lastName,
        email: leadData.email,
        phone: leadData.phone,
        companyName: leadData.businessName || "",
        tags: leadData.tags,
        source: leadData.source || "AI AUTOMATION NY Website"
      };

      const ghlRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GHL_PIT_KEY}`,
          "Version": "2021-07-28",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const resJson = await ghlRes.json().catch(() => null);
      console.log("GoHighLevel API Direct Sync Result:", ghlRes.status, resJson);
    } catch (err) {
      console.error("GoHighLevel API Sync Error:", err);
    }
  }

  // 2. Webhook forwarding if GHL_WEBHOOK_URL is configured
  const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
  if (ghlWebhookUrl) {
    try {
      await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadData,
          first_name: leadData.name.split(" ")[0] || leadData.name,
          last_name: leadData.name.split(" ").slice(1).join(" ") || "",
        }),
      });
    } catch (err) {
      console.error("GHL Webhook Forward Error:", err);
    }
  }
}

// Zod Validation Schemas
const AuditSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  industry: z.string().min(1, "Industry is required"),
  leadVolume: z.string().default("10-50 leads/mo"),
  currentChallenge: z.string().default("Missed calls after hours"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Valid phone is required"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  notes: z.string().optional(),
});

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(5, "Message is required"),
});

const NewsletterSchema = z.object({
  email: z.string().email("Valid email address is required"),
});

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "AI AUTOMATION NY", timestamp: new Date().toISOString() });
});

// Audit Form API Endpoint
app.post("/api/audit", async (req, res) => {
  try {
    const data = AuditSchema.parse(req.body);
    const leadId = `LEAD-${Date.now().toString(36).toUpperCase()}`;

    const newLead: LeadRecord = {
      id: leadId,
      type: "audit",
      businessName: data.businessName,
      name: data.name,
      email: data.email,
      phone: data.phone,
      industry: data.industry,
      leadVolume: data.leadVolume,
      currentChallenge: data.currentChallenge,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    leadStore.unshift(newLead);

    // Sync Lead to GoHighLevel CRM via API & Webhook
    await syncToGoHighLevel({
      name: data.name,
      email: data.email,
      phone: data.phone,
      businessName: data.businessName,
      tags: ["Website Audit Lead", data.industry, "AI Automation NY"],
      source: "AI AUTOMATION NY Website Audit Form",
      customFields: {
        industry: data.industry,
        lead_volume: data.leadVolume,
        challenge: data.currentChallenge,
        preferred_date: data.preferredDate || "ASAP",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Your AI Automation Audit request has been successfully scheduled!",
      leadId,
      data: newLead,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.issues });
    }
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Contact Form API
app.post("/api/contact", async (req, res) => {
  try {
    const data = ContactSchema.parse(req.body);
    const leadId = `CONTACT-${Date.now().toString(36).toUpperCase()}`;

    const record: LeadRecord = {
      id: leadId,
      type: "contact",
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      service: data.service || "General Inquiry",
      message: data.message,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    leadStore.unshift(record);

    // Sync Contact Lead to GoHighLevel CRM
    await syncToGoHighLevel({
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      tags: ["Website Contact Lead", data.service || "General Inquiry", "AI Automation NY"],
      source: "AI AUTOMATION NY Contact Form",
      customFields: {
        message: data.message,
        service: data.service || "General Inquiry"
      }
    });

    return res.status(200).json({
      success: true,
      message: "Thank you for reaching out to AI Automation NY. Our team will contact you within 15 minutes during business hours.",
      leadId,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.issues });
    }
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Newsletter Subscription API
app.post("/api/newsletter", async (req, res) => {
  try {
    const data = NewsletterSchema.parse(req.body);
    const leadId = `NEWSLETTER-${Date.now().toString(36).toUpperCase()}`;

    const record: LeadRecord = {
      id: leadId,
      type: "newsletter",
      name: data.email.split("@")[0] || "Subscriber",
      email: data.email,
      phone: "",
      status: "new",
      createdAt: new Date().toISOString(),
    };

    leadStore.unshift(record);

    // Sync Subscriber to GoHighLevel CRM
    await syncToGoHighLevel({
      name: data.email.split("@")[0] || "Newsletter Subscriber",
      email: data.email,
      phone: "",
      tags: ["Newsletter Subscriber", "AI Automation NY Updates"],
      source: "AI AUTOMATION NY Footer Stay Updated Form",
    });

    return res.status(200).json({
      success: true,
      message: "You're subscribed! Check your inbox for AI automation insights & NY business growth guides.",
      leadId,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.issues });
    }
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Interactive AI Receptionist Demo Endpoint
app.post("/api/ai-chat-demo", async (req, res) => {
  const { message, history, industry } = req.body;

  const apiKey = process.env.GEMINI_API_KEY;
  
  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are Sarah, an elite AI Receptionist & Booking Agent representing 'AI AUTOMATION NY' (aiautomationny.com), based in Jackson Heights, New York.
Your goal is to warmly answer inquiries, demonstrate AI voice/chat capabilities, ask 1 qualifying question about their business or appointment needs, and offer to schedule a live AI Automation Audit.
Industry context: ${industry || "General New York Business"}.
Keep your response concise, polite, professional, and high-converting (2-3 sentences max).

User message: "${message}"`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      if (response.text) {
        return res.json({ success: true, reply: response.text.trim() });
      }
    } catch (err) {
      console.error("Gemini API Error in chat demo:", err);
    }
  }

  // Smart fallback response engine if GEMINI_API_KEY is missing or fails
  const msgLower = (message || "").toLowerCase();
  let reply = "Hello! Thanks for reaching out to AI Automation NY. Our AI receptionist system operates 24/7 to answer calls, qualify leads, and book calendar appointments automatically. What service or industry are you interested in automating today?";

  if (msgLower.includes("price") || msgLower.includes("cost") || msgLower.includes("pricing")) {
    reply = "Our AI systems start with complete implementation and 24/7 setup. The AI Start package is $2,500 setup + $397/mo, while our most popular AI Grow system is $5,000 setup + $697/mo. Would you like me to reserve an AI Audit slot to review your business workflow?";
  } else if (msgLower.includes("book") || msgLower.includes("appointment") || msgLower.includes("schedule")) {
    reply = "I can book that for you right away! What day and time work best for your schedule, and what's the best phone number to confirm?";
  } else if (msgLower.includes("voice") || msgLower.includes("call") || msgLower.includes("phone")) {
    reply = "Our AI Voice Receptionist answers incoming phone calls in under 2 seconds, speaks with natural tone, handles FAQ inquiries, and books appointments straight into your CRM. Would you like a live demo call?";
  } else if (msgLower.includes("hvac") || msgLower.includes("plumbing") || msgLower.includes("contractor") || msgLower.includes("dental")) {
    reply = `We specialize heavily in ${industry || "local service"} businesses! We convert after-hours missed calls into booked service appointments before your competitors even wake up. How many leads do you typically receive per month?`;
  }

  return res.json({ success: true, reply });
});

// GoHighLevel Webhook Receiver
app.post("/api/ghl-webhook", (req, res) => {
  console.log("Received GHL webhook payload:", req.body);
  res.status(200).json({ status: "received", timestamp: new Date().toISOString() });
});

// Vite Server Setup / Static Serve
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AI AUTOMATION NY Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
