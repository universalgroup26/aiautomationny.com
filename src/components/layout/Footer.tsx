import React from "react";
import { BrandLogo } from "../ui/BrandLogo";
import { SbaCertifiedBadge } from "../ui/SbaCertifiedBadge";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Activity } from "lucide-react";
import { LOCATIONS_DATA } from "../../data/locationsData";
import { NewsletterForm } from "../forms/NewsletterForm";
import { playClickSound } from "../../lib/audioFeedback";

interface FooterProps {
  navigate: (path: string) => void;
  openAuditModal: () => void;
  openBrandAssetsModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, openAuditModal, openBrandAssetsModal }) => {
  const handleNavClick = (path: string) => {
    playClickSound();
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050D1D] text-[#8D9AAF] pt-20 pb-12 border-t border-[#176BFF]/20 relative overflow-hidden">
      
      {/* Background ambient light bloom */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#00C2FF]/50 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] ambient-glow-blue pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Bento Callout Banner */}
        <div className="bento-card p-8 sm:p-10 mb-16 border-[#176BFF]/40 bg-gradient-to-r from-[#07152D] via-[#0D1F3D] to-[#07152D] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-2.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-xs font-heading font-bold uppercase tracking-wider text-[#00C2FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#70D44B] animate-pulse" />
              <span>Stop Losing Calls Today</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Ready to see what your business can automate?
            </h3>
            <p className="text-sm text-[#8D9AAF] max-w-xl leading-relaxed">
              We'll map your customer lead journey, identify missed revenue leakages, and build a custom AI voice & booking architecture for your team.
            </p>
          </div>
          <button
            onClick={() => {
              playClickSound();
              openAuditModal();
            }}
            className="px-8 py-4 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] rounded-full font-heading font-bold text-xs sm:text-sm text-white hover:shadow-[0_0_35px_rgba(0,194,255,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap uppercase tracking-wider cursor-pointer shadow-xl shrink-0"
          >
            <span>Book Free AI Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Newsletter Subscription Component */}
        <div className="mb-16">
          <NewsletterForm />
        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info, Certified Badge & Address */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" variant="footer" />
            
            {/* SBA Certified Badge in Footer */}
            <div className="pt-2">
              <SbaCertifiedBadge variant="full" showText={true} />
            </div>

            <p className="text-xs sm:text-sm text-[#8D9AAF] leading-relaxed max-w-sm pt-1">
              AI AUTOMATION NY builds production-grade AI Voice Receptionists, 24/7 Smart Web Chat, CRM Sales Pipelines, and Automated Follow-Up engines for NYC & regional businesses.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-[#F7F9FC]">
              <a 
                href="tel:17185002221" 
                onClick={() => playClickSound()}
                className="flex items-center gap-2.5 hover:text-[#00C2FF] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00C2FF]" />
                <span className="font-semibold">+1 718-500-2221</span>
              </a>
              <div className="flex items-start gap-2.5 text-[#8D9AAF]">
                <MapPin className="w-4 h-4 text-[#00C2FF] shrink-0 mt-1" />
                <span className="text-xs">3707 74th Street, Suite 8 (3rd FL), Jackson Heights, NY 11372</span>
              </div>
            </div>

            {/* Live Operational Status Pill */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] text-[#F7F9FC]">
                <span className="w-2 h-2 rounded-full bg-[#70D44B] animate-ping" />
                <span>All AI Dispatch Engines Operational</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              AI Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNavClick("/services/ai-voice-receptionist")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">AI Voice Receptionist</button></li>
              <li><button onClick={() => handleNavClick("/services/ai-chatbot-booking")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">AI Chat & Booking</button></li>
              <li><button onClick={() => handleNavClick("/services/ai-powered-websites")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">AI-Powered Websites</button></li>
              <li><button onClick={() => handleNavClick("/services/crm-sales-automation")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">CRM & Sales Automation</button></li>
              <li><button onClick={() => handleNavClick("/services/lead-follow-up")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">Automated Follow-Up</button></li>
              <li><button onClick={() => handleNavClick("/services/appointment-automation")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">Appointment Automation</button></li>
              <li><button onClick={() => handleNavClick("/services/database-reactivation")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">Database Reactivation</button></li>
              <li><button onClick={() => handleNavClick("/services/reputation-management")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">Reputation Management</button></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNavClick("/industries/hvac-plumbing")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">HVAC & Plumbing</button></li>
              <li><button onClick={() => handleNavClick("/industries/legal-services")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">Law Firms & Attorneys</button></li>
              <li><button onClick={() => handleNavClick("/industries/real-estate")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">Real Estate & Property</button></li>
              <li><button onClick={() => handleNavClick("/industries/medical-dental")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">Medical & Dental Clinics</button></li>
              <li><button onClick={() => handleNavClick("/industries/contractors-trades")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">Contractors & Trades</button></li>
              <li><button onClick={() => handleNavClick("/industries/automotive-services")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">Auto Repair & Dealerships</button></li>
              <li><button onClick={() => handleNavClick("/industries/restaurants-hospitality")} className="hover:text-[#00C2FF] transition-colors cursor-pointer">Restaurants & Hospitality</button></li>
            </ul>
          </div>

          {/* Col 4: Service Areas (NYC & Beyond) */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {LOCATIONS_DATA.slice(0, 7).map((loc) => (
                <li key={loc.slug}>
                  <button 
                    onClick={() => handleNavClick(`/locations/${loc.slug}`)} 
                    className="hover:text-[#00C2FF] transition-colors cursor-pointer"
                  >
                    {loc.name}, NY
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8D9AAF]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} AI AUTOMATION NY. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => handleNavClick("/privacy-policy")} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleNavClick("/terms-of-service")} className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </button>
            {openBrandAssetsModal && (
              <button onClick={openBrandAssetsModal} className="hover:text-[#00C2FF] transition-colors cursor-pointer flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#70D44B]" />
                <span>Brand Assets & Certifications</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
