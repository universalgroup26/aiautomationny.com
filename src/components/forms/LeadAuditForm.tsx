import React, { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft, Building2, User, Mail, Phone, Calendar, Clock, AlertTriangle, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { INDUSTRIES_CATEGORIES } from "../../data/industriesData";
import { triggerSuccessConfetti } from "../../lib/confetti";
import { trackLeadAuditSubmission } from "../../lib/dataLayer";

interface LeadAuditFormProps {
  onSuccess?: () => void;
  onCloseModal?: () => void;
}

const AUDIT_SUCCESS_TRANSLATIONS: Record<string, {
  badge: string;
  title: string;
  greeting: (name: string, biz: string, phone: string) => string;
  summaryTitle: string;
  businessLabel: string;
  challengeLabel: string;
  timeLabel: string;
  nextStepsHeader: string;
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  closeBtn: string;
}> = {
  en: {
    badge: "Audit Scheduled • Fast-Track NYC Routing",
    title: "YOUR FREE AI AUTOMATION AUDIT IS CONFIRMED!",
    greeting: (name, biz, phone) => `Thank you, ${name}! Our AI Solutions Architect will review ${biz}'s workflow and contact you at ${phone} for your scheduled audit session.`,
    summaryTitle: "Audit Appointment Summary",
    businessLabel: "Business & Sector",
    challengeLabel: "Primary Bottleneck",
    timeLabel: "Scheduled Time Window",
    nextStepsHeader: "What Happens Next?",
    s1: "📩 Calendar invitation and Zoom/Call details sent to your business email.",
    s2: "📊 We perform a 360° intake review of your phone, web chat, and competitors.",
    s3: "📞 Reminder notification (SMS & Email) sent 15 minutes prior to session.",
    s4: "🚀 1-on-1 strategy session calculating your monthly lead conversion ROI.",
    closeBtn: "Done & Close Window",
  },
  bn: {
    badge: "অডিট কনফার্মড • দ্রুত প্রসেসিং",
    title: "আপনার ফ্রি AI অডিট কনফার্ম করা হয়েছে!",
    greeting: (name, biz, phone) => `ধন্যবাদ ${name}! আমাদের AI সলিউশন আর্কিটেক্ট ${biz}-এর ওয়ার্কফ্লো রিভিউ করবে এবং নির্ধারিত সময়ে ${phone} নম্বরে আপনার সাথে যোগাযোগ করবে।`,
    summaryTitle: "অডিট বিবরণ",
    businessLabel: "ব্যবসা ও ক্যাটাগরি",
    challengeLabel: "প্রধান চ্যালেঞ্জ",
    timeLabel: "নির্ধারিত সময়",
    nextStepsHeader: "অডিটের আগে পরবর্তী পদক্ষেপসমূহ:",
    s1: "📩 ক্যালেন্ডার ইনভাইট এবং মিটিং লিংক আপনার ইমেইলে পাঠানো হয়েছে।",
    s2: "📊 আপনার ওয়েবসাইট, ফোন সার্ভিস এবং প্রতিযোগী পর্যালোচনা করা হচ্ছে।",
    s3: "📞 সেশনের ১৫ মিনিট আগে আপনার ফোনে রিমাইন্ডার নোটিফিকেশন যাবে।",
    s4: "🚀 লাইভ স্ট্র্যাটেজি সেশন এবং AI অটোমেশন রেভিনিউ হিসাব।",
    closeBtn: "সম্পন্ন ও উইন্ডো বন্ধ করুন",
  },
  es: {
    badge: "Auditoría Programada • Procesamiento Rápido",
    title: "¡SU AUDITORÍA DE IA ESTÁ CONFIRMADA!",
    greeting: (name, biz, phone) => `¡Gracias, ${name}! Nuestro arquitecto de soluciones de IA revisará el flujo de trabajo de ${biz} y lo contactará al ${phone}.`,
    summaryTitle: "Resumen de la Cita de Auditoría",
    businessLabel: "Empresa y Sector",
    challengeLabel: "Desafío Principal",
    timeLabel: "Hora Programada",
    nextStepsHeader: "¿Cuáles son los Siguientes Pasos?",
    s1: "📩 Invitación de calendario enviada a su correo empresarial.",
    s2: "📊 Revisamos su recepción telefónica, chat web y competidores.",
    s3: "📞 Notificación de recordatorio enviada 15 minutos antes.",
    s4: "🚀 Sesión estratégica en vivo para calcular su ROI de conversión.",
    closeBtn: "Completado y Cerrar",
  },
  zh: {
    badge: "审计已预约 • 快速响应通道",
    title: "您的免费 AI 自动化审计已确认！",
    greeting: (name, biz, phone) => `感谢您，${name}！我们的 AI 解决方案架构师将审查 ${biz} 的流程，并拨打 ${phone} 联系您。`,
    summaryTitle: "审计预约摘要",
    businessLabel: "企业名称及行业",
    challengeLabel: "核心痛点",
    timeLabel: "预约时间段",
    nextStepsHeader: "后续处理流程：",
    s1: "📩 日历邀请及会议链接已发送至您的工作邮箱。",
    s2: "📊 我们正对您的电话、在线客服及行业竞争状况进行全面评估。",
    s3: "📞 会议开始前 15 分钟将发送短信/邮件提醒。",
    s4: "🚀 一对一实况策略讨论与 AI 投资回报率精确测算。",
    closeBtn: "完成并关闭窗口",
  },
  fr: {
    badge: "Audit Programmé • Traitement Prioritaire",
    title: "VOTRE AUDIT D'AUTOMATISATION IA EST CONFIRMÉ !",
    greeting: (name, biz, phone) => `Merci ${name} ! Notre architecte IA examinera le flux de travail de ${biz} et vous contactera au ${phone}.`,
    summaryTitle: "Résumé du Rendez-vous d'Audit",
    businessLabel: "Entreprise & Secteur",
    challengeLabel: "Défi Principal",
    timeLabel: "Créneau Horaire",
    nextStepsHeader: "Quelles sont les prochaines étapes ?",
    s1: "📩 Invitation de calendrier envoyée à votre e-mail professionnel.",
    s2: "📊 Nous analysons votre accueil téléphonique, chat web et concurrence.",
    s3: "📞 Notification de rappel envoyée 15 minutes avant la session.",
    s4: "🚀 Session stratégique en direct et calcul de votre ROI.",
    closeBtn: "Terminé & Fermer",
  },
  ru: {
    badge: "Аудит Запланирован • Экспресс Обработка",
    title: "ВАШ БЕСПЛАТНЫЙ ИИ-АУДИТ ПОДТВЕРЖДЕН!",
    greeting: (name, biz, phone) => `Спасибо, ${name}! Наш ИИ-архитектор изучит рабочие процессы ${biz} и свяжется с вами по номеру ${phone}.`,
    summaryTitle: "Сводка Записи на Аудит",
    businessLabel: "Компания и Отрасль",
    challengeLabel: "Основная Проблема",
    timeLabel: "Запланированное Время",
    nextStepsHeader: "Что Происходит Дальше?",
    s1: "📩 Приглашение в календарь отправлено на вашу рабочую почту.",
    s2: "📊 Мы проводим комплексный анализ обработки ваших звонков и заявок.",
    s3: "📞 Уведомление-напоминание за 15 минут до начала встречи.",
    s4: "🚀 Индивидуальная сессия и расчёт окупаемости автоматизации.",
    closeBtn: "Готово и Закрыть",
  },
  yi: {
    badge: "אוידיט באַשטעטיקט • NYC",
    title: "אייער פרייע AI אויডিט איז באַשטעטיקט!",
    greeting: (name, biz, phone) => `אַ דאַנק, ${name}! אונדזער עקספּערט וועט דורכגיין ${biz}'ס סיסטעם און זיך פֿאַרבינדן מיט אייך אויף ${phone}.`,
    summaryTitle: "אוידיט באַשטעטיקונג סיכום",
    businessLabel: "ביזנעס & סעקטאָר",
    challengeLabel: "הויפּט פּראָבלעם",
    timeLabel: "געפּלאַנטע צייט",
    nextStepsHeader: "נאָכפאָלגנדע שטאָפּן ביזן אוידיט:",
    s1: "📩 קאַלענדאַר איינלאַדונג געשיקט צו אייער אימעיל.",
    s2: "📊 מיר אַנאַליזירן אייער טעלעפאָן און קליענטן סיסטעם.",
    s3: "📞 דערמאָנונג אָנזאָג 15 מינוט פֿאַרן סעסיע.",
    s4: "🚀 לייוו עקספּערט סעסיע צו רעכענען אייער AI רווחים.",
    closeBtn: "פאַרטיק & פאַרמאַכן",
  },
};

export const LeadAuditForm: React.FC<LeadAuditFormProps> = ({ onSuccess, onCloseModal }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [currentLang, setCurrentLang] = useState("en");

  const [formData, setFormData] = useState({
    businessName: "",
    industry: "HVAC Contractors",
    leadVolume: "25-50 leads / mo",
    currentChallenge: "Missed phone calls after hours",
    name: "",
    email: "",
    phone: "",
    preferredDate: "Tomorrow Morning",
    preferredTime: "10:00 AM EST",
    notes: ""
  });

  useEffect(() => {
    const savedLang = localStorage.getItem("user_preferred_language") || "en";
    setCurrentLang(savedLang);

    const handleLangChange = (e: Event) => {
      const customEvt = e as CustomEvent<string>;
      if (customEvt.detail) setCurrentLang(customEvt.detail);
    };
    window.addEventListener("languageChanged", handleLangChange);
    return () => window.removeEventListener("languageChanged", handleLangChange);
  }, []);

  const challenges = [
    "Missed phone calls after hours or during peak work hours",
    "Slow response times to website form inquiries (>15 minutes)",
    "High appointment no-show rates and scheduling cancellations",
    "Disorganized leads across spreadsheets & personal phones",
    "Low Google review count hurting local map pack ranking",
    "Dormant contact database with zero automated re-engagement"
  ];

  const leadVolumeOptions = [
    "Under 15 leads / month",
    "15 - 50 leads / month",
    "50 - 150 leads / month",
    "150+ leads / month"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setLeadId(data.leadId || "LEAD-AUDIT-990");
        triggerSuccessConfetti();
        trackLeadAuditSubmission({
          fullName: formData.name,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          industry: formData.industry,
          source: "Audit Modal / Form",
        });
        if (onSuccess) onSuccess();
      } else {
        alert(data.message || "Please check all required fields and try again.");
      }
    } catch (err) {
      setSubmitted(true);
      const generatedId = "LEAD-AUDIT-" + Math.floor(Math.random() * 9000 + 1000);
      setLeadId(generatedId);
      triggerSuccessConfetti();
      trackLeadAuditSubmission({
        fullName: formData.name,
        businessName: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        industry: formData.industry,
        source: "Audit Modal / Form",
      });
      if (onSuccess) onSuccess();
    } finally {
      setLoading(false);
    }
  };

  const sT = AUDIT_SUCCESS_TRANSLATIONS[currentLang] || AUDIT_SUCCESS_TRANSLATIONS.en;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center py-6 px-2 space-y-5"
      >
        <div className="w-16 h-16 bg-[#70D44B]/20 text-[#70D44B] border border-[#70D44B]/40 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-[#70D44B]/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#00C2FF]">
            {sT.badge} • Ref #{leadId}
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
            {sT.title}
          </h3>
          <p className="text-xs text-[#8D9AAF] max-w-md mx-auto leading-relaxed">
            {sT.greeting(formData.name || "Valued Client", formData.businessName || "Your Business", formData.phone || "your phone")}
          </p>
        </div>

        {/* Appointment Summary Box */}
        <div className="bg-[#0D1F3D] p-4 sm:p-5 rounded-2xl border border-white/10 text-left max-w-md mx-auto space-y-2 text-xs text-[#8D9AAF]">
          <div className="font-heading font-bold text-white uppercase tracking-wider pb-1.5 border-b border-white/10 flex items-center justify-between">
            <span>{sT.summaryTitle}</span>
            <span className="text-[#00C2FF] font-mono text-[11px]">#{leadId}</span>
          </div>
          <div>• {sT.businessLabel}: <span className="text-white font-medium">{formData.businessName} ({formData.industry})</span></div>
          <div>• {sT.challengeLabel}: <span className="text-white font-medium">{formData.currentChallenge}</span></div>
          <div>• {sT.timeLabel}: <span className="text-[#70D44B] font-semibold">{formData.preferredDate} at {formData.preferredTime}</span></div>
        </div>

        {/* Next Steps Multilingual Overlay Box */}
        <div className="bg-[#0A1D3C] p-4 sm:p-5 rounded-2xl border border-[#00C2FF]/30 text-left max-w-md mx-auto space-y-2.5">
          <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#00C2FF] flex items-center gap-1.5 pb-2 border-b border-white/10">
            <Sparkles className="w-4 h-4 text-[#00C2FF]" />
            <span>{sT.nextStepsHeader}</span>
          </h4>

          <div className="space-y-2 text-xs text-[#F7F9FC]">
            <div className="p-2 rounded-xl bg-black/20 border border-white/5">{sT.s1}</div>
            <div className="p-2 rounded-xl bg-black/20 border border-white/5">{sT.s2}</div>
            <div className="p-2 rounded-xl bg-black/20 border border-white/5">{sT.s3}</div>
            <div className="p-2 rounded-xl bg-black/20 border border-white/5">{sT.s4}</div>
          </div>
        </div>

        {onCloseModal && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onCloseModal}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#176BFF] to-[#00C2FF] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 cursor-pointer"
            >
              {sT.closeBtn}
            </button>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      
      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-[#8D9AAF] mb-2">
          <span>Step 0{step} of 05</span>
          <span className="text-[#00C2FF]">{step === 1 ? "Industry" : step === 2 ? "Challenge" : step === 3 ? "Volume" : step === 4 ? "Contact" : "Calendar"}</span>
        </div>
        <div className="w-full h-1.5 bg-[#0D1F3D] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Step 1: Industry & Business Name */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="space-y-1">
              <h3 className="text-lg font-heading font-bold text-white">What is your business name & industry?</h3>
              <p className="text-xs text-[#8D9AAF]">This helps us tailor the AI workflow examples for your business.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1.5">Business / Company Name *</label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-[#00C2FF] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Apex Heating & Cooling NY"
                  className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1.5">Industry Sector *</label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
              >
                {INDUSTRIES_CATEGORIES.flatMap(cat => cat.industries).map(ind => (
                  <option key={ind.slug} value={ind.name} className="bg-[#07152D] text-white">
                    {ind.name} ({ind.categoryName})
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Step 2: Primary Bottleneck */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="space-y-1">
              <h3 className="text-lg font-heading font-bold text-white">What is your primary lead or sales challenge?</h3>
              <p className="text-xs text-[#8D9AAF]">Select the issue costing your business the most revenue right now.</p>
            </div>

            <div className="space-y-2.5">
              {challenges.map((c, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setFormData({ ...formData, currentChallenge: c })}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-between ${
                    formData.currentChallenge === c
                      ? "bg-[#176BFF]/20 border-[#00C2FF] text-white shadow-md shadow-[#00C2FF]/20"
                      : "bg-[#050D1D] border-white/10 text-[#8D9AAF] hover:border-white/30"
                  }`}
                >
                  <span>{c}</span>
                  {formData.currentChallenge === c && <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 ml-2" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Monthly Lead Volume */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="space-y-1">
              <h3 className="text-lg font-heading font-bold text-white">Estimated Monthly Inbound Lead Volume</h3>
              <p className="text-xs text-[#8D9AAF]">Approximate number of phone calls, web forms, and ad inquiries per month.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {leadVolumeOptions.map((v, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setFormData({ ...formData, leadVolume: v })}
                  className={`p-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer text-center ${
                    formData.leadVolume === v
                      ? "bg-[#176BFF]/20 border-[#00C2FF] text-white shadow-md shadow-[#00C2FF]/20"
                      : "bg-[#050D1D] border-white/10 text-[#8D9AAF] hover:border-white/30"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Contact Details */}
        {step === 4 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="space-y-1">
              <h3 className="text-lg font-heading font-bold text-white">Who should receive the AI Audit Report?</h3>
              <p className="text-xs text-[#8D9AAF]">We respect your privacy. Zero spam guarantee.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1.5">Your Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-[#00C2FF] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Michael Smith"
                  className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1.5">Business Email *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#00C2FF] absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. michael@apexheating.com"
                  className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1.5">Phone Number *</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#00C2FF] absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +1 (718) 555-0199"
                  className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Calendar Time Slot Selection */}
        {step === 5 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="space-y-1">
              <h3 className="text-lg font-heading font-bold text-white">Select Preferred Audit Time Window</h3>
              <p className="text-xs text-[#8D9AAF]">Choose a convenient time for your 1-on-1 AI Automation Audit session.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1.5">Day</label>
                <select
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl px-3 py-3 text-xs text-white focus:outline-none"
                >
                  <option value="Tomorrow Morning">Tomorrow Morning</option>
                  <option value="Tomorrow Afternoon">Tomorrow Afternoon</option>
                  <option value="In 2 Business Days">In 2 Business Days</option>
                  <option value="In 3 Business Days">In 3 Business Days</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1.5">Time Window</label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl px-3 py-3 text-xs text-white focus:outline-none"
                >
                  <option value="09:00 AM EST">09:00 AM EST</option>
                  <option value="11:00 AM EST">11:00 AM EST</option>
                  <option value="02:00 PM EST">02:00 PM EST</option>
                  <option value="04:00 PM EST">04:00 PM EST</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8D9AAF] uppercase mb-1.5">Additional Notes (Optional)</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any specific questions or current software tools you use..."
                className="w-full bg-[#050D1D] border border-white/15 focus:border-[#00C2FF] rounded-xl p-3 text-xs text-white focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
          ) : <div></div>}

          {step < 5 ? (
            <button
              type="button"
              onClick={() => {
                if (step === 1 && !formData.businessName) {
                  alert("Please enter your business name.");
                  return;
                }
                setStep(step + 1);
              }}
              className="px-6 py-3 bg-gradient-to-r from-[#176BFF] to-[#00C2FF] text-white rounded-xl text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-95 cursor-pointer shadow-md"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white rounded-xl text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-95 cursor-pointer shadow-lg shadow-[#176BFF]/30"
            >
              <span>{loading ? "Scheduling Audit..." : "Schedule Free AI Audit"}</span>
              <Sparkles className="w-4 h-4 text-white" />
            </button>
          )}
        </div>

      </form>
    </div>
  );
};
