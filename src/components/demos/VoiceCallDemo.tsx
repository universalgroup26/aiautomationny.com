import React, { useState, useEffect, useRef } from "react";
import { PhoneCall, PhoneOff, Mic, MicOff, User, CheckCircle2, Clock, Calendar, MapPin, Zap, Volume2, VolumeX, FastForward, Play, Pause, RefreshCw } from "lucide-react";
import { trackInteractiveDemo } from "../../lib/dataLayer";

// Helper Web Audio synthesizer for phone tones
function playTone(freq1 = 440, freq2 = 480, duration = 0.3) {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.frequency.value = freq1;
    osc2.frequency.value = freq2;

    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + duration);
    osc2.stop(ctx.currentTime + duration);
  } catch {
    // AudioContext blocked or not supported
  }
}

export const VoiceCallDemo: React.FC = () => {
  const [callActive, setCallActive] = useState(false);
  const [callStep, setCallStep] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [waveHeights, setWaveHeights] = useState<number[]>([30, 60, 25, 80, 50, 95, 45, 70, 35, 55]);

  const transcript = [
    { sender: "AI Receptionist (Sarah)", time: "00:01", text: "Thanks for calling NYC Heating & Cooling! This is Sarah, your AI Voice Assistant. How can I assist you today?" },
    { sender: "Caller (David - Jackson Heights)", time: "00:04", text: "Hi! My heater stopped working completely and it's 28 degrees outside. Can someone come out today?" },
    { sender: "AI Receptionist (Sarah)", time: "00:09", text: "I understand that's an urgent emergency, David. May I confirm your address and best phone number?" },
    { sender: "Caller (David - Jackson Heights)", time: "00:14", text: "Yes, 37-12 82nd Street, Jackson Heights. Cell is 718-555-0199." },
    { sender: "AI Receptionist (Sarah)", time: "00:19", text: "Got it! I have our technician Marcus available in your zip code between 10:00 AM and 12:00 PM today. Shall I lock that slot in for you?" },
    { sender: "Caller (David - Jackson Heights)", time: "00:23", text: "Yes please, 10 AM works perfect!" },
    { sender: "AI Receptionist (Sarah)", time: "00:27", text: "Great! Your appointment is confirmed for 10:00 AM today. I've sent a text confirmation to 718-555-0199 with Marcus's ETA link. Stay warm!" }
  ];

  // Speak text using browser Web Speech API if sound is enabled
  const speakDialogue = (index: number) => {
    if (!soundEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const item = transcript[index];
      if (!item) return;

      const utterance = new SpeechSynthesisUtterance(item.text);
      const isAI = item.sender.startsWith("AI");

      // Custom voice pitch/rate for AI vs Caller
      utterance.pitch = isAI ? 1.15 : 0.95;
      utterance.rate = isAI ? 1.05 : 1.0;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } catch {
      setIsSpeaking(false);
    }
  };

  // Waveform animation effect when call is active
  useEffect(() => {
    let animInterval: NodeJS.Timeout;
    if (callActive) {
      animInterval = setInterval(() => {
        setWaveHeights(prev =>
          prev.map(() => Math.floor(Math.random() * 75) + 20)
        );
      }, 150);
    } else {
      setWaveHeights([20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
    }
    return () => clearInterval(animInterval);
  }, [callActive]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callActive && callStep < transcript.length) {
      interval = setInterval(() => {
        setCallStep(prev => {
          const next = prev + 1;
          if (next <= transcript.length) {
            speakDialogue(next - 1);
          }
          return next;
        });
      }, 3200);
    }
    return () => clearInterval(interval);
  }, [callActive, callStep, soundEnabled]);

  const startDemoCall = () => {
    playTone(350, 440, 0.4); // Standard US dial tone chime
    setCallActive(true);
    setCallStep(1);
    speakDialogue(0);
    trackInteractiveDemo("Voice Call Demo", "Start Demo Call");
  };

  const endDemoCall = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    playTone(480, 620, 0.2);
    setCallActive(false);
    setCallStep(0);
    setIsSpeaking(false);
    trackInteractiveDemo("Voice Call Demo", "End Demo Call");
  };

  const nextStep = () => {
    if (!callActive) {
      startDemoCall();
      return;
    }
    if (callStep < transcript.length) {
      const next = callStep + 1;
      setCallStep(next);
      speakDialogue(next - 1);
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#176BFF]/30 bg-[#07152D]/95 shadow-2xl relative overflow-hidden">
      
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-[#00C2FF] bg-[#00C2FF]/10 px-3 py-1 rounded-full mb-1">
            <Zap className="w-3.5 h-3.5" /> Interactive AI Voice Simulation
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
            AI Voice Receptionist In Action
          </h3>
          <p className="text-xs sm:text-sm text-[#8D9AAF]">
            Simulate a real-time emergency HVAC call answered in &lt;2 seconds with live audio and instant CRM triage.
          </p>
        </div>

        {/* Action Call Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Audio Voice Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (!next && typeof window !== "undefined" && "speechSynthesis" in window) {
                window.speechSynthesis.cancel();
              }
            }}
            className={`px-3 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
              soundEnabled
                ? "bg-[#00C2FF]/20 text-[#00C2FF] border border-[#00C2FF]/50 shadow-sm"
                : "bg-white/5 text-[#8D9AAF] border border-white/10 hover:text-white"
            }`}
            title={soundEnabled ? "Audio voice synthesis enabled" : "Enable voice speech synthesis"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#00C2FF] animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            <span>{soundEnabled ? "Voice Audio ON" : "Voice Audio OFF"}</span>
          </button>

          {!callActive ? (
            <button
              onClick={startDemoCall}
              className="px-5 py-3 bg-gradient-to-r from-[#70D44B] to-[#00C2FF] text-[#07152D] font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#70D44B]/20 flex items-center gap-2 hover:opacity-95 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Simulate Inbound Call</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={nextStep}
                disabled={callStep >= transcript.length}
                className="px-3.5 py-2.5 bg-[#176BFF]/20 hover:bg-[#176BFF]/30 border border-[#176BFF]/50 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-40"
                title="Advance dialogue"
              >
                <FastForward className="w-3.5 h-3.5 text-[#00C2FF]" />
                <span>Next Line</span>
              </button>
              <button
                onClick={endDemoCall}
                className="px-4 py-2.5 bg-red-500/20 border border-red-500/40 text-red-400 font-heading font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 hover:bg-red-500/30 transition-all cursor-pointer"
              >
                <PhoneOff className="w-4 h-4" />
                <span>End Call</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Grid: Live Waveform & Transcript vs Live CRM Lead Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        
        {/* Left Column: Waveform & Live Call Dialogue */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Active Call Status Bar */}
          <div className="bg-[#0D1F3D] p-4 rounded-xl border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${callActive ? "bg-[#70D44B] animate-ping" : "bg-[#8D9AAF]"}`}></div>
              <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                {callActive ? `Call Status: Live Connected (${callStep}/${transcript.length} lines)` : "Status: Ready to Test"}
              </span>
            </div>

            {/* Audio Waveform Bars with dynamic reactive movement */}
            <div className="flex items-center gap-1.5 h-7">
              {waveHeights.map((height, i) => (
                <span
                  key={i}
                  style={{ height: `${height}%` }}
                  className={`w-1.5 rounded-full transition-all duration-150 ${
                    callActive ? "bg-gradient-to-t from-[#176BFF] to-[#00C2FF]" : "bg-white/20"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          {/* Transcript Log Container */}
          <div className="bg-[#050D1D] p-4 rounded-xl border border-white/10 h-64 overflow-y-auto space-y-3 scrollbar-thin">
            {!callActive && callStep === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-[#8D9AAF] space-y-2">
                <PhoneCall className="w-8 h-8 text-[#176BFF] opacity-60 animate-bounce" />
                <p className="text-xs">Click "Simulate Inbound Call" above to test the real-time AI voice conversation flow.</p>
                <p className="text-[11px] text-[#00C2FF]">Tip: Turn on "Voice Audio" to hear Sarah and the caller speak aloud!</p>
              </div>
            ) : (
              transcript.slice(0, callStep).map((msg, index) => {
                const isAI = msg.sender.startsWith("AI");
                return (
                  <div key={index} className={`flex flex-col ${isAI ? "items-start" : "items-end"} animate-in fade-in slide-in-from-bottom-2 duration-200`}>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#8D9AAF] mb-1">
                      <span className="font-semibold text-[#00C2FF]">{msg.sender}</span>
                      <span>• {msg.time}</span>
                    </div>
                    <div className={`p-3 rounded-xl text-xs max-w-[85%] leading-relaxed ${
                      isAI 
                        ? "bg-[#176BFF]/20 border border-[#176BFF]/30 text-white rounded-tl-none" 
                        : "bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#F7F9FC] rounded-tr-none"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>

        {/* Right Column: Real-Time CRM Lead Card Population */}
        <div className="lg:col-span-5 bg-[#0D1F3D] p-5 rounded-xl border border-[#176BFF]/30 flex flex-col justify-between space-y-4 shadow-inner">
          
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#70D44B] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Real-time CRM Sync
              </span>
              <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-[#8D9AAF]">ID: #LEAD-8892</span>
            </div>

            <div className="space-y-3 pt-4 text-xs">
              
              <div className="flex items-center justify-between">
                <span className="text-[#8D9AAF] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#00C2FF]" /> Caller Name:
                </span>
                <span className="font-semibold text-white">
                  {callStep >= 4 ? "David M." : "Detecting..."}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8D9AAF] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00C2FF]" /> Address:
                </span>
                <span className="font-semibold text-white">
                  {callStep >= 4 ? "Jackson Heights, NY 11372" : "Detecting..."}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8D9AAF] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#FFB800]" /> Urgency Level:
                </span>
                <span className={`font-bold px-2 py-0.5 rounded text-[10px] uppercase ${callStep >= 2 ? "bg-red-500/20 text-red-400 border border-red-500/30" : "text-[#8D9AAF]"}`}>
                  {callStep >= 2 ? "HIGH EMERGENCY (NO HEAT)" : "Pending"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8D9AAF] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#70D44B]" /> Booked Window:
                </span>
                <span className="font-semibold text-[#70D44B]">
                  {callStep >= 6 ? "Today, 10:00 AM - 12:00 PM" : "Awaiting selection"}
                </span>
              </div>

            </div>
          </div>

          <div className="p-3.5 bg-[#07152D] rounded-lg border border-white/10 text-[11px] text-[#8D9AAF] space-y-1.5">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#70D44B] inline-block animate-ping"></span>
              Automated Trigger Actions:
            </div>
            <div>• Calendar slot locked in Google Calendar</div>
            <div>• SMS confirmation sent to 718-555-0199</div>
            <div>• Dispatch alert sent to Technician Marcus</div>
          </div>

        </div>

      </div>

    </div>
  );
};
