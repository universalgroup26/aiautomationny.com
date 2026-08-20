import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { triggerSuccessConfetti } from "../../lib/confetti";
import { trackNewsletterSubscription } from "../../lib/dataLayer";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "You're subscribed to AI AUTOMATION NY updates!");
        trackNewsletterSubscription(email.trim());
        setEmail("");
        triggerSuccessConfetti();
      } else {
        setStatus("error");
        setMessage(data.errors?.[0]?.message || data.message || "Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error("Newsletter submission error:", err);
      setStatus("error");
      setMessage("Unable to subscribe at this time. Please check your connection.");
    }
  };

  return (
    <div className="w-full bg-[#0A1D3C]/80 border border-[#176BFF]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group shadow-xl">
      {/* Decorative background glow */}
      <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#00C2FF]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00C2FF]/20 transition-all duration-500" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Left Copy */}
        <div className="max-w-xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#176BFF]/10 border border-[#176BFF]/30 text-xs font-heading font-semibold text-[#00C2FF] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#70D44B]" />
            <span>Stay Updated on AI Trends</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
            Get Exclusive NY AI Automation Insights
          </h3>
          <p className="text-xs sm:text-sm text-[#8D9AAF] leading-relaxed">
            Join 1,200+ New York business owners receiving our monthly breakdown of high-converting AI voice scripts, CRM workflows, and lead growth strategies. Zero spam.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full lg:w-auto shrink-0 min-w-[280px] sm:min-w-[360px]">
          {status === "success" ? (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#70D44B]/10 border border-[#70D44B]/40 text-[#70D44B] animate-fade-in">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <p className="text-xs font-heading font-semibold">{message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative flex items-center">
                <Mail className="absolute left-3.5 w-4 h-4 text-[#8D9AAF] pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email..."
                  required
                  disabled={status === "submitting"}
                  className="w-full pl-10 pr-28 py-3 bg-[#07152D] border border-[#176BFF]/40 rounded-xl text-sm text-white placeholder-[#8D9AAF] focus:outline-none focus:border-[#00C2FF] focus:ring-1 focus:ring-[#00C2FF] transition-all disabled:opacity-50"
                  aria-label="Business Email Address"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="absolute right-1.5 px-4 py-2 bg-gradient-to-r from-[#176BFF] to-[#00C2FF] hover:from-[#1553C9] hover:to-[#00A3D9] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 shadow-md hover:shadow-[#00C2FF]/20 active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending</span>
                    </>
                  ) : (
                    <>
                      <span>Join</span>
                      <ArrowRight className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>

              {status === "error" && (
                <p className="text-xs text-rose-400 pl-1 font-medium animate-fade-in">
                  {message}
                </p>
              )}
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
