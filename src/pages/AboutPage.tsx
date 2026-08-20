import React from "react";
import { SEOHead } from "../components/ui/SEOHead";
import { TrustIndicators } from "../components/ui/TrustIndicators";
import { Building2, MapPin, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface AboutPageProps {
  openAuditModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openAuditModal }) => {
  return (
    <main className="pt-28 pb-20 min-h-screen bg-[#07152D]">
      <SEOHead 
        title="About AI AUTOMATION NY | Jackson Heights, NY AI Agency"
        description="AI AUTOMATION NY is powered by Universal Tech INC (SBA & NYS SDVOSB Certified). We build production-grade AI Voice Receptionists, AI Chat funnels, and CRM sales automations for local businesses across New York."
        canonicalUrl="https://aiautomationny.com/about"
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" },
          { name: "About Us", url: "https://aiautomationny.com/about" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30">
            <MapPin className="w-3.5 h-3.5 text-[#00C2FF]" /> Based in Jackson Heights, New York
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            ABOUT AI AUTOMATION NY
          </h1>
          <p className="text-base text-[#8D9AAF] leading-relaxed">
            We are a New York-based AI automation agency dedicated to helping local businesses capture every lead, respond in seconds, and scale revenue 24/7.
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#176BFF]/30 bg-[#0D1F3D]/80 space-y-6">
          <h2 className="text-2xl font-heading font-bold text-white">OUR MISSION</h2>
          <p className="text-sm text-[#8D9AAF] leading-relaxed">
            Local service businesses lose millions of dollars annually not because they lack quality services, but because they miss phone calls after 5 PM, delay form responses by hours, or struggle with phone tag. 
          </p>
          <p className="text-sm text-[#8D9AAF] leading-relaxed">
            At AI AUTOMATION NY, we bridge this gap by custom-engineering AI Voice Receptionists, 2-way SMS speed-to-lead engines, and CRM calendar workflows that operate around the clock.
          </p>
        </div>

        {/* TRUST INDICATORS CREDIBILITY SECTION */}
        <div className="pt-2">
          <TrustIndicators variant="cards" />
        </div>

        {/* Company Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#050D1D] p-6 rounded-2xl border border-white/10 space-y-2">
            <h3 className="font-heading font-bold text-base text-white">Custom Engineering</h3>
            <p className="text-xs text-[#8D9AAF] leading-relaxed">No generic templates. Every voice persona and booking prompt is tailored specifically to your company's service menu and operational rules.</p>
          </div>

          <div className="bg-[#050D1D] p-6 rounded-2xl border border-white/10 space-y-2">
            <h3 className="font-heading font-bold text-base text-white">Turnkey Implementation</h3>
            <p className="text-xs text-[#8D9AAF] leading-relaxed">We manage 100% of the API setups, CRM integrations, and staff training so you don't need technical skills to run the system.</p>
          </div>

          <div className="bg-[#050D1D] p-6 rounded-2xl border border-white/10 space-y-2">
            <h3 className="font-heading font-bold text-base text-white">24/7 Reliability</h3>
            <p className="text-xs text-[#8D9AAF] leading-relaxed">Our AI phone systems operate with 99.9% uptime, ensuring your business never misses an after-hours emergency or weekend lead.</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={openAuditModal}
            className="px-8 py-4 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:opacity-95 transition-all shadow-xl shadow-[#176BFF]/30 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Book A Free AI Audit With Our NY Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </main>
  );
};
