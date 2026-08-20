import React from "react";
import { ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

export interface IntegrationTool {
  name: string;
  category: string;
  badge: string;
  logoSvg: React.ReactNode;
}

export const INTEGRATION_TOOLS: IntegrationTool[] = [
  {
    name: "GoHighLevel",
    category: "CRM & Pipelines",
    badge: "2-Way Calendar & CRM",
    logoSvg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    category: "Voice & Text AI",
    badge: "GPT-4o & Realtime API",
    logoSvg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5355-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0805.0805 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 8.6366a4.4708 4.4708 0 0 1 2.3372-1.973l-.0047.161 0 5.5167a.7853.7853 0 0 0 .3927.6813l5.8333 3.3685-2.02 1.1686a.0758.0758 0 0 1-.071 0l-4.8304-2.7913A4.4944 4.4944 0 0 1 2.3408 8.6366zm16.5963 3.8558L13.0943 9.124l2.02-1.1638a.0758.0758 0 0 1 .071 0l4.8304 2.7913a4.4944 4.4944 0 0 1-.6768 8.1042v-5.6773a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7582a.7712.7712 0 0 0-.7806 0l-5.8428 3.3685V7.6622a.0805.0805 0 0 1 .0332-.0615l4.8019-2.7723a4.4992 4.4992 0 0 1 6.6802 4.6657zM8.3065 12.863l-2.02-1.1638a.0805.0805 0 0 1-.038-.052V6.0645a4.504 4.504 0 0 1 7.3757-3.4537l-.142.0805-4.7735 2.7582a.7948.7948 0 0 0-.3927.6813v6.7322zm1.1132-2.8851L12 8.4419l2.5803 1.536-2.5803 1.4886-2.5803-1.4886z" />
      </svg>
    ),
  },
  {
    name: "Zapier",
    category: "Workflow Sync",
    badge: "5,000+ App Connectors",
    logoSvg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Twilio",
    category: "Voice & Telephony",
    badge: "Local NYC Phone Gateway",
    logoSvg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-3 6a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm6 0a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm-3 6a3 3 0 1 1-3 3 3 3 0 0 1 3-3z" />
      </svg>
    ),
  },
  {
    name: "Google Calendar",
    category: "Scheduling Sync",
    badge: "Instant 2-Way Booking",
    logoSvg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    category: "Payments",
    badge: "Automated Invoicing",
    logoSvg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-3.928C17.728 2.296 15.114 1.8 12.39 1.8 7.42 1.8 4.02 4.39 4.02 8.358c0 5.485 7.15 5.86 7.15 8.783 0 .96-.867 1.488-2.227 1.488-2.247 0-5.114-1.042-6.84-1.956l-.92 4.004C3.02 21.6 5.92 22.2 8.84 22.2c5.31 0 8.78-2.5 8.78-6.62 0-5.748-7.644-6.07-7.644-8.83z" />
      </svg>
    ),
  },
  {
    name: "Make.com",
    category: "Logic Engine",
    badge: "Multi-Step Webhooks",
    logoSvg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
        <path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z" />
      </svg>
    ),
  },
  {
    name: "HubSpot",
    category: "Enterprise CRM",
    badge: "Lead & Contact Sync",
    logoSvg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export const TrustedByBar: React.FC = () => {
  // Duplicate tools array for seamless infinite marquee loop
  const marqueeItems = [...INTEGRATION_TOOLS, ...INTEGRATION_TOOLS, ...INTEGRATION_TOOLS];

  return (
    <div className="w-full bg-[#050D1D] border-y border-[#176BFF]/20 py-8 relative overflow-hidden">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07152D] via-transparent to-[#07152D] z-10 pointer-events-none w-24 sm:w-40 left-0" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#07152D] via-transparent to-[#07152D] z-10 pointer-events-none w-24 sm:w-40 right-0 left-auto" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center space-y-1">
        <div className="inline-flex items-center gap-2 text-[11px] font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/20">
          <ShieldCheck className="w-3.5 h-3.5" /> ENTERPRISE INTEGRATIONS & ECOSYSTEM
        </div>
        <h3 className="text-xs sm:text-sm font-heading font-bold text-[#8D9AAF] tracking-wider uppercase">
          SEAMLESS NATIVE CONNECTIVITY WITH YOUR EXISTING TECH STACK
        </h3>
      </div>

      {/* Infinite Marquee Ticker Track */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-2">
          {marqueeItems.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className="flex items-center gap-3 bg-[#0A1D3C]/80 hover:bg-[#0D1F3D] px-4 py-2.5 rounded-2xl border border-[#176BFF]/25 hover:border-[#00C2FF]/50 transition-all duration-300 group cursor-pointer shrink-0 glass-panel shadow-md hover:shadow-[#176BFF]/20 hover:-translate-y-0.5"
            >
              {/* Icon Container with Grayscale to Color Transition */}
              <div className="w-9 h-9 rounded-xl bg-[#176BFF]/15 border border-[#176BFF]/30 flex items-center justify-center text-white/70 group-hover:text-[#00C2FF] group-hover:scale-110 group-hover:bg-[#176BFF]/30 transition-all duration-300">
                {tool.logoSvg}
              </div>

              {/* Tool Text & Badge */}
              <div className="flex flex-col text-left">
                <span className="text-xs font-heading font-bold text-white group-hover:text-[#00C2FF] transition-colors flex items-center gap-1.5">
                  {tool.name}
                  <Sparkles className="w-3 h-3 text-[#70D44B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-[10px] font-mono text-[#8D9AAF] group-hover:text-white/90 transition-colors">
                  {tool.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
