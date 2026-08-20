import React from "react";
import { CheckCircle2, ShieldCheck, Building2, Cpu, Lock, Sparkles, Award } from "lucide-react";

interface TrustIndicatorsProps {
  variant?: "cards" | "banner" | "compact";
  className?: string;
}

export const TrustIndicators: React.FC<TrustIndicatorsProps> = ({
  variant = "cards",
  className = "",
}) => {
  const indicators = [
    {
      id: "verified-ai",
      title: "Verified AI Partner",
      subtitle: "Certified Neural Models & Enterprise Integration",
      icon: Cpu,
      accentColor: "#00C2FF",
      badgeText: "Enterprise Tier",
      badgeBg: "bg-[#00C2FF]/10 text-[#00C2FF] border-[#00C2FF]/30",
    },
    {
      id: "nyc-specialist",
      title: "NYC Local Business Specialist",
      subtitle: "Dedicated Tri-State Deployment & On-site Support",
      icon: Building2,
      accentColor: "#D92525",
      badgeText: "NYC HQ Certified",
      badgeBg: "bg-[#D92525]/10 text-[#FF4D4D] border-[#D92525]/30",
    },
    {
      id: "secure-data",
      title: "Secure Data Handling",
      subtitle: "SOC-2 Ready, HIPAA Compliant & 256-Bit Encrypted",
      icon: ShieldCheck,
      accentColor: "#70D44B",
      badgeText: "256-Bit Encrypted",
      badgeBg: "bg-[#70D44B]/10 text-[#70D44B] border-[#70D44B]/30",
    },
  ];

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-3 py-2 ${className}`}>
        {indicators.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A1D3C]/80 border border-[#176BFF]/25 text-white text-xs shadow-md backdrop-blur-sm transition-all hover:border-[#00C2FF]/50"
            >
              <Icon className="w-3.5 h-3.5" style={{ color: item.accentColor }} />
              <span className="font-heading font-bold text-white text-[11px] sm:text-xs">
                {item.title}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div
        className={`w-full bg-gradient-to-r from-[#040D1A] via-[#0A1D3C] to-[#040D1A] border-y border-[#176BFF]/20 py-4 px-4 ${className}`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center md:text-left">
          {indicators.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex items-center gap-3 group">
                <div
                  className="w-10 h-10 rounded-xl bg-[#030B18] border border-white/10 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform"
                  style={{ borderColor: `${item.accentColor}40` }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.accentColor }} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs sm:text-sm font-heading font-extrabold text-white tracking-tight">
                      {item.title}
                    </h4>
                    <span
                      className={`text-[9px] font-heading font-bold px-1.5 py-0.5 rounded border ${item.badgeBg}`}
                    >
                      {item.badgeText}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#8D9AAF] leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {indicators.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="relative group p-5 rounded-2xl bg-gradient-to-b from-[#0B2545] to-[#040D1A] border border-[#176BFF]/30 hover:border-[#00C2FF]/60 transition-all duration-300 shadow-xl hover:shadow-[#00C2FF]/10 overflow-hidden"
            >
              {/* Glow Accent */}
              <div
                className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: item.accentColor }}
              />

              <div className="flex items-start justify-between gap-3 mb-3">
                <div
                  className="w-11 h-11 rounded-xl bg-[#030B18] border flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform"
                  style={{ borderColor: `${item.accentColor}50` }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.accentColor }} />
                </div>
                <span
                  className={`text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.badgeBg}`}
                >
                  {item.badgeText}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-heading font-extrabold text-white mb-1 group-hover:text-[#00C2FF] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#8D9AAF] leading-relaxed">
                {item.subtitle}
              </p>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-medium text-[#00C2FF]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Guaranteed Compliance</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
