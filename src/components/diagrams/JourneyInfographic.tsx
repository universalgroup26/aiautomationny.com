import React, { useState, useEffect } from "react";
import { UserCheck, Bot, CalendarCheck, Database, Play, Pause, RotateCcw, CheckCircle2, Zap, Sparkles, ArrowRight } from "lucide-react";

interface JourneyStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  metric: string;
  description: string;
  operations: string[];
}

export const JourneyInfographic: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const steps: JourneyStep[] = [
    {
      id: "lead",
      number: "01",
      title: "Lead Capture",
      subtitle: "Multi-Channel Inbound Traffic",
      icon: UserCheck,
      color: "#176BFF",
      metric: "< 2s Instant Response",
      description: "Prospects arriving via Google Local SEO, PPC ads, or direct calls are immediately engaged before bouncing.",
      operations: [
        "Captures inbound call numbers & web visitor intent",
        "Tracks PPC campaign keyword & referrer source",
        "Triggers instant automated greeting across Voice & Web Chat"
      ]
    },
    {
      id: "qualification",
      number: "02",
      title: "AI Qualification",
      subtitle: "Autonomous Intake & Verification",
      icon: Bot,
      color: "#00C2FF",
      metric: "100% Verified Data",
      description: "The AI agent conducts natural multi-turn conversations to answer FAQs, evaluate project scope, and verify contact info.",
      operations: [
        "Checks custom business knowledge base for accurate answers",
        "Verifies caller name, email, and mobile SMS capability",
        "Filters out unwanted solicitations and out-of-scope inquiries"
      ]
    },
    {
      id: "booking",
      number: "03",
      title: "Calendar Booking",
      subtitle: "Real-Time Schedule Lock",
      icon: CalendarCheck,
      color: "#70D44B",
      metric: "24/7 Automated Booking",
      description: "Presents live staff calendar availability and locks in appointment dates with instant automated 2-way confirmations.",
      operations: [
        "Syncs directly with Google Calendar, Outlook, or GoHighLevel",
        "Dispatches immediate SMS confirmation & calendar invites",
        "Schedules automated 24h & 1h appointment reminders"
      ]
    },
    {
      id: "crm",
      number: "04",
      title: "CRM & Pipeline Sync",
      subtitle: "Automated Deal Stage Routing",
      icon: Database,
      color: "#00C2FF",
      metric: "Instant Pipeline Alert",
      description: "Full audio transcripts, chat records, and verified prospect details flow seamlessly into your sales CRM dashboard.",
      operations: [
        "Notifies sales team via SMS, email & mobile app alerts",
        "Updates deal stages automatically in pipeline",
        "Triggers post-service 5-star Google review sequences"
      ]
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  return (
    <div className="w-full space-y-8 my-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30">
          <Sparkles className="w-3.5 h-3.5" /> SVG Animated Workflow Infographic
        </div>
        <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight uppercase">
          AUTOMATED CLIENT JOURNEY INFOGRAPHIC
        </h2>
        <p className="text-sm sm:text-base text-[#8D9AAF]">
          Visualize how an inbound prospect flows seamlessly through AI capture, intelligent qualification, calendar booking, and CRM pipeline synchronization.
        </p>
      </div>

      {/* Main Glass Panel */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#176BFF]/30 bg-[#07152D]/95 relative overflow-hidden shadow-2xl space-y-8">
        
        {/* Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 bg-[#176BFF]/20 border border-[#176BFF]/50 hover:bg-[#176BFF]/40 text-[#00C2FF] rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#176BFF]/10"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" /> Pause Journey
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#70D44B]" /> Play Animation
                </>
              )}
            </button>
            <button
              onClick={() => {
                setActiveStep(0);
                setIsPlaying(false);
              }}
              className="px-3.5 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-[#8D9AAF] hover:text-white rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#8D9AAF]">
            <span className="text-white font-bold">Stage {activeStep + 1} of 4:</span>
            <span className="text-[#00C2FF] font-heading font-bold uppercase">{steps[activeStep].title}</span>
          </div>
        </div>

        {/* SVG Path Visualization Container */}
        <div className="relative py-6">
          
          {/* Connecting Animated SVG Lines (Desktop/Tablet) */}
          <div className="hidden md:block absolute top-1/2 left-16 right-16 -translate-y-1/2 pointer-events-none z-0">
            <svg className="w-full h-16 overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="journeySvgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#176BFF" />
                  <stop offset="50%" stopColor="#00C2FF" />
                  <stop offset="100%" stopColor="#70D44B" />
                </linearGradient>

                <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Guide Line */}
              <line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="4"
                strokeDasharray="8 8"
              />

              {/* Active Animated SVG Line */}
              <line
                x1="0%"
                y1="50%"
                x2={`${(activeStep / (steps.length - 1)) * 100}%`}
                y2="50%"
                stroke="url(#journeySvgGradient)"
                strokeWidth="5"
                filter="url(#svgGlow)"
                className="transition-all duration-700 ease-in-out"
              />

              {/* Animated Glowing Light Particle traveling on active path */}
              {isPlaying && (
                <circle
                  cx={`${(activeStep / (steps.length - 1)) * 100}%`}
                  cy="50%"
                  r="7"
                  fill="#00C2FF"
                  filter="url(#svgGlow)"
                  className="animate-ping"
                />
              )}
            </svg>
          </div>

          {/* 4 Interactive Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                    isActive
                      ? "bg-gradient-to-b from-[#176BFF]/35 via-[#00C2FF]/20 to-[#050D1D] border-[#00C2FF] shadow-2xl shadow-[#00C2FF]/30 scale-105 ring-1 ring-[#00C2FF]"
                      : isPast
                      ? "bg-[#050D1D] border-[#70D44B]/40 hover:border-[#70D44B]"
                      : "bg-[#050D1D]/80 border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
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
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                        isActive
                          ? "bg-[#00C2FF]/20 text-[#00C2FF] border-[#00C2FF]/40"
                          : isPast
                          ? "bg-[#70D44B]/20 text-[#70D44B] border-[#70D44B]/40"
                          : "bg-white/5 text-[#8D9AAF] border-white/10"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className={`text-base font-heading font-black uppercase tracking-wide ${isActive ? "text-white" : "text-[#8D9AAF]"}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#8D9AAF] line-clamp-1">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className={isActive ? "text-[#00C2FF] font-bold" : "text-[#8D9AAF]"}>
                      {isActive ? "ACTIVE STAGE" : isPast ? "COMPLETED" : "UPCOMING"}
                    </span>
                    {isPast ? (
                      <CheckCircle2 className="w-4 h-4 text-[#70D44B]" />
                    ) : (
                      <ArrowRight className={`w-3.5 h-3.5 ${isActive ? "text-[#00C2FF]" : "text-white/20"}`} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="p-6 rounded-2xl bg-[#050D1D] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-3 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#176BFF]/20 border border-[#176BFF]/40 text-[#00C2FF]">
                {React.createElement(steps[activeStep].icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#70D44B] uppercase tracking-widest">
                  Stage {steps[activeStep].number} Deep Dive
                </span>
                <h3 className="text-xl font-heading font-black text-white uppercase">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-white/90 leading-relaxed font-medium">
              {steps[activeStep].description}
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00C2FF] bg-[#00C2FF]/10 px-3 py-1 rounded-lg border border-[#00C2FF]/30">
              <Zap className="w-3.5 h-3.5 text-[#00C2FF]" /> Performance Benchmark: {steps[activeStep].metric}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-heading font-bold text-[#00C2FF] uppercase tracking-wider block mb-2">
              Automated Operations Executed:
            </span>
            <div className="space-y-2">
              {steps[activeStep].operations.map((op, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#70D44B] shrink-0" />
                  <span>{op}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
