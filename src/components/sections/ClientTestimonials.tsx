import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Pause, Play, CheckCircle2, Building2, MapPin, TrendingUp, Sparkles } from "lucide-react";
import { playClickSound } from "../../lib/audioFeedback";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  industry: string;
  rating: number;
  metric: string;
  text: string;
  avatarBg: string;
  initials: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Marcus Vance",
    role: "Owner & Lead Operator",
    company: "Vance HVAC & Mechanical",
    location: "Queens & Long Island, NY",
    industry: "HVAC & Plumbing",
    rating: 5,
    metric: "+68% Captured Phone Leads",
    text: "Before AI Automation NY, we were losing 10-15 emergency calls every weekend because our office was closed. Now Sarah, our AI receptionist, answers in 2 rings, dispatches emergency techs, and books diagnostic visits on Google Calendar. It paid for itself in 4 days.",
    avatarBg: "from-[#176BFF] to-[#00C2FF]",
    initials: "MV",
  },
  {
    id: "t2",
    name: "Elena Rostova, Esq.",
    role: "Managing Partner",
    company: "Rostova Law Group P.C.",
    location: "Midtown Manhattan, NY",
    industry: "Legal Services",
    rating: 5,
    metric: "Instant 5-Second Lead Intake",
    text: "Prospective personal injury clients expect immediate response. AI Automation NY built us an automated SMS text-back workflow and legal intake assistant. Our intake qualification rate increased by 40% almost overnight.",
    avatarBg: "from-[#70D44B] to-[#176BFF]",
    initials: "ER",
  },
  {
    id: "t3",
    name: "David Chen",
    role: "Principal Broker",
    company: "Prime Skyline Realty",
    location: "Brooklyn & Manhattan, NY",
    industry: "Real Estate",
    rating: 5,
    metric: "$42,000 Saved in Staffing",
    text: "Their GoHighLevel CRM setup is unmatched. Every lead from Zillow, StreetEasy, and Google Meta ads gets instant AI follow-up via voice call and SMS. We haven't missed a buyer or seller inquiry in over 6 months.",
    avatarBg: "from-[#00C2FF] to-[#70D44B]",
    initials: "DC",
  },
  {
    id: "t4",
    name: "Dr. Aris Thorne, D.D.S.",
    role: "Clinical Director",
    company: "Gramercy Aesthetics & Dental",
    location: "Gramercy Park, NYC",
    industry: "Medical & Dental",
    rating: 5,
    metric: "3.4x More Appointment Bookings",
    text: "Our front desk team used to spend hours calling back no-shows. The AI automated recall campaign sends friendly SMS reminders with one-click rescheduling. Our appointment fill rate reached 96% this quarter.",
    avatarBg: "from-[#176BFF] to-[#70D44B]",
    initials: "AT",
  },
  {
    id: "t5",
    name: "Carmine Moretti",
    role: "Founder & Master Contractor",
    company: "Moretti & Sons Builders",
    location: "Staten Island & Brooklyn, NY",
    industry: "Contracting & Trade",
    rating: 5,
    metric: "0 Missed Evening Estimates",
    text: "Homeowners call after work between 6 PM and 9 PM. Having the AI answer voice calls, answer pricing questions, and log project details directly into our CRM gave us a massive unfair advantage over local competitors.",
    avatarBg: "from-[#00C2FF] to-[#176BFF]",
    initials: "CM",
  },
];

