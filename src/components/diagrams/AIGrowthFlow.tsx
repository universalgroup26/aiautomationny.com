import React, { useState } from "react";
import { Zap, MessageSquare, CheckCircle2, Calendar, Database, Send, DollarSign, Star, RefreshCw, Layers } from "lucide-react";

export interface NodeDetail {
  id: string;
  stepNumber: number;
  label: string;
  shortTag: string;
  icon: any;
  problem: string;
  aiAction: string;
  businessOutcome: string;
}

const NODES: NodeDetail[] = [
  {
    id: "traffic",
    stepNumber: 1,
    label: "Traffic Inbound",
    shortTag: "Google, Ads, Phone, SEO",
    icon: Layers,
    problem: "High ad spend & organic traffic lost because visitors bounce before taking action.",
    aiAction: "AI Automation NY hooks traffic instantly with interactive chat, click-to-call, and smart lead forms.",
    businessOutcome: "Zero traffic wasted; every visitor is presented with a 24/7 engagement option."
  },
  {
    id: "capture",
    stepNumber: 2,
    label: "Lead Capture",
    shortTag: "Web, Call, Meta, Form",
    icon: Zap,
    problem: "Traditional forms sit unread in inboxes while leads move on to competitors.",
    aiAction: "Inbound leads are ingested in real-time with instant 100% verified phone/email capture.",
    businessOutcome: "100% of lead inquiries captured with zero human delay."
  },
  {
    id: "response",
    stepNumber: 3,
    label: "AI Response",
    shortTag: "< 2 Seconds 24/7",
    icon: MessageSquare,
    problem: "Missed phone calls and 4-hour email response delays drop qualification rates by 80%.",
    aiAction: "AI Voice Receptionist answers phone calls in <2s and sends instant SMS in <60s.",
    businessOutcome: "Sub-second speed-to-lead that delights buyers before competitors wake up."
  },
  {
    id: "qualification",
    stepNumber: 4,
    label: "Qualification",
    shortTag: "Smart Intent Screening",
    icon: CheckCircle2,
    problem: "Sales reps spend hours answering repetitive basic FAQs and talking to unqualified tire-kickers.",
    aiAction: "AI conducts custom triage, screens budget, zip code, and project scope naturally.",
    businessOutcome: "Only high-intent, qualified leads enter your active sales calendar."
  },
  {
    id: "appointment",
    stepNumber: 5,
    label: "Appointment",
    shortTag: "Real-Time Calendar Lock",
    icon: Calendar,
    problem: "Back-and-forth phone tag and scheduling friction cause leads to go cold.",
    aiAction: "AI presents live calendar availability and locks the appointment directly into CRM.",
    businessOutcome: "Your sales and service calendar fills automatically 24/7/365."
  },
  {
    id: "crm",
    stepNumber: 6,
    label: "CRM Sync",
    shortTag: "GoHighLevel / Custom API",
    icon: Database,
    problem: "Lead data scattered across notes, text messages, and unorganized spreadsheets.",
    aiAction: "All contact details, call transcripts, and deal stages logged automatically in CRM.",
    businessOutcome: "Complete customer pipeline visibility with zero manual data entry."
  },
  {
    id: "followup",
    stepNumber: 7,
    label: "Follow-Up",
    shortTag: "2-Way SMS & Reminders",
    icon: Send,
    problem: "30%+ appointment no-show rates waste valuable technician and staff time.",
    aiAction: "Automated 2-way SMS reminders ('Reply C to confirm or R to reschedule') eliminate ghosting.",
    businessOutcome: "No-shows slashed by up to 80% with automated reschedule loops."
  },
  {
    id: "sale",
    stepNumber: 8,
    label: "Closed Sale",
    shortTag: "Revenue Generated",
    icon: DollarSign,
    problem: "Long sales cycles and delayed proposal approvals hurt cash flow.",
    aiAction: "Automated quotes, digital contract links, and deposit payment requests sent instantly.",
    businessOutcome: "Shorter sales cycles and increased closed deal velocity."
  },
  {
    id: "review",
    stepNumber: 9,
    label: "5-Star Review",
    shortTag: "Google Local Map Boost",
    icon: Star,
    problem: "Happy customers forget to leave reviews, stalling local Google Map pack ranking.",
    aiAction: "1-Click SMS review request sent automatically upon job invoice completion.",
    businessOutcome: "3x-5x Google review volume growth and dominant local search presence."
  },
  {
    id: "reactivation",
    stepNumber: 10,
    label: "Reactivation",
    shortTag: "Automated Database Gold",
    icon: RefreshCw,
    problem: "Thousands of past contacts sit dormant with no ongoing re-engagement.",
    aiAction: "AI launches low-pressure seasonal reactivation campaigns to historical contact list.",
    businessOutcome: "Thousands in new revenue extracted from existing databases with zero ad spend."
  }
];

