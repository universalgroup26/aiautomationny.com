import React from "react";
import { LeadAuditForm } from "../components/forms/LeadAuditForm";
import { SEOHead } from "../components/ui/SEOHead";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export const BookDemoPage: React.FC = () => {
  return (
    <main className="pt-28 pb-20 min-h-screen bg-[#07152D]">
      <SEOHead 
        title="Schedule Your Free AI Audit | AI AUTOMATION NY"
        description="Book a 1-on-1 AI Automation Audit with AI AUTOMATION NY. We analyze your phone calls, lead response speeds, and calendar workflow."
        canonicalUrl="https://aiautomationny.com/book-demo"
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" },
          { name: "Book Audit", url: "https://aiautomationny.com/book-demo" }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30">
            <Sparkles className="w-3.5 h-3.5" /> 100% Free • Custom AI Roadmap
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            BOOK YOUR FREE AI AUTOMATION AUDIT
          </h1>
          <p className="text-sm sm:text-base text-[#8D9AAF] max-w-2xl mx-auto leading-relaxed">
            Select your industry and current bottlenecks below to schedule your 1-on-1 session with our New York AI solutions engineering team.
          </p>
        </div>

        {/* Audit Form Container */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#176BFF]/30 bg-[#0D1F3D]/90 shadow-2xl">
          <LeadAuditForm />
        </div>

        {/* Guarantees Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-[#8D9AAF]">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#70D44B]" />
            <span>Zero Sales Pressure</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00C2FF]" />
            <span>Tailored ROI Calculations</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#176BFF]" />
            <span>100% Privacy & Data Security</span>
          </div>
        </div>

      </div>
    </main>
  );
};
