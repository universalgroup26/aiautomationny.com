import React, { useState, useEffect, useRef } from "react";
import { Globe, Check, X, Sparkles, Languages } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { pushDataLayerEvent } from "../../lib/dataLayer";

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  greeting: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸", greeting: "Welcome to AI AUTOMATION NY" },
  { code: "bn", name: "Bangla", nativeName: "বাংলা", flag: "🇧🇩", greeting: "AI AUTOMATION NY-এ স্বাগতম" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇲🇽", greeting: "Bienvenido a AI AUTOMATION NY" },
  { code: "zh", name: "Chinese", nativeName: "中文", flag: "🇨🇳", greeting: "欢迎来到 AI AUTOMATION NY" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", greeting: "Bienvenue sur AI AUTOMATION NY" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", greeting: "Добро пожаловать в AI AUTOMATION NY" },
  { code: "yi", name: "Yiddish/Hebrew", nativeName: "ייִדיש / עברית", flag: "🇮🇱", greeting: "ברוכים הבאים צו AI AUTOMATION NY" },
];

interface LanguagePreferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLanguage?: (lang: LanguageOption) => void;
}

export const LanguagePreferenceModal: React.FC<LanguagePreferenceModalProps> = ({
  isOpen,
  onClose,
  onSelectLanguage,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [selectedLang, setSelectedLang] = useState<string>("en");

  useEffect(() => {
    const saved = localStorage.getItem("user_preferred_language");
    if (saved) setSelectedLang(saved);

    if (isOpen) {
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  const handleChoose = (lang: LanguageOption) => {
    setSelectedLang(lang.code);
    localStorage.setItem("user_preferred_language", lang.code);
    localStorage.setItem("user_language_prompt_seen", "true");

    pushDataLayerEvent("language_selected", {
      language_code: lang.code,
      language_name: lang.name,
    });

    window.dispatchEvent(new CustomEvent("languageChanged", { detail: lang.code }));

    if (onSelectLanguage) onSelectLanguage(lang);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="language-modal-title"
            className="relative w-full max-w-lg bg-[#07152D] rounded-2xl p-6 sm:p-8 border border-[#00C2FF]/40 shadow-2xl glass-panel focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
            tabIndex={-1}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#8D9AAF] hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
              aria-label="Close Language Selector"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/30">
                <Languages className="w-5 h-5" />
              </div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF]">
                Multi-Language Support
              </span>
            </div>

            <h2 id="language-modal-title" className="text-xl font-heading font-extrabold text-white mb-1">
              Prefer your language? / ¿Prefieres tu idioma?
            </h2>
            <p className="text-xs text-[#8D9AAF] mb-6 leading-relaxed">
              Select your preferred language for automated AI customer support, call transcripts, and communications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {LANGUAGES.map((lang) => {
                const isSelected = selectedLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleChoose(lang)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-[#176BFF]/20 border-[#00C2FF] text-white shadow-lg shadow-[#176BFF]/20"
                        : "bg-[#0A1D3C] hover:bg-[#0D1F3D] border-[#176BFF]/20 text-[#8D9AAF] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{lang.flag}</span>
                      <div>
                        <div className="text-xs font-heading font-bold text-white">{lang.nativeName}</div>
                        <div className="text-[10px] text-[#8D9AAF]">{lang.name}</div>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#00C2FF]" />}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
              <span className="text-[#8D9AAF]">You can change language anytime in site preferences.</span>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-heading font-semibold cursor-pointer"
              >
                Continue in English
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