export const ClientTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const industries = ["All", "HVAC & Plumbing", "Legal Services", "Real Estate", "Medical & Dental", "Contracting & Trade"];

  const filteredTestimonials = selectedIndustry === "All" 
    ? TESTIMONIALS_DATA 
    : TESTIMONIALS_DATA.filter(t => t.industry === selectedIndustry);

  useEffect(() => {
    if (currentIndex >= filteredTestimonials.length) {
      setCurrentIndex(0);
    }
  }, [selectedIndustry, filteredTestimonials.length, currentIndex]);

  useEffect(() => {
    if (isAutoPlaying && filteredTestimonials.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
      }, 6500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, filteredTestimonials.length]);

  const handleNext = () => {
    playClickSound();
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    playClickSound();
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[currentIndex] || TESTIMONIALS_DATA[0];

  return (
    <section className="py-24 bg-[#07152D] relative overflow-hidden border-b border-[#176BFF]/20">
      
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 ambient-glow-blue pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 ambient-glow-cyan pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-heading font-bold uppercase tracking-widest text-[#70D44B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified NYC Case Studies & Reviews</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            TRUSTED BY NEW YORK'S TOP BUSINESSES
          </h2>

          <p className="text-sm sm:text-base text-[#8D9AAF] leading-relaxed">
            See how regional enterprises capture more leads, eliminate missed phone calls, and scale operations using AI AUTOMATION NY systems.
          </p>
        </div>

        {/* Industry Filter Pills */}
        <div className="flex justify-center gap-2 overflow-x-auto scrollbar-none pb-2">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => {
                playClickSound();
                setSelectedIndustry(ind);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all duration-300 shrink-0 cursor-pointer ${
                selectedIndustry === ind
                  ? "bg-gradient-to-r from-[#176BFF] to-[#00C2FF] text-white shadow-lg shadow-[#176BFF]/30 border border-[#00C2FF]/60"
                  : "glass-pill text-[#8D9AAF] hover:text-white hover:border-white/20"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Main Bento Carousel Card */}
        <div 
          className="max-w-4xl mx-auto relative bento-card p-6 sm:p-10 border-[#176BFF]/40 shadow-2xl overflow-hidden group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Subtle Top Glow Divider */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B]" />

          {/* Quote Icon Background */}
          <Quote className="absolute top-6 right-8 w-24 h-24 text-[#176BFF]/10 pointer-events-none" />

          {/* Card Content Grid */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 min-h-[260px]">
            
            {/* Left Column: Author Badge & Impact Metric */}
            <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6 space-y-4">
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentTestimonial.avatarBg} p-0.5 shadow-xl`}>
                <div className="w-full h-full bg-[#07152D] rounded-[14px] flex items-center justify-center font-heading font-bold text-xl text-white">
                  {currentTestimonial.initials}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-heading font-bold text-white flex items-center justify-center md:justify-start gap-1.5">
                  <span>{currentTestimonial.name}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#70D44B]" title="Verified NYC Client" />
                </h3>
                <p className="text-xs text-[#00C2FF] font-medium mt-0.5">{currentTestimonial.role}</p>
                <p className="text-xs text-[#8D9AAF] flex items-center justify-center md:justify-start gap-1 mt-1">
                  <Building2 className="w-3 h-3 text-[#176BFF]" />
                  <span>{currentTestimonial.company}</span>
                </p>
                <p className="text-[11px] text-[#A1B3D3] flex items-center justify-center md:justify-start gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-rose-400" />
                  <span>{currentTestimonial.location}</span>
                </p>
              </div>

              {/* Metric Badge */}
              <div className="w-full bg-[#07152D] border border-[#70D44B]/40 rounded-xl p-3 text-center md:text-left shadow-inner">
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-[10px] font-heading font-bold uppercase tracking-wider text-[#70D44B]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Verified Result</span>
                </div>
                <div className="text-xs sm:text-sm font-heading font-bold text-white mt-1">
                  {currentTestimonial.metric}
                </div>
              </div>

            </div>

            {/* Right Column: Star Rating & Testimonial Quote */}
            <div className="flex-1 space-y-4">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-heading font-bold text-amber-300 ml-2">5.0 / 5.0 Rating</span>
              </div>

              {/* Review Quote */}
              <blockquote className="text-sm sm:text-base text-[#F7F9FC] leading-relaxed italic">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="pt-3 flex items-center justify-between text-xs text-[#8D9AAF] border-t border-white/10">
                <span className="bg-[#176BFF]/10 text-[#00C2FF] px-3 py-1 rounded-full border border-[#176BFF]/30 font-heading font-semibold text-[11px]">
                  {currentTestimonial.industry}
                </span>

                <span className="text-[11px] text-[#A1B3D3] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#70D44B]" />
                  <span>Verified Google Business Review</span>
                </span>
              </div>

            </div>

          </div>

          {/* Carousel Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            
            {/* Pagination Indicator Dots */}
            <div className="flex items-center gap-2">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    playClickSound();
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? "w-8 bg-gradient-to-r from-[#176BFF] to-[#00C2FF]" 
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Auto Play / Pause Toggle & Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  playClickSound();
                  setIsAutoPlaying(!isAutoPlaying);
                }}
                className="p-2 rounded-full glass-pill text-[#8D9AAF] hover:text-white transition-colors cursor-pointer"
                title={isAutoPlaying ? "Pause auto-rotation" : "Resume auto-rotation"}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-[#00C2FF]" /> : <Play className="w-3.5 h-3.5 text-[#70D44B]" />}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full glass-pill hover:border-[#00C2FF] text-white transition-all shadow-md active:scale-95 cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full glass-pill hover:border-[#00C2FF] text-white transition-all shadow-md active:scale-95 cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
