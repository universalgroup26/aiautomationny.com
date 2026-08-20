import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "header" | "footer" | "icon" | "full" | "stacked";
  showTagline?: boolean;
  taglineText?: string;
  animated?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = "md",
  variant = "header",
  showTagline = false,
  taglineText = "Architects of Autonomous Enterprise",
  animated = false
}) => {
  const sizeConfig = {
    xs: {
      icon: "w-7 h-7",
      svg: "w-4 h-4",
      title: "text-sm",
      sub: "text-[8px]",
      tagline: "text-[9px]"
    },
    sm: {
      icon: "w-8 h-8",
      svg: "w-4.5 h-4.5",
      title: "text-base",
      sub: "text-[9px]",
      tagline: "text-[10px]"
    },
    md: {
      icon: "w-10 h-10",
      svg: "w-6 h-6",
      title: "text-xl",
      sub: "text-[10px]",
      tagline: "text-[11px]"
    },
    lg: {
      icon: "w-12 h-12",
      svg: "w-7 h-7",
      title: "text-2xl sm:text-3xl",
      sub: "text-xs",
      tagline: "text-xs"
    },
    xl: {
      icon: "w-16 h-16 sm:w-20 sm:h-20",
      svg: "w-10 h-10 sm:w-12 sm:h-12",
      title: "text-3xl sm:text-5xl",
      sub: "text-xs sm:text-sm",
      tagline: "text-sm sm:text-base"
    }
  };

  const currentSize = sizeConfig[size];

  // SVG Custom AI Shield Emblem Mark
  const LogoEmblem = (
    <div
      className={`relative flex items-center justify-center ${currentSize.icon} rounded-xl bg-gradient-to-br from-[#176BFF] via-[#00C2FF] to-[#70D44B] p-[2px] shadow-lg shadow-[#176BFF]/30 transition-transform duration-300 group-hover:scale-105 shrink-0 ${
        animated ? "animate-pulse" : ""
      }`}
    >
      <div className="w-full h-full bg-[#07152D] rounded-[10px] flex items-center justify-center overflow-hidden relative">
        {/* Subtle grid background inside logo icon */}
        <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:6px_6px] opacity-25"></div>

        <svg
          className={`${currentSize.svg} text-[#00C2FF] relative z-10 filter drop-shadow-[0_0_8px_rgba(0,194,255,0.7)]`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cybernetic Shield Outer Frame */}
          <path
            d="M16 2L4 7V15C4 22.2 9.1 28.8 16 30C22.9 28.8 28 22.2 28 15V7L16 2Z"
            stroke="url(#brandGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Neural Node Connections */}
          <path
            d="M16 8L22 12V18L16 22L10 18V12L16 8Z"
            stroke="#00C2FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Core AI Diamond */}
          <circle cx="16" cy="15" r="3" fill="#70D44B" />
          <path d="M16 8V12" stroke="#70D44B" strokeWidth="1.5" />
          <path d="M16 18V22" stroke="#70D44B" strokeWidth="1.5" />
          <path d="M10 15H13" stroke="#00C2FF" strokeWidth="1.5" />
          <path d="M19 15H22" stroke="#00C2FF" strokeWidth="1.5" />

          <defs>
            <linearGradient
              id="brandGrad"
              x1="4"
              y1="2"
              x2="28"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#176BFF" />
              <stop offset="0.5" stopColor="#00C2FF" />
              <stop offset="1" stopColor="#70D44B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );

  if (variant === "icon") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {LogoEmblem}
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {LogoEmblem}
        <div className="mt-3 flex flex-col items-center">
          <span className={`font-heading font-black tracking-tight text-white ${currentSize.title} flex items-center justify-center gap-2`}>
            AI AUTOMATION <span className="text-[#00C2FF] drop-shadow-[0_0_10px_rgba(0,194,255,0.4)]">NY</span>
          </span>
          <span className="font-sans font-bold uppercase tracking-[0.18em] text-[#00C2FF] text-xs sm:text-sm mt-1">
            UNIVERSAL TECH INC
          </span>
          {showTagline && (
            <span className={`font-sans font-medium uppercase tracking-[0.2em] text-[#8D9AAF] mt-1 ${currentSize.tagline}`}>
              {taglineText}
            </span>
          )}
          <span className={`font-sans font-medium uppercase tracking-[0.2em] text-[#8D9AAF]/70 mt-0.5 ${currentSize.sub}`}>
            aiautomationny.com
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {LogoEmblem}

      <div className="flex flex-col leading-tight">
        <span className={`font-heading font-extrabold tracking-tight text-white ${currentSize.title} flex items-center gap-1.5`}>
          AI AUTOMATION <span className="text-[#00C2FF] font-black drop-shadow-[0_0_8px_rgba(0,194,255,0.3)]">NY</span>
        </span>
        
        <span className="font-sans font-bold uppercase tracking-[0.15em] text-[#00C2FF] text-[9px] sm:text-[11px] flex items-center gap-1.5 mt-0.5">
          <span>UNIVERSAL TECH INC</span>
          <span className="text-[#8D9AAF] font-normal text-[8px] sm:text-[9px]">• SDVOSB</span>
        </span>

        {showTagline ? (
          <span className={`font-sans font-semibold uppercase tracking-[0.15em] text-[#8D9AAF] mt-0.5 ${currentSize.tagline}`}>
            {taglineText}
          </span>
        ) : (
          <span className={`font-sans font-medium uppercase tracking-[0.2em] text-[#8D9AAF]/70 mt-0.5 ${currentSize.sub}`}>
            aiautomationny.com
          </span>
        )}
      </div>
    </div>
  );
};
