import React, { useState, useMemo } from "react";
import { SERVICES_DATA } from "../data/servicesData";
import { SEOHead } from "../components/ui/SEOHead";
import { ArrowRight, PhoneCall, MessageSquare, Globe, Database, Zap, Calendar, RefreshCw, Star, TrendingUp, Share2, Cpu, BarChart3, Search, Filter, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { playClickSound, playFilterChime } from "../lib/audioFeedback";

interface ServicesOverviewPageProps {
  navigate: (path: string) => void;
  openAuditModal: () => void;
}

const iconMap: Record<string, any> = {
  PhoneCall, MessageSquare, Globe, Database, Zap, Calendar, RefreshCw, Star, TrendingUp, Share2, Cpu, BarChart3
};

const CATEGORIES = [
  "All Categories",
  "Customer Acquisition",
  "Operational AI",
  "Growth & Retention"
];

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({ navigate, openAuditModal }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesSearch = 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.outcome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat = 
        selectedCategory === "All Categories" || 
        service.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  const handleCategorySelect = (cat: string) => {
    playFilterChime();
    setSelectedCategory(cat);
  };

  return (
    <main className="pt-28 pb-20 min-h-screen bg-[#07152D]">
      <SEOHead 
        title="AI Business Services & Automations | AI AUTOMATION NY"
        description="Explore 12 production-grade AI services: AI Voice Receptionist, AI Chat & Booking, CRM Sales Automation, Speed-to-Lead Follow-Up, and Database Reactivation."
        canonicalUrl="https://aiautomationny.com/services"
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" },
          { name: "Services", url: "https://aiautomationny.com/services" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our 12 AI Service Modules</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            AI AUTOMATION SERVICES
          </h1>
          <p className="text-base text-[#8D9AAF] leading-relaxed">
            High-impact AI solutions engineered to answer inquiries 24/7, qualify leads, lock in appointments, and scale revenue without increasing manual workload.
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
                placeholder="Search services (e.g. Voice, SMS, CRM, Reviews, Booking)..."
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
              <span>Get Free System Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-white/5">
            <span className="text-xs text-[#8D9AAF] font-medium mr-1 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
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

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#8D9AAF]">
          <span>Showing {filteredServices.length} of {SERVICES_DATA.length} AI Services</span>
          {(searchQuery || selectedCategory !== "All Categories") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }}
              className="text-[#00C2FF] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => {
              const IconComp = iconMap[service.iconName] || Zap;
              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={service.slug}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 border border-[#176BFF]/30 bg-[#0D1F3D]/80 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#176BFF] to-[#00C2FF] p-0.5">
                        <div className="w-full h-full bg-[#07152D] rounded-[10px] flex items-center justify-center">
                          <IconComp className="w-6 h-6 text-[#00C2FF]" />
                        </div>
                      </div>
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#70D44B] bg-[#70D44B]/10 px-2.5 py-1 rounded-full border border-[#70D44B]/20">
                        {service.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-heading font-bold text-white">{service.name}</h2>
                    <p className="text-xs text-[#8D9AAF] leading-relaxed line-clamp-3">{service.shortDescription}</p>

                    <div className="p-3 bg-[#07152D] rounded-xl border border-white/5 text-[11px] text-[#F7F9FC]">
                      <span className="text-[#00C2FF] font-semibold">Outcome: </span>{service.outcome}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10">
                    <button
                      onClick={() => {
                        playClickSound();
                        navigate(`/services/${service.slug}`);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="w-full py-2.5 bg-[#176BFF] hover:bg-[#00C2FF] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Explore {service.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-2xl border border-white/10 p-8 space-y-3">
            <Search className="w-10 h-10 text-[#8D9AAF] mx-auto opacity-50" />
            <h3 className="text-lg font-heading font-bold text-white">No services found</h3>
            <p className="text-xs text-[#8D9AAF]">Try searching with another keyword or resetting the filter category.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }}
              className="px-4 py-2 bg-[#176BFF] text-white rounded-xl text-xs font-heading font-bold uppercase tracking-wider"
            >
              Reset Search
            </button>
          </div>
        )}

      </div>
    </main>
  );
};
