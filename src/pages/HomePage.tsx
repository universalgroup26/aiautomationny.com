import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { TrustedByBar } from "../components/sections/TrustedByBar";
import { ProblemStorySection } from "../components/sections/ProblemStorySection";
import { AIGrowthFlow } from "../components/diagrams/AIGrowthFlow";
import { CustomerJourneyFlow } from "../components/diagrams/CustomerJourneyFlow";
import { ServiceMindMap } from "../components/diagrams/ServiceMindMap";
import { ServiceCardGrid } from "../components/sections/ServiceCardGrid";
import { IndustrySelectorSection } from "../components/sections/IndustrySelectorSection";
import { NYCInteractiveMap } from "../components/sections/NYCInteractiveMap";
import { VoiceCallDemo } from "../components/demos/VoiceCallDemo";
import { DemoChatWidget } from "../components/demos/DemoChatWidget";
import { CRMPipelineDemo } from "../components/demos/CRMPipelineDemo";
import { BeforeAfterSlider } from "../components/demos/BeforeAfterSlider";
import { ROICalculatorSection } from "../components/sections/ROICalculatorSection";
import { ClientTestimonials } from "../components/sections/ClientTestimonials";
import { ServiceComparison } from "../components/sections/ServiceComparison";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { PricingSection } from "../components/sections/PricingSection";
import { FAQAccordionSection } from "../components/sections/FAQAccordionSection";
import { SEOHead } from "../components/ui/SEOHead";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { TrustIndicators } from "../components/ui/TrustIndicators";
import { MAIN_FAQS } from "../data/faqsData";
import { ArrowRight, Sparkles } from "lucide-react";

