import React, { useState, useEffect, useRef } from "react";
import { BrandLogo } from "../ui/BrandLogo";
import { X, Copy, Check, Download, Play, Sparkles, Layers, Palette, Type, Shield, ExternalLink } from "lucide-react";
import { trackModalOpen } from "../../lib/dataLayer";

interface BrandAssetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerLoadingScreen: () => void;
}

export const BrandAssetsModal: React.FC<BrandAssetsModalProps> = ({
  isOpen,
  onClose,
  onTriggerLoadingScreen
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      trackModalOpen("Brand Assets Modal");

      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const taglines = [
    { label: "Primary Brand Tagline", text: "Architects of Autonomous Enterprise" },
    { label: "Value Proposition Tagline", text: "Stop Losing Leads. Start Automating Growth." },
    { label: "Performance Tagline", text: "Zero Repetitive Work. 100% Autonomous Efficiency." },
    { label: "NYC Regional Tagline", text: "World-Class AI Automation for NYC & Regional Enterprise" }
  ];

  const colors = [
    { name: "Deep Cyber Navy", hex: "#07152D", usage: "Main Background & Canvas", bgClass: "bg-[#07152D]" },
    { name: "Electric Cobalt", hex: "#176BFF", usage: "Primary Action & Glows", bgClass: "bg-[#176BFF]" },
    { name: "Cyan Hyperglow", hex: "#00C2FF", usage: "High-Contrast Accents & Highlights", bgClass: "bg-[#00C2FF]" },
    { name: "Growth Emerald", hex: "#70D44B", usage: "Success Badges & Conversion ROI", bgClass: "bg-[#70D44B]" },
    { name: "Midnight Obsidian", hex: "#050D1D", usage: "Deep Footer & Glass Panels", bgClass: "bg-[#050D1D]" }
  ];

  const svgMarkup = `<svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 2L4 7V15C4 22.2 9.1 28.8 16 30C22.9 28.8 28 22.2 28 15V7L16 2Z" stroke="#00C2FF" stroke-width="2"/>
  <circle cx="16" cy="15" r="3" fill="#70D44B"/>
</svg>`;

  const downloadSvgFile = () => {
    const blob = new Blob([svgMarkup], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-automation-ny-logo-emblem.svg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-[#050D1D]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      
      {/* Modal Container */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="brand-modal-title"
        aria-describedby="brand-modal-desc"
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#07152D] rounded-3xl border border-[#176BFF]/30 shadow-2xl overflow-hidden flex flex-col text-white glass-panel focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
        tabIndex={-1}
      >
        
        {/* Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#050D1D]/60 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#176BFF]/20 border border-[#176BFF]/30 text-[#00C2FF]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 id="brand-modal-title" className="font-heading font-bold text-lg text-white">
                Brand Assets & Guidelines
              </h2>
              <p id="brand-modal-desc" className="text-xs text-[#8D9AAF]">
                Official AI AUTOMATION NY logos, taglines, color palettes & loading assets
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onTriggerLoadingScreen();
              }}
              className="px-3.5 py-2 rounded-xl bg-[#00C2FF]/10 hover:bg-[#00C2FF]/20 text-[#00C2FF] border border-[#00C2FF]/30 font-heading text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Replay Loading Screen</span>
            </button>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#8D9AAF] hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
              aria-label="Close Brand Assets Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          
          {/* Section 1: Official Logo Lockups */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#00C2FF] flex items-center gap-2">
                <Shield className="w-4 h-4" /> Official Logo Lockups
              </h3>
              <button
                onClick={downloadSvgFile}
                className="text-xs text-[#70D44B] font-semibold flex items-center gap-1.5 hover:underline"
              >
                <Download className="w-3.5 h-3.5" /> Download SVG Vector Emblem
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Primary Header Logo */}
              <div className="p-5 rounded-2xl bg-[#050D1D] border border-white/10 flex flex-col items-center justify-center text-center gap-3">
                <span className="text-[10px] font-mono text-[#8D9AAF] uppercase tracking-wider">Primary Header Logo</span>
                <BrandLogo size="md" variant="header" />
              </div>

              {/* Stacked Showcase Logo */}
              <div className="p-5 rounded-2xl bg-[#050D1D] border border-white/10 flex flex-col items-center justify-center text-center gap-3">
                <span className="text-[10px] font-mono text-[#8D9AAF] uppercase tracking-wider">Stacked Brand Mark</span>
                <BrandLogo size="md" variant="stacked" showTagline={true} />
              </div>

              {/* Cyber Shield Icon Mark */}
              <div className="p-5 rounded-2xl bg-[#050D1D] border border-white/10 flex flex-col items-center justify-center text-center gap-3">
                <span className="text-[10px] font-mono text-[#8D9AAF] uppercase tracking-wider">Icon Emblem Only</span>
                <BrandLogo size="lg" variant="icon" />
              </div>

            </div>
          </div>

          {/* Section 2: Official Taglines */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#00C2FF] flex items-center gap-2 border-b border-white/10 pb-2">
              <Type className="w-4 h-4" /> Official Brand Taglines
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {taglines.map((t, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#00C2FF]">{t.label}</div>
                    <div className="text-sm font-heading font-semibold text-white">"{t.text}"</div>
                  </div>
                  <button
                    onClick={() => handleCopy(t.text, `tagline-${i}`)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-[#176BFF]/30 text-white transition-colors shrink-0"
                    title="Copy Tagline"
                  >
                    {copiedItem === `tagline-${i}` ? (
                      <Check className="w-4 h-4 text-[#70D44B]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Official Color Palette */}
          <div className="space-y-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#00C2FF] flex items-center gap-2 border-b border-white/10 pb-2">
              <Palette className="w-4 h-4" /> Official Brand Color Palette
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {colors.map((c, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className={`w-full h-12 rounded-xl ${c.bgClass} border border-white/20 shadow-inner flex items-center justify-center`}>
                    <span className="text-xs font-mono font-bold text-white drop-shadow">{c.hex}</span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xs text-white">{c.name}</div>
                    <div className="text-[10px] text-[#8D9AAF] line-clamp-1">{c.usage}</div>
                  </div>
                  <button
                    onClick={() => handleCopy(c.hex, `color-${i}`)}
                    className="w-full py-1 rounded-lg bg-white/10 hover:bg-[#176BFF]/30 text-[10px] font-mono text-white transition-colors flex items-center justify-center gap-1"
                  >
                    {copiedItem === `color-${i}` ? <Check className="w-3 h-3 text-[#70D44B]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedItem === `color-${i}` ? "Copied" : "Copy Hex"}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Typography & SVG Code Snippet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Typography */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="font-heading text-xs font-bold uppercase text-[#00C2FF]">Typography Specifications</div>
              <div className="text-xs text-[#8D9AAF] space-y-1">
                <p><strong className="text-white">Primary Heading Font:</strong> Plus Jakarta Sans / Orbitron (Bold, ExtraBold 800)</p>
                <p><strong className="text-white">Body Text Font:</strong> Inter / System Sans (Regular 400, Medium 500)</p>
                <p><strong className="text-white">Tagline Track:</strong> Uppercase tracking [0.15em to 0.2em]</p>
              </div>
            </div>

            {/* SVG Embed Code */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-heading text-xs font-bold uppercase text-[#00C2FF]">SVG Logo Code</div>
                <button
                  onClick={() => handleCopy(svgMarkup, "svg-code")}
                  className="text-[10px] text-[#70D44B] hover:underline flex items-center gap-1"
                >
                  {copiedItem === "svg-code" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedItem === "svg-code" ? "Copied SVG" : "Copy Code"}</span>
                </button>
              </div>
              <pre className="p-2.5 rounded-xl bg-[#050D1D] text-[10px] font-mono text-[#8D9AAF] overflow-x-auto border border-white/5">
                {svgMarkup}
              </pre>
            </div>

          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 bg-[#050D1D]/80 border-t border-white/10 flex items-center justify-between text-xs text-[#8D9AAF]">
          <span>AI AUTOMATION NY • Brand Assets Hub</span>
          <button
            onClick={() => {
              onClose();
              onTriggerLoadingScreen();
            }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#176BFF] to-[#00C2FF] font-heading font-bold text-xs text-white uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Brand Loading Experience</span>
          </button>
        </div>

      </div>
    </div>
  );
};
