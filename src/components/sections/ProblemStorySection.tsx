import React from "react";
import { PhoneOff, Zap, AlertCircle, CheckCircle2, Clock, ArrowRight } from "lucide-react";

export const ProblemStorySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050D1D] relative border-y border-[#176BFF]/20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 ambient-glow-cyan pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 ambient-glow-green pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-heading font-bold uppercase tracking-widest text-red-400">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>High Cost of Delayed Response</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            YOUR NEXT CUSTOMER WON'T ALWAYS WAIT.
          </h2>
          <p className="text-sm sm:text-base text-[#8D9AAF] leading-relaxed">
            In New York's competitive marketplace, 78% of customers buy from the business that responds first. See what happens to an after-hours inquiry:
          </p>
        </div>

        {/* 2-Column Comparison Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column 1: Traditional Slow Response */}
          <div className="bento-card p-6 sm:p-8 border-red-500/30 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
              <span className="font-heading font-bold text-sm text-red-400 uppercase tracking-wider flex items-center gap-2">
                <PhoneOff className="w-4 h-4" /> Traditional Setup
              </span>
              <span className="text-xs text-red-400 font-semibold bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                LOST OPPORTUNITY
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="px-2.5 py-1 rounded-lg bg-white/5 text-xs font-heading font-bold text-[#8D9AAF] shrink-0">
                  10:43 PM
                </div>
                <div className="text-xs sm:text-sm text-[#8D9AAF]">
                  Homeowner or corporate client experiences an urgent need. Calls your business line.
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="px-2.5 py-1 rounded-lg bg-red-500/20 text-red-400 text-xs font-heading font-bold shrink-0">
                  10:43 PM
                </div>
                <div className="text-xs sm:text-sm text-red-300 font-medium">
                  Rings 6 times. Sent to an outdated voicemail. No one is available.
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="px-2.5 py-1 rounded-lg bg-white/5 text-xs font-heading font-bold text-[#8D9AAF] shrink-0">
                  10:51 PM
                </div>
                <div className="text-xs sm:text-sm text-[#8D9AAF]">
                  Prospect hangs up without leaving a message and immediately contacts your competitor.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 font-semibold text-center">
                Outcome: $2,500 – $10,000+ job permanently lost to the fastest responder.
              </div>
            </div>
          </div>

          {/* Column 2: With AI Automation NY */}
          <div className="bento-card p-6 sm:p-8 border-[#70D44B]/40 space-y-6 relative overflow-hidden shadow-2xl shadow-[#70D44B]/10">
            <div className="flex items-center justify-between pb-4 border-b border-[#70D44B]/20">
              <span className="font-heading font-bold text-sm text-[#70D44B] uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4" /> With AI Automation NY
              </span>
              <span className="text-xs text-[#70D44B] font-semibold bg-[#70D44B]/10 px-3 py-1 rounded-full border border-[#70D44B]/30 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> REVENUE CAPTURED
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="px-2.5 py-1 rounded-lg bg-white/5 text-xs font-heading font-bold text-[#8D9AAF] shrink-0">
                  10:43 PM
                </div>
                <div className="text-xs sm:text-sm text-[#F7F9FC]">
                  Inbound emergency phone call or website inquiry arrives after hours.
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/20">
                <div className="px-2.5 py-1 rounded-lg bg-[#00C2FF]/20 text-[#00C2FF] text-xs font-heading font-bold shrink-0">
                  10:43 PM
                </div>
                <div className="text-xs sm:text-sm text-white font-medium">
                  AI Voice Receptionist answers in 1.8 seconds with custom warm greeting & context.
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#176BFF]/10 border border-[#176BFF]/20">
                <div className="px-2.5 py-1 rounded-lg bg-[#176BFF]/20 text-[#00C2FF] text-xs font-heading font-bold shrink-0">
                  10:44 PM
                </div>
                <div className="text-xs sm:text-sm text-[#F7F9FC]">
                  AI qualifies project scope, captures address/details, and checks calendar dispatch availability.
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#70D44B]/10 border border-[#70D44B]/20">
                <div className="px-2.5 py-1 rounded-lg bg-[#70D44B]/20 text-[#70D44B] text-xs font-heading font-bold shrink-0">
                  10:45 PM
                </div>
                <div className="text-xs sm:text-sm text-[#70D44B] font-semibold">
                  10:00 AM dispatch slot booked in CRM; SMS confirmation & reminder auto-sent.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#70D44B]/10 border border-[#70D44B]/30 text-xs text-[#70D44B] font-semibold text-center">
                Outcome: 100% lead captured, booking confirmed, and staff alerted with full audio transcript.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
