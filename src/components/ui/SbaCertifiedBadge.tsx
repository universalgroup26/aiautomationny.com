import React from "react";

interface SbaCertifiedBadgeProps {
  variant?: "header" | "compact" | "full" | "inline";
  className?: string;
  showText?: boolean;
}

export const SbaCertifiedBadge: React.FC<SbaCertifiedBadgeProps> = ({
  variant = "header",
  className = "",
  showText = true,
}) => {
  if (variant === "compact" || variant === "inline") {
    return (
      <div
        className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 transition-all ${className}`}
        title="U.S. Small Business Administration - Service-Disabled Veteran-Owned Certified (SDVOSB)"
      >
        {/* Crisp SBA SDVOSB Shield/Card Badge */}
        <div className="w-6 h-7 rounded bg-white p-0.5 flex flex-col justify-between items-center shadow-md shrink-0 border border-slate-200">
          <div className="flex-1 w-full flex flex-col items-center justify-center pt-0.5">
            <span className="font-heading font-black text-[7px] leading-none text-[#0B2545] tracking-tighter">
              SBA
            </span>
            <span className="text-[3px] text-[#0B2545] leading-none mt-0.5 text-center font-bold">
              U.S. SBA
            </span>
          </div>
          <div className="w-full bg-[#0B2545] rounded-b-[2px] py-[1px] text-center">
            <span className="text-[3.5px] font-black text-white leading-none block uppercase tracking-tighter">
              SDVOSB
            </span>
          </div>
        </div>

        {showText && (
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] font-heading font-extrabold text-white tracking-tight flex items-center gap-1">
              UNIVERSAL TECH INC
            </span>
            <span className="text-[8px] text-[#00C2FF] font-semibold tracking-tight">
              SBA Certified SDVOSB
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}
      title="UNIVERSAL TECH INC - U.S. Small Business Administration Service-Disabled Veteran-Owned Certified"
    >
      {/* Official SBA SDVOSB Card Graphic */}
      <div className="relative w-8 h-10 sm:w-9 sm:h-11 rounded-md bg-white border border-slate-300 shadow-md flex flex-col justify-between overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-200">
        {/* Top White Section */}
        <div className="flex-1 p-0.5 flex flex-col items-center justify-center text-center">
          {/* Square Frame with SBA */}
          <div className="w-6 h-4 sm:w-7 sm:h-5 border border-[#0B2545] rounded-[1px] flex items-center justify-center relative p-[1px]">
            <span className="font-heading font-black text-[9px] sm:text-[10px] text-[#0B2545] tracking-tighter leading-none">
              SBA
            </span>
            {/* Red accent line under S-B */}
            <div className="absolute bottom-[1px] left-[2px] w-2.5 h-[1.5px] bg-[#D92525]" />
          </div>
          <span className="text-[3.5px] sm:text-[4px] font-bold text-[#0B2545] leading-tight mt-[1px]">
            U.S. Small Business
          </span>
          <span className="text-[3px] sm:text-[3.5px] text-[#0B2545] leading-none">
            Administration
          </span>
        </div>

        {/* Bottom Dark Blue Banner */}
        <div className="w-full bg-[#0B2545] py-[1.5px] px-[1px] text-center border-t border-[#0B2545]">
          <span className="text-[3.5px] sm:text-[4px] font-black text-white block leading-[1.1] uppercase tracking-tighter">
            SERVICE-DISABLED
          </span>
          <span className="text-[3.5px] sm:text-[4px] font-black text-white block leading-[1.1] uppercase tracking-tighter">
            VETERAN-OWNED
          </span>
          <span className="text-[3.5px] sm:text-[4px] font-black text-[#00C2FF] block leading-[1.1] uppercase tracking-tighter">
            CERTIFIED
          </span>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[11px] sm:text-xs font-heading font-extrabold text-white tracking-tight">
            UNIVERSAL TECH INC
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[9px] font-heading font-bold text-[#00C2FF]">
              SBA CERTIFIED
            </span>
            <span className="text-[8px] font-heading font-bold text-[#70D44B] bg-[#70D44B]/10 px-1.5 py-0.5 rounded border border-[#70D44B]/30 uppercase">
              SDVOSB
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] text-[#8D9AAF] tracking-tight mt-0.5">
            Service-Disabled Veteran-Owned Small Business
          </span>
        </div>
      )}
    </div>
  );
};
