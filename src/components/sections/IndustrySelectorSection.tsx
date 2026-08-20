import React, { useState } from "react";
import { INDUSTRIES_CATEGORIES } from "../../data/industriesData";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { playClickSound, playFilterChime } from "../../lib/audioFeedback";

interface IndustrySelectorProps {
  navigate: (path: string) => void;
}

export const IndustrySelectorSection: React.FC<IndustrySelectorProps> = ({ navigate }) => {
  const [activeCategory, setActiveCategory] = useState(INDUSTRIES_CATEGORIES[0]);
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES_CATEGORIES[0].industries[0]);

  return (
    <section className="py-24 bg-[#050D1D] relative border-t border-[#176BFF]/20 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] ambient-glow-blue pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] ambient-glow-cyan pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#70D44B] glass-pill px-4 py-1.5 rounded-full shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Domain-Specific AI Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            TAILORED TO HOW YOUR INDUSTRY WORKS
          </h2>
          <p className="text-sm sm:text-base text-[#8D9AAF] leading-relaxed">
            We don't deploy generic AI templates. Every workflow is custom-programmed around your specific service offerings, inquiry types, and operational requirements.
          </p>
        </div>

        {/* 5 Category Selector Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
          {INDUSTRIES_CATEGORIES.map((cat) => {
            const isSelected = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playFilterChime();
                  setActiveCategory(cat);
                  setActiveIndustry(cat.industries[0]);
                }}
                className={`px-5 py-2.5 rounded-full font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-[#176BFF] to-[#00C2FF] text-white shadow-lg shadow-[#176BFF]/30 border border-[#00C2FF]/60"
                    : "glass-pill text-[#8D9AAF] hover:text-white hover:border-white/20"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Selected Category Sub-Industries Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {activeCategory.industries.map((ind) => {
            const isSelected = activeIndustry.slug === ind.slug;
            return (
              <button
                key={ind.slug}
                onClick={() => {
                  playClickSound();
                  setActiveIndustry(ind);
                }}
                className={`px-4 py-2 rounded-full font-medium text-xs transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#00C2FF]/20 border border-[#00C2FF] text-[#00C2FF] font-semibold shadow-sm"
                    : "glass-pill text-[#8D9AAF] hover:text-white"
                }`}
              >
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Industry Detail Card & Workflow */}
        <div className="bento-card rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#70D44B] glass-pill px-3 py-1 rounded-full border-[#70D44B]/30 bg-[#70D44B]/10 mb-3 inline-block">
                  {activeIndustry.categoryName}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
                  {activeIndustry.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#8D9AAF] leading-relaxed mt-2">
                  {activeIndustry.subheadline}
                </p>
              </div>

              {/* Recommended Stack Badges */}
              <div className="space-y-2">
                <div className="text-xs font-heading font-bold uppercase text-white tracking-wider">
                  Recommended AI Stack:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.recommendedAutomationStack.map((tool, i) => (
                    <span key={i} className="px-3 py-1 glass-pill rounded-full text-xs font-medium text-[#00C2FF] border-[#176BFF]/40">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  playClickSound();
                  navigate(`/industries/${activeIndustry.slug}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#176BFF] to-[#00C2FF] hover:shadow-[0_0_25px_rgba(23,107,255,0.4)] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer transform hover:scale-[1.02] active:scale-95 group"
              >
                <span>View Full {activeIndustry.name} Strategy</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Customer Journey Flow Column */}
            <div className="lg:col-span-7 bg-[#050D1D]/90 p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="font-heading font-bold text-xs uppercase tracking-wider text-[#00C2FF] pb-2 border-b border-white/10 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Automated Customer Journey Blueprint</span>
              </div>

              <div className="space-y-3.5">
                {activeIndustry.customerJourney.map((step, sIdx) => (
                  <div key={sIdx} className="bg-[#07152D] p-4 rounded-xl border border-white/10 space-y-2 text-xs hover:border-white/20 transition-all">
                    <div className="font-heading font-bold text-white text-sm">
                      {step.step}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="text-red-400 bg-red-500/10 p-2.5 rounded-lg border border-red-500/20">
                        <span className="font-bold block mb-0.5 text-[10px] uppercase">Traditional Bottleneck:</span>
                        {step.traditionalProblem}
                      </div>
                      <div className="text-[#70D44B] bg-[#70D44B]/10 p-2.5 rounded-lg border border-[#70D44B]/20">
                        <span className="font-bold block mb-0.5 text-[10px] uppercase">AI Solution:</span>
                        {step.aiSolution}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