interface HomePageProps {
  navigate: (path: string) => void;
  openAuditModal: () => void;
  openProposalModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, openAuditModal, openProposalModal }) => {
  const scrollToSystem = () => {
    const el = document.getElementById("ai-growth-flow-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      <SEOHead 
        title="AI AUTOMATION NY | AI-Powered Business Growth Systems NYC"
        description="Stop losing leads. Start automating growth. 4-5 page AI websites, 24/7 AI Voice Receptionists, Chatbots, and CRM Sales Pipelines for NYC businesses. SDVOSB Certified."
        canonicalUrl="https://aiautomationny.com"
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" }
        ]}
        faqs={MAIN_FAQS.map(f => ({ question: f.question, answer: f.answer }))}
      />

      {/* SECTION 01 — HERO */}
      <HeroSection openAuditModal={openAuditModal} scrollToSystem={scrollToSystem} openProposalModal={openProposalModal} />

      {/* TRUSTED BY / INTEGRATION PARTNERS MARQUEE */}
      <TrustedByBar />

      {/* TRUST INDICATORS CREDIBILITY BADGES */}
      <section className="py-12 bg-[#040D1A] border-b border-[#176BFF]/20 px-4 sm:px-6 lg:px-8">
        <TrustIndicators variant="cards" />
      </section>

      {/* SECTION 02 — PROBLEM STORY */}
      <ScrollReveal>
        <ProblemStorySection />
      </ScrollReveal>

      {/* SECTION 03 — SIGNATURE VISUAL SYSTEM: AI GROWTH FLOW™ */}
      <ScrollReveal id="ai-growth-flow-section" className="py-20 bg-[#07152D] relative border-b border-[#176BFF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AIGrowthFlow />
        </div>
      </ScrollReveal>

      {/* NEW SECTION — CORE CUSTOMER JOURNEY INFOGRAPHIC */}
      <ScrollReveal className="py-20 bg-[#050D1D] relative border-b border-[#176BFF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CustomerJourneyFlow />
        </div>
      </ScrollReveal>

      {/* NEW SECTION — SERVICE ARCHITECTURE MIND MAP */}
      <ScrollReveal className="py-20 bg-[#07152D] relative border-b border-[#176BFF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceMindMap />
        </div>
      </ScrollReveal>

      {/* SECTION 04 — COMPLETE AI BUSINESS SYSTEM (SERVES 12 SERVICES) */}
      <ScrollReveal>
        <ServiceCardGrid navigate={navigate} />
      </ScrollReveal>

      {/* INTERACTIVE DEMOS SECTION (VOICE CALL SIMULATOR + AI CHAT DEMO) */}
      <ScrollReveal className="py-20 bg-[#050D1D] relative border-y border-[#176BFF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Live Technology Demonstrations
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              EXPERIENCE THE AI IN ACTION
            </h2>
            <p className="text-sm sm:text-base text-[#8D9AAF] mt-3">
              Test our 24/7 AI Voice Receptionist simulator and interact directly with our live AI chat receptionist.
            </p>
          </div>

          {/* Voice Call Demo Component */}
          <VoiceCallDemo />

          {/* Live Chat Demo Widget */}
          <div className="max-w-3xl mx-auto">
            <DemoChatWidget />
          </div>

          {/* CRM Dashboard Preview */}
          <CRMPipelineDemo />

        </div>
      </ScrollReveal>

      {/* SECTION 05 — BEFORE / AFTER SLIDER */}
      <ScrollReveal className="py-20 bg-[#07152D] relative border-b border-[#176BFF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider />
        </div>
      </ScrollReveal>

      {/* NEW SECTION — INTERACTIVE ROI & REVENUE RECAPTURE CALCULATOR */}
      <ScrollReveal>
        <ROICalculatorSection openAuditModal={openAuditModal} />
      </ScrollReveal>

      {/* NEW SECTION — OPERATIONAL SERVICE COMPARISON MATRIX */}
      <ScrollReveal>
        <ServiceComparison openAuditModal={openAuditModal} />
      </ScrollReveal>

      {/* NEW SECTION — CLIENT TESTIMONIALS CAROUSEL */}
      <ScrollReveal>
        <ClientTestimonials />
      </ScrollReveal>

      {/* SECTION 06 — INDUSTRY SOLUTIONS */}
      <ScrollReveal>
        <IndustrySelectorSection navigate={navigate} />
      </ScrollReveal>

      {/* NEW SECTION — NYC REGIONAL INTERACTIVE SVG MAP */}
      <ScrollReveal className="py-20 bg-[#050D1D] relative border-y border-[#176BFF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NYCInteractiveMap openAuditModal={openAuditModal} />
        </div>
      </ScrollReveal>

      {/* SECTION 07 — HOW IT WORKS */}
      <ScrollReveal>
        <HowItWorksSection openAuditModal={openAuditModal} />
      </ScrollReveal>

      {/* SECTION 08 — PRICING */}
      <ScrollReveal>
        <PricingSection openAuditModal={openAuditModal} />
      </ScrollReveal>

      {/* SECTION 09 — FAQS */}
      <ScrollReveal>
        <FAQAccordionSection openAuditModal={openAuditModal} />
      </ScrollReveal>

      {/* SECTION 10 — FINAL CTA BANNER */}
      <ScrollReveal className="py-20 bg-gradient-to-b from-[#07152D] to-[#050D1D] relative overflow-hidden text-center border-t border-[#176BFF]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#70D44B] bg-[#70D44B]/10 px-4 py-1.5 rounded-full border border-[#70D44B]/30">
            <span>Ready To Automate Growth?</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            READY TO SEE WHAT YOUR BUSINESS CAN AUTOMATE?
          </h2>

          <p className="text-sm sm:text-base text-[#8D9AAF] max-w-2xl mx-auto leading-relaxed">
            We'll map your current lead journey and identify where AI can help improve response speed, appointment booking, follow-up, and customer communication.
          </p>

          <div className="pt-4">
            <button
              onClick={openAuditModal}
              className="px-8 py-4 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:opacity-95 transition-all shadow-xl shadow-[#176BFF]/30 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Book Your Free AI Automation Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </ScrollReveal>

    </main>
  );
};

