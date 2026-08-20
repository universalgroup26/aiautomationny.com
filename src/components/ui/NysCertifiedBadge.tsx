import React from "react";

interface NysCertifiedBadgeProps {
  variant?: "pill" | "compact" | "inline";
  className?: string;
}

export const NysCertifiedBadge: React.FC<NysCertifiedBadgeProps> = ({
  variant = "pill",
  className = "",
}) => {
  if (variant === "compact" || variant === "inline") {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B2545] border-t-2 border-[#D92525] border-x border-b border-[#00C2FF]/30 text-white shadow-md transition-transform hover:scale-105 ${className}`}
        title="New York State Certified Service-Disabled Veteran-Owned Business (NYS SDVOB)"
      >
        <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse shrink-0" />
        <div className="flex flex-col text-left leading-none">
          <span className="text-[9px] font-heading font-black text-white tracking-tight uppercase">
            NYS Certified SDVOB
          </span>
          <span className="text-[7.5px] text-[#8D9AAF] tracking-tight">
            New York State Official
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex flex-col items-center justify-center px-4 py-1.5 rounded-full bg-[#0B2545] border-t-2 border-[#D92525] border-x border-b border-[#176BFF]/40 text-white shadow-lg transition-all hover:border-[#00C2FF] hover:shadow-[#00C2FF]/20 group cursor-pointer ${className}`}
      title="New York State Certified Service-Disabled Veteran-Owned Business"
    >
      <span className="text-[11px] sm:text-xs font-heading font-extrabold text-white tracking-tight leading-tight text-center">
        New York State Certified
      </span>
      <span className="text-[9px] sm:text-[10px] font-heading font-bold text-[#00C2FF] tracking-tight leading-tight text-center uppercase">
        Service-Disabled Veteran-Owned Business
      </span>
    </div>
  );
};
