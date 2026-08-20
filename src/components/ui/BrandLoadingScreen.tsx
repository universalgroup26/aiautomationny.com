import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { Sparkles, Cpu, CheckCircle2, Zap, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";

interface BrandLoadingScreenProps {
  onComplete?: () => void;
  autoDismiss?: boolean;
  durationMs?: number;
  inlinePreview?: boolean;
}

export const BrandLoadingScreen: React.FC<BrandLoadingScreenProps> = ({
  onComplete,
  autoDismiss = true,
  durationMs = 2800,
  inlinePreview = false
}) => {
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const steps = [
    { threshold: 10, label: "Initializing AI Neural Core...", icon: Cpu },
    { threshold: 30, label: "Loading Voice Receptionist & Autonomous Workflows...", icon: Zap },
    { threshold: 55, label: "Connecting CRM Pipelines & Smart Chat Agents...", icon: Sparkles },
    { threshold: 80, label: "Optimizing Lead Acceleration Engine...", icon: ShieldCheck },
    { threshold: 100, label: "AI AUTOMATION NY Systems Ready.", icon: CheckCircle2 }
  ];

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawPercentage = Math.min(100, Math.floor((elapsed / durationMs) * 100));
      setProgress(rawPercentage);

      // Determine active step
      if (rawPercentage >= 95) {
        setCurrentStepIndex(4);
      } else if (rawPercentage >= 75) {
        setCurrentStepIndex(3);
      } else if (rawPercentage >= 45) {
        setCurrentStepIndex(2);
      } else if (rawPercentage >= 20) {
        setCurrentStepIndex(1);
      } else {
        setCurrentStepIndex(0);
      }

      if (rawPercentage >= 100) {
        clearInterval(interval);
        setIsDone(true);
        if (autoDismiss) {
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300);
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [durationMs, autoDismiss, onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setIsDone(true);
    if (onComplete) onComplete();
  };

  const containerClasses = inlinePreview
    ? "relative w-full min-h-[500px] rounded-3xl p-8 bg-[#07152D] border border-[#176BFF]/30 shadow-2xl overflow-hidden flex flex-col items-center justify-center text-white my-6"
    : "fixed inset-0 z-[100] bg-[#07152D] flex flex-col items-center justify-center p-6 overflow-hidden text-white select-none";

  return (
    <div className={containerClasses}>
      {/* Background Animated Tech Grid & Glowing Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#176BFF0D_1px,transparent_1px),linear-gradient(to_bottom,#176BFF0D_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      
      {/* Glowing Light Blooms */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#176BFF]/15 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00C2FF]/15 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Cybernetic Circle Ring behind Logo */}
      <div className="relative z-10 flex flex-col items-center max-w-xl text-center">
        
        {/* Animated Emblem Lockup */}
        <div className="relative mb-8">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] opacity-30 blur-lg animate-spin [animation-duration:10s]"></div>
          
          <div className="relative p-6 rounded-3xl bg-[#07152D]/80 backdrop-blur-xl border border-[#176BFF]/40 shadow-[0_0_50px_rgba(23,107,255,0.3)] flex items-center justify-center">
            <BrandLogo
              size="xl"
              variant="stacked"
              showTagline={false}
              animated={true}
            />
          </div>
        </div>

        {/* Brand Name & Tagline Banner */}
        <div className="space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-heading font-bold uppercase tracking-widest animate-pulse">
            <Sparkles className="w-3.5 h-3.5" /> Official AI Automation Platform
          </div>

          <h2 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-wide uppercase">
            ARCHITECTS OF AUTONOMOUS ENTERPRISE
          </h2>

          <p className="text-sm text-[#8D9AAF] max-w-md mx-auto font-medium">
            Empowering NYC & Regional Businesses Through Next-Gen AI Voice, Chat, Booking & CRM Systems
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full max-w-md space-y-3 bg-[#050D1D]/80 p-5 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl">
          
          {/* Header Progress % */}
          <div className="flex items-center justify-between text-xs font-heading font-bold">
            <span className="text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
              {React.createElement(steps[currentStepIndex].icon, { className: "w-4 h-4 text-[#00C2FF] animate-spin" })}
              Status: {steps[currentStepIndex].label}
            </span>
            <span className="text-white text-sm font-mono">{progress}%</span>
          </div>

          {/* Bar track */}
          <div className="w-full h-3 bg-white/5 rounded-full p-0.5 overflow-hidden border border-white/10 relative">
            <div
              className="h-full bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(0,194,255,0.8)] relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/80 blur-xs rounded-full"></div>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="grid grid-cols-5 gap-1 pt-1">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-colors duration-300 ${
                  progress >= step.threshold ? "bg-[#00C2FF]" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex items-center gap-4">
          {!isDone ? (
            <button
              onClick={handleSkip}
              className="text-xs font-heading font-bold uppercase tracking-wider text-[#8D9AAF] hover:text-white px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Skip Loading</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => {
                if (onComplete) onComplete();
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#176BFF] to-[#00C2FF] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#176BFF]/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Enter Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
