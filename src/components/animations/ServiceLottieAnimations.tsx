import React from "react";
import Lottie from "lottie-react";

// Lottie JSON 1: Automated Chat Flow Animation
const chatFlowAnimationData = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 180,
  w: 300,
  h: 300,
  nm: "Chat Flow",
  ddd: 0,
  assets: [],
  layers: [
    // Background Glow Circle
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Glow",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [30] }, { t: 90, s: [70] }, { t: 180, s: [30] }] },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 180, s: [360] }] },
        p: { a: 0, k: [150, 150, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [220, 220] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.09, 0.42, 1, 1] },
              o: { a: 0, k: [100] }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: [100] } }
          ]
        }
      ]
    },
    // Message Bubble 1 (User Inbound)
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "User Message",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [0] }, { t: 20, s: [100] }, { t: 160, s: [100] }, { t: 180, s: [0] }] },
        p: { a: 1, k: [{ t: 0, s: [100, 90, 0] }, { t: 30, s: [120, 90, 0] }] },
        s: { a: 1, k: [{ t: 0, s: [70, 70, 100] }, { t: 30, s: [100, 100, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [160, 44] },
              r: { a: 0, k: 12 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.05, 0.11, 0.23, 1] },
              o: { a: 0, k: [100] }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.09, 0.42, 1, 1] },
              w: { a: 0, k: 2 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: [100] } }
          ]
        }
      ]
    },
    // AI Response Bubble
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "AI Reply",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 40, s: [0] }, { t: 60, s: [100] }, { t: 160, s: [100] }, { t: 180, s: [0] }] },
        p: { a: 1, k: [{ t: 40, s: [180, 160, 0] }, { t: 70, s: [170, 160, 0] }] },
        s: { a: 1, k: [{ t: 40, s: [70, 70, 100] }, { t: 70, s: [100, 100, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [170, 48] },
              r: { a: 0, k: 14 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0, 0.76, 1, 1] },
              o: { a: 0, k: [100] }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: [100] } }
          ]
        }
      ]
    },
    // Pulse Success Badge
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Success Badge",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 80, s: [0] }, { t: 100, s: [100] }, { t: 160, s: [100] }, { t: 180, s: [0] }] },
        p: { a: 0, k: [150, 230, 0] },
        s: { a: 1, k: [{ t: 80, s: [50, 50, 100] }, { t: 100, s: [100, 100, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [40, 40] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.44, 0.83, 0.29, 1] },
              o: { a: 0, k: [100] }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: [100] } }
          ]
        }
      ]
    }
  ]
};

// Lottie JSON 2: CRM & Calendar Data Sync Animation
const crmSyncAnimationData = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 180,
  w: 300,
  h: 300,
  nm: "CRM Sync",
  ddd: 0,
  assets: [],
  layers: [
    // Outer Orbit Ring
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Orbit",
      sr: 1,
      ks: {
        o: { a: 0, k: [60] },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 180, s: [360] }] },
        p: { a: 0, k: [150, 150, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [190, 190] }
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0.76, 1, 1] },
              w: { a: 0, k: 3 },
              d: [{ n: "d", v: { a: 0, k: [12, 12] } }]
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: [100] } }
          ]
        }
      ]
    },
    // Center Hub Node
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Center Hub",
      sr: 1,
      ks: {
        o: { a: 0, k: [100] },
        p: { a: 0, k: [150, 150, 0] },
        s: { a: 1, k: [{ t: 0, s: [90, 90, 100] }, { t: 90, s: [105, 105, 100] }, { t: 180, s: [90, 90, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [70, 70] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.09, 0.42, 1, 1] },
              o: { a: 0, k: [100] }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: [100] } }
          ]
        }
      ]
    },
    // Orbiting Satellite Node 1 (CRM)
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Sat CRM",
      sr: 1,
      ks: {
        o: { a: 0, k: [100] },
        r: { a: 1, k: [{ t: 0, s: [0] }, { t: 180, s: [360] }] },
        p: { a: 0, k: [150, 150, 0] },
        a: { a: 0, k: [0, -95, 0] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [38, 38] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.44, 0.83, 0.29, 1] },
              o: { a: 0, k: [100] }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: [100] } }
          ]
        }
      ]
    },
    // Orbiting Satellite Node 2 (Calendar)
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Sat Calendar",
      sr: 1,
      ks: {
        o: { a: 0, k: [100] },
        r: { a: 1, k: [{ t: 0, s: [180] }, { t: 180, s: [540] }] },
        p: { a: 0, k: [150, 150, 0] },
        a: { a: 0, k: [0, -95, 0] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [38, 38] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0, 0.76, 1, 1] },
              o: { a: 0, k: [100] }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: [100] } }
          ]
        }
      ]
    }
  ]
};

