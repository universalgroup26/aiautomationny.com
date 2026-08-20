import React from "react";
import { BrandLogo } from "../components/ui/BrandLogo";
import { BrandLoadingScreen } from "../components/ui/BrandLoadingScreen";
import { SEOHead } from "../components/ui/SEOHead";
import { Sparkles, Layers, Shield, Copy, Check, Download, Play, Palette, Type, ArrowRight, Phone } from "lucide-react";

interface BrandAssetsPageProps {
  openAuditModal: () => void;
  openBrandAssetsModal: () => void;
  triggerLoadingScreen: () => void;
}

export const BrandAssetsPage: React.FC<BrandAssetsPageProps> = ({
  openAuditModal,
  openBrandAssetsModal,
  triggerLoadingScreen
}) => {
  const [copiedItem, setCopiedItem] = React.useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const taglines = [
    { label: "Primary Brand Tagline", text: "Architects of Autonomous Enterprise" },
    { label: "Value Proposition", text: "Stop Losing Leads. Start Automating Growth." },
    { label: "Performance Metric", text: "Zero Repetitive Work. 100% Autonomous Efficiency." },
    { label: "NYC Regional Focus", text: "World-Class AI Automation for NYC & Regional Enterprise" }
  ];

  const colors = [
    { name: "Deep Cyber Navy", hex: "#07152D", usage: "Main Canvas & Deep Navy", bgClass: "bg-[#07152D]" },
    { name: "Electric Cobalt", hex: "#176BFF", usage: "Primary Action & Neon Glows", bgClass: "bg-[#176BFF]" },
    { name: "Cyan Hyperglow", hex: "#00C2FF", usage: "High-Contrast Accents & Highlights", bgClass: "bg-[#00C2FF]" },
    { name: "Growth Emerald", hex: "#70D44B", usage: "Success Badges & Conversion ROI", bgClass: "bg-[#70D44B]" },
    { name: "Midnight Obsidian", hex: "#050D1D", usage: "Deep Footer & Dark Glass Panels", bgClass: "bg-[#050D1D]" }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#07152D] text-[#F7F9FC]">
      <SEOHead 
        title="Brand Assets & Guidelines | AI AUTOMATION NY"
        description="Official brand style guide, color system, typography, vector logo marks, and assets for AI AUTOMATION NY (Powered by Universal Tech INC)."
        canonicalUrl="https://aiautomationny.com/brand-assets"
        breadcrumbs={[
          { name: "Home", url: "https://aiautomationny.com" },
          { name: "Brand Assets", url: "https://aiautomationny.com/brand-assets" }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176BFF]/15 border border-[#176BFF]/30 text-[#00C2FF] text-xs font-heading font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Official Brand Identity Hub
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight uppercase">
            AI AUTOMATION <span className="text-[#00C2FF]">NY</span> BRAND ASSETS
          </h1>

          <p className="text-base text-[#8D9AAF] leading-relaxed">
            High-precision brand emblems, official taglines, vector logo lockups, and interactive loading screens for AI AUTOMATION NY.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={triggerLoadingScreen}
              className="px-6 py-3 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Launch Brand Tagline Loading Screen</span>
            </button>

            <button
              onClick={openBrandAssetsModal}
              className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#00C2FF]" />
              <span>Open Brand Inspector Drawer</span>
            </button>
          </div>
        </div>

        {/* Live Loading Screen Interactive Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-bold text-white flex items-center gap-2">
              <Play className="w-5 h-5 text-[#00C2FF]" /> Live Loading Screen Preview
            </h2>
            <span className="text-xs text-[#8D9AAF]">Interactive Real-Time Brand Intro</span>
          </div>

          <div className="rounded-3xl border border-[#176BFF]/30 overflow-hidden shadow-2xl">
            <BrandLoadingScreen inlinePreview={true} durationMs={4000} autoDismiss={false} />
          </div>
        </div>

        {/* Section: Official Logo Variants */}
        <div className="glass-panel p-8 rounded-3xl border border-[#176BFF]/20 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00C2FF]" /> Official Logo Lockups
              </h2>
              <p className="text-xs text-[#8D9AAF]">Designed for header navigation, footers, mobile app icons and client collaterals</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Primary Header Logo */}
            <div className="p-8 rounded-2xl bg-[#050D1D] border border-white/10 flex flex-col items-center justify-center text-center gap-4">
              <span className="text-xs font-mono text-[#00C2FF] uppercase tracking-wider">Primary Horizontal Lockup</span>
              <BrandLogo size="lg" variant="header" />
            </div>

            {/* Stacked Showcase Logo */}
            <div className="p-8 rounded-2xl bg-[#050D1D] border border-white/10 flex flex-col items-center justify-center text-center gap-4">
              <span className="text-xs font-mono text-[#00C2FF] uppercase tracking-wider">Stacked Brand Mark + Tagline</span>
              <BrandLogo size="lg" variant="stacked" showTagline={true} />
            </div>

            {/* Icon Mark Emblem */}
            <div className="p-8 rounded-2xl bg-[#050D1D] border border-white/10 flex flex-col items-center justify-center text-center gap-4">
              <span className="text-xs font-mono text-[#00C2FF] uppercase tracking-wider">Cyber Shield Icon Mark</span>
              <BrandLogo size="xl" variant="icon" />
            </div>

          </div>
        </div>

        {/* Section: Official Taglines */}
        <div className="glass-panel p-8 rounded-3xl border border-[#176BFF]/20 space-y-6">
          <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
            <Type className="w-5 h-5 text-[#00C2FF]" /> Official Taglines & Brand Copy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {taglines.map((t, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#050D1D] border border-white/10 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#00C2FF] uppercase">{t.label}</div>
                  <div className="text-base font-heading font-bold text-white">"{t.text}"</div>
                </div>
                <button
                  onClick={() => handleCopy(t.text, `page-tagline-${idx}`)}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-[#176BFF]/30 text-white transition-colors shrink-0 cursor-pointer"
                >
                  {copiedItem === `page-tagline-${idx}` ? (
                    <Check className="w-4 h-4 text-[#70D44B]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Color Palette */}
        <div className="glass-panel p-8 rounded-3xl border border-[#176BFF]/20 space-y-6">
          <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
            <Palette className="w-5 h-5 text-[#00C2FF]" /> Official Brand Color Palette
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {colors.map((c, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#050D1D] border border-white/10 space-y-3">
                <div className={`w-full h-16 rounded-xl ${c.bgClass} border border-white/20 shadow-inner flex items-center justify-center`}>
                  <span className="text-xs font-mono font-bold text-white">{c.hex}</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-white">{c.name}</div>
                  <div className="text-xs text-[#8D9AAF]">{c.usage}</div>
                </div>
                <button
                  onClick={() => handleCopy(c.hex, `page-color-${i}`)}
                  className="w-full py-1.5 rounded-xl bg-white/5 hover:bg-[#176BFF]/30 text-xs font-mono text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedItem === `page-color-${i}` ? <Check className="w-3.5 h-3.5 text-[#70D44B]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedItem === `page-color-${i}` ? "Copied" : "Copy Hex"}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
