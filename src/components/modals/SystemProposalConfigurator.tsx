import React, { useState, useMemo } from "react";
import { X, Check, Sparkles, Download, Copy, Printer, CheckCircle2, ArrowRight, ShieldCheck, Zap, DollarSign, Clock, PhoneCall, MessageSquare, Database, Star, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { playClickSound, playSuccessChime } from "../../lib/audioFeedback";
import { trackCTAClick, trackInteractiveDemo } from "../../lib/dataLayer";

interface SystemProposalConfiguratorProps {
  isOpen: boolean;
  onClose: () => void;
  openAuditModal: () => void;
}

interface ModuleOption {
  id: string;
  name: string;
  category: string;
  description: string;
  estHoursSaved: number;
  monthlyImpactVal: number;
}

const AVAILABLE_MODULES: ModuleOption[] = [
  {
    id: "voice",
    name: "24/7 AI Voice Receptionist (Sarah)",
    category: "Inbound Phone",
    description: "Answers every inbound call in <2s, handles emergency dispatch & books Google Calendar slots.",
    estHoursSaved: 25,
    monthlyImpactVal: 4500
  },
  {
    id: "sms",
    name: "Instant 2-Way Speed-to-Lead SMS",
    category: "SMS & Follow-Up",
    description: "Sends automatic conversational text within 42 seconds of any missed call or website lead form.",
    estHoursSaved: 18,
    monthlyImpactVal: 3200
  },
  {
    id: "crm",
    name: "Multi-Stage CRM Sales Pipeline & Routing",
    category: "Operations",
    description: "Auto-tags, scores, and assigns incoming leads to field technicians or intake staff.",
    estHoursSaved: 20,
    monthlyImpactVal: 2800
  },
  {
    id: "reviews",
    name: "Automated 5-Star Review Engine",
    category: "Reputation",
    description: "Requests Google reviews post-service completion via SMS and filters feedback.",
    estHoursSaved: 8,
    monthlyImpactVal: 1900
  },
  {
    id: "reactivation",
    name: "Database Lead Reactivation Campaign",
    category: "Revenue",
    description: "Revives past 6-24 month cold client lists with personalized seasonal promos.",
    estHoursSaved: 15,
    monthlyImpactVal: 5500
  },
  {
    id: "chat",
    name: "24/7 Website AI Chat & Booking Agent",
    category: "Web Intake",
    description: "Engages website visitors, qualifies inquiries, and locks in appointments in real time.",
    estHoursSaved: 12,
    monthlyImpactVal: 2400
  }
];

export const SystemProposalConfigurator: React.FC<SystemProposalConfiguratorProps> = ({
  isOpen,
  onClose,
  openAuditModal
}) => {
  const [step, setStep] = useState<number>(1);
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("HVAC & Plumbing");
  const [borough, setBorough] = useState("Queens & Brooklyn");
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>(["voice", "sms", "crm", "reviews"]);
  const [copied, setCopied] = useState(false);

  const toggleModule = (id: string) => {
    playClickSound();
    setSelectedModuleIds(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const selectedModules = useMemo(() => {
    return AVAILABLE_MODULES.filter(m => selectedModuleIds.includes(m.id));
  }, [selectedModuleIds]);

  const proposalStats = useMemo(() => {
    const totalHours = selectedModules.reduce((acc, m) => acc + m.estHoursSaved, 0);
    const totalMonthlyRecaptured = selectedModules.reduce((acc, m) => acc + m.monthlyImpactVal, 0);
    const annualRecaptured = totalMonthlyRecaptured * 12;
    const estDeploymentDays = selectedModules.length <= 3 ? "7-10 Days" : "10-14 Days";

    return {
      totalHours,
      totalMonthlyRecaptured,
      annualRecaptured,
      estDeploymentDays
    };
  }, [selectedModules]);

  if (!isOpen) return null;

  const copyProposalText = () => {
    playSuccessChime();
    const text = `
========================================
AI AUTOMATION NY — CUSTOM SYSTEM PROPOSAL
========================================
Client: ${businessName || "Valued NY Business"}
Industry: ${industry}
Service Region: ${borough}
Generated on: ${new Date().toLocaleDateString()}

DEPLOYMENT TIMELINE: ${proposalStats.estDeploymentDays}
ESTIMATED MONTHLY RECAPTURED REVENUE: +$${proposalStats.totalMonthlyRecaptured.toLocaleString()} / mo
ESTIMATED ANNUAL IMPACT: +$${proposalStats.annualRecaptured.toLocaleString()} / yr
ESTIMATED STAFF TIME SAVED: ~${proposalStats.totalHours} hours / month

SELECTED AI MODULES:
${selectedModules.map((m, i) => `${i + 1}. ${m.name} (${m.category}) - ${m.description}`).join("\n")}

IMPLEMENTATION INCLUDES:
• Custom AI Voice tuning & prompt engineering
• Twilio/Phone & Google Calendar synchronization
• CRM pipeline & 2-way SMS workflow setup
• 24/7 technical monitoring & dedicated support

To lock in your blueprint: Contact AI Automation NY at (718) 500-2221 or visit https://aiautomationny.com
========================================
`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
    trackInteractiveDemo("Proposal Generator", "Copied Proposal Text");
  };

  const printProposal = () => {
    playClickSound();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 bg-[#030914]/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-4xl bg-[#07152D] border border-[#176BFF]/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative my-8"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playClickSound();
            onClose();
          }}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-[#8D9AAF] hover:text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close Proposal Builder"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pb-6 border-b border-white/10 pr-10">
          <div className="inline-flex items-center gap-2 text-[10px] font-heading font-bold uppercase tracking-widest text-[#70D44B] bg-[#70D44B]/10 px-3 py-1 rounded-full border border-[#70D44B]/30 mb-2">
            <Sparkles className="w-3 h-3" /> Interactive AI System Proposal & Scope Builder
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Custom AI Automation Scope of Work
          </h2>
          <p className="text-xs sm:text-sm text-[#8D9AAF] mt-1">
            Configure your business specifications to generate a live implementation timeline, module breakdown, and ROI projection.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between py-4 border-b border-white/5 text-xs">
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? "bg-[#00C2FF] text-[#07152D]" : "bg-white/10 text-white"}`}>1</span>
            <span className={step >= 1 ? "text-white font-semibold" : "text-[#8D9AAF]"}>Business Profile</span>
          </div>
          <div className="h-0.5 flex-1 mx-4 bg-white/10"></div>
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? "bg-[#00C2FF] text-[#07152D]" : "bg-white/10 text-white"}`}>2</span>
            <span className={step >= 2 ? "text-white font-semibold" : "text-[#8D9AAF]"}>AI Modules</span>
          </div>
          <div className="h-0.5 flex-1 mx-4 bg-white/10"></div>
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${step >= 3 ? "bg-[#70D44B] text-[#07152D]" : "bg-white/10 text-white"}`}>3</span>
            <span className={step >= 3 ? "text-[#70D44B] font-semibold" : "text-[#8D9AAF]"}>Generated Proposal</span>
          </div>
        </div>

        {/* STEP 1: Business Profile */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="py-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-heading font-bold text-white uppercase tracking-wider">Business / Company Name</label>
                <input
                  type="text"
                  placeholder="e.g. Apex NYC Mechanical, Dr. Chen Dental"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#050D1D] border border-white/10 rounded-xl text-white text-xs placeholder-[#8D9AAF] focus:outline-none focus:border-[#00C2FF]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-heading font-bold text-white uppercase tracking-wider">Industry & Trade</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#050D1D] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#00C2FF]"
                >
                  <option value="HVAC & Plumbing">HVAC & Plumbing</option>
                  <option value="Dental & Medical">Dental, Med Spa & Health</option>
                  <option value="Legal & Law Firm">Legal Intake & Law Firm</option>
                  <option value="Roofing & Remodel">Roofing, GC & Remodeling</option>
                  <option value="Auto Repair & Towing">Auto Repair, Collision & Towing</option>
                  <option value="Real Estate & Property">Real Estate & Property Management</option>
                  <option value="Commercial Services">Commercial & Professional Services</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-heading font-bold text-white uppercase tracking-wider">Service Territory / Borough</label>
                <select
                  value={borough}
                  onChange={(e) => setBorough(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#050D1D] border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-[#00C2FF]"
                >
                  <option value="Manhattan, Brooklyn & Queens">Manhattan, Brooklyn & Queens</option>
                  <option value="All 5 NYC Boroughs">All 5 NYC Boroughs (NYC Metro)</option>
                  <option value="Nassau & Suffolk County (Long Island)">Nassau & Suffolk County (Long Island)</option>
                  <option value="Westchester & Northern Suburbs">Westchester & Northern Suburbs</option>
                  <option value="New Jersey Metro / Tri-State">New Jersey Metro / Tri-State</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  playClickSound();
                  setStep(2);
                }}
                className="px-6 py-3 bg-[#176BFF] hover:bg-[#00C2FF] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Next: Select AI Modules</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2: Select AI Modules */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="py-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AVAILABLE_MODULES.map((mod) => {
                const selected = selectedModuleIds.includes(mod.id);
                return (
                  <div
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      selected
                        ? "bg-[#0D1F3D] border-[#00C2FF] shadow-lg shadow-[#00C2FF]/10"
                        : "bg-[#050D1D] border-white/10 hover:border-white/20 opacity-70"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2">
                        <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#70D44B] bg-[#70D44B]/10 px-2 py-0.5 rounded">
                          {mod.category}
                        </span>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${selected ? "bg-[#00C2FF] text-[#07152D]" : "border border-white/20"}`}>
                          {selected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                      <h4 className="text-sm font-heading font-bold text-white mt-1">{mod.name}</h4>
                      <p className="text-xs text-[#8D9AAF] mt-1">{mod.description}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                      <span className="text-[#A1B3D3]">~{mod.estHoursSaved} hrs saved/mo</span>
                      <span className="text-[#70D44B] font-bold">+${mod.monthlyImpactVal.toLocaleString()}/mo est.</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  playClickSound();
                  setStep(1);
                }}
                className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-heading font-bold uppercase tracking-wider cursor-pointer"
              >
                Back
              </button>

              <button
                onClick={() => {
                  playSuccessChime();
                  setStep(3);
                }}
                disabled={selectedModuleIds.length === 0}
                className="px-6 py-3 bg-gradient-to-r from-[#70D44B] to-[#00C2FF] text-[#07152D] font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg disabled:opacity-40"
              >
                <span>Generate Custom Proposal</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Generated Proposal Output */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="py-6 space-y-6">
            
            {/* Impact Metric Header */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#050D1D] p-4 rounded-2xl border border-white/10 text-center space-y-1">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#8D9AAF]">Est. Recaptured Revenue</span>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-[#70D44B]">
                  +${proposalStats.totalMonthlyRecaptured.toLocaleString()}
                  <span className="text-xs text-[#8D9AAF]"> / mo</span>
                </div>
                <span className="text-[10px] text-[#A1B3D3]">+${proposalStats.annualRecaptured.toLocaleString()} / year</span>
              </div>

              <div className="bg-[#050D1D] p-4 rounded-2xl border border-white/10 text-center space-y-1">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#8D9AAF]">Staff Time Saved</span>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-[#00C2FF]">
                  ~{proposalStats.totalHours} Hours
                </div>
                <span className="text-[10px] text-[#A1B3D3]">Every single month</span>
              </div>

              <div className="bg-[#050D1D] p-4 rounded-2xl border border-white/10 text-center space-y-1">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#8D9AAF]">Deployment Speed</span>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {proposalStats.estDeploymentDays}
                </div>
                <span className="text-[10px] text-[#70D44B]">Complete Turnkey Launch</span>
              </div>
            </div>

            {/* Structured Scope Breakdown Card */}
            <div className="bg-[#050D1D] p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                  Scope of Work: {businessName || "Your Business"} ({industry})
                </h3>
                <span className="text-xs text-[#00C2FF] font-semibold">{selectedModules.length} Modules Active</span>
              </div>

              <div className="space-y-3">
                {selectedModules.map((m, idx) => (
                  <div key={m.id} className="flex items-start gap-3 text-xs bg-[#07152D] p-3 rounded-xl border border-white/5">
                    <span className="w-5 h-5 rounded-full bg-[#176BFF]/20 text-[#00C2FF] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{m.name}</div>
                      <div className="text-[#8D9AAF] text-[11px] mt-0.5">{m.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#176BFF]/10 rounded-xl border border-[#176BFF]/20 text-xs text-[#A1B3D3] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#70D44B] shrink-0" />
                <span>Includes phone number porting/forwarding, staff training, prompt tuning, and 24/7 technical monitoring.</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={copyProposalText}
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-[#70D44B]" /> : <Copy className="w-4 h-4 text-[#00C2FF]" />}
                  <span>{copied ? "Copied Proposal!" : "Copy Proposal Text"}</span>
                </button>

                <button
                  onClick={printProposal}
                  className="px-3.5 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs flex items-center justify-center transition-all cursor-pointer"
                  title="Print / Save as PDF"
                >
                  <Printer className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    playClickSound();
                    setStep(2);
                  }}
                  className="px-3.5 py-2.5 bg-white/5 hover:bg-white/10 text-[#8D9AAF] hover:text-white rounded-xl text-xs font-heading font-bold uppercase tracking-wider cursor-pointer"
                >
                  Edit
                </button>
              </div>

              <button
                onClick={() => {
                  playClickSound();
                  trackCTAClick("Lock In Proposal - Book Audit", window.location.pathname);
                  onClose();
                  openAuditModal();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#70D44B] via-[#00C2FF] to-[#176BFF] text-[#07152D] font-heading font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#70D44B]/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lock In This Blueprint — Book Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        )}

      </motion.div>
    </div>
  );
};
