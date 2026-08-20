import React, { useState, useMemo } from "react";
import { Calculator, DollarSign, TrendingUp, Clock, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Zap } from "lucide-react";
import { motion } from "motion/react";
import { trackInteractiveDemo, trackCTAClick } from "../../lib/dataLayer";
import { playClickSound, playSliderTick } from "../../lib/audioFeedback";

interface ROICalculatorSectionProps {
  openAuditModal: () => void;
}

interface IndustryPreset {
  id: string;
  name: string;
  monthlyCalls: number;
  avgValue: number;
  missedRate: number; // percentage
  closeRate: number; // percentage
}

const PRESETS: IndustryPreset[] = [
  { id: "hvac", name: "HVAC & Plumbing", monthlyCalls: 180, avgValue: 1850, missedRate: 38, closeRate: 35 },
  { id: "dental", name: "Dental & Medical", monthlyCalls: 220, avgValue: 3200, missedRate: 42, closeRate: 30 },
  { id: "legal", name: "Law Firm & Intake", monthlyCalls: 120, avgValue: 6500, missedRate: 45, closeRate: 25 },
  { id: "roofing", name: "Roofing & Remodel", monthlyCalls: 90, avgValue: 10500, missedRate: 32, closeRate: 28 },
  { id: "auto", name: "Auto Repair & Towing", monthlyCalls: 250, avgValue: 1200, missedRate: 35, closeRate: 40 },
  { id: "medspa", name: "Med Spa & Beauty", monthlyCalls: 190, avgValue: 750, missedRate: 50, closeRate: 45 }
];

