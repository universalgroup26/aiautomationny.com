import React, { useState, useEffect } from "react";
import { ArrowUp, Bot, Sparkles, X, Phone, Volume2, VolumeX, FileText } from "lucide-react";
import { DemoChatWidget } from "../demos/DemoChatWidget";
import { trackCTAClick } from "../../lib/dataLayer";
import { isSoundMuted, toggleSoundMuted, playClickSound } from "../../lib/audioFeedback";

interface FloatingActionsProps {
  openAuditModal: () => void;
  openProposalModal?: () => void;
  navigate?: (path: string) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ openAuditModal, openProposalModal, navigate }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [unreadBadge, setUnreadBadge] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [soundMutedState, setSoundMutedState] = useState(false);

  useEffect(() => {
    setSoundMutedState(isSoundMuted());

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    playClickSound();
    trackCTAClick("Back to Top", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleChat = () => {
    playClickSound();
    setIsChatOpen(!isChatOpen);
    if (unreadBadge) setUnreadBadge(false);
  };

  const handleToggleSound = () => {
    const isNowMuted = toggleSoundMuted();
    setSoundMutedState(isNowMuted);
    if (!isNowMuted) {
      playClickSound();
    }
  };

  // SVG circle calculation
  const circleRadius = 18;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Floating Chat Assistant Drawer */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[9990] w-[92vw] sm:w-[380px] max-h-[82vh] animate-fade-in shadow-2xl">
          <div className="relative">
            <button
              onClick={() => {
                playClickSound();
                setIsChatOpen(false);
              }}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-[#07152D] border border-[#176BFF]/40 text-white flex items-center justify-center hover:bg-[#176BFF] transition-all shadow-lg cursor-pointer"
              aria-label="Close AI Chat"
            >
              <X className="w-4 h-4" />
            </button>
            <DemoChatWidget />
          </div>
        </div>
      )}

      {/* Floating Action Button Group */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-[9980] flex flex-col items-end gap-2.5 pointer-events-none">
        
        {/* Sound FX Toggle Button */}
        <button
          onClick={handleToggleSound}
          className="pointer-events-auto p-2.5 rounded-full bg-[#07152D]/90 hover:bg-[#176BFF]/30 text-[#8D9AAF] hover:text-[#00C2FF] border border-white/10 shadow-lg backdrop-blur-md transition-all cursor-pointer"
          aria-label={soundMutedState ? "Enable Interactive Sound Effects" : "Mute Sound Effects"}
          title={soundMutedState ? "Enable UI Sound Effects" : "Mute UI Sound Effects"}
        >
          {soundMutedState ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#70D44B]" />}
        </button>

        {/* Scroll To Top Button with Circular Progress Ring */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto relative p-3 rounded-full bg-[#0A1D3C]/95 hover:bg-[#176BFF] text-[#A1B3D3] hover:text-white border border-[#176BFF]/40 hover:border-[#00C2FF]/80 shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#00C2FF] cursor-pointer"
            aria-label="Scroll back to top of page"
            title={`Scroll to top (${Math.round(scrollProgress)}%)`}
          >
            {/* SVG Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r={circleRadius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2.5"
              />
              <circle
                cx="22"
                cy="22"
                r={circleRadius}
                fill="none"
                stroke="#00C2FF"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-150"
              />
            </svg>

            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-[#00C2FF] group-hover:text-white relative z-10" />
          </button>
        )}

        {/* Quick Call Button on Mobile */}
        <a
          href="tel:+17185002221"
          className="pointer-events-auto sm:hidden flex items-center justify-center p-3.5 rounded-full bg-[#0D1F3D] border border-[#70D44B]/40 text-[#70D44B] shadow-xl hover:bg-[#70D44B] hover:text-[#07152D] transition-all cursor-pointer"
          title="Direct Phone Line: (718) 500-2221"
          onClick={() => trackCTAClick("Floating Phone Call", window.location.pathname)}
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Proposal Scope Builder Quick Button */}
        {openProposalModal && (
          <button
            onClick={() => {
              playClickSound();
              openProposalModal();
            }}
            className="pointer-events-auto hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0D1F3D] hover:bg-[#176BFF]/40 border border-[#00C2FF]/30 text-[#00C2FF] font-heading font-semibold text-xs tracking-wider uppercase shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            title="Open Interactive Proposal Configurator"
          >
            <FileText className="w-3.5 h-3.5 text-[#70D44B]" />
            <span>Scope Builder</span>
          </button>
        )}

        {/* Quick Audit Button */}
        <button
          onClick={() => {
            playClickSound();
            openAuditModal();
          }}
          className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#176BFF] to-[#00C2FF] hover:from-[#1553C9] hover:to-[#00A3D9] text-white font-heading font-semibold text-xs tracking-wider uppercase shadow-lg hover:shadow-[#00C2FF]/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>Get Free AI Audit</span>
        </button>

        {/* Floating AI Chat / Assistant Trigger */}
        <button
          onClick={toggleChat}
          className="pointer-events-auto relative p-3.5 sm:p-4 rounded-full bg-gradient-to-br from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white shadow-2xl hover:shadow-[#00C2FF]/50 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center group cursor-pointer"
          aria-label="Open AI Assistant Chat"
          title="Talk with Sarah — 24/7 AI Receptionist"
        >
          <div className="relative">
            {isChatOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Bot className="w-6 h-6 animate-bounce-slow" />
            )}
          </div>

          {/* Unread Ping Indicator */}
          {!isChatOpen && unreadBadge && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#70D44B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#70D44B] border-2 border-[#07152D]"></span>
            </span>
          )}
        </button>
      </div>
    </>
  );
};
