import React, { useState } from "react";
import { PRICING_TIERS } from "../../data/pricingData";
import { Check, ArrowRight, Sparkles, ShieldCheck, HelpCircle, Zap, Percent } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { trackPricingSelect } from "../../lib/dataLayer";
import { playClickSound, playFilterChime } from "../../lib/audioFeedback";

interface PricingSectionProps {
  openAuditModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ openAuditModal }) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [showComparisonTable, setShowComparisonTable] = useState(false);

  const toggleBilling = (cycle: "monthly" | "annual") => {
    playFilterChime();
    setBillingCycle(cycle);
  };

  return (
    <section className="py-20 bg-[#050D1D] relative border-t border-[#176BFF]/20 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#176BFF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment • Complete Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            SIMPLE, PREDICTABLE PRICING
          </h2>
          <p className="text-sm sm:text-base text-[#8D9AAF] mt-3">
            Every tier includes complete end-to-end setup, custom voice tuning, CRM integration, and ongoing 24/7 technical monitoring.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-[#0D1F3D] rounded-2xl border border-white/10 shadow-lg">
            <button
              onClick={() => toggleBilling("monthly")}
              className={`px-5 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#176BFF] text-white shadow-md"
                  : "text-[#8D9AAF] hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => toggleBilling("annual")}
              className={`px-5 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-[#70D44B] to-[#00C2FF] text-[#07152D] font-extrabold shadow-md"
                  : "text-[#8D9AAF] hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-[#70D44B]/20 text-[#70D44B] text-[10px] px-1.5 py-0.5 rounded-full border border-[#70D44B]/30">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => {
            // Calculate annual discounted fee (20% off)
            const rawMonthly = parseInt(tier.monthlyFee.replace(/[^0-9]/g, "")) || 497;
            const discountedMonthly = Math.round(rawMonthly * 0.8);
            const displayMonthlyFee = billingCycle === "annual" ? `$${discountedMonthly}` : tier.monthlyFee;

            return (
              <motion.div
                layout
                key={tier.id}
                className={`bento-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 ${
                  tier.popular 
                    ? "border-[#00C2FF] shadow-[0_0_35px_rgba(0,194,255,0.25)] lg:-translate-y-2 bg-[#0D1F3D]/95" 
                    : "bg-[#07152D]/80 hover:border-[#00C2FF]/40"
                }`}
              >
                
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-[#07152D] font-heading font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                    ⭐ MOST POPULAR SYSTEM
                  </div>
                )}

                <div className="space-y-4">
                  
                  {/* Header */}
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-[#70D44B] font-semibold mt-1">{tier.tagline}</p>
                  </div>

                  {/* Pricing Number Display */}
                  <div className="p-4 bg-[#050D1D] rounded-2xl border border-white/10 space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                        {displayMonthlyFee}
                      </span>
                      <span className="text-xs text-[#8D9AAF] font-medium">/ month</span>
                    </div>
                    {billingCycle === "annual" && (
                      <div className="text-[11px] text-[#70D44B] font-semibold">
                        Billed annually (Save ${(rawMonthly - discountedMonthly) * 12}/yr)
                      </div>
                    )}
                    <div className="text-xs text-[#00C2FF] font-medium">
                      + {tier.setupFee} one-time setup
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#8D9AAF] leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-white">
                      What's Included:
                    </div>
                    <ul className="space-y-2 text-xs">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-[#F7F9FC]">
                          <Check className="w-3.5 h-3.5 text-[#00C2FF] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Action Button */}
                <div className="pt-6 mt-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      playClickSound();
                      trackPricingSelect(tier.name, billingCycle, displayMonthlyFee);
                      openAuditModal();
                    }}
                    className={`w-full py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-95 shadow-md ${
                      tier.popular
                        ? "bg-gradient-to-r from-[#70D44B] via-[#00C2FF] to-[#176BFF] text-[#07152D] font-extrabold shadow-lg shadow-[#70D44B]/25 hover:shadow-[0_0_25px_rgba(112,212,75,0.4)]"
                        : "glass-pill text-white hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Toggleable Full Comparison Table */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              playClickSound();
              setShowComparisonTable(!showComparisonTable);
            }}
            className="px-6 py-3 bg-[#0D1F3D] hover:bg-white/10 border border-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>{showComparisonTable ? "Hide Detailed Comparison Matrix" : "Compare All Plans (Detailed Matrix)"}</span>
          </button>

          <AnimatePresence>
            {showComparisonTable && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="glass-panel rounded-2xl p-6 mt-6 border border-[#176BFF]/30 bg-[#07152D]/95 text-left overflow-x-auto"
              >
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-[#00C2FF] font-heading uppercase">
                      <th className="p-3">Capabilities & Features</th>
                      <th className="p-3">AI STARTER</th>
                      <th className="p-3">AI GROWTH ⭐</th>
                      <th className="p-3">AI PRO</th>
                      <th className="p-3">AI ELITE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-[#8D9AAF]">
                    <tr>
                      <td className="p-3 font-semibold text-white">4-5 Page AI Website & Funnels</td>
                      <td className="p-3 text-white">Standard AI Website</td>
                      <td className="p-3 text-[#70D44B]">Advanced Industry Website</td>
                      <td className="p-3 text-[#70D44B]">Full Conversion Funnel Suite</td>
                      <td className="p-3 text-[#00C2FF]">Multi-Site / Custom Web Arch</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Appointment-Ready AI Chatbot</td>
                      <td className="p-3 text-white">Basic FAQ & Booking</td>
                      <td className="p-3 text-[#70D44B]">Smart Knowledge + Handoff</td>
                      <td className="p-3 text-[#70D44B]">Omnichannel (SMS, FB, IG)</td>
                      <td className="p-3 text-[#00C2FF]">Multi-Agent Omnichannel</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">24/7 AI Voice Receptionist</td>
                      <td className="p-3 text-[#8D9AAF]">Add-on Option</td>
                      <td className="p-3 text-[#8D9AAF]">Add-on Option</td>
                      <td className="p-3 text-[#70D44B]">Full 24/7 Call Answering</td>
                      <td className="p-3 text-[#00C2FF]">Multi-Agent Neural Voice</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">CRM Architecture & Pipelines</td>
                      <td className="p-3 text-white">Single Sales Pipeline</td>
                      <td className="p-3 text-[#70D44B]">Multiple Sales Pipelines</td>
                      <td className="p-3 text-[#70D44B]">Advanced Routing & Scoring</td>
                      <td className="p-3 text-[#00C2FF]">Multi-Location / Multi-Dept</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Automation Workflows</td>
                      <td className="p-3 text-white">Up to 7 Workflows</td>
                      <td className="p-3 text-[#70D44B]">Up to 15 Workflows</td>
                      <td className="p-3 text-[#70D44B]">Up to 30 Workflows</td>
                      <td className="p-3 text-[#00C2FF]">Unlimited Architecture</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Database Reactivation & Reviews</td>
                      <td className="p-3 text-[#8D9AAF]">Basic Nurture</td>
                      <td className="p-3 text-[#70D44B]">Included + Review Automation</td>
                      <td className="p-3 text-[#70D44B]">Advanced + Referral System</td>
                      <td className="p-3 text-[#00C2FF]">Custom Reactivation System</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Usage Disclaimer */}
        <p className="text-[11px] text-[#8D9AAF] text-center max-w-3xl mx-auto mt-8 leading-relaxed">
          * Note: Third-party platform, phone, SMS, email, AI, WhatsApp and premium integration usage charges are billed separately or subject to the applicable service allowance.
        </p>

      </div>
    </section>
  );
};