export const ROICalculatorSection: React.FC<ROICalculatorSectionProps> = ({ openAuditModal }) => {
  const [selectedPreset, setSelectedPreset] = useState<string>("hvac");
  const [monthlyCalls, setMonthlyCalls] = useState<number>(180);
  const [avgValue, setAvgValue] = useState<number>(1850);
  const [missedRate, setMissedRate] = useState<number>(38);
  const [closeRate, setCloseRate] = useState<number>(35);

  const applyPreset = (preset: IndustryPreset) => {
    playClickSound();
    setSelectedPreset(preset.id);
    setMonthlyCalls(preset.monthlyCalls);
    setAvgValue(preset.avgValue);
    setMissedRate(preset.missedRate);
    setCloseRate(preset.closeRate);
    trackInteractiveDemo("ROI Calculator", `Selected preset: ${preset.name}`);
  };

  // Calculations
  const stats = useMemo(() => {
    // Total missed calls / inquiries each month
    const missedInquiries = Math.round((monthlyCalls * missedRate) / 100);
    
    // AI recovers approx 85% of missed inquiries with instant 2s phone/SMS response
    const recoveredInquiries = Math.round(missedInquiries * 0.85);
    
    // Converted into closed deals
    const additionalDeals = Math.round((recoveredInquiries * closeRate) / 100);
    
    // Monthly & Annual Recaptured Revenue
    const monthlyRevenue = additionalDeals * avgValue;
    const annualRevenue = monthlyRevenue * 12;

    // Staff hours saved (estimated 15 mins per intake call, scheduling & follow-up)
    const hoursSavedMonth = Math.round((monthlyCalls * 0.25) + (additionalDeals * 1.5));
    
    // ROI multiple (based on average AI Grow package $697/mo amortized)
    const investmentMonth = 697;
    const roiMultiple = monthlyRevenue > 0 ? (monthlyRevenue / investmentMonth).toFixed(1) : "0.0";

    return {
      missedInquiries,
      recoveredInquiries,
      additionalDeals,
      monthlyRevenue,
      annualRevenue,
      hoursSavedMonth,
      roiMultiple
    };
  }, [monthlyCalls, avgValue, missedRate, closeRate]);

  return (
    <section className="py-24 bg-[#07152D] relative border-b border-[#176BFF]/20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] ambient-glow-cyan pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] ambient-glow-green pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#70D44B] glass-pill px-4 py-1.5 rounded-full shadow-md">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI & Revenue Recapture Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            CALCULATE YOUR RECAPTURED REVENUE
          </h2>
          <p className="text-sm sm:text-base text-[#8D9AAF] leading-relaxed">
            See how much revenue your New York business loses to missed after-hours calls and slow lead follow-up — and how much an AI Growth System recaptures.
          </p>
        </div>

        {/* Industry Quick-Select Presets */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <span className="text-xs text-[#8D9AAF] font-medium mr-2">Quick Presets:</span>
          {PRESETS.map((preset) => {
            const isSelected = selectedPreset === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset)}
                className={`px-4 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                  isSelected
                    ? "bg-gradient-to-r from-[#176BFF] to-[#00C2FF] text-white shadow-lg shadow-[#176BFF]/30 border border-[#00C2FF]/60"
                    : "glass-pill text-[#8D9AAF] hover:text-white hover:border-white/25"
                }`}
              >
                {preset.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Sliders & Controls */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 space-y-6 flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#00C2FF]" /> Adjust Your Business Metrics
                </h3>
                <span className="text-xs text-[#00C2FF] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#70D44B] animate-pulse" />
                  Live Dynamic Model
                </span>
              </div>

              {/* Slider 1: Monthly Calls / Inbound Inquiries */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider">
                  <span className="text-[#8D9AAF]">Monthly Inbound Phone Calls / Leads:</span>
                  <span className="text-white glass-pill px-3 py-1 rounded-full text-xs font-bold border-[#176BFF]/50">
                    {monthlyCalls.toLocaleString()} Calls / Mo
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={monthlyCalls}
                  onChange={(e) => {
                    playSliderTick();
                    setMonthlyCalls(Number(e.target.value));
                    setSelectedPreset("custom");
                  }}
                  className="w-full h-2 bg-[#050D1D] rounded-lg appearance-none cursor-pointer accent-[#00C2FF]"
                />
                <div className="flex justify-between text-[10px] text-[#8D9AAF]">
                  <span>20 calls</span>
                  <span>500 calls</span>
                  <span>1,000+ calls</span>
                </div>
              </div>

              {/* Slider 2: Average Job / Deal Value */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider">
                  <span className="text-[#8D9AAF]">Average Customer / Job Ticket Value:</span>
                  <span className="text-[#70D44B] glass-pill px-3 py-1 rounded-full text-xs font-bold border-[#70D44B]/40 bg-[#70D44B]/10">
                    ${avgValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="25000"
                  step="250"
                  value={avgValue}
                  onChange={(e) => {
                    playSliderTick();
                    setAvgValue(Number(e.target.value));
                    setSelectedPreset("custom");
                  }}
                  className="w-full h-2 bg-[#050D1D] rounded-lg appearance-none cursor-pointer accent-[#70D44B]"
                />
                <div className="flex justify-between text-[10px] text-[#8D9AAF]">
                  <span>$200</span>
                  <span>$10,000</span>
                  <span>$25,000+</span>
                </div>
              </div>

              {/* Slider 3: Estimated Missed Call Rate */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider">
                  <span className="text-[#8D9AAF]">Missed Calls / After-Hours Percentage:</span>
                  <span className="text-amber-400 glass-pill px-3 py-1 rounded-full text-xs font-bold border-amber-400/40 bg-amber-400/10">
                    {missedRate}% Missed
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="70"
                  step="1"
                  value={missedRate}
                  onChange={(e) => {
                    playSliderTick();
                    setMissedRate(Number(e.target.value));
                    setSelectedPreset("custom");
                  }}
                  className="w-full h-2 bg-[#050D1D] rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-[#8D9AAF]">
                  <span>10% (Low)</span>
                  <span>35% (US Average)</span>
                  <span>70% (High after-hours)</span>
                </div>
              </div>

              {/* Slider 4: Conversion / Close Rate */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider">
                  <span className="text-[#8D9AAF]">Lead-to-Closed-Sale Conversion Rate:</span>
                  <span className="text-[#00C2FF] glass-pill px-3 py-1 rounded-full text-xs font-bold border-[#00C2FF]/40 bg-[#00C2FF]/10">
                    {closeRate}% Close Rate
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="1"
                  value={closeRate}
                  onChange={(e) => {
                    playSliderTick();
                    setCloseRate(Number(e.target.value));
                    setSelectedPreset("custom");
                  }}
                  className="w-full h-2 bg-[#050D1D] rounded-lg appearance-none cursor-pointer accent-[#176BFF]"
                />
                <div className="flex justify-between text-[10px] text-[#8D9AAF]">
                  <span>10%</span>
                  <span>35%</span>
                  <span>60%</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8D9AAF]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#70D44B]" /> Zero ongoing risk guarantee
              </span>
              <span>Based on verified NY service business benchmarks</span>
            </div>

          </div>

          {/* Right Column: Dynamic Projected Impact Dashboard */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-8 border-[#70D44B]/40 bg-gradient-to-br from-[#07152D] to-[#0A1D3C] flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#70D44B] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Projected ROI Output
                </span>
                <span className="text-xs font-heading font-bold text-white glass-pill px-3 py-1 rounded-full border-[#176BFF]/50 bg-[#176BFF]/20">
                  {stats.roiMultiple}x Est. ROI
                </span>
              </div>

              {/* Main Recaptured Metric */}
              <div className="py-6 text-center space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#8D9AAF]">
                  Estimated Recaptured Revenue
                </span>
                <div className="text-3xl sm:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#70D44B] via-[#00C2FF] to-white tracking-tight">
                  +${stats.monthlyRevenue.toLocaleString()}
                  <span className="text-base sm:text-lg text-[#8D9AAF] font-medium"> / mo</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#70D44B]">
                  = +${stats.annualRevenue.toLocaleString()} in Recaptured Annual Revenue
                </div>
              </div>

              {/* 3 Detailed Breakdown Metric Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                
                <div className="p-3.5 bg-[#050D1D] rounded-2xl border border-white/10 space-y-1">
                  <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#8D9AAF]">
                    Recovered Deals / Mo
                  </div>
                  <div className="text-lg font-heading font-bold text-white">
                    +{stats.additionalDeals} Closed Jobs
                  </div>
                  <div className="text-[10px] text-[#00C2FF]">
                    From {stats.recoveredInquiries} saved leads
                  </div>
                </div>

                <div className="p-3.5 bg-[#050D1D] rounded-2xl border border-white/10 space-y-1">
                  <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#8D9AAF]">
                    Staff Hours Saved
                  </div>
                  <div className="text-lg font-heading font-bold text-[#70D44B]">
                    ~{stats.hoursSavedMonth} Hours / Mo
                  </div>
                  <div className="text-[10px] text-[#8D9AAF]">
                    Phone tag & dispatch auto
                  </div>
                </div>

              </div>

              {/* Operational Guarantee Note */}
              <div className="mt-4 p-3.5 bg-[#176BFF]/10 rounded-xl border border-[#176BFF]/20 text-[11px] text-[#A1B3D3] flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                <span>
                  Our systems deploy in 10-14 days and integrate with your existing phone numbers, calendar, and CRM.
                </span>
              </div>
            </div>

            {/* Direct Action CTA */}
            <div className="pt-6">
              <button
                onClick={() => {
                  playClickSound();
                  trackCTAClick("Lock In This ROI - Calculator", window.location.pathname);
                  openAuditModal();
                }}
                className="w-full py-4 bg-gradient-to-r from-[#70D44B] via-[#00C2FF] to-[#176BFF] hover:shadow-[0_0_35px_rgba(112,212,75,0.4)] text-[#07152D] font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Lock In This ROI — Book Free AI Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

