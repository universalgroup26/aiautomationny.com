import React, { useState } from "react";
import { Cpu, Globe, PhoneCall, MessageSquare, Database, RefreshCw, CheckCircle2, ChevronRight, Sparkles, Shield, ArrowUpRight, Zap } from "lucide-react";

export const ServiceMindMap: React.FC = () => {
  const [activeBranchId, setActiveBranchId] = useState<string>("branch-voice");

  const mindMapBranches = [
    {
      id: "branch-website",
      title: "4–5 Page AI-Powered Website",
      tagline: "High-Converting Digital Sales Foundation",
      icon: Globe,
      color: "#176BFF",
      nodes: [
        "Mobile-First Responsive UI/UX",
        "Conversion-Focused Page Layouts",
        "Local NYC SEO Architecture",
        "Lead Capture Forms & Source Tracking",
        "Embedded Smart Booking Calendar"
      ],
      impact: "Turns traffic into active booked inquiries rather than bouncing visitors."
    },
    {
      id: "branch-voice",
      title: "24/7 AI Voice Receptionist",
      tagline: "Autonomous Phone Front Office",
      icon: PhoneCall,
      color: "#00C2FF",
      nodes: [
        "Sub-2s Inbound Call Answering",
        "Custom Business Knowledge FAQ Handling",
        "Caller Qualification & Data Collection",
        "Direct Calendar Scheduling",
        "Call Summaries & Instant Sales Alerts"
      ],
      impact: "Eliminates 100% of missed calls and lost after-hours phone revenue."
    },
    {
      id: "branch-chat",
      title: "Appointment-Ready AI Chatbot",
      tagline: "24/7 Web & Omnichannel Agent",
      icon: MessageSquare,
      color: "#00C2FF",
      nodes: [
        "Instant Web Visitor Engagement",
        "Natural Service Qualification",
        "Real-Time Schedule Lock",
        "Multi-Platform (Web, FB, IG, SMS)",
        "Seamless Human Staff Handoff"
      ],
      impact: "Captures midnight inquiries and converts chatters into confirmed calendar dates."
    },
    {
      id: "branch-crm",
      title: "CRM & Multi-Channel Workflows",
      tagline: "HighLevel & Custom API Engine",
      icon: Database,
      color: "#176BFF",
      nodes: [
        "Automated Sales Pipeline Architecture",
        "Missed-Call Text Back (<60s)",
        "SMS & Email Follow-Up Nurture",
        "Lead Scoring & Source Analytics",
        "Zapier & External Webhook Bridges"
      ],
      impact: "Slashes appointment no-shows by up to 80% with 2-way automated confirmations."
    },
    {
      id: "branch-reviews",
      title: "Database Reactivation & Reviews",
      tagline: "Reputation & Past Lead Goldmine",
      icon: RefreshCw,
      color: "#70D44B",
      nodes: [
        "Dormant Lead Reactivation Campaigns",
        "Automated 5-Star Google Review Requests",
        "Customer Loyalty & Referral Nurture",
        "Reputation Monitoring Dashboard",
        "Zero-Ad-Spend Revenue Extraction"
      ],
      impact: "Extracts thousands in new revenue from existing customer lists automatically."
    }
  ];

  const currentBranch = mindMapBranches.find(b => b.id === activeBranchId) || mindMapBranches[1];

  return (
    <div className="w-full space-y-10">
      
      {/* Mind Map Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30">
          <Cpu className="w-3.5 h-3.5" /> Architectural Ecosystem
        </div>
        <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight uppercase">
          UNIVERSAL TECH SERVICE MIND MAP
        </h2>
        <p className="text-sm sm:text-base text-[#8D9AAF]">
          Interactive architectural blueprint showing how the 5 core AI components connect around your central business engine.
        </p>
      </div>

      {/* Mind Map Interactive Canvas Container */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#176BFF]/30 bg-[#07152D]/90 relative overflow-hidden shadow-2xl">
        
        {/* Glowing Central Hub Visual */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-10">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] rounded-full blur-xl opacity-40 animate-pulse"></div>
            <div className="relative px-6 py-4 bg-[#050D1D] rounded-2xl border-2 border-[#00C2FF] shadow-[0_0_30px_rgba(0,194,255,0.4)] flex items-center gap-3">
              <Cpu className="w-8 h-8 text-[#00C2FF]" />
              <div className="text-left">
                <div className="text-[10px] font-mono font-bold text-[#70D44B] uppercase tracking-widest">Central AI Core</div>
                <div className="text-base sm:text-lg font-heading font-black text-white">AI AUTOMATION NY PLATFORM</div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Branching Interactive Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative z-10">
          {mindMapBranches.map((branch) => {
            const Icon = branch.icon;
            const isSelected = branch.id === activeBranchId;
            return (
              <button
                key={branch.id}
                onClick={() => setActiveBranchId(branch.id)}
                className={`p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-b from-[#176BFF]/30 via-[#00C2FF]/15 to-[#050D1D] border-[#00C2FF] shadow-lg shadow-[#00C2FF]/30 ring-1 ring-[#00C2FF]"
                    : "bg-[#050D1D]/80 border-white/10 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${isSelected ? "bg-[#00C2FF] text-[#07152D]" : "bg-white/5 text-[#00C2FF]"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && <Sparkles className="w-4 h-4 text-[#70D44B] animate-pulse" />}
                </div>

                <div>
                  <h3 className={`text-xs font-heading font-bold uppercase leading-tight ${isSelected ? "text-white" : "text-[#8D9AAF]"}`}>
                    {branch.title}
                  </h3>
                  <p className="text-[10px] text-[#8D9AAF] mt-1 line-clamp-1">
                    {branch.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Branch Deep Dive Mind Map Node Inspector */}
        <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#050D1D] border border-white/10 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#176BFF]/20 border border-[#176BFF]/40 text-[#00C2FF]">
                {React.createElement(currentBranch.icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#00C2FF] uppercase tracking-widest">Active Mind Map Node</span>
                <h3 className="text-lg font-heading font-black text-white">{currentBranch.title}</h3>
              </div>
            </div>
            
            <p className="text-xs text-[#8D9AAF] leading-relaxed">
              {currentBranch.tagline}
            </p>

            <div className="p-3.5 rounded-xl bg-[#70D44B]/10 border border-[#70D44B]/30 text-xs text-white space-y-1">
              <span className="font-heading font-bold text-[#70D44B] uppercase text-[10px] block">Measurable Business Impact</span>
              <span>"{currentBranch.impact}"</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-heading font-bold text-[#00C2FF] uppercase tracking-wider block mb-2">
              Integrated Capabilities In This Branch:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentBranch.nodes.map((nodeText, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#70D44B] shrink-0" />
                  <span>{nodeText}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
