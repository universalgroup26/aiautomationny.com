import React, { useState } from "react";
import { ArrowRight, PhoneCall, MessageSquare, Calendar, Database, Star, Zap, CheckCircle2, Sparkles, FileText, Activity, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { playClickSound } from "../../lib/audioFeedback";

interface HeroSectionProps {
  openAuditModal: () => void;
  scrollToSystem: () => void;
  openProposalModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ openAuditModal, scrollToSystem, openProposalModal }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const coreModules = [
    { label: "AI Voice Reception", icon: PhoneCall, metric: "1.8s Response", color: "#00C2FF", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { label: "Smart Web Chat", icon: MessageSquare, metric: "24/7 Intake", color: "#176BFF", pos: "top-1/4 right-0 translate-x-1/3" },
    { label: "Instant Calendar", icon: Calendar, metric: "Zero Double-Booking", color: "#70D44B", pos: "bottom-1/4 right-0 translate-x-1/3" },
    { label: "CRM Auto-Sync", icon: Database, metric: "GoHighLevel Native", color: "#FFB800", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { label: "Review Booster", icon: Star, metric: "5-Star Google Loops", color: "#FF7A00", pos: "bottom-1/4 left-0 -translate-x-1/3" },
    { label: "Lead Text-Back", icon: Zap, metric: "<45s Speed-to-Lead", color: "#9B6BF5", pos: "top-1/4 left-0 -translate-x-1/3" }
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative pt-32 sm:pt-40 pb-24 overflow-hidden bg-grid-pattern group"
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 194, 255, 0.12), rgba(23, 107, 255, 0.05) 45%, transparent 80%)`,
        }}
      />
      
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#176BFF] opacity-[0.14] blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#00C2FF] opacity-[0.10] blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Shimmering Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill text-xs font-heading font-semibold uppercase tracking-wider text-[#00C2FF] relative overflow-hidden group shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#70D44B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#70D44B]"></span>
              </span>
              <span className="text-[#F7F9FC]">NYC AI Systems Leader</span>
              <span className="text-white/30">•</span>
              <span className="text-[#00C2FF] font-bold">24/7 Autonomous Operations</span>
              
              {/* Subtle Shimmer Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer pointer-events-none" />
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.08]">
              STOP LOSING LEADS. <br />
              <span className="bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] bg-clip-text text-transparent">
                START AUTOMATING GROWTH.
              </span>
            </h1>

            {/* Refined Subhead */}
            <p className="text-base sm:text-lg text-[#8D9AAF] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
              Production-grade AI systems that answer inbound phone calls in 2 seconds, qualify prospects, book calendar appointments, trigger automated follow-ups, and sync with your CRM 24/7.
            </p>

            {/* Pill CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => {
                  playClickSound();
                  openAuditModal();
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(0,194,255,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer group relative overflow-hidden"
              >
                <span>Book a Free AI Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
              </button>

              {openProposalModal && (
                <button
                  onClick={() => {
                    playClickSound();
                    openProposalModal();
                  }}
                  className="w-full sm:w-auto px-6 py-4 rounded-full glass-pill hover:border-[#00C2FF]/50 text-[#00C2FF] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <FileText className="w-4 h-4 text-[#70D44B]" />
                  <span>Build Custom Proposal</span>
                </button>
              )}

              <button
                onClick={() => {
                  playClickSound();
                  scrollToSystem();
                }}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Architecture</span>
              </button>
            </div>

            {/* High-Contrast Live Metric Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-[#8D9AAF]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#70D44B]" />
                <span className="text-[#F7F9FC] font-medium">24/7 AI Phone Answering</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
                <Activity className="w-4 h-4 text-[#00C2FF]" />
                <span className="text-[#F7F9FC] font-medium">&lt; 45-Sec Speed-to-Lead</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#FFB800]" />
                <span className="text-[#F7F9FC] font-medium">SDVOSB & NYS Certified</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Orbital AI Core Node */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#176BFF]/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-[#00C2FF]/20 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-20 rounded-full border border-white/5" />

              {/* Central Core Brain Glow */}
              <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#176BFF] via-[#00C2FF] to-[#70D44B] p-1 shadow-2xl shadow-[#176BFF]/40 animate-float">
                <div className="w-full h-full bg-[#07152D] rounded-full flex flex-col items-center justify-center text-center p-3 border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#176BFF]/20 to-transparent" />
                  <Sparkles className="w-7 h-7 text-[#00C2FF] mb-1 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-heading font-extrabold text-white tracking-wider uppercase">
                    AI AUTOMATION
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-heading font-bold text-[#70D44B] tracking-widest uppercase mt-0.5">
                    CORE HUB
                  </span>
                  <div className="flex items-center gap-1 mt-1 text-[9px] text-[#00C2FF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#70D44B] animate-ping" />
                    <span>Active</span>
                  </div>
                </div>
              </div>

              {/* Orbiting Satellite Capability Modules */}
              {coreModules.map((mod, idx) => {
                const Icon = mod.icon;
                const isActive = activeModuleIndex === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => {
                      playClickSound();
                      setActiveModuleIndex(idx);
                    }}
                    className={`absolute ${mod.pos} z-20 transition-all duration-300 transform hover:scale-110 cursor-pointer`}
                  >
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill border transition-all duration-300 shadow-xl ${
                      isActive 
                        ? "border-[#00C2FF] bg-[#0D244A] shadow-[#00C2FF]/30 ring-2 ring-[#00C2FF]/20" 
                        : "border-white/15 bg-[#07152D]/90 hover:border-white/30"
                    }`}>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${mod.color}25` }}>
                        <Icon className="w-3.5 h-3.5" style={{ color: mod.color }} />
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] font-heading font-bold text-white block whitespace-nowrap leading-tight">
                          {mod.label}
                        </span>
                        {isActive && (
                          <span className="text-[9px] text-[#70D44B] block font-semibold">
                            {mod.metric}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
