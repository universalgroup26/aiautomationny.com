import React from "react";
import { INDUSTRIES_CATEGORIES } from "../data/industriesData";
import { SEOHead } from "../components/ui/SEOHead";
import { ArrowRight, ArrowLeft, CheckCircle2, PhoneCall, MessageSquare, Database, Zap, Star, Calendar } from "lucide-react";

interface IndustryDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
  openAuditModal: () => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ slug, navigate, openAuditModal }) => {
  // Find industry across all categories
  const allIndustries = INDUSTRIES_CATEGORIES.flatMap(c => c.industries);
  const industry = allIndustries.find(i => i.slug === slug) || allIndustries[0];

  return (
    <main className="pt-28 pb-20 min-h-screen bg-[#07152D]">
      <SEOHead 
        title={`${industry.name} AI Automation & Voice Receptionist | AI AUTOMATION NY`}
        description={industry.subheadline}
        canonicalUrl={`https://aiautomationny.com/industries/${industry.slug}`}
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" },
          { name: "Industries", url: "https://aiautomationny.com/industries" },
          { name: industry.name, url: `https://aiautomationny.com/industries/${industry.slug}` }
        ]}
        serviceInfo={{
          name: `${industry.name} AI Growth & Automation System`,
          description: industry.subheadline,
          category: industry.categoryName,
          price: "2500.00",
          url: `https://aiautomationny.com/industries/${industry.slug}`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Link */}
        <button
          onClick={() => {
            navigate("/industries");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xs font-heading font-bold uppercase text-[#00C2FF] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Industries
        </button>

        {/* 1. HERO */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#176BFF]/30 bg-[#0D1F3D]/90 shadow-2xl space-y-6">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#70D44B] bg-[#70D44B]/10 px-3.5 py-1.5 rounded-full border border-[#70D44B]/20">
            {industry.categoryName} Sector
          </span>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            {industry.headline}
          </h1>

          <p className="text-base sm:text-lg text-[#8D9AAF] max-w-3xl leading-relaxed">
            {industry.subheadline}
          </p>

          <div className="pt-2">
            <button
              onClick={openAuditModal}
              className="px-7 py-3.5 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:opacity-95 transition-all shadow-lg shadow-[#176BFF]/30 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Book Free {industry.name} AI Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. OPERATIONAL PAIN POINTS */}
        <div className="space-y-6">
          <h2 className="text-2xl font-heading font-bold text-white text-center">
            MAJOR OPERATIONAL PAIN POINTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.painPoints.map((pp, idx) => (
              <div key={idx} className="bg-[#050D1D] p-6 rounded-2xl border border-red-500/20 text-xs sm:text-sm text-[#8D9AAF] leading-relaxed">
                <span className="text-red-400 font-bold block mb-1">Pain Point 0{idx + 1}:</span>
                {pp}
              </div>
            ))}
          </div>
        </div>

        {/* 3. CUSTOMER JOURNEY BLUEPRINT */}
        <div className="glass-panel p-8 rounded-3xl border border-[#176BFF]/30 bg-[#07152D]/90 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            CUSTOMER JOURNEY COMPARISON BLUEPRINT
          </h2>

          <div className="space-y-4">
            {industry.customerJourney.map((step, idx) => (
              <div key={idx} className="bg-[#0D1F3D] p-5 rounded-2xl border border-white/10 space-y-2 text-xs">
                <div className="font-heading font-bold text-white text-sm">{step.step}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-red-300 bg-red-500/10 p-3 rounded border border-red-500/20">
                    <span className="font-bold text-[10px] uppercase block mb-1">Traditional Problem:</span>
                    {step.traditionalProblem}
                  </div>
                  <div className="text-[#70D44B] bg-[#70D44B]/10 p-3 rounded border border-[#70D44B]/20">
                    <span className="font-bold text-[10px] uppercase block mb-1">AI Solution:</span>
                    {step.aiSolution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. SIX CORE USE CASE MODULES */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white text-center">
            6 AI USE CASES FOR {industry.name.toUpperCase()}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#0D1F3D] p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-heading font-bold uppercase text-[#00C2FF] flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4" /> AI Voice Answering
              </div>
              <p className="text-xs text-[#8D9AAF] leading-relaxed">{industry.voiceUseCase}</p>
            </div>

            <div className="bg-[#0D1F3D] p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-heading font-bold uppercase text-[#00C2FF] flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4" /> AI Chat & Web Booking
              </div>
              <p className="text-xs text-[#8D9AAF] leading-relaxed">{industry.chatUseCase}</p>
            </div>

            <div className="bg-[#0D1F3D] p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-heading font-bold uppercase text-[#00C2FF] flex items-center gap-1.5">
                <Database className="w-4 h-4" /> CRM & Sales Pipeline
              </div>
              <p className="text-xs text-[#8D9AAF] leading-relaxed">{industry.crmUseCase}</p>
            </div>

            <div className="bg-[#0D1F3D] p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-heading font-bold uppercase text-[#00C2FF] flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> Speed-to-Lead Follow-Up
              </div>
              <p className="text-xs text-[#8D9AAF] leading-relaxed">{industry.followUpUseCase}</p>
            </div>

            <div className="bg-[#0D1F3D] p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-heading font-bold uppercase text-[#00C2FF] flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> Appointment Reminders
              </div>
              <p className="text-xs text-[#8D9AAF] leading-relaxed">{industry.appointmentUseCase}</p>
            </div>

            <div className="bg-[#0D1F3D] p-6 rounded-2xl border border-white/10 space-y-2">
              <div className="text-xs font-heading font-bold uppercase text-[#00C2FF] flex items-center gap-1.5">
                <Star className="w-4 h-4" /> Google Review Generator
              </div>
              <p className="text-xs text-[#8D9AAF] leading-relaxed">{industry.reviewUseCase}</p>
            </div>

          </div>
        </div>

        {/* 5. RECOMMENDED STACK */}
        <div className="bg-[#050D1D] p-8 rounded-3xl border border-[#176BFF]/30 space-y-4 text-center">
          <h2 className="text-xl font-heading font-bold text-white">
            RECOMMENDED AUTOMATION STACK FOR {industry.name.toUpperCase()}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {industry.recommendedAutomationStack.map((tool, idx) => (
              <span key={idx} className="px-4 py-2 bg-[#176BFF]/20 border border-[#176BFF]/40 rounded-xl text-xs font-semibold text-[#00C2FF]">
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};