export const AIGrowthFlow: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<NodeDetail>(NODES[2]); // Default to AI Response
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  return (
    <div className="w-full relative">
      
      {/* Header Label */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30 mb-3 shadow-sm shadow-[#00C2FF]/20">
          <Zap className="w-3.5 h-3.5" /> Signature AI Operating Architecture
        </div>
        <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
          THE AI GROWTH FLOW™
        </h2>
        <p className="text-sm sm:text-base text-[#8D9AAF] mt-2">
          Watch how an inbound inquiry travels through the AI Automation NY system to generate booked appointments and closed revenue. Click any node to reveal operational impact.
        </p>
      </div>

      {/* Desktop Connected Node Workflow */}
      <div className="hidden lg:block relative my-8 p-6 glass-panel rounded-2xl border border-[#176BFF]/30 overflow-hidden bg-[#07152D]/80">
        
        {/* SVG Connecting Pathway Lines */}
        <div className="absolute top-1/2 left-8 right-8 -translate-y-6 h-1 pointer-events-none z-0">
          <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#176BFF" />
                <stop offset="50%" stopColor="#00C2FF" />
                <stop offset="100%" stopColor="#70D44B" />
              </linearGradient>
            </defs>
            <path
              d="M 0 12 H 1200"
              stroke="url(#flowGrad)"
              strokeWidth="3"
              strokeOpacity="0.4"
              fill="none"
            />
            <path
              d="M 0 12 H 1200"
              stroke="#00C2FF"
              strokeWidth="3"
              strokeDasharray="10 15"
              className="animate-path-pulse"
              fill="none"
            />
          </svg>
        </div>

        {/* 10 Connected Nodes Grid */}
        <div className="grid grid-cols-5 gap-y-12 gap-x-4 relative z-10">
          {NODES.map((node, index) => {
            const Icon = node.icon;
            const isSelected = selectedNode.id === node.id;
            const isHovered = hoveredNodeId === node.id;

            return (
              <div key={node.id} className="flex flex-col items-center text-center group">
                <button
                  onClick={() => setSelectedNode(node)}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? "bg-gradient-to-br from-[#176BFF] via-[#00C2FF] to-[#70D44B] p-[2px] shadow-lg shadow-[#00C2FF]/40 scale-110"
                      : "bg-[#0D1F3D] border border-[#176BFF]/30 hover:border-[#00C2FF] hover:scale-105"
                  }`}
                  aria-label={`Select ${node.label} step`}
                >
                  <div className={`w-full h-full rounded-[14px] flex items-center justify-center transition-colors ${isSelected ? "bg-[#07152D]" : "bg-[#0D1F3D]"}`}>
                    <Icon className={`w-6 h-6 transition-colors ${isSelected ? "text-[#00C2FF]" : "text-[#8D9AAF] group-hover:text-white"}`} />
                  </div>

                  {/* Step Number Badge */}
                  <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-heading font-bold flex items-center justify-center border shadow-sm ${
                    isSelected ? "bg-[#70D44B] text-[#07152D] border-white" : "bg-[#176BFF] text-white border-white/20"
                  }`}>
                    {node.stepNumber}
                  </span>
                </button>

                <div className="mt-3">
                  <div className={`font-heading text-xs font-bold transition-colors ${isSelected ? "text-[#00C2FF]" : "text-white"}`}>
                    {node.label}
                  </div>
                  <div className="text-[10px] text-[#8D9AAF] font-medium mt-0.5 max-w-[110px] line-clamp-1">
                    {node.shortTag}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile / Tablet Horizontal Scroll or Stacked Nodes */}
      <div className="lg:hidden flex gap-3 overflow-x-auto pb-4 my-6 scrollbar-thin">
        {NODES.map((node) => {
          const Icon = node.icon;
          const isSelected = selectedNode.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`shrink-0 p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                isSelected 
                  ? "bg-[#176BFF]/20 border-[#00C2FF] text-white shadow-md shadow-[#00C2FF]/20" 
                  : "bg-[#0D1F3D]/60 border-white/10 text-[#8D9AAF]"
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? "bg-[#00C2FF] text-[#07152D]" : "bg-white/5"}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-heading font-bold text-white whitespace-nowrap">
                  {node.stepNumber}. {node.label}
                </div>
                <div className="text-[10px] text-[#8D9AAF] whitespace-nowrap">
                  {node.shortTag}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details Drawer / Card */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#00C2FF]/30 bg-gradient-to-br from-[#0D1F3D] to-[#07152D] shadow-2xl relative overflow-hidden transition-all duration-300">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#176BFF] to-[#00C2FF] p-0.5 shadow-md shadow-[#176BFF]/30">
              <div className="w-full h-full bg-[#07152D] rounded-[10px] flex items-center justify-center">
                {React.createElement(selectedNode.icon, { className: "w-6 h-6 text-[#00C2FF]" })}
              </div>
            </div>
            <div>
              <div className="text-xs font-heading font-bold uppercase tracking-wider text-[#70D44B]">
                Stage 0{selectedNode.stepNumber} of 10
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                {selectedNode.label}
              </h3>
            </div>
          </div>

          <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#8D9AAF] font-medium">
            Tag: <span className="text-white font-semibold">{selectedNode.shortTag}</span>
          </div>
        </div>

        {/* 3-Part Impact Matrix: Problem vs AI Action vs Business Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          
          {/* Traditional Problem */}
          <div className="bg-[#07152D]/80 p-5 rounded-xl border border-red-500/20 space-y-2">
            <div className="text-xs font-heading font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
              <span>Traditional Business Bottleneck</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8D9AAF] leading-relaxed">
              {selectedNode.problem}
            </p>
          </div>

          {/* AI Automation Action */}
          <div className="bg-[#07152D]/80 p-5 rounded-xl border border-[#00C2FF]/30 space-y-2">
            <div className="text-xs font-heading font-bold uppercase tracking-wider text-[#00C2FF] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>AI Automation NY Action</span>
            </div>
            <p className="text-xs sm:text-sm text-white leading-relaxed">
              {selectedNode.aiAction}
            </p>
          </div>

          {/* Business Outcome */}
          <div className="bg-[#07152D]/80 p-5 rounded-xl border border-[#70D44B]/30 space-y-2">
            <div className="text-xs font-heading font-bold uppercase tracking-wider text-[#70D44B] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Measurable Business Outcome</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F9FC] font-medium leading-relaxed">
              {selectedNode.businessOutcome}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
