import React, { useState, useMemo } from "react";
import { INDUSTRIES_CATEGORIES } from "../data/industriesData";
import { SEOHead } from "../components/ui/SEOHead";
import { NYCInteractiveMap } from "../components/sections/NYCInteractiveMap";
import { ArrowRight, ShieldCheck, Building2, Search, Filter, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { playClickSound, playFilterChime } from "../lib/audioFeedback";

interface IndustriesOverviewPageProps {
  navigate: (path: string) => void;
  openAuditModal: () => void;
}

export const IndustriesOverviewPage: React.FC<IndustriesOverviewPageProps> = ({ navigate, openAuditModal }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Industries");

  const allIndustries = useMemo(() => {
    return INDUSTRIES_CATEGORIES.flatMap(cat => 
      cat.industries.map(ind => ({
        ...ind,
        categoryName: cat.name,
        categoryId: cat.id
      }))
    );
  }, []);

  const categoryNames = ["All Industries", ...INDUSTRIES_CATEGORIES.map(c => c.name)];

  const filteredCategories = useMemo(() => {
    return INDUSTRIES_CATEGORIES.map(cat => {
      const filteredInds = cat.industries.filter(ind => {
        const matchesSearch = 
          ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ind.subheadline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ind.painPoints?.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesCategory = 
          selectedCategory === "All Industries" || 
          cat.name.toLowerCase() === selectedCategory.toLowerCase();

        return matchesSearch && matchesCategory;
      });

      return {
        ...cat,
        industries: filteredInds
      };
    }).filter(cat => cat.industries.length > 0);
  }, [searchQuery, selectedCategory]);

  const totalVisibleCount = filteredCategories.reduce((acc, cat) => acc + cat.industries.length, 0);

  return (
    <main className="pt-28 pb-20 min-h-screen bg-[#07152D]">
      <SEOHead 
        title="Industries Served & Custom AI Systems | AI AUTOMATION NY"
        description="Tailored AI Automation, AI Voice Receptionists, and CRM workflows for HVAC, Plumbing, Roofing, Dental, Medical, Law Firms, Realtors, Auto Repair, and Local Businesses."
        canonicalUrl="https://aiautomationny.com/industries"
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" },
          { name: "Industries", url: "https://aiautomationny.com/industries" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#70D44B] bg-[#70D44B]/10 px-3.5 py-1.5 rounded-full border border-[#70D44B]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>20 Specialized NYC Industry Sectors</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            INDUSTRIES WE AUTOMATE
          </h1>
          <p className="text-base text-[#8D9AAF] leading-relaxed">
            Every business operates differently. We build industry-specific AI agents and workflows customized to your exact service catalog and customer intake process.
          </p>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-[#176BFF]/30 bg-[#0D1F3D]/80 backdrop-blur-md space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Search input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#8D9AAF] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search your trade: HVAC, Dental, Med Spa, Law Firm, Towing, Roofing..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#050D1D] border border-white/10 rounded-xl text-white text-xs sm:text-sm placeholder-[#8D9AAF] focus:outline-none focus:border-[#00C2FF]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8D9AAF] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => {
                playClickSound();
                openAuditModal();
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-[#70D44B] to-[#00C2FF] text-[#07152D] font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#70D44B]/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Audit Your Trade</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-white/5">
            <span className="text-xs text-[#8D9AAF] font-medium mr-1 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Sectors:
            </span>
            {categoryNames.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playFilterChime();
                    setSelectedCategory(cat);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? "bg-[#176BFF] text-white shadow-md border border-[#00C2FF]"
                      : "bg-[#050D1D] text-[#8D9AAF] border border-white/10 hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-xs text-[#8D9AAF]">
          <span>Showing {totalVisibleCount} of {allIndustries.length} Industry Blueprints</span>
          {(searchQuery || selectedCategory !== "All Industries") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Industries");
              }}
              className="text-[#00C2FF] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Categories & Sub-Industries */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#176BFF]/30 bg-[#0D1F3D]/80 space-y-6">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#00C2FF]">
                  Industry Sector
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
                  {category.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#8D9AAF] mt-1">{category.description}</p>
              </div>

              {/* Grid of Sub-Industries */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.industries.map((ind) => (
                  <div 
                    key={ind.slug} 
                    className="bg-[#07152D] p-6 rounded-2xl border border-white/10 hover:border-[#00C2FF] transition-all flex flex-col justify-between group shadow-md"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#00C2FF] transition-colors">
                          {ind.name}
                        </h3>
                        <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#70D44B] bg-[#70D44B]/10 px-2 py-0.5 rounded-full">
                          AI Ready
                        </span>
                      </div>
                      <p className="text-xs text-[#8D9AAF] leading-relaxed line-clamp-3">
                        {ind.subheadline}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        playClickSound();
                        navigate(`/industries/${ind.slug}`);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="mt-6 pt-4 border-t border-white/10 w-full text-left text-xs font-heading font-bold uppercase tracking-wider text-[#00C2FF] group-hover:text-white flex items-center justify-between cursor-pointer"
                    >
                      <span>Explore {ind.name} Blueprint</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-16 glass-panel rounded-2xl border border-white/10 p-8 space-y-3">
              <Search className="w-10 h-10 text-[#8D9AAF] mx-auto opacity-50" />
              <h3 className="text-lg font-heading font-bold text-white">No industries found</h3>
              <p className="text-xs text-[#8D9AAF]">We create custom AI workflows for any NYC trade. Book a free consultation to design yours.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Industries");
                }}
                className="px-4 py-2 bg-[#176BFF] text-white rounded-xl text-xs font-heading font-bold uppercase tracking-wider"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* NYC Regional Map */}
        <div className="pt-8">
          <NYCInteractiveMap openAuditModal={openAuditModal} />
        </div>

      </div>
    </main>
  );
};
