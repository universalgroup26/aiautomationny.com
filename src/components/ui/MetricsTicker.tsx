import React, { useState, useEffect } from "react";
import { PhoneCall, Clock, CalendarCheck, DollarSign, Zap, Activity, ShieldCheck, TrendingUp } from "lucide-react";

interface MetricItem {
  id: string;
  label: string;
  baseValue: number;
  incrementRate: number; // how often it increments
  suffix: string;
  prefix?: string;
  icon: React.ElementType;
  description: string;
  badge: string;
  badgeColor: string;
}

const INITIAL_METRICS: MetricItem[] = [
  {
    id: "calls",
    label: "Inbound Calls Handled",
    baseValue: 18420,
    incrementRate: 3000,
    prefix: "",
    suffix: "+",
    icon: PhoneCall,
    description: "24/7 AI Voice reception across NYC clients",
    badge: "100% Answer Rate",
    badgeColor: "text-[#70D44B] bg-[#70D44B]/10 border-[#70D44B]/30",
  },
  {
    id: "hours",
    label: "Administrative Hours Saved",
    baseValue: 12650,
    incrementRate: 5000,
    prefix: "",
    suffix: " hrs",
    icon: Clock,
    description: "Front-desk & phone triage labor eliminated",
    badge: "~22 hrs/wk per client",
    badgeColor: "text-[#00C2FF] bg-[#00C2FF]/10 border-[#00C2FF]/30",
  },
  {
    id: "appointments",
    label: "Appointments Auto-Booked",
    baseValue: 5890,
    incrementRate: 7000,
    prefix: "",
    suffix: "",
    icon: CalendarCheck,
    description: "Direct 2-way sync with Google & GHL calendar",
    badge: "Zero Double-Bookings",
    badgeColor: "text-[#70D44B] bg-[#70D44B]/10 border-[#70D44B]/30",
  },
  {
    id: "revenue",
    label: "Client Revenue Generated",
    baseValue: 2840000,
    incrementRate: 12000,
    prefix: "$",
    suffix: "+",
    icon: DollarSign,
    description: "Rescued missed leads & revived cold contacts",
    badge: "Average 4.8x ROI",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  },
];

export const MetricsTicker: React.FC = () => {
  const [metrics, setMetrics] = useState(INITIAL_METRICS);
  const [pulse, setPulse] = useState(false);

  // Live periodic increment simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prevMetrics) =>
        prevMetrics.map((m) => {
          // randomly increment slightly to give a real live system feeling
          const shouldIncrement = Math.random() > 0.3;
          if (shouldIncrement) {
            const add = m.id === "revenue" ? 150 : Math.floor(Math.random() * 3) + 1;
            return { ...m, baseValue: m.baseValue + add };
          }
          return m;
        })
      );
      setPulse(true);
      setTimeout(() => setPulse(false), 800);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Top Ticker Header Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0A1D3C] p-4 sm:px-6 rounded-2xl border border-[#176BFF]/30 glass-panel">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-3 h-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#70D44B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#70D44B]" />
          </div>
          <span className="text-xs font-heading font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#00C2FF]" /> LIVE AI NETWORK METRICS TICKER
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#8D9AAF]">
          <span className="font-semibold text-white">NYC Regional Network Status:</span>
          <span className="text-[#70D44B] font-mono font-bold bg-[#70D44B]/10 px-2 py-0.5 rounded border border-[#70D44B]/20">
            OPTIMAL (100% Uptime)
          </span>
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`glass-panel rounded-2xl p-6 border border-[#176BFF]/30 bg-[#0D1F3D]/90 space-y-4 hover:border-[#00C2FF]/50 transition-all duration-300 relative overflow-hidden group ${
                pulse ? "ring-1 ring-[#00C2FF]/30" : ""
              }`}
            >
              {/* Subtle top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] opacity-80" />

              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#176BFF]/15 border border-[#176BFF]/30 flex items-center justify-center text-[#00C2FF] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight flex items-baseline gap-0.5">
                  <span className="text-[#00C2FF]">{item.prefix}</span>
                  <span className="font-mono">{item.baseValue.toLocaleString()}</span>
                  <span className="text-xs font-semibold text-[#70D44B] ml-1">{item.suffix}</span>
                </div>
                <div className="text-xs font-heading font-bold text-[#F7F9FC]">
                  {item.label}
                </div>
              </div>

              <p className="text-[11px] text-[#8D9AAF] leading-relaxed border-t border-white/10 pt-3">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
