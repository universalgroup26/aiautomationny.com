import React, { useState } from "react";
import { XCircle, CheckCircle2, Zap, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100

  const traditionalPoints = [
    { title: "62% Missed Calls After Hours", desc: "Calls after 5 PM go to generic voicemail. Prospects hang up and call a local competitor." },
    { title: "4-Hour Speed to Lead", desc: "Web form submissions sit unread in inboxes while leads lose interest." },
    { title: "Manual Scheduling Phone Tag", desc: "Staff burns hours exchanging emails trying to pick open timeslots." },
    { title: "Scattered Lead Records", desc: "Prospect info hidden across sticky notes, text threads, and spreadsheets." },
    { title: "No Follow-Up & Lost Revenue", desc: "Old leads sit untouched without long-term nurture campaigns." }
  ];

  const aiPoints = [
    { title: "100% 24/7 Call Answering", desc: "AI Voice Receptionist answers in <2s with warm brand persona and custom triage rules." },
    { title: "<60 Second Speed to Lead", desc: "Inbound leads instantly contacted via personalized 2-way SMS." },
    { title: "Instant Calendar Lock", desc: "AI checks live calendar and locks appointments directly into CRM." },
    { title: "Centralized CRM Pipeline", desc: "Complete visibility from lead capture to closed sale and automated invoice." },
    { title: "Automated 5-Star Review Engine", desc: "Triggers 1-click Google review request automatically upon job completion." }
  ];

  return (
    <div className="w-full">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#FFB800] bg-[#FFB800]/10 px-3.5 py-1.5 rounded-full border border-[#FFB800]/30 mb-3">
          <AlertTriangle className="w-3.5 h-3.5" /> Operational Transformation
        </div>
        <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
          TRADITIONAL vs AI AUTOMATION NY
        </h2>
        <p className="text-sm sm:text-base text-[#8D9AAF] mt-2">
          Compare traditional manual business operations against the automated AI business operating system.
        </p>
      </div>

      {/* Interactive Slider Container */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#176BFF]/30 bg-[#07152D]/90 shadow-2xl relative">
        
        {/* Interactive Drag Control */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider mb-2">
            <span className="text-red-400 flex items-center gap-1.5">
              <XCircle className="w-4 h-4" /> Traditional Fragmented Business
            </span>
            <span className="text-[#70D44B] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> AI Automation NY Operating Engine
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="w-full h-2.5 bg-[#0D1F3D] rounded-lg appearance-none cursor-pointer accent-[#00C2FF]"
            aria-label="Comparison slider between traditional and AI system"
          />
        </div>

        {/* Side-By-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Traditional Side */}
          <div className="bg-[#050D1D] p-6 rounded-xl border border-red-500/20 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-red-500/20 text-red-400 font-heading font-bold text-sm uppercase tracking-wider">
              <XCircle className="w-5 h-5 shrink-0" />
              <span>Without AI Automation</span>
            </div>

            <div className="space-y-4">
              {traditionalPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></div>
                  <div>
                    <div className="font-heading font-semibold text-white">{item.title}</div>
                    <div className="text-[#8D9AAF] text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Automation NY Side */}
          <div className="bg-[#0D1F3D] p-6 rounded-xl border border-[#70D44B]/30 space-y-4 shadow-lg shadow-[#70D44B]/5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#70D44B]/20 text-[#70D44B] font-heading font-bold text-sm uppercase tracking-wider">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>With AI Automation NY</span>
            </div>

            <div className="space-y-4">
              {aiPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#70D44B] mt-2 shrink-0"></div>
                  <div>
                    <div className="font-heading font-semibold text-white">{item.title}</div>
                    <div className="text-[#F7F9FC] text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
