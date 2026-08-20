import React, { useState } from "react";
import { Check, X, Zap, Clock, ShieldCheck, DollarSign, Phone, MessageSquare, Workflow, ArrowRight, Sparkles, TrendingUp, HelpCircle, Info } from "lucide-react";
import { playClickSound, playFilterChime } from "../../lib/audioFeedback";

interface TooltipDefinition {
  term: string;
  definition: string;
  technicalDetails: string;
  impact: string;
}

interface ComparisonRow {
  metric: string;
  category: "Voice" | "Chat" | "CRM" | "All";
  manualProcess: string;
  manualStatus: "bad" | "warning";
  aiAutomationTier: string;
  aiStatus: "good" | "excellent";
  efficiencyGain: string;
  gainBadgeColor: string;
  tooltip: TooltipDefinition;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    metric: "Inbound Lead Response Speed",
    category: "Voice",
    manualProcess: "2 - 24 Hours (Delayed voicemail playback & manual callback)",
    manualStatus: "bad",
    aiAutomationTier: "Under 2 Seconds (AI answers calls immediately on 1st ring)",
    aiStatus: "excellent",
    efficiencyGain: "99.8% Faster Intake",
    gainBadgeColor: "text-[#70D44B] bg-[#70D44B]/10 border-[#70D44B]/30",
    tooltip: {
      term: "Inbound Lead Response Speed",
      definition: "The elapsed time between a prospect initiating contact (phone call, SMS, or web intake) and receiving an intelligent interactive reply.",
      technicalDetails: "AI Voice agents process SIP telephony webhooks within <2,000ms, beating the 5-minute lead decay threshold.",
      impact: "Captures buyers before they contact competing local NYC service providers."
    }
  },
  {
    metric: "Operating Hours & Coverage",
    category: "Voice",
    manualProcess: "Mon-Fri 9am-5pm (Calls go to voicemail on evenings & weekends)",
    manualStatus: "bad",
    aiAutomationTier: "24/7/365 Uninterrupted (Never misses midnight or Sunday leads)",
    aiStatus: "excellent",
    efficiencyGain: "100% After-Hours Coverage",
    gainBadgeColor: "text-[#00C2FF] bg-[#00C2FF]/10 border-[#00C2FF]/30",
    tooltip: {
      term: "24/7/365 Uninterrupted Coverage",
      definition: "Automated call and chat reception operational 24 hours a day, 7 days a week, 365 days a year without human shift gaps.",
      technicalDetails: "Deployed on multi-region serverless cloud infrastructure with 99.99% uptime SLA.",
      impact: "Recovers up to 45% of total high-value NYC inquiries occurring outside standard business hours."
    }
  },
  {
    metric: "Missed-Call Recovery Rate",
    category: "Voice",
    manualProcess: "0% (Unanswered callers leave no voicemail and call competitors)",
    manualStatus: "bad",
    aiAutomationTier: "65% Rescued (Instant SMS sent within 5 sec of missed call)",
    aiStatus: "excellent",
    efficiencyGain: "+65% Lead Rescue",
    gainBadgeColor: "text-[#70D44B] bg-[#70D44B]/10 border-[#70D44B]/30",
    tooltip: {
      term: "Missed-Call Text-Back & Recovery",
      definition: "An automated trigger that sends a personalized SMS message to any caller whose call goes unanswered live within 5 seconds.",
      technicalDetails: "Listens for SIP 'no-answer' event and immediately opens a 2-way AI conversational SMS thread.",
      impact: "Rescues over 65% of would-be lost leads and converts them directly into calendar appointments."
    }
  },
  {
    metric: "Website Visitor Conversation Rate",
    category: "Chat",
    manualProcess: "1.2% - 2% (Static web form with standard email auto-reply)",
    manualStatus: "warning",
    aiAutomationTier: "4.5% - 7.8% (Interactive AI Assistant qualifies & books live)",
    aiStatus: "excellent",
    efficiencyGain: "3.5x Booking Rate",
    gainBadgeColor: "text-[#70D44B] bg-[#70D44B]/10 border-[#70D44B]/30",
    tooltip: {
      term: "Inbound Lead Qualification & Conversion",
      definition: "The percentage of website traffic that converts from passive browser to verified, scheduled sales prospect.",
      technicalDetails: "Replaces standard static web forms with dynamic conversational widgets that qualify and book appointments live.",
      impact: "Boosts appointment volume by 3.5x without spending extra money on marketing or ads."
    }
  },
  {
    metric: "Lead Qualification & Intake",
    category: "Chat",
    manualProcess: "Manual phone interrogation during busy business hours",
    manualStatus: "warning",
    aiAutomationTier: "Automated custom survey & instant budget/location screening",
    aiStatus: "good",
    efficiencyGain: "100% Pre-screened",
    gainBadgeColor: "text-[#00C2FF] bg-[#00C2FF]/10 border-[#00C2FF]/30",
    tooltip: {
      term: "Inbound Lead Qualification",
      definition: "Screening prospects through tailored questionnaire logic to verify budget, location, job scope, and timeline before booking.",
      technicalDetails: "Conditional branch logic filters out spam and out-of-service area inquiries before handing off to sales reps.",
      impact: "Eliminates wasted staff hours on tire-kickers and bad leads."
    }
  },
  {
    metric: "CRM & Calendar Booking",
    category: "CRM",
    manualProcess: "Sticky notes, paper diaries, manual Google Calendar entry",
    manualStatus: "bad",
    aiAutomationTier: "Direct 2-way sync with GoHighLevel, HubSpot & Google Calendar",
    aiStatus: "excellent",
    efficiencyGain: "0 Double-Bookings",
    gainBadgeColor: "text-[#70D44B] bg-[#70D44B]/10 border-[#70D44B]/30",
    tooltip: {
      term: "CRM Pipeline & 2-Way Calendar Sync",
      definition: "Real-time synchronization between AI booking engines and CRM systems like GoHighLevel, HubSpot, and Google Calendar.",
      technicalDetails: "Uses secure REST/OAuth APIs to write contact details, tags, appointment slots, and call transcripts straight into your CRM.",
      impact: "Completely eliminates double-bookings and manual administrative data entry."
    }
  },
  {
    metric: "Nurture & Follow-Up Persistence",
    category: "CRM",
    manualProcess: "1-2 manual follow-up calls before staff gives up",
    manualStatus: "bad",
    aiAutomationTier: "5-touch automated SMS & email drip sequence until booked",
    aiStatus: "excellent",
    efficiencyGain: "+42% Pipeline Conversion",
    gainBadgeColor: "text-[#70D44B] bg-[#70D44B]/10 border-[#70D44B]/30",
    tooltip: {
      term: "Multi-Touch Automated Nurturing Drip",
      definition: "An automated sequence of personalized SMS, email, and ringless voicemail follow-ups scheduled across days or weeks.",
      technicalDetails: "Event-driven workflows monitor lead status; if a prospect stalls, AI sends contextual re-engagement prompts until booked.",
      impact: "Increases closed deals by +42% by systematically following up with undecided prospects."
    }
  },
  {
    metric: "Labor Overhead & Staff Cost",
    category: "CRM",
    manualProcess: "$4,500 - $6,000 / month (Salary, benefits, overtime, training)",
    manualStatus: "bad",
    aiAutomationTier: "From $297 / month (Fixed transparent pricing, zero payroll tax)",
    aiStatus: "excellent",
    efficiencyGain: "Save $48k+/Year",
    gainBadgeColor: "text-[#70D44B] bg-[#70D44B]/10 border-[#70D44B]/30",
    tooltip: {
      term: "Payroll & Overhead Efficiency",
      definition: "Direct operational expense comparison between salaried front-desk reception staff vs automated 24/7 AI software infrastructure.",
      technicalDetails: "Eliminates W-2 payroll taxes, health benefits, sick leave, training overhead, and overtime costs.",
      impact: "Saves local businesses $48,000 to $70,000+ annually while delivering faster, error-free customer intake."
    }
  },
];

