import React from "react";
import { SEOHead } from "../components/ui/SEOHead";
import { MetricsTicker } from "../components/ui/MetricsTicker";
import { ArrowRight, TrendingUp, CheckCircle2, Star, PhoneCall, Zap, Building2 } from "lucide-react";

interface ResultsPageProps {
  openAuditModal: () => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ openAuditModal }) => {
  const caseStudies = [
    {
      title: "Queens HVAC Contractor",
      metric: "+42% Appointment Conversions",
      sub: "100% After-Hours Call Coverage",
      desc: "Previously lost 15-20 emergency night calls weekly. Implemented 24/7 AI Voice Receptionist & instant dispatch calendar booking.",
      outcomes: ["Saved 25 hours/week of phone duty", "$64,000 additional monthly revenue captured", "1.8s average call answer speed"]
    },
    {
      title: "Astoria Dental Practice",
      metric: "+38% Patient Re-Bookings",
      sub: "122 New 5-Star Google Reviews",
      desc: "Automated hygiene recall SMS sequences and 1-click Google review requests sent after every patient appointment.",
      outcomes: ["Filled 45 dormant schedule slots/mo", "Ranked #1 in local Google Map Pack for Astoria Dental", "Reduced no-show rate to under 3%"]
    },
    {
      title: "Midtown Legal Intake Firm",
      metric: "<30s Speed-to-Lead Response",
      sub: "+28 Signed Retainers / Month",
      desc: "Replaced slow manual email forms with instant AI voice callback & qualified case questionnaire.",
      outcomes: ["Zero missed leads during court hours", "Automatic case notes exported directly to Clio CRM", "3.2x ROI on paid PPC ad spend"]
    },
    {
      title: "Brooklyn Remodeling Contractor",
      metric: "$148,000 Reactivated Revenue",
      sub: "From 1,800 Past Inactive Leads",
      desc: "Executed AI Database Reactivation campaign reviving past quote inquiries with personalized SMS offers.",
      outcomes: ["14% positive response rate", "22 high-ticket bathroom quotes booked in 7 days", "Zero ad spend required"]
    }
  ];

  return (
    <main className="pt-28 pb-20 min-h-screen bg-[#07152D]">
      <SEOHead 
        title="Client Results & Case Studies | AI AUTOMATION NY"
        description="Real metrics and operational performance results from New York local businesses powered by AI AUTOMATION NY."
        canonicalUrl="https://aiautomationny.com/results"
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" },
          { name: "Case Studies & Results", url: "https://aiautomationny.com/results" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#70D44B] bg-[#70D44B]/10 px-3.5 py-1.5 rounded-full border border-[#70D44B]/30">
            <TrendingUp className="w-3.5 h-3.5" /> Proven Local Business Impact
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            MEASURABLE AI RESULTS
          </h1>
          <p className="text-base text-[#8D9AAF]">
            See how New York contractors, medical practices, law firms, and local service providers transform operations with AI Automation.
          </p>
        </div>

        {/* Live Metrics Ticker Section */}
        <MetricsTicker />

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="glass-panel rounded-3xl p-8 border border-[#176BFF]/30 bg-[#0D1F3D]/80 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-heading font-bold text-[#00C2FF] uppercase tracking-wider">{cs.title}</div>
                <h2 className="text-2xl font-heading font-bold text-white">{cs.metric}</h2>
                <div className="text-xs font-semibold text-[#70D44B]">{cs.sub}</div>
              </div>

              <p className="text-xs sm:text-sm text-[#8D9AAF] leading-relaxed">{cs.desc}</p>

              <div className="bg-[#07152D] p-5 rounded-2xl border border-white/10 space-y-2 text-xs text-[#F7F9FC]">
                <div className="font-heading font-bold text-white uppercase text-[10px] tracking-wider mb-1">Key Outcomes:</div>
                {cs.outcomes.map((o, oIdx) => (
                  <div key={oIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#70D44B] shrink-0" />
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="text-center bg-[#0D1F3D] p-8 rounded-3xl border border-[#00C2FF]/30 max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-heading font-bold text-white">READY FOR SIMILAR RESULTS IN YOUR BUSINESS?</h2>
          <p className="text-xs text-[#8D9AAF]">Schedule a 1-on-1 AI Automation Audit to see what ROI your business can achieve.</p>
          <button
            onClick={openAuditModal}
            className="px-8 py-3.5 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:opacity-95 transition-all shadow-lg shadow-[#176BFF]/30 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Schedule Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </main>
  );
};
