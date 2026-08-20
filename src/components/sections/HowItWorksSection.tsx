import React from "react";
import { Search, Compass, Cpu, Rocket, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { AnimatedClientJourney } from "../diagrams/AnimatedClientJourney";
import { playClickSound } from "../../lib/audioFeedback";

interface HowItWorksProps {
  openAuditModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ openAuditModal }) => {
  const steps = [
    {
      num: "01",
      title: "AI WORKFLOW AUDIT",
      tagline: "Opportunity Mapping & ROI Blueprint",
      icon: Search,
      desc: "We analyze your phone call flows, lead response latencies, appointment scheduling, and CRM bottlenecks to identify immediate high-ROI automation areas.",
      deliverable: "Custom System Blueprint & ROI Model"
    },
    {
      num: "02",
      title: "PROMPT & VOICE DESIGN",
      tagline: "Custom Brand Persona & Scripting",
      icon: Compass,
      desc: "We program your AI Voice Receptionist, script interactive web chat conversation trees, and map qualification criteria tailored to your industry.",
      deliverable: "Trained AI Voice Persona & Routing Flow"
    },
    {
      num: "03",
      title: "API BRIDGES & CRM BUILD",
      tagline: "Bi-Directional Data Integration",
      icon: Cpu,
      desc: "Our engineers build real-time integrations between your phone lines, website, Google Calendar/Outlook, and GoHighLevel CRM platform.",
      deliverable: "Live Connected 24/7 Ecosystem"
    },
    {
      num: "04",
      title: "LAUNCH & SLA SUPPORT",
      tagline: "14-Day Deployment & Live Tuning",
      icon: Rocket,
      desc: "We deploy the system live, conduct end-to-end stress test calls, train your internal team, and monitor conversion metrics continuously.",
      deliverable: "Production SLA & Monthly Tuning"
    }
  ];

  return (
    <section className="py-24 bg-[#07152D] relative border-t border-[#176BFF]/20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] ambient-glow-blue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Animated Client Journey Infographic (Lead -> AI Qualification -> Booking -> CRM) */}
        <AnimatedClientJourney />

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto pt-8 border-t border-white/10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#70D44B]" />
            <span>Turnkey 10-14 Day Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            HOW WE BUILD YOUR AI ENGINE
          </h2>
          <p className="text-sm sm:text-base text-[#8D9AAF] leading-relaxed">
            We handle 100% of the engineering, prompt tuning, API integration, and CRM sync so your business experiences zero downtime.
          </p>
        </div>

        {/* 4 Steps Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bento-card p-6 sm:p-7 flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  
                  {/* Step Number Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-heading font-extrabold text-[#00C2FF] group-hover:text-[#70D44B] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#176BFF] to-[#00C2FF] p-0.5 shadow-md shadow-[#176BFF]/20 group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-[#07152D] rounded-[14px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#00C2FF] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#00C2FF] transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#70D44B] mt-1">
                      {step.tagline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#8D9AAF] leading-relaxed">
                    {step.desc}
                  </p>

                </div>

                {/* Deliverable Box */}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-[#F7F9FC] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#70D44B] shrink-0" />
                    <span className="truncate">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audit CTA Callout */}
        <div className="text-center pt-4">
          <button
            onClick={() => {
              playClickSound();
              openAuditModal();
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(0,194,255,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
          >
            <span>Claim Your Custom AI System Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