// Lottie JSON 3: Voice Receptionist Calling Animation
const voiceCallAnimationData = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 180,
  w: 300,
  h: 300,
  nm: "Voice Call",
  ddd: 0,
  assets: [],
  layers: [
    // Pulsing Wave Ring 1
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Wave 1",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [100] }, { t: 90, s: [0] }, { t: 180, s: [100] }] },
        p: { a: 0, k: [150, 150, 0] },
        s: { a: 1, k: [{ t: 0, s: [50, 50, 100] }, { t: 90, s: [140, 140, 100] }, { t: 180, s: [50, 50, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [150, 150] }
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0.76, 1, 1] },
              w: { a: 0, k: 2 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: [100] } }
          ]
        }
      ]
    },
    // Pulsing Wave Ring 2
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Wave 2",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 30, s: [100] }, { t: 120, s: [0] }, { t: 180, s: [100] }] },
        p: { a: 0, k: [150, 150, 0] },
        s: { a: 1, k: [{ t: 30, s: [50, 50, 100] }, { t: 120, s: [160, 160, 100] }, { t: 180, s: [50, 50, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [150, 150] }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.44, 0.83, 0.29, 1] },
              w: { a: 0, k: 2 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: [100] } }
          ]
        }
      ]
    },
    // Center Call Core
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Call Core",
      sr: 1,
      ks: {
        o: { a: 0, k: [100] },
        p: { a: 0, k: [150, 150, 0] },
        s: { a: 1, k: [{ t: 0, s: [90, 90, 100] }, { t: 90, s: [105, 105, 100] }, { t: 180, s: [90, 90, 100] }] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "el",
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [80, 80] }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.09, 0.42, 1, 1] },
              o: { a: 0, k: [100] }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: [100] } }
          ]
        }
      ]
    }
  ]
};

export type AnimationType = "chat" | "crm" | "voice";

interface ServiceLottieAnimationProps {
  type: AnimationType;
  className?: string;
  badgeLabel?: string;
}

export const ServiceLottieAnimation: React.FC<ServiceLottieAnimationProps> = ({
  type,
  className = "",
  badgeLabel = "Live Vector System Animation",
}) => {
  const getAnimationData = () => {
    switch (type) {
      case "chat":
        return chatFlowAnimationData;
      case "crm":
        return crmSyncAnimationData;
      case "voice":
        return voiceCallAnimationData;
      default:
        return chatFlowAnimationData;
    }
  };

  return (
    <div className={`relative bg-[#050D1D] rounded-3xl border border-[#176BFF]/30 p-6 flex flex-col items-center justify-center overflow-hidden group shadow-xl ${className}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#176BFF]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00C2FF]/20 transition-all duration-500" />
      
      {/* Badge */}
      <div className="absolute top-4 left-4 z-10 text-[10px] font-heading font-bold uppercase tracking-wider text-[#00C2FF] bg-[#176BFF]/15 px-3 py-1 rounded-full border border-[#176BFF]/30 backdrop-blur-md">
        {badgeLabel}
      </div>

      {/* Lottie Canvas Player */}
      <div className="w-56 h-56 relative z-10">
        <Lottie
          animationData={getAnimationData()}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Concept Subtitle Indicator */}
      <div className="relative z-10 mt-2 text-center space-y-1">
        <div className="text-xs font-heading font-bold text-white uppercase tracking-wider">
          {type === "chat" && "Automated Chat & Instant Intake"}
          {type === "crm" && "Real-time Multi-Platform CRM Sync"}
          {type === "voice" && "24/7 AI Voice Dispatch & Answering"}
        </div>
        <p className="text-[11px] text-[#8D9AAF]">
          {type === "chat" && "Zero latency customer engagement & qualification"}
          {type === "crm" && "Instant calendar booking & pipeline update"}
          {type === "voice" && "Natural voice conversation with zero call drop"}
        </p>
      </div>
    </div>
  );
};
