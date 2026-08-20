import React, { useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, PhoneCall, Calendar, Zap, DollarSign, Star, RefreshCw, Layers, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

export const CustomerJourneyFlow: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // Default to AI Chat / Voice stage

  const journeySteps = [
    {
      id: "traffic",
      step: "01",
      title: "Inbound Visitor Traffic",
      subtitle: "Ad / Google / Local SEO",
      icon: Layers,
      color: "#176BFF",
      stat: "100% Traffic Engagement",
      description: "Potential buyers land on your 4–5 page AI-powered website from Google Search, Local SEO, social ads, or local referrals.",
      outcome: "High-intent visitors are immediately greeted by interactive AI capture tools before bouncing."
    },
    {
      id: "ai-site",
      step: "02",
      title: "AI-Powered Website",
      subtitle: "Mobile-First Conversion UI",
      icon: ShieldCheck,
      color: "#00C2FF",
      stat: "Sub-1s Load Time",
      description: "Fast, high-converting design with industry-specific messaging, clear call-to-actions, and friction-free lead capture forms.",
      outcome: "Turns passive browser interest into active lead inquiries."
    },
    {
      id: "ai-response",
      step: "03",
      title: "24/7 AI Chat & Voice",
      subtitle: "Instant <2s Triage",
      icon: MessageSquare,
      color: "#00C2FF",
      stat: "Speed-to-Lead <2s",
      description: "AI Voice Receptionist answers incoming calls in under 2 seconds; AI Chatbot responds to web visitors instantly 24/7/365.",
      outcome: "Zero missed calls, zero unanswered emails or midnight inquiries."
    },
    {
      id: "lead-capture",
      step: "04",
      title: "Lead Capture & Qualification",
      subtitle: "Verified Contact Ingestion",
      icon: Zap,
      color: "#176BFF",
      stat: "100% Verified Ingestion",
      description: "Captures lead name, verified mobile phone, zip code, project scope, and answers key business questions.",
      outcome: "Filters out tire-kickers so your team only speaks with qualified buyers."
    },
    {
      id: "calendar-booking",
      step: "05",
      title: "AI Calendar Booking",
      subtitle: "Real-Time Schedule Lock",
      icon: Calendar,
      color: "#70D44B",
      stat: "24/7 Auto Booking",
      description: "AI presents live staff calendar availability and books appointments directly without phone tag.",
      outcome: "Fills your calendar automatically while you sleep or work in the field."
    },
    {
      id: "followup",
      step: "06",
      title: "Automated SMS + Email Follow-Up",
      subtitle: "No-Show & Ghost Recovery",
      icon: Sparkles,
      color: "#70D44B",
      stat: "Slashes No-Shows by 80%",
      description: "Sends instant 2-way SMS confirmations, 24h & 1h appointment reminders, missed-call text backs, and no-response recovery.",
      outcome: "Keeps leads warm and ensures high appointment attendance."
    },
    {
      id: "crm-pipeline",
      step: "07",
      title: "CRM & Sales Pipeline",
      subtitle: "GoHighLevel / Custom API",
      icon: TrendingUp,
      color: "#00C2FF",
      stat: "100% Pipeline Visibility",
      description: "All contact records, transcripts, call logs, and deal stages sync automatically into your sales dashboard.",
      outcome: "Your team gets instant lead notifications and complete sales lifecycle tracking."
    },
    {
      id: "sale-review",
      step: "08",
      title: "Closed Sale & 5-Star Reviews",
      subtitle: "Database Reactivation & ROI",
      icon: DollarSign,
      color: "#70D44B",
      stat: "3x-5x Google Reviews",
      description: "Generates revenue and triggers automated 1-click SMS review requests to boost your local Google Map pack ranking.",
      outcome: "Drives repeat business, 5-star reputation, and high long-term customer value."
    }
  ];

  return (
    <div className="w-full space-y-10">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#70D44B] bg-[#70D44B]/10 px-3.5 py-1.5 rounded-full border border-[#70D44B]/30">
          <TrendingUp className="w-3.5 h-3.5" /> High-Conversion Revenue Engine
        </div>
        <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight uppercase">
          CORE CUSTOMER JOURNEY INFOGRAPHIC
        </h2>
        <p className="text-sm sm:text-base text-[#8D9AAF]">
          From initial ad click or Google search to booked appointment and 5-star review — see how AI Automation NY closes the loop on every lead.
        </p>
      </div>

      {/* Visual Journey Progress Bar Stepper */}
      <div className="relative glass-panel p-6 sm:p-8 rounded-3xl border border-[#176BFF]/30 bg-[#07152D]/90 overflow-hidden shadow-2xl">
        
        {/* Step Navigation Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 relative z-10">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center cursor-pointer group ${
                  isActive
                    ? "bg-gradient-to-b from-[#176BFF]/30 to-[#00C2FF]/20 border-[#00C2FF] shadow-lg shadow-[#00C2FF]/30 scale-105"
                    : "bg-[#050D1D]/70 border-white/10 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                  isActive ? "bg-[#00C2FF] text-[#07152D] font-bold" : "bg-white/5 text-[#8D9AAF] group-hover:text-white"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#00C2FF] uppercase tracking-wider">{step.step}</span>
                <span className={`text-xs font-heading font-bold mt-0.5 line-clamp-1 ${isActive ? "text-white" : "text-[#8D9AAF]"}`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Journey Step Detail Showcase Card */}
        <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Flow Graphic Badge */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#050D1D] border border-white/10 space-y-4 text-center lg:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C2FF]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="p-3 rounded-2xl bg-[#00C2FF]/20 border border-[#00C2FF]/40 text-[#00C2FF]">
                {React.createElement(journeySteps[activeStepIndex].icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#70D44B] uppercase tracking-widest">
                  Stage {journeySteps[activeStepIndex].step} of 08
                </span>
                <h3 className="text-xl font-heading font-black text-white uppercase">
                  {journeySteps[activeStepIndex].title}
                </h3>
              </div>
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-[#176BFF]/20 border border-[#176BFF]/30 text-[#00C2FF] text-xs font-mono font-bold">
              ⚡ Key Metric: {journeySteps[activeStepIndex].stat}
            </div>

            <p className="text-xs text-[#8D9AAF] leading-relaxed">
              {journeySteps[activeStepIndex].subtitle}
            </p>
          </div>

          {/* Right Explanation & Outcome */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-xs font-heading font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" /> What Happens In This Stage:
              </h4>
              <p className="text-sm text-white leading-relaxed">
                {journeySteps[activeStepIndex].description}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#70D44B]/10 border border-[#70D44B]/30 space-y-2">
              <h4 className="text-xs font-heading font-bold text-[#70D44B] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" /> Direct Business Outcome:
              </h4>
              <p className="text-sm font-medium text-white leading-relaxed">
                {journeySteps[activeStepIndex].outcome}
              </p>
            </div>
          </div>

        </div>

        {/* Linear Journey Visual Pathway Diagram */}
        <div className="mt-8 pt-6 border-t border-white/10 hidden sm:flex items-center justify-between gap-1 overflow-x-auto pb-2 text-center text-[10px] font-mono text-[#8D9AAF]">
          <span className="text-[#00C2FF] font-bold">Ad / Google Traffic</span>
          <ArrowRight className="w-3 h-3 shrink-0 text-[#176BFF]" />
          <span>4-5 Page AI Website</span>
          <ArrowRight className="w-3 h-3 shrink-0 text-[#176BFF]" />
          <span className="text-[#00C2FF] font-bold">24/7 AI Voice & Chat</span>
          <ArrowRight className="w-3 h-3 shrink-0 text-[#176BFF]" />
          <span>Lead Captured & Qualified</span>
          <ArrowRight className="w-3 h-3 shrink-0 text-[#176BFF]" />
          <span className="text-[#70D44B] font-bold">Calendar Booked</span>
          <ArrowRight className="w-3 h-3 shrink-0 text-[#176BFF]" />
          <span>Automated Follow-Up</span>
          <ArrowRight className="w-3 h-3 shrink-0 text-[#176BFF]" />
          <span>CRM Pipeline</span>
          <ArrowRight className="w-3 h-3 shrink-0 text-[#176BFF]" />
          <span className="text-[#70D44B] font-bold">Closed Sale & Review</span>
        </div>

      </div>

    </div>
  );
};
