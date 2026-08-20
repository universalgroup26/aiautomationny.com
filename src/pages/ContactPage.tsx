import React, { useState } from "react";
import { SEOHead } from "../components/ui/SEOHead";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { triggerSuccessConfetti } from "../lib/confetti";
import { trackContactSubmission } from "../lib/dataLayer";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    serviceInterest: "AI Voice Receptionist",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        triggerSuccessConfetti();
        trackContactSubmission({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.serviceInterest,
        });
      }
    } catch (err) {
      setSubmitted(true);
      triggerSuccessConfetti();
      trackContactSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.serviceInterest,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-28 pb-20 min-h-screen bg-[#07152D]">
      <SEOHead 
        title="Contact Us | AI AUTOMATION NY"
        description="Get in touch with AI AUTOMATION NY in Jackson Heights, New York. Call (718) 500-2221 or request custom AI system information."
        canonicalUrl="https://aiautomationny.com/contact"
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" },
          { name: "Contact", url: "https://aiautomationny.com/contact" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3.5 py-1.5 rounded-full border border-[#00C2FF]/30">
            <span>Direct Line To Our Team</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            GET IN TOUCH WITH US
          </h1>
          <p className="text-base text-[#8D9AAF]">
            Have questions about integrating AI Voice, Chat, or GoHighLevel CRM into your business? Send us a message or request a consultation.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#176BFF]/30 bg-[#0D1F3D]/80 space-y-6">
              <h2 className="text-xl font-heading font-bold text-white">CONTACT INFORMATION</h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#176BFF]/20 flex items-center justify-center text-[#00C2FF] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white">Office Location</div>
                    <div className="text-[#8D9AAF] mt-0.5">Jackson Heights, New York, NY 11372</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#176BFF]/20 flex items-center justify-center text-[#00C2FF] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white">24/7 AI Phone Line</div>
                    <div className="text-[#8D9AAF] mt-0.5">+1 (718) 555-0199</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#176BFF]/20 flex items-center justify-center text-[#00C2FF] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white">Email Address</div>
                    <div className="text-[#8D9AAF] mt-0.5">hello@aiautomationny.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#176BFF]/20 flex items-center justify-center text-[#00C2FF] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white">Support Hours</div>
                    <div className="text-[#8D9AAF] mt-0.5">AI Systems Active 24/7/365 • Engineering Mon-Fri 8AM-7PM EST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card Placeholder */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#050D1D] text-center space-y-2">
              <div className="font-heading font-bold text-sm text-white flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#70D44B]" /> Serving All 5 NYC Boroughs & Long Island
              </div>
              <p className="text-xs text-[#8D9AAF]">Queens, Brooklyn, Manhattan, The Bronx, Staten Island, Nassau & Suffolk Counties.</p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#176BFF]/30 bg-[#07152D]/95">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#70D44B] mx-auto" />
                  <h3 className="text-2xl font-heading font-bold text-white">MESSAGE SENT SUCCESSFULLY!</h3>
                  <p className="text-xs text-[#8D9AAF]">Thank you! Our engineering team will review your inquiry and get back to you within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-heading font-bold text-white mb-2">SEND US A MESSAGE</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1">Business Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                        placeholder="Apex Heating NY"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                        placeholder="john@apexheating.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                        placeholder="+1 (718) 555-0199"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1">Service Interest</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                    >
                      <option value="AI Voice Receptionist">AI Voice Receptionist</option>
                      <option value="AI Chat & Web Booking">AI Chat & Web Booking</option>
                      <option value="CRM Sales Automation">CRM Sales Automation</option>
                      <option value="Speed-to-Lead Follow-Up">Speed-to-Lead Follow-Up</option>
                      <option value="Database Reactivation">Database Reactivation</option>
                      <option value="Custom AI System">Custom AI System</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1">How Can We Help? *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl p-3 text-xs text-white focus:outline-none"
                      placeholder="Tell us about your current lead volume and phone call setup..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:opacity-95 transition-all shadow-lg shadow-[#176BFF]/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{loading ? "Sending Message..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};
