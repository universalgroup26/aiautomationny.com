import React, { useState } from "react";
import { MAIN_FAQS } from "../../data/faqsData";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { trackFAQToggle } from "../../lib/dataLayer";

interface FAQAccordionProps {
  openAuditModal: () => void;
}

export const FAQAccordionSection: React.FC<FAQAccordionProps> = ({ openAuditModal }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First expanded by default

  const toggle = (idx: number) => {
    const nextState = openIdx === idx ? null : idx;
    setOpenIdx(nextState);
    if (MAIN_FAQS[idx]) {
      trackFAQToggle(MAIN_FAQS[idx].question, nextState === idx);
    }
  };

  return (
    <section className="py-20 bg-[#07152D] relative border-t border-[#176BFF]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30 mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            GOT QUESTIONS? WE HAVE ANSWERS.
          </h2>
          <p className="text-sm text-[#8D9AAF] mt-2">
            Everything you need to know about implementing AI Automation NY in your business.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {MAIN_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-xl border border-[#176BFF]/30 bg-[#0D1F3D]/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-white hover:text-[#00C2FF] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#00C2FF] transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#8D9AAF] leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Bar */}
        <div className="mt-12 p-6 glass-panel rounded-2xl border border-white/10 text-center space-y-3">
          <p className="text-sm text-[#8D9AAF]">
            Have a custom question about your software stack or industry workflow?
          </p>
          <button
            onClick={openAuditModal}
            className="px-6 py-3 bg-[#176BFF] hover:bg-[#00C2FF] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Ask Our AI Team During Your Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
