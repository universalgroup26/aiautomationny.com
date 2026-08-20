import React, { useState } from "react";
import { BarChart3, TrendingUp, Phone, Calendar, Users, Zap, CheckCircle2, DollarSign, Clock, ArrowUpRight, Plus, FastForward, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { trackInteractiveDemo } from "../../lib/dataLayer";

interface LeadItem {
  id: string;
  name: string;
  service: string;
  tag: string;
  value: string;
  numValue: number;
}

export const CRMPipelineDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"pipeline" | "activity">("pipeline");
  const [wonAlert, setWonAlert] = useState<string | null>(null);

  const [stages, setStages] = useState<{
    id: string;
    title: string;
    leads: LeadItem[];
  }[]>([
    {
      id: "inbound",
      title: "New Inbound Leads",
      leads: [
        { id: "lead-1", name: "John D. (Jackson Heights)", service: "HVAC Emergency Repair", tag: "AI Voice", value: "$1,800", numValue: 1800 },
        { id: "lead-2", name: "Apex Legal Intake", service: "Personal Injury Inquiry", tag: "AI Chat", value: "$8,500", numValue: 8500 }
      ]
    },
    {
      id: "qualified",
      title: "AI Responded & Qualified",
      leads: [
        { id: "lead-3", name: "Elena R. (Astoria)", service: "Dental Implant Consultation", tag: "AI Qualified", value: "$4,200", numValue: 4200 },
        { id: "lead-4", name: "Midtown Plumbing", service: "Commercial Water Heater", tag: "AI Qualified", value: "$5,500", numValue: 5500 }
      ]
    },
    {
      id: "scheduled",
      title: "Appointment Scheduled",
      leads: [
        { id: "lead-5", name: "Queens Roofing Project", service: "Full Roof Replacement", tag: "Booked Today", value: "$14,000", numValue: 14000 },
        { id: "lead-6", name: "Dr. Chen Practice", service: "Hygiene Cleanings x3", tag: "Booked Today", value: "$1,200", numValue: 1200 }
      ]
    },
    {
      id: "closed",
      title: "Closed Won Revenue",
      leads: [
        { id: "lead-7", name: "Brooklyn Remodel", service: "Bathroom Renovation", tag: "Paid Deposit", value: "$9,500", numValue: 9500 }
      ]
    }
  ]);

  const [liveActivity, setLiveActivity] = useState<{ time: string; text: string; type: string }[]>([
    { time: "Just now", text: "AI Voice Receptionist answered inbound call for Jackson Heights HVAC inquiry in 1.8 seconds.", type: "call" },
    { time: "2 mins ago", text: "New calendar appointment scheduled for tomorrow 10:00 AM directly into Google Calendar.", type: "booking" },
    { time: "8 mins ago", text: "Automated 2-way SMS reminder sent to client for 2:00 PM service arrival window.", type: "sms" },
    { time: "15 mins ago", text: "5-Star Google Review received from satisfied plumbing customer in Flushing, NY.", type: "review" }
  ]);

  // Advance a lead to the next stage
  const advanceLead = (leadId: string, currentStageIdx: number) => {
    if (currentStageIdx >= stages.length - 1) return;

    setStages(prev => {
      const nextStages = prev.map(s => ({ ...s, leads: [...s.leads] }));
      const leadToMove = nextStages[currentStageIdx].leads.find(l => l.id === leadId);
      if (!leadToMove) return prev;

      // Remove from current
      nextStages[currentStageIdx].leads = nextStages[currentStageIdx].leads.filter(l => l.id !== leadId);

      // Update tag if reaching won
      if (currentStageIdx + 1 === 3) {
        leadToMove.tag = "Paid Deposit";
        setWonAlert(`🎉 Lead Won! ${leadToMove.name} converted (${leadToMove.value})`);
        setTimeout(() => setWonAlert(null), 4000);
      } else if (currentStageIdx + 1 === 2) {
        leadToMove.tag = "Booked Calendar";
      } else if (currentStageIdx + 1 === 1) {
        leadToMove.tag = "AI Qualified";
      }

      // Add to next
      nextStages[currentStageIdx + 1].leads.unshift(leadToMove);
      return nextStages;
    });

    // Add to activity stream
    setLiveActivity(prev => [
      {
        time: "Just now",
        text: `Lead advanced through AI Pipeline to stage: ${stages[currentStageIdx + 1]?.title}`,
        type: "advance"
      },
      ...prev.slice(0, 5)
    ]);

    trackInteractiveDemo("CRM Pipeline Demo", "Advance Lead");
  };

  // Add a new simulated lead
  const addSimulatedLead = () => {
    const sampleLeads = [
      { name: "Flushing Dental Care", service: "Orthodontics Inquiry", tag: "AI Voice Call", value: "$3,400", numValue: 3400 },
      { name: "Manhattan Law Office", service: "Estate Planning Intake", tag: "AI Web Chat", value: "$6,200", numValue: 6200 },
      { name: "Bayside HVAC Service", service: "Boiler Installation", tag: "Missed Call SMS", value: "$4,800", numValue: 4800 },
      { name: "Staten Island Roofing", service: "Storm Damage Inspection", tag: "AI Voice Call", value: "$8,900", numValue: 8900 }
    ];

    const random = sampleLeads[Math.floor(Math.random() * sampleLeads.length)];
    const newId = `lead-${Date.now()}`;

    setStages(prev => {
      const copy = [...prev];
      copy[0] = {
        ...copy[0],
        leads: [{ id: newId, ...random }, ...copy[0].leads]
      };
      return copy;
    });

    setLiveActivity(prev => [
      {
        time: "Just now",
        text: `⚡ New Inbound Lead captured: ${random.name} (${random.service}) via ${random.tag}`,
        type: "new"
      },
      ...prev.slice(0, 5)
    ]);

    trackInteractiveDemo("CRM Pipeline Demo", "Add Simulated Lead");
  };

  // Calculate totals
  const totalPipelineValue = stages.reduce((acc, stage) => {
    return acc + stage.leads.reduce((sAcc, l) => sAcc + l.numValue, 0);
  }, 0);

  const totalLeadsCount = stages.reduce((acc, stage) => acc + stage.leads.length, 0);

  const metrics = [
    { label: "Pipeline Active Leads", value: `${totalLeadsCount} Leads`, change: "+28% vs avg", icon: Users, color: "text-[#00C2FF]" },
    { label: "Pipeline Total Value", value: `$${totalPipelineValue.toLocaleString()}`, change: "Live Value", icon: DollarSign, color: "text-[#70D44B]" },
    { label: "Speed to Lead Avg", value: "42 Seconds", change: "Instant 2-Way SMS", icon: Zap, color: "text-[#FFB800]" },
    { label: "Appointments Booked", value: `${stages[2].leads.length + stages[3].leads.length} Booked`, change: "100% CRM Sync", icon: Calendar, color: "text-[#176BFF]" }
  ];

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#176BFF]/30 bg-[#07152D]/95 shadow-2xl relative overflow-hidden">
      
      {/* Won Alert Banner */}
      <AnimatePresence>
        {wonAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 p-3 bg-gradient-to-r from-[#70D44B]/20 to-[#00C2FF]/20 border border-[#70D44B]/50 rounded-xl text-center text-xs font-heading font-bold text-[#70D44B] flex items-center justify-center gap-2 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#70D44B] animate-spin" />
            <span>{wonAlert}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-[#00C2FF] bg-[#00C2FF]/10 px-3 py-1 rounded-full mb-1">
            <BarChart3 className="w-3.5 h-3.5" /> Interactive CRM Pipeline Sandbox
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
            AI Automation Dashboard Preview
          </h3>
          <p className="text-xs text-[#8D9AAF]">
            Click any lead card to advance it through stages, or inject simulated inbound leads in real time.
          </p>
        </div>

        {/* Action Button Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={addSimulatedLead}
            className="px-3.5 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider bg-[#00C2FF]/15 hover:bg-[#00C2FF]/25 border border-[#00C2FF]/40 text-[#00C2FF] flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            title="Inject simulated inbound lead"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Simulate Lead</span>
          </button>

          {/* View Tabs */}
          <div className="flex bg-[#0D1F3D] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === "pipeline" ? "bg-[#176BFF] text-white shadow-md" : "text-[#8D9AAF] hover:text-white"
              }`}
            >
              Pipeline View
            </button>
            <button
              onClick={() => setActiveTab("activity")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === "activity" ? "bg-[#176BFF] text-white shadow-md" : "text-[#8D9AAF] hover:text-white"
              }`}
            >
              Live Feed
            </button>
          </div>
        </div>
      </div>

      {/* 4 Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className="bg-[#0D1F3D] p-4 rounded-xl border border-white/10 space-y-2 hover:border-[#176BFF]/50 transition-colors">
              <div className="flex items-center justify-between text-xs text-[#8D9AAF]">
                <span>{m.label}</span>
                <Icon className={`w-4 h-4 ${m.color}`} />
              </div>
              <div className="text-lg sm:text-xl font-heading font-bold text-white">
                {m.value}
              </div>
              <div className="text-[10px] text-[#70D44B] font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {m.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Tab Content */}
      {activeTab === "pipeline" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {stages.map((stage, idx) => (
            <div key={stage.id} className="bg-[#050D1D] p-4 rounded-xl border border-white/10 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
                  <div className="font-heading font-bold text-xs text-white uppercase tracking-wider">
                    {stage.title}
                  </div>
                  <span className="text-[10px] bg-[#176BFF]/20 text-[#00C2FF] font-bold px-2 py-0.5 rounded-full">
                    {stage.leads.length}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {stage.leads.map((lead) => (
                    <motion.div
                      layout
                      key={lead.id}
                      onClick={() => advanceLead(lead.id, idx)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer group relative ${
                        idx === 3
                          ? "bg-[#70D44B]/10 border-[#70D44B]/30 hover:border-[#70D44B]"
                          : "bg-[#0D1F3D] border-white/10 hover:border-[#00C2FF]/60 hover:shadow-lg hover:shadow-[#00C2FF]/10"
                      }`}
                      title={idx < 3 ? "Click to advance lead to next pipeline stage" : "Closed Won Lead"}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold text-white group-hover:text-[#00C2FF] transition-colors">
                          {lead.name}
                        </div>
                        {idx < 3 && (
                          <ArrowRight className="w-3 h-3 text-[#8D9AAF] group-hover:text-[#00C2FF] group-hover:translate-x-0.5 transition-all" />
                        )}
                      </div>
                      <div className="text-[11px] text-[#8D9AAF] mt-0.5">{lead.service}</div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[10px]">
                        <span className="bg-white/5 px-2 py-0.5 rounded text-[#00C2FF] font-medium">
                          {lead.tag}
                        </span>
                        <span className="font-bold text-[#70D44B]">{lead.value}</span>
                      </div>
                    </motion.div>
                  ))}

                  {stage.leads.length === 0 && (
                    <div className="p-4 border border-dashed border-white/10 rounded-lg text-center text-xs text-[#8D9AAF]">
                      No leads in this stage
                    </div>
                  )}
                </div>
              </div>

              <div className="text-[10px] text-center text-[#8D9AAF] pt-2 border-t border-white/5">
                Stage Total: ${stage.leads.reduce((a, b) => a + b.numValue, 0).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-[#050D1D] p-4 rounded-xl border border-white/10 space-y-3">
          <div className="text-xs font-heading font-bold text-white uppercase tracking-wider pb-2 border-b border-white/10 flex items-center justify-between">
            <span>Real-Time Event Log</span>
            <span className="text-[#70D44B] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#70D44B] animate-ping"></span> Live Connected
            </span>
          </div>
          <div className="space-y-2.5 max-h-72 overflow-y-auto scrollbar-thin">
            {liveActivity.map((act, aIdx) => (
              <div key={aIdx} className="p-3 bg-[#0D1F3D] rounded-lg border border-white/5 flex items-start gap-3 text-xs">
                <div className="w-2 h-2 rounded-full bg-[#00C2FF] mt-1.5 shrink-0"></div>
                <div className="flex-1">
                  <p className="text-white leading-relaxed">{act.text}</p>
                  <span className="text-[10px] text-[#8D9AAF] mt-1 block">{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
