import React, { useState, useEffect } from "react";
import { UserCheck, Bot, CalendarCheck, Database, Play, Pause, RotateCcw, CheckCircle2, ArrowRight, Zap, Sparkles } from "lucide-react";

export const AnimatedClientJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const journeyNodes = [
    {
      id: "lead",
      title: "1. Lead Capture",
      shortTitle: "Lead",
      icon: UserCheck,
      color: "#176BFF",
      stat: "< 2s First Touch",
      tagline: "Inbound Website Visit, Call, or Form Submission",
      description: "An interested NYC prospect lands on your 4-5 page AI website or dials your business phone number.",
      details: [
        "Tracks campaign traffic source & ad keyword",
        "Instant greeting via AI Website Chat or Voice Receptionist",
        "Zero waiting time, zero lost voicemail"
      ]
    },
    {
      id: "ai-qualification",
      title: "2. AI Qualification",
      shortTitle: "AI Qualification",
      icon: Bot,
      color: "#00C2FF",
      stat: "100% Instant Triage",
      tagline: "Smart Conversational Intake & Scope Verification",
      description: "The AI agent asks tailored qualifying questions, verifies budget/location/needs, and checks business rules.",
      details: [
        "Answers business FAQs using custom knowledge base",
        "Verifies client contact details (mobile SMS verification)",
        "Filters out spam and unqualified solicitors automatically"
      ]
    },
    {
      id: "booking",
      title: "3. Calendar Booking",
      shortTitle: "Booking",
      icon: CalendarCheck,
      color: "#70D44B",
      stat: "24/7 Auto Schedule",
      tagline: "Direct Real-Time Calendar Slot Lock & Reminders",
      description: "AI presents live staff availability, locks in the appointment date, and sends instant SMS/email confirmations.",
      details: [
        "Syncs with Google Calendar, Outlook & GHL",
        "Automated 2-way SMS confirmation & 24h reminders",
        "Reduces appointment no-shows by up to 80%"
      ]
    },
    {
      id: "crm",
      title: "4. CRM & Pipeline Sync",
      shortTitle: "CRM Pipeline",
      icon: Database,
      color: "#00C2FF",
      stat: "Instant Deal Tracking",
      tagline: "HighLevel / API Dashboard & Automated Reviews",
      description: "Full call transcript, chat summary, and verified lead details automatically move into your sales pipeline.",
      details: [
        "Triggers instant staff notifications & SMS alerts",
        "Updates CRM stage & assigns sales representative",
        "Triggers post-service 5-star Google review sequences"
      ]
    }
  ];

  // Auto-advance through stages when playing
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % journeyNodes.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, journeyNodes.length]);

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30">
          <Sparkles className="w-3.5 h-3.5" /> Autonomous Client Journey Infographic
        </div>
        <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight uppercase">
          HOW THE AI AUTOMATION SYSTEM WORKS
        </h2>
        <p className="text-sm sm:text-base text-[#8D9AAF]">
          An interactive, step-by-step visual path tracking a lead from initial contact to qualified calendar booking and CRM deal closure.
        </p>
      </div>

      {/* Main Interactive Diagram Container */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#176BFF]/30 bg-[#07152D]/95 relative overflow-hidden shadow-2xl space-y-8">
        
        {/* Playback Controls & Progress Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-1.5 bg-[#176BFF]/20 border border-[#176BFF]/50 hover:bg-[#176BFF]/40 text-[#00C2FF] rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" /> Pause Journey
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#70D44B]" /> Auto-Play Journey
                </>
              )}
            </button>
            <button
              onClick={() => {
                setActiveStep(0);
                setIsPlaying(false);
              }}
              className="px-3.5 py-1.5 bg-white/5 border border-white/10 hover:bg-white/10 text-[#8D9AAF] hover:text-white rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#8D9AAF]">
            <span className="text-white font-bold">Stage {activeStep + 1} of 4:</span>
            <span className="text-[#00C2FF] font-heading font-bold uppercase">{journeyNodes[activeStep].shortTitle}</span>
          </div>
        </div>

        {/* SVG Path Diagram with Animated Flow Lines */}
        <div className="relative py-4">
          
          {/* Animated Connecting SVG Path (Desktop / Tablet) */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 -translate-y-1/2 pointer-events-none z-0">
            <svg className="w-full h-12 overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#176BFF" />
                  <stop offset="50%" stopColor="#00C2FF" />
                  <stop offset="100%" stopColor="#70D44B" />
                </linearGradient>

                {/* Glowing Pulse Marker Filters */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background Static Connection Line */}
              <line
                x1="5%"
                y1="50%"
                x2="95%"
                y2="50%"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="4"
                strokeDasharray="6 6"
              />

              {/* Active Progress Highlight Line */}
              <line
                x1="5%"
                y1="50%"
                x2={`${15 + activeStep * 26}%`}
                y2="50%"
                stroke="url(#journeyGradient)"
                strokeWidth="5"
                filter="url(#glow)"
                className="transition-all duration-700 ease-in-out"
              />
            </svg>
          </div>

          {/* 4 Interactive Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            {journeyNodes.map((node, index) => {
              const Icon = node.icon;
              const isActive = index === activeStep;
              const isPast = index < activeStep;

              return (
                <div
                  key={node.id}
                  onClick={() => {
                    setActiveStep(index);
                    setIsPlaying(false);
                  }}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                    isActive
                      ? "bg-gradient-to-b from-[#176BFF]/30 via-[#00C2FF]/15 to-[#050D1D] border-[#00C2FF] shadow-xl shadow-[#00C2FF]/20 scale-105"
                      : isPast
                      ? "bg-[#050D1D] border-[#70D44B]/40 hover:border-[#70D44B]"
                      : "bg-[#050D1D]/80 border-white/10 hover:border-white/30"
                  }`}
                >
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#00C2FF] text-[#07152D] font-bold shadow-lg shadow-[#00C2FF]/50"
                          : isPast
                          ? "bg-[#70D44B]/20 text-[#70D44B] border border-[#70D44B]/40"
                          : "bg-white/5 text-[#8D9AAF]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                        isActive
                          ? "bg-[#00C2FF]/20 text-[#00C2FF] border-[#00C2FF]/40"
                          : isPast
                          ? "bg-[#70D44B]/20 text-[#70D44B] border-[#70D44B]/40"
                          : "bg-white/5 text-[#8D9AAF] border-white/10"
                      }`}
                    >
                      {node.stat}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3
                      className={`text-sm font-heading font-black uppercase tracking-wide ${
                        isActive ? "text-white" : "text-[#8D9AAF]"
                      }`}
                    >
                      {node.title}
                    </h3>
                    <p className="text-[11px] text-[#8D9AAF] line-clamp-2 leading-relaxed">
                      {node.tagline}
                    </p>
                  </div>

                  {/* Step Completed Indicator */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                    <span className={isActive ? "text-[#00C2FF] font-bold" : "text-[#8D9AAF]"}>
                      {isActive ? "ACTIVE STAGE" : isPast ? "COMPLETED" : "UPCOMING"}
                    </span>
                    {isPast && <CheckCircle2 className="w-3.5 h-3.5 text-[#70D44B]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Inspector Panel */}
        <div className="p-6 rounded-2xl bg-[#050D1D] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-5 space-y-3 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#176BFF]/20 border border-[#176BFF]/40 text-[#00C2FF]">
                {React.createElement(journeyNodes[activeStep].icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#70D44B] uppercase tracking-widest">
                  Detailed Workflow Inspector
                </span>
                <h3 className="text-xl font-heading font-black text-white uppercase">
                  {journeyNodes[activeStep].title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-white/90 leading-relaxed font-medium">
              {journeyNodes[activeStep].description}
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00C2FF] bg-[#00C2FF]/10 px-3 py-1 rounded-lg border border-[#00C2FF]/30">
              <Zap className="w-3.5 h-3.5" /> Benchmark: {journeyNodes[activeStep].stat}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-heading font-bold text-[#00C2FF] uppercase tracking-wider block mb-2">
              System Operations Executed In This Stage:
            </span>
            <div className="space-y-2">
              {journeyNodes[activeStep].details.map((detail, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#70D44B] shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
