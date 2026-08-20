import React, { useState } from "react";
import { SERVICES_DATA } from "../data/servicesData";
import { SEOHead } from "../components/ui/SEOHead";
import { VoiceCallDemo } from "../components/demos/VoiceCallDemo";
import { DemoChatWidget } from "../components/demos/DemoChatWidget";
import { ServiceLottieAnimation, AnimationType } from "../components/animations/ServiceLottieAnimations";
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, Zap, HelpCircle, ShieldCheck, Sparkles } from "lucide-react";

interface ServiceDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
  openAuditModal: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, navigate, openAuditModal }) => {
  const service = SERVICES_DATA.find(s => s.slug === slug) || SERVICES_DATA[0];
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const relatedServices = SERVICES_DATA.filter(s => service.relatedServicesSlugs?.includes(s.slug));

  const primaryAnimType: AnimationType = service.slug.includes("voice") || service.category === "communication" 
    ? "voice" 
    : service.slug.includes("crm") || service.category === "operations" 
    ? "crm" 
    : "chat";

  return (
    <main className="pt-28 pb-20 min-h-screen bg-[#07152D]">
      <SEOHead 
        title={`${service.name} | AI AUTOMATION NY`}
        description={service.shortDescription}
        canonicalUrl={`https://aiautomationny.com/services/${service.slug}`}
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" },
          { name: "Services", url: "https://aiautomationny.com/services" },
          { name: service.name, url: `https://aiautomationny.com/services/${service.slug}` }
        ]}
        serviceInfo={{
          name: service.name,
          description: service.shortDescription,
          category: service.category,
          price: "2500.00",
          url: `https://aiautomationny.com/services/${service.slug}`
        }}
        faqs={service.faqs?.map(f => ({ question: f.question, answer: f.answer }))}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Link */}
        <button
          onClick={() => {
            navigate("/services");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xs font-heading font-bold uppercase text-[#00C2FF] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
        </button>

        {/* 1. HERO WITH LOTTIE VECTOR ANIMATION */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#176BFF]/30 bg-[#0D1F3D]/90 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#70D44B] bg-[#70D44B]/10 px-3.5 py-1.5 rounded-full border border-[#70D44B]/20">
                {service.category} Solution
              </span>

              <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
                {service.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#8D9AAF] leading-relaxed">
                {service.subheadline}
              </p>

              <div className="p-4 bg-[#07152D] rounded-2xl border border-[#00C2FF]/30 text-sm text-[#F7F9FC]">
                <span className="text-[#00C2FF] font-bold">Guaranteed Outcome: </span>
                {service.outcome}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={openAuditModal}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:opacity-95 transition-all shadow-lg shadow-[#176BFF]/30 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free {service.name} Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Hero Lottie Vector Animation */}
            <div className="lg:col-span-5 flex justify-center">
              <ServiceLottieAnimation 
                type={primaryAnimType} 
                className="w-full max-w-sm" 
                badgeLabel={`${service.name} Lottie Workflow`}
              />
            </div>

          </div>
        </div>

        {/* 2. PAIN POINTS & PROBLEMS */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              COMMON BOTTLENECK PAIN POINTS
            </h2>
            <p className="text-xs sm:text-sm text-[#8D9AAF]">
              Why traditional businesses leak high-value leads before implementing {service.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.painPoints.map((pp, idx) => (
              <div key={idx} className="bg-[#050D1D] p-6 rounded-2xl border border-red-500/20 space-y-3">
                <div className="text-red-400 font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Problem 0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-[#8D9AAF] leading-relaxed">{pp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. WORKFLOW STEPS */}
        <div className="glass-panel p-8 rounded-3xl border border-[#176BFF]/30 bg-[#07152D]/90 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              HOW {service.name.toUpperCase()} WORKS
            </h2>
            <p className="text-xs sm:text-sm text-[#8D9AAF]">
              Step-by-step automated workflow execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.workflowSteps.map((ws, idx) => (
              <div key={idx} className="bg-[#0D1F3D] p-5 rounded-2xl border border-white/10 space-y-2 relative">
                <span className="text-xs font-heading font-bold text-[#00C2FF]">Step 0{idx + 1}</span>
                <h3 className="font-heading font-bold text-sm text-white">{ws.title}</h3>
                <p className="text-xs text-[#8D9AAF] leading-relaxed">{ws.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. CLIENT JOURNEY MIND MAP */}
        <div className="bg-[#0D1F3D] p-8 rounded-3xl border border-[#00C2FF]/30 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#70D44B]">Visual Mind Map</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              CLIENT JOURNEY DECISION BLUEPRINT
            </h2>
          </div>

          <div className="bg-[#07152D] p-6 rounded-2xl border border-white/10 space-y-6">
            <div className="p-3 bg-[#176BFF]/20 rounded-xl text-center font-heading font-bold text-xs text-[#00C2FF] uppercase">
              {service.journeyMindMap.start}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.journeyMindMap.branches.map((b, idx) => (
                <div key={idx} className="bg-[#050D1D] p-5 rounded-xl border border-white/10 space-y-3">
                  <div className="text-xs font-heading font-bold text-[#70D44B] uppercase pb-2 border-b border-white/10">
                    IF {b.condition}
                  </div>
                  <ul className="space-y-2 text-xs text-[#8D9AAF]">
                    {b.steps.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00C2FF] shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LOTTIE VECTOR CONCEPT ANIMATIONS SHOWCASE */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/30">
              <Sparkles className="w-3.5 h-3.5" /> High-Performance Lottie Engine
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              CORE AUTOMATED CONCEPT ANIMATIONS
            </h2>
            <p className="text-xs sm:text-sm text-[#8D9AAF]">
              Lightweight vector Lottie workflows illustrating real-time intake, voice response, and CRM sync loops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceLottieAnimation 
              type="chat" 
              badgeLabel="Automated Chat Flow"
            />
            <ServiceLottieAnimation 
              type="crm" 
              badgeLabel="CRM Data Syncing"
            />
            <ServiceLottieAnimation 
              type="voice" 
              badgeLabel="Voice Receptionist Calling"
            />
          </div>
        </div>

        {/* 5. INTERACTIVE LIVE DEMO LAYER */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              LIVE SYSTEM DEMONSTRATION
            </h2>
            <p className="text-xs text-[#8D9AAF]">
              Interact with the simulation to see how {service.name} processes incoming buyer intent.
            </p>
          </div>

          {service.slug === "ai-voice-receptionist" ? (
            <VoiceCallDemo />
          ) : (
            <div className="max-w-3xl mx-auto">
              <DemoChatWidget />
            </div>
          )}
        </div>

        {/* 6. KEY FEATURES */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              KEY SYSTEM CAPABILITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.keyFeatures.map((kf, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-2">
                <h3 className="font-heading font-bold text-base text-white">{kf.title}</h3>
                <p className="text-xs sm:text-sm text-[#8D9AAF] leading-relaxed">{kf.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. INDUSTRY USE CASES */}
        <div className="glass-panel p-8 rounded-3xl border border-[#176BFF]/30 bg-[#07152D]/90 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            RELEVANT INDUSTRY USE CASES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.industryUseCases.map((uc, idx) => (
              <div key={idx} className="bg-[#0D1F3D] p-5 rounded-2xl border border-white/10 space-y-2">
                <div className="text-xs font-heading font-bold uppercase text-[#00C2FF]">{uc.industry}</div>
                <p className="text-xs text-[#8D9AAF] leading-relaxed">{uc.useCase}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. FAQS */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-white text-center mb-6">
            SERVICE FAQS
          </h2>
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-xl border border-white/10 space-y-2">
              <div className="font-heading font-bold text-sm text-white">{faq.question}</div>
              <div className="text-xs text-[#8D9AAF] leading-relaxed">{faq.answer}</div>
            </div>
          ))}
        </div>

        {/* 9. RELATED SERVICES */}
        {relatedServices.length > 0 && (
          <div className="pt-8 border-t border-white/10 space-y-6">
            <h2 className="text-xl font-heading font-bold text-white">RELATED AI SERVICES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedServices.map(rel => (
                <button
                  key={rel.slug}
                  onClick={() => {
                    navigate(`/services/${rel.slug}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="p-5 rounded-2xl bg-[#0D1F3D] border border-white/10 hover:border-[#00C2FF] text-left transition-all cursor-pointer group"
                >
                  <div className="font-heading font-bold text-sm text-white group-hover:text-[#00C2FF]">{rel.name}</div>
                  <p className="text-xs text-[#8D9AAF] mt-1 line-clamp-2">{rel.shortDescription}</p>
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
};
