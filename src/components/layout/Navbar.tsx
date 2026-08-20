import React, { useState, useEffect } from "react";
import { BrandLogo } from "../ui/BrandLogo";
import { SbaCertifiedBadge } from "../ui/SbaCertifiedBadge";
import { NysCertifiedBadge } from "../ui/NysCertifiedBadge";
import { SERVICES_DATA } from "../../data/servicesData";
import { INDUSTRIES_CATEGORIES } from "../../data/industriesData";
import { LANGUAGES, LanguageOption } from "../ui/LanguagePreferenceModal";
import { ChevronDown, Phone, Menu, X, ArrowRight, Zap, ShieldCheck, Sparkles, Sun, Moon, Globe, Check } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { trackNavigationClick, trackCTAClick, pushDataLayerEvent } from "../../lib/dataLayer";
import { playClickSound } from "../../lib/audioFeedback";

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
  openAuditModal: () => void;
  openProposalModal?: () => void;
  openBrandAssetsModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate, openAuditModal, openProposalModal, openBrandAssetsModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLangCode, setCurrentLangCode] = useState<string>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const savedLang = localStorage.getItem("user_preferred_language") || "en";
    setCurrentLangCode(savedLang);

    const handleLangChange = (e: Event) => {
      const customEvt = e as CustomEvent<string>;
      if (customEvt.detail) setCurrentLangCode(customEvt.detail);
    };
    window.addEventListener("languageChanged", handleLangChange);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("languageChanged", handleLangChange);
    };
  }, []);

  const handleSelectLanguage = (lang: LanguageOption) => {
    setCurrentLangCode(lang.code);
    localStorage.setItem("user_preferred_language", lang.code);
    localStorage.setItem("user_language_prompt_seen", "true");
    pushDataLayerEvent("language_selected_navbar", {
      language_code: lang.code,
      language_name: lang.name,
    });
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: lang.code }));
    setLangDropdownOpen(false);
  };

  const selectedLangObj = LANGUAGES.find((l) => l.code === currentLangCode) || LANGUAGES[0];

  const handleNavClick = (path: string, label?: string) => {
    trackNavigationClick(label || path, path);
    navigate(path);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#07152D]/95 backdrop-blur-md border-b border-[#176BFF]/20 shadow-xl" : "bg-gradient-to-b from-[#040E1E] to-transparent"}`}>
      
      {/* Top Header Certification Banner */}
      <div className="w-full bg-[#040D1A]/95 border-b border-white/10 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Certification Logos & Powered By Line */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <SbaCertifiedBadge variant="compact" showText={false} />
              <NysCertifiedBadge variant="pill" />
            </div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
              <span className="text-[#8D9AAF] font-medium">Powered By</span>
              <span className="text-[#00C2FF] font-extrabold font-heading tracking-tight">Universal Tech INC</span>
              <span className="text-white/80 font-medium text-[10px] sm:text-[11px]">
                ( A Service-Disabled Veteran-Owned Certified )
              </span>
            </div>
          </div>

          {/* Quick Contact & NYC HQ Badge */}
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="tel:17185002221"
              className="hidden sm:flex items-center gap-1.5 text-white hover:text-[#00C2FF] font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-[#00C2FF]" />
              <span>(718) 500-2221</span>
            </a>
            <span className="hidden sm:inline-block text-white/20">|</span>
            <div className="flex items-center gap-1.5 text-[#00C2FF] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#70D44B] animate-pulse" />
              <span>NYC HQ • 24/7 AI System Live</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navbar Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo & SBA Badge Group */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button 
            onClick={() => handleNavClick("/")} 
            className="text-left focus:outline-none group cursor-pointer"
            aria-label="AI Automation NY Home"
          >
            <BrandLogo size="md" />
          </button>

          {/* SBA Header Logo Badge Divider */}
          <div className="hidden sm:flex items-center gap-3 pl-4 sm:pl-6 border-l border-white/10">
            <SbaCertifiedBadge variant="header" showText={true} />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm text-[#F7F9FC]">
          
          {/* Services Dropdown Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              onClick={() => handleNavClick("/services")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${currentPath.startsWith("/services") ? "text-[#00C2FF] font-semibold bg-[#176BFF]/10" : "hover:text-[#00C2FF] hover:bg-white/5"}`}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-[#00C2FF]" : "text-[#8D9AAF]"}`} />
            </button>

            {/* Services MegaMenu Panel */}
            {activeDropdown === "services" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="glass-panel rounded-2xl p-6 shadow-2xl border border-[#176BFF]/30 grid grid-cols-4 gap-6 bg-[#07152D]/95 backdrop-blur-xl">
                  
                  {/* Category 1: AI Communication */}
                  <div>
                    <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#00C2FF] mb-3 pb-1 border-b border-white/10 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" /> Communication
                    </div>
                    <div className="space-y-2">
                      {SERVICES_DATA.filter(s => s.category === "communication").map(service => (
                        <button
                          key={service.slug}
                          onClick={() => handleNavClick(`/services/${service.slug}`)}
                          className="w-full text-left p-2 rounded-lg hover:bg-[#176BFF]/15 transition-colors group/item block"
                        >
                          <div className="font-heading text-xs font-semibold text-white group-hover/item:text-[#00C2FF]">
                            {service.name}
                          </div>
                          <div className="text-[11px] text-[#8D9AAF] line-clamp-1 mt-0.5">
                            {service.shortDescription}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category 2: Lead Conversion */}
                  <div>
                    <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#70D44B] mb-3 pb-1 border-b border-white/10">
                      Lead Conversion
                    </div>
                    <div className="space-y-2">
                      {SERVICES_DATA.filter(s => s.category === "conversion").map(service => (
                        <button
                          key={service.slug}
                          onClick={() => handleNavClick(`/services/${service.slug}`)}
                          className="w-full text-left p-2 rounded-lg hover:bg-[#176BFF]/15 transition-colors group/item block"
                        >
                          <div className="font-heading text-xs font-semibold text-white group-hover/item:text-[#70D44B]">
                            {service.name}
                          </div>
                          <div className="text-[11px] text-[#8D9AAF] line-clamp-1 mt-0.5">
                            {service.shortDescription}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category 3: Growth */}
                  <div>
                    <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#FFB800] mb-3 pb-1 border-b border-white/10">
                      Growth & Retention
                    </div>
                    <div className="space-y-2">
                      {SERVICES_DATA.filter(s => s.category === "growth").map(service => (
                        <button
                          key={service.slug}
                          onClick={() => handleNavClick(`/services/${service.slug}`)}
                          className="w-full text-left p-2 rounded-lg hover:bg-[#176BFF]/15 transition-colors group/item block"
                        >
                          <div className="font-heading text-xs font-semibold text-white group-hover/item:text-[#FFB800]">
                            {service.name}
                          </div>
                          <div className="text-[11px] text-[#8D9AAF] line-clamp-1 mt-0.5">
                            {service.shortDescription}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category 4: Operations */}
                  <div>
                    <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#176BFF] mb-3 pb-1 border-b border-white/10">
                      Operations & Systems
                    </div>
                    <div className="space-y-2">
                      {SERVICES_DATA.filter(s => s.category === "operations").map(service => (
                        <button
                          key={service.slug}
                          onClick={() => handleNavClick(`/services/${service.slug}`)}
                          className="w-full text-left p-2 rounded-lg hover:bg-[#176BFF]/15 transition-colors group/item block"
                        >
                          <div className="font-heading text-xs font-semibold text-white group-hover/item:text-[#00C2FF]">
                            {service.name}
                          </div>
                          <div className="text-[11px] text-[#8D9AAF] line-clamp-1 mt-0.5">
                            {service.shortDescription}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              onClick={() => handleNavClick("/industries")}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${currentPath.startsWith("/industries") ? "text-[#00C2FF] font-semibold bg-[#176BFF]/10" : "hover:text-[#00C2FF] hover:bg-white/5"}`}
            >
              <span>Industries</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180 text-[#00C2FF]" : "text-[#8D9AAF]"}`} />
            </button>

            {/* Industries MegaMenu Panel */}
            {activeDropdown === "industries" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[880px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="glass-panel rounded-2xl p-6 shadow-2xl border border-[#176BFF]/30 grid grid-cols-5 gap-4 bg-[#07152D]/95 backdrop-blur-xl">
                  {INDUSTRIES_CATEGORIES.map(category => (
                    <div key={category.id} className="space-y-2">
                      <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#00C2FF] pb-1 border-b border-white/10 line-clamp-1">
                        {category.name}
                      </div>
                      <div className="space-y-1">
                        {category.industries.map(ind => (
                          <button
                            key={ind.slug}
                            onClick={() => handleNavClick(`/industries/${ind.slug}`)}
                            className="w-full text-left px-2 py-1.5 rounded hover:bg-[#176BFF]/20 text-xs font-medium text-[#F7F9FC] hover:text-[#00C2FF] transition-colors block line-clamp-1"
                          >
                            {ind.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* How It Works */}
          <button 
            onClick={() => handleNavClick("/how-it-works")}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${currentPath === "/how-it-works" ? "text-[#00C2FF] font-semibold bg-[#176BFF]/10" : "hover:text-[#00C2FF] hover:bg-white/5"}`}
          >
            How It Works
          </button>

          {/* Pricing */}
          <button 
            onClick={() => handleNavClick("/pricing")}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${currentPath === "/pricing" ? "text-[#00C2FF] font-semibold bg-[#176BFF]/10" : "hover:text-[#00C2FF] hover:bg-white/5"}`}
          >
            Pricing
          </button>

          {/* Results */}
          <button 
            onClick={() => handleNavClick("/results")}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${currentPath === "/results" ? "text-[#00C2FF] font-semibold bg-[#176BFF]/10" : "hover:text-[#00C2FF] hover:bg-white/5"}`}
          >
            Results
          </button>

          {/* About */}
          <button 
            onClick={() => handleNavClick("/about")}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${currentPath === "/about" ? "text-[#00C2FF] font-semibold bg-[#176BFF]/10" : "hover:text-[#00C2FF] hover:bg-white/5"}`}
          >
            About
          </button>

          {/* Brand Assets */}
          <button 
            onClick={() => {
              if (openBrandAssetsModal) {
                openBrandAssetsModal();
              } else {
                handleNavClick("/brand-assets");
              }
            }}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${currentPath === "/brand-assets" ? "text-[#00C2FF] font-semibold bg-[#176BFF]/10" : "hover:text-[#00C2FF] hover:bg-white/5"}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse"></span>
            <span>Brand Assets</span>
          </button>

        </nav>

        {/* CTA & Phone Actions */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Floating Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#8D9AAF] hover:text-white transition-all border border-white/10 flex items-center gap-1.5 cursor-pointer"
              title="Select Language / Cambiar Idioma"
              aria-label="Select Preferred Language"
            >
              <Globe className="w-4 h-4 text-[#00C2FF]" />
              <span className="text-[11px] font-heading font-semibold text-white">
                {selectedLangObj.flag} {selectedLangObj.code.toUpperCase()}
              </span>
              <ChevronDown className={`w-3 h-3 text-[#8D9AAF] transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-[#07152D] rounded-xl border border-[#00C2FF]/30 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 glass-panel">
                <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#00C2FF] px-2.5 py-1 mb-1 border-b border-white/10">
                  Select Language
                </div>
                <div className="space-y-1 max-h-60 overflow-y-auto">
                  {LANGUAGES.map((lang) => {
                    const isSelected = currentLangCode === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleSelectLanguage(lang)}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-[#176BFF]/20 text-[#00C2FF] font-bold"
                            : "text-[#8D9AAF] hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.nativeName}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#00C2FF]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Theme Mode Toggle Button */}
          <button
            onClick={() => {
              playClickSound();
              toggleTheme();
            }}
            className="p-2 rounded-full glass-pill hover:border-white/30 text-[#8D9AAF] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            title={theme === "dark" ? "Switch to High-Contrast Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-[#176BFF]" />
            )}
            <span className="text-[11px] font-heading font-semibold hidden lg:inline">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>

          <a 
            href="tel:17185002221"
            onClick={() => playClickSound()}
            className="flex items-center gap-2 text-xs font-semibold text-[#8D9AAF] hover:text-white transition-colors glass-pill px-3.5 py-2 rounded-full"
          >
            <Phone className="w-3.5 h-3.5 text-[#00C2FF]" />
            <span>+1 718-500-2221</span>
          </a>

          {openProposalModal && (
            <button
              onClick={() => {
                playClickSound();
                openProposalModal();
              }}
              className="px-3.5 py-2 rounded-full glass-pill hover:border-[#00C2FF]/50 text-[#00C2FF] hover:text-white text-xs font-heading font-semibold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
              title="Generate Custom AI System Scope & Proposal"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#70D44B]" />
              <span>Scope Builder</span>
            </button>
          )}

          <button
            onClick={() => {
              playClickSound();
              openAuditModal();
            }}
            className="relative group overflow-hidden rounded-full p-[1px] font-heading font-bold text-xs tracking-wider uppercase cursor-pointer hover:shadow-[0_0_30px_rgba(0,194,255,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] transition-all duration-300"></span>
            <span className="relative flex items-center gap-2 bg-[#07152D] px-5 py-2.5 rounded-full text-white group-hover:bg-transparent transition-colors duration-300">
              <span>Book Free AI Audit</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00C2FF] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>

        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/5 text-[#F7F9FC] border border-white/10 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00C2FF]" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] bg-[#07152D]/98 backdrop-blur-2xl border-b border-[#176BFF]/30 p-6 shadow-2xl max-h-[calc(100vh-95px)] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            
            {/* Mobile Header Certification Badge Box */}
            <div className="p-3 bg-[#040D1A] rounded-xl border border-[#176BFF]/30 flex flex-col gap-2">
              <div className="text-[11px] font-heading font-extrabold text-white leading-tight">
                Powered By <span className="text-[#00C2FF]">Universal Tech INC</span>
              </div>
              <div className="text-[10px] text-[#8D9AAF] leading-tight">
                ( A Service-Disabled Veteran-Owned Certified )
              </div>
              <div className="flex items-center gap-2 pt-1">
                <SbaCertifiedBadge variant="compact" showText={false} />
                <NysCertifiedBadge variant="pill" />
              </div>
            </div>
            
            <button
              onClick={() => handleNavClick("/")}
              className="w-full text-left py-2.5 text-base font-heading font-semibold text-white border-b border-white/10"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick("/services")}
              className="w-full text-left py-2.5 text-base font-heading font-semibold text-[#00C2FF] border-b border-white/10 flex justify-between items-center"
            >
              <span>Services (12 Solutions)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleNavClick("/industries")}
              className="w-full text-left py-2.5 text-base font-heading font-semibold text-[#70D44B] border-b border-white/10 flex justify-between items-center"
            >
              <span>Industries (20 Sectors)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleNavClick("/how-it-works")}
              className="w-full text-left py-2.5 text-base font-heading font-semibold text-white border-b border-white/10"
            >
              How It Works
            </button>

            <button
              onClick={() => handleNavClick("/pricing")}
              className="w-full text-left py-2.5 text-base font-heading font-semibold text-white border-b border-white/10"
            >
              Pricing
            </button>

            <button
              onClick={() => handleNavClick("/results")}
              className="w-full text-left py-2.5 text-base font-heading font-semibold text-white border-b border-white/10"
            >
              Results & Proof
            </button>

            <button
              onClick={() => handleNavClick("/about")}
              className="w-full text-left py-2.5 text-base font-heading font-semibold text-white border-b border-white/10"
            >
              About AI Automation NY
            </button>

            <button
              onClick={() => handleNavClick("/contact")}
              className="w-full text-left py-2.5 text-base font-heading font-semibold text-white border-b border-white/10"
            >
              Contact Us
            </button>

            <button
              onClick={() => {
                toggleTheme();
              }}
              className="w-full text-left py-2.5 text-base font-heading font-semibold text-white border-b border-white/10 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#176BFF]" />}
                <span>Theme: {theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
              </span>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-md text-[#00C2FF]">Toggle</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (openBrandAssetsModal) {
                  openBrandAssetsModal();
                } else {
                  handleNavClick("/brand-assets");
                }
              }}
              className="w-full text-left py-2.5 text-base font-heading font-semibold text-[#00C2FF] border-b border-white/10 flex items-center justify-between"
            >
              <span>Brand Assets & Tagline Specs</span>
              <Sparkles className="w-4 h-4 text-[#00C2FF]" />
            </button>

            <div className="pt-4 space-y-3">
              <a
                href="tel:17185002221"
                className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl font-medium text-sm text-white"
              >
                <Phone className="w-4 h-4 text-[#00C2FF]" />
                <span>Call +1 718-500-2221</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuditModal();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] rounded-xl font-heading font-bold text-sm text-white shadow-lg shadow-[#176BFF]/30 flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Book Free AI Automation Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