interface ServiceComparisonProps {
  openAuditModal?: () => void;
}

export const ServiceComparison: React.FC<ServiceComparisonProps> = ({ openAuditModal }) => {
  const [activeTab, setActiveTab] = useState<"All" | "Voice" | "Chat" | "CRM">("All");
  const [activeTooltipIdx, setActiveTooltipIdx] = useState<number | null>(null);

  const filteredData = activeTab === "All" 
    ? COMPARISON_DATA 
    : COMPARISON_DATA.filter(item => item.category === activeTab);

  return (
    <section className="py-24 bg-[#050D1D] relative border-b border-[#176BFF]/20 overflow-hidden">
      
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] ambient-glow-blue pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] ambient-glow-cyan pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] glass-pill px-4 py-1.5 rounded-full shadow-md">
            <Zap className="w-3.5 h-3.5" /> <span>Operational Efficiency Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            MANUAL PROCESSES VS. AI AUTOMATION NY TIERS
          </h2>

          <p className="text-sm sm:text-base text-[#8D9AAF] leading-relaxed">
            Compare traditional staff-heavy operations with our automated AI systems. Hover or tap the <HelpCircle className="w-4 h-4 inline text-[#00C2FF] mx-0.5" /> icons for technical term definitions and ROI insights.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2.5 overflow-x-auto scrollbar-none pb-2">
          {[
            { id: "All", label: "All Systems Matrix", icon: Sparkles },
            { id: "Voice", label: "AI Voice Receptionist", icon: Phone },
            { id: "Chat", label: "AI Web Chat & Intake", icon: MessageSquare },
            { id: "CRM", label: "CRM & Pipeline Automation", icon: Workflow },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playFilterChime();
                  setActiveTab(tab.id as any);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-heading font-semibold transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF] ${
                  isSelected
                    ? "bg-gradient-to-r from-[#176BFF] to-[#00C2FF] text-white shadow-lg shadow-[#176BFF]/30 border border-[#00C2FF]/60"
                    : "glass-pill text-[#8D9AAF] hover:text-white hover:border-white/25"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Comparison Table / Grid Card */}
        <div className="bento-card rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Table Header Row (Desktop) */}
          <div className="hidden lg:grid grid-cols-12 bg-[#0A1D3C] border-b border-white/10 p-4 text-xs font-heading font-bold uppercase tracking-wider text-[#8D9AAF]">
            <div className="col-span-3 text-white flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00C2FF]" /> Operational Benchmark
            </div>
            <div className="col-span-4 text-rose-400/90 flex items-center gap-1.5">
              <X className="w-4 h-4 text-rose-400" /> Standard Manual Process
            </div>
            <div className="col-span-3 text-[#70D44B] flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#70D44B]" /> AI Automation NY System
            </div>
            <div className="col-span-2 text-right text-[#00C2FF] flex items-center justify-end gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#00C2FF]" /> ROI Gain
            </div>
          </div>

          {/* Table Body / Mobile Cards */}
          <div className="divide-y divide-white/10">
            {filteredData.map((row, index) => {
              const isTooltipOpen = activeTooltipIdx === index;

              return (
                <div 
                  key={index}
                  className="p-5 lg:p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center hover:bg-[#0D1F3D]/60 transition-colors relative"
                >
                  
                  {/* Metric Title with Interactive Context-Aware Tooltip */}
                  <div className="lg:col-span-3 relative">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#00C2FF] bg-[#176BFF]/10 px-2 py-0.5 rounded border border-[#176BFF]/20 lg:hidden mb-1.5 inline-block">
                      {row.category} Tier
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-heading font-bold text-white">
                        {row.metric}
                      </h3>
                      
                      {/* Context-Aware Tooltip Trigger */}
                      <div className="relative inline-block">
                        <button
                          type="button"
                          onMouseEnter={() => setActiveTooltipIdx(index)}
                          onMouseLeave={() => setActiveTooltipIdx(null)}
                          onFocus={() => setActiveTooltipIdx(index)}
                          onBlur={() => setActiveTooltipIdx(null)}
                          onClick={() => setActiveTooltipIdx(isTooltipOpen ? null : index)}
                          className="p-1 rounded-full text-[#00C2FF]/70 hover:text-[#00C2FF] hover:bg-[#00C2FF]/10 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
                          aria-label={`Technical definition for ${row.metric}`}
                          aria-expanded={isTooltipOpen}
                        >
                          <HelpCircle className="w-4 h-4" />
                        </button>

                        {/* Tooltip Popup Card */}
                        {isTooltipOpen && (
                          <div className="absolute left-0 lg:left-6 top-8 z-50 w-72 sm:w-80 p-4 rounded-2xl bg-[#0A1D3C] border border-[#00C2FF]/50 shadow-2xl backdrop-blur-xl text-left text-white animate-in fade-in zoom-in-95 duration-150">
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
                              <Info className="w-4 h-4 text-[#00C2FF] shrink-0" />
                              <span className="font-heading font-bold text-xs text-[#00C2FF] uppercase tracking-wider">
                                {row.tooltip.term}
                              </span>
                            </div>
                            
                            <p className="text-xs text-[#F7F9FC] leading-relaxed mb-2 font-normal">
                              {row.tooltip.definition}
                            </p>

                            <div className="space-y-1.5 pt-2 border-t border-white/10 text-[11px]">
                              <div className="text-[#8D9AAF]">
                                <strong className="text-white font-mono">Tech Details:</strong> {row.tooltip.technicalDetails}
                              </div>
                              <div className="text-[#70D44B] font-medium">
                                <strong className="text-white font-mono">Business Impact:</strong> {row.tooltip.impact}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Manual Process (Negative/Bad) */}
                  <div className="lg:col-span-4 p-3 rounded-xl bg-rose-500/5 border border-rose-500/20 text-xs text-[#F7F9FC] space-y-1">
                    <div className="text-[10px] font-heading font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1">
                      <X className="w-3 h-3 text-rose-400 shrink-0" /> Manual Process
                    </div>
                    <p className="text-xs text-rose-200/90 leading-relaxed">
                      {row.manualProcess}
                    </p>
                  </div>

                  {/* AI Automation Tier (Positive/Good) */}
                  <div className="lg:col-span-3 p-3 rounded-xl bg-[#70D44B]/5 border border-[#70D44B]/30 text-xs text-white space-y-1">
                    <div className="text-[10px] font-heading font-bold text-[#70D44B] uppercase tracking-wider flex items-center gap-1">
                      <Check className="w-3 h-3 text-[#70D44B] shrink-0" /> AI System
                    </div>
                    <p className="text-xs text-white font-medium leading-relaxed">
                      {row.aiAutomationTier}
                    </p>
                  </div>

                  {/* Efficiency Gain Badge */}
                  <div className="lg:col-span-2 text-left lg:text-right flex lg:justify-end items-center">
                    <span className={`inline-flex items-center gap-1 text-xs font-heading font-bold px-3 py-1.5 rounded-full border shadow-sm ${row.gainBadgeColor}`}>
                      <Zap className="w-3 h-3" />
                      <span>{row.efficiencyGain}</span>
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Stats & Savings Banner */}
          <div className="bg-[#0A1D3C] p-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#176BFF] to-[#70D44B] p-0.5 shrink-0">
                <div className="w-full h-full bg-[#07152D] rounded-[14px] flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#70D44B]" />
                </div>
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-heading font-bold text-white">
                  AVERAGE NY CLIENT OPERATIONAL GAIN
                </h3>
                <p className="text-xs text-[#8D9AAF]">
                  Saves 22+ hours of administrative staff time every single week & increases lead booking volume by 40%.
                </p>
              </div>
            </div>

            {openAuditModal && (
              <button
                onClick={openAuditModal}
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#176BFF] to-[#00C2FF] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-xl hover:opacity-95 transition-all shadow-lg shadow-[#176BFF]/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
              >
                <span>Calculate Your Business ROI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

