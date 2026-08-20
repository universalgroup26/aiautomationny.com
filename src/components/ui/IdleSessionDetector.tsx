import React, { useState, useEffect } from "react";
import { Clock, MessageSquare, PhoneCall, Sparkles, X, ArrowRight, Calendar, Mail, Zap, DollarSign, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { trackInteractiveDemo } from "../../lib/dataLayer";

interface IdleSessionDetectorProps {
  idleTimeoutMs?: number; // Default 40000ms (40 seconds)
  openContactModal: () => void;
  openAuditModal: () => void;
  navigate: (path: string) => void;
}

const TRANSLATIONS: Record<string, {
  badge: string;
  title: string;
  tagline: string;
  b1: string;
  b2: string;
  b3: string;
  contactCta: string;
  demoCta: string;
  auditPrompt: string;
  auditCta: string;
}> = {
  en: {
    badge: "Session Awareness • NYC AI Operations",
    title: "Still exploring AI AUTOMATION NY?",
    tagline: "Never miss another $5,000+ NYC lead with 24/7 automated AI phone & chat reception.",
    b1: "⚡ 2-Second Lead Response (Beats 5-min decay)",
    b2: "💰 Save $48k+/Yr on Front-Desk Staff Payroll",
    b3: "📅 Direct Calendar & CRM Pipeline Sync",
    contactCta: "Contact Us Now",
    demoCta: "Book Live Demo",
    auditPrompt: "Want a free custom ROI estimate?",
    auditCta: "Free AI Audit",
  },
  bn: {
    badge: "সেশন সচেতনতা • NYC AI অপারেশনস",
    title: "এখনও AI AUTOMATION NY এক্সপ্লোর করছেন?",
    tagline: "২৪/৭ স্বয়ংক্রিয় AI ফোন এবং চ্যাট রিসেপশনের মাধ্যমে আর কোনো মূল্যবান লিড মিস করবেন না।",
    b1: "⚡ ২-সেকেন্ড লিড রেসপন্স স্পিড",
    b2: "💰 ফ্রন্ট-ডেস্ক বেতনে বছরে $৪৮,০০০+ সাশ্রয়",
    b3: "📅 সরাসরি ক্যালেন্ডার ও CRM সিঙ্ক",
    contactCta: "আমাদের সাথে যোগাযোগ করুন",
    demoCta: "লাইভ ডেমো বুক করুন",
    auditPrompt: "ফ্রি ROI হিসাব চান?",
    auditCta: "ফ্রি AI অডিট",
  },
  es: {
    badge: "Conciencia de Sesión • Operaciones de IA en NYC",
    title: "¿Aún explorando AI AUTOMATION NY?",
    tagline: "No pierda más clientes potenciales de +$5,000 con recepción automatizada de IA 24/7.",
    b1: "⚡ Respuesta a clientes en <2 segundos",
    b2: "💰 Ahorre $48,000+/año en nómina",
    b3: "📅 Sincronización directa con Calendario y CRM",
    contactCta: "Contáctenos Ahora",
    demoCta: "Reservar Demostración",
    auditPrompt: "¿Desea un cálculo de ROI gratuito?",
    auditCta: "Auditoría de IA Gratis",
  },
  zh: {
    badge: "会话感知 • 纽约 AI 运营",
    title: "还在浏览 AI AUTOMATION NY 吗？",
    tagline: "通过 24/7 自动 AI 电话和聊天接听，绝不错过任何高价值潜在客户。",
    b1: "⚡ 2 秒极速潜在客户响应",
    b2: "💰 每年节省 $48,000+ 前台薪酬",
    b3: "📅 日历和 CRM 管道直接同步",
    contactCta: "立即联系我们",
    demoCta: "预约演示",
    auditPrompt: "想要免费的投资回报率估算？",
    auditCta: "免费 AI 审计",
  },
  fr: {
    badge: "Sensibilisation à la session • Opérations IA NYC",
    title: "Vous explorez toujours AI AUTOMATION NY ?",
    tagline: "Ne manquez plus aucun prospect grâce à notre réception IA automatisée 24/7.",
    b1: "⚡ Réponse aux prospects en <2 secondes",
    b2: "💰 Économisez +48k$/an sur la masse salariale",
    b3: "📅 Synchronisation calendrier et CRM en temps réel",
    contactCta: "Contactez-nous",
    demoCta: "Réserver une Demo",
    auditPrompt: "Envie d'une estimation ROI gratuite ?",
    auditCta: "Audit IA Gratuit",
  },
  ru: {
    badge: "Сессионный информирование • ИИ Операции Нью-Йорк",
    title: "Всё ещё изучаете AI AUTOMATION NY?",
    tagline: "Не упускайте ценных клиентов благодаря круглосуточному ИИ-приёму звонков и чатов.",
    b1: "⚡ Ответ клиенту за <2 секунды",
    b2: "💰 Экономия $48 000+/год на зарплате",
    b3: "📅 Синхронизация с календарем и CRM",
    contactCta: "Связаться с нами",
    demoCta: "Заказать демо",
    auditPrompt: "Хотите бесплатный расчет ROI?",
    auditCta: "Бесплатный ИИ-аудит",
  },
  yi: {
    badge: "סעסיע וויסיקייַט • NYC AI אָפּעראַציעס",
    title: "נאָך ויספאָרשן AI AUTOMATION NY?",
    tagline: "פאַרלירן קיינמאָל ווידער קיין נייַע קליענט מיט אונדזער 24/7 אוטאָמאַטישער AI סיסטעם.",
    b1: "⚡ 2-סעקונדע ענטפער צו נייע רופן",
    b2: "💰 שפּאָרן $48,000+ אַ יאָר אויף געהאַלטן",
    b3: "📅 דירעקטע קאַלענדאַר & CRM סינק",
    contactCta: "פאַרבינדן זיך יעצט",
    demoCta: "בוך א לעבן דעמאָ",
    auditPrompt: "ווילט א פרייע ROI אפשאצונג?",
    auditCta: "פרייע AI אוידיט",
  },
};

export const IdleSessionDetector: React.FC<IdleSessionDetectorProps> = ({
  idleTimeoutMs = 40000, // 40 seconds timer
  openContactModal,
  openAuditModal,
  navigate,
}) => {
  const [isIdle, setIsIdle] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    // Check preferred language
    const savedLang = localStorage.getItem("user_preferred_language") || "en";
    setCurrentLang(savedLang);

    const handleLangChange = (e: Event) => {
      const customEvt = e as CustomEvent<string>;
      if (customEvt.detail) setCurrentLang(customEvt.detail);
    };
    window.addEventListener("languageChanged", handleLangChange);

    // Check if previously dismissed in this session
    if (sessionStorage.getItem("idle_session_prompt_dismissed") === "true") {
      setDismissed(true);
      return () => window.removeEventListener("languageChanged", handleLangChange);
    }

    let timer: NodeJS.Timeout;

    const resetTimer = () => {
      if (dismissed) return;
      clearTimeout(timer);
      setIsIdle(false);
      timer = setTimeout(() => {
        setIsIdle(true);
        trackInteractiveDemo("Idle Session Detector", "40-Second Inactivity Notification Triggered");
      }, idleTimeoutMs);
    };

    const events = ["mousemove", "keydown", "scroll", "click", "touchstart"];
    events.forEach((evt) => window.addEventListener(evt, resetTimer, { passive: true }));

    resetTimer(); // Start timer on mount

    return () => {
      clearTimeout(timer);
      window.removeEventListener("languageChanged", handleLangChange);
      events.forEach((evt) => window.removeEventListener(evt, resetTimer));
    };
  }, [idleTimeoutMs, dismissed]);

  const handleDismiss = () => {
    setIsIdle(false);
    setDismissed(true);
    sessionStorage.setItem("idle_session_prompt_dismissed", "true");
  };

  const handleBookDemo = () => {
    handleDismiss();
    navigate("/book-demo");
  };

  const handleContactClick = () => {
    handleDismiss();
    openContactModal();
  };

  const handleAuditClick = () => {
    handleDismiss();
    openAuditModal();
  };

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  return (
    <AnimatePresence>
      {isIdle && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-40 max-w-md w-full bg-[#07152D]/95 border border-[#00C2FF]/60 rounded-2xl p-5 shadow-2xl backdrop-blur-xl text-white"
        >
          {/* Top Header */}
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[#00C2FF]/15 text-[#00C2FF] border border-[#00C2FF]/30">
                <Clock className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-bold text-[#00C2FF] uppercase tracking-wider block">
                  {t.badge}
                </span>
                <h3 className="text-sm font-heading font-bold text-white">
                  {t.title}
                </h3>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="p-1.5 text-[#8D9AAF] hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Benefit Tagline */}
          <p className="text-xs font-heading font-medium text-white/90 leading-relaxed mb-3 bg-[#0A1D3C] p-2.5 rounded-xl border border-[#176BFF]/20">
            {t.tagline}
          </p>

          {/* Benefits Bullet List */}
          <div className="space-y-1.5 mb-4 text-[11px] text-[#F7F9FC]">
            <div className="flex items-center gap-1.5 text-[#70D44B] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#70D44B]" />
              <span>{t.b1}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#00C2FF] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#00C2FF]" />
              <span>{t.b2}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#F7F9FC]/90">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-white" />
              <span>{t.b3}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleContactClick}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#176BFF] to-[#00C2FF] text-white text-xs font-heading font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.contactCta}</span>
            </button>

            <button
              onClick={handleBookDemo}
              className="py-2.5 px-3 rounded-xl bg-[#0A1D3C] hover:bg-[#0D1F3D] text-[#00C2FF] border border-[#00C2FF]/40 text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.demoCta}</span>
            </button>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-[#8D9AAF]">
            <span>{t.auditPrompt}</span>
            <button
              onClick={handleAuditClick}
              className="text-[#70D44B] hover:underline font-semibold flex items-center gap-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#70D44B]"
            >
              <span>{t.auditCta}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
