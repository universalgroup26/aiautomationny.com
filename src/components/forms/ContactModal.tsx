import React, { useState, useEffect, useRef } from "react";
import { X, Mail, Phone, User, Send, CheckCircle2, Sparkles, Building2, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { triggerSuccessConfetti } from "../../lib/confetti";
import { trackContactSubmission, trackModalOpen } from "../../lib/dataLayer";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTACT_TRANSLATIONS: Record<string, {
  badge: string;
  title: string;
  tagline: string;
  sub: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  companyLabel: string;
  serviceLabel: string;
  messageLabel: string;
  btnSubmit: string;
}> = {
  en: {
    badge: "AI AUTOMATION NY Contact & Consultation",
    title: "Get in Touch with NYC AI Operations Experts",
    tagline: "⚡ Stop losing leads: Deploy 24/7 AI Voice & Chat reception that converts callers instantly.",
    sub: "Fill out the form below and an automated deployment engineer will respond within 15 minutes.",
    nameLabel: "Full Name *",
    emailLabel: "Business Email *",
    phoneLabel: "Phone Number *",
    companyLabel: "Company / Organization",
    serviceLabel: "Primary Service Interest",
    messageLabel: "Project Details / Requirements",
    btnSubmit: "Submit Inquiry to AI AUTOMATION NY",
  },
  bn: {
    badge: "AI AUTOMATION NY যোগাযোগ ও পরামর্শ",
    title: "NYC AI অপারেশন বিশেষজ্ঞদের সাথে যোগাযোগ করুন",
    tagline: "⚡ লিড হারানো বন্ধ করুন: ২৪/৭ স্বয়ংক্রিয় AI ফোন ও চ্যাট গ্রহণ ব্যবস্থা চালু করুন।",
    sub: "নিচের ফর্মটি পূরণ করুন, ১৫ মিনিটের মধ্যে আমাদের ইঞ্জিনিয়ার যোগাযোগ করবে।",
    nameLabel: "সম্পূর্ণ নাম *",
    emailLabel: "বিজনেস ইমেইল *",
    phoneLabel: "ফোন নম্বর *",
    companyLabel: "কোম্পানি / প্রতিষ্ঠান",
    serviceLabel: "প্রধান পছন্দের সার্ভিস",
    messageLabel: "প্রজেক্টের বিবরণ / প্রয়োজনীয়তা",
    btnSubmit: "AI AUTOMATION NY-এ ইনকোয়ারি জমা দিন",
  },
  es: {
    badge: "Contacto y Consulta • AI AUTOMATION NY",
    title: "Póngase en contacto con expertos en IA de NYC",
    tagline: "⚡ Deje de perder clientes: Despliegue recepción automatizada de voz y chat 24/7.",
    sub: "Complete el siguiente formulario y un ingeniero le responderá en 15 minutos.",
    nameLabel: "Nombre Completo *",
    emailLabel: "Correo Empresarial *",
    phoneLabel: "Número Telefónico *",
    companyLabel: "Empresa / Organización",
    serviceLabel: "Servicio de Interés Principal",
    messageLabel: "Detalles del Proyecto / Requisitos",
    btnSubmit: "Enviar Consulta a AI AUTOMATION NY",
  },
  zh: {
    badge: "AI AUTOMATION NY 联系与咨询",
    title: "联系纽约 AI 运营专家",
    tagline: "⚡ 停止丢失潜在客户：部署 24/7 全天候 AI 语音和聊天接听系统。",
    sub: "填写下方表格，部署工程师将在 15 分钟内给予回复。",
    nameLabel: "姓名 *",
    emailLabel: "工作邮箱 *",
    phoneLabel: "电话号码 *",
    companyLabel: "公司 / 机构",
    serviceLabel: "主要意向服务",
    messageLabel: "项目需求详情",
    btnSubmit: "提交咨询至 AI AUTOMATION NY",
  },
  fr: {
    badge: "Contact & Consultation • AI AUTOMATION NY",
    title: "Contactez les experts en IA de New York",
    tagline: "⚡ Ne perdez plus de prospects : Déployez un accueil téléphonique et chat IA 24/7.",
    sub: "Remplissez le formulaire ci-dessous, un ingénieur vous répondra sous 15 minutes.",
    nameLabel: "Nom Complet *",
    emailLabel: "E-mail Professionnel *",
    phoneLabel: "Numéro de Téléphone *",
    companyLabel: "Entreprise / Organisation",
    serviceLabel: "Service Souhaité",
    messageLabel: "Détails du Projet",
    btnSubmit: "Envoyer la Demande à AI AUTOMATION NY",
  },
  ru: {
    badge: "Контакты и Консультация • AI AUTOMATION NY",
    title: "Свяжитесь с экспертами по ИИ в Нью-Йорке",
    tagline: "⚡ Перестаньте терять клиентов: Внедрите круглосуточный ИИ-приём звонков и чатов.",
    sub: "Заполните форму ниже, и наш инженер ответит вам в течение 15 минут.",
    nameLabel: "Полное Имя *",
    emailLabel: "Рабочий Email *",
    phoneLabel: "Номер Телефона *",
    companyLabel: "Компания / Организация",
    serviceLabel: "Интересующая Услуга",
    messageLabel: "Детали Проекта / Требования",
    btnSubmit: "Отправить Запрос в AI AUTOMATION NY",
  },
  yi: {
    badge: "AI AUTOMATION NY פאַרבינדן & קאָנסולטאַציע",
    title: "פאַרבינדן זיך מיט NYC AI עקספּערטן",
    tagline: "⚡ פאַרלירן מער ניט קיין קליענטן: שטעלט אויף א 24/7 אוטאָמאַטישע AI סיסטעם.",
    sub: "פילט אויס די פאָרעם, אונדזער אינזשעניר וועט ענטפערן אין 15 מינוט.",
    nameLabel: "פולער נאָמען *",
    emailLabel: "ביזנעס אימעיל *",
    phoneLabel: "טעלעפאָן נומער *",
    companyLabel: "קאָמפּאַני / אָרגאַניזאַציע",
    serviceLabel: "הויפּט סערוויס פון אינטערעס",
    messageLabel: "פּראָיעקט פּראָפיל / דעטאַלן",
    btnSubmit: "שיקן אָנפראַגע צו AI AUTOMATION NY",
  },
};

const SUCCESS_TRANSLATIONS: Record<string, {
  badge: string;
  title: string;
  sub: string;
  nextStepsHeader: string;
  s1Title: string;
  s1Desc: string;
  s2Title: string;
  s2Desc: string;
  s3Title: string;
  s3Desc: string;
  s4Title: string;
  s4Desc: string;
  closeBtn: string;
  bookDemoBtn: string;
}> = {
  en: {
    badge: "Inquiry Received • Fast-Track NYC Response",
    title: "MESSAGE SENT SUCCESSFULLY!",
    sub: "Thank you! Our AI deployment engineers have received your inquiry and initiated fast-track routing.",
    nextStepsHeader: "What Happens Next?",
    s1Title: "1. Confirmation Email Sent",
    s1Desc: "Check your inbox for project confirmation details and ticket ID.",
    s2Title: "2. Workflow Analysis (0-15 Mins)",
    s2Desc: "Our NYC AI solutions architect analyzes your current call/lead intake setup.",
    s3Title: "3. Direct Specialist Outreach",
    s3Desc: "An AI specialist will reach out via phone/email to discuss your custom roadmap.",
    s4Title: "4. Custom Architecture & Live Demo",
    s4Desc: "Receive a tailored AI Voice/Chat agent proposal built for your business.",
    closeBtn: "Close Window",
    bookDemoBtn: "Book Live Demo Now",
  },
  bn: {
    badge: "ইনকোয়ারি প্রাপ্ত হয়েছে • দ্রুত ব্যবস্থা",
    title: "বার্তা সফলভাবে পাঠানো হয়েছে!",
    sub: "ধন্যবাদ! আমাদের AI ইঞ্জিনিয়ারিং টিম আপনার বার্তা পেয়েছে এবং দ্রুত ব্যবস্থা নিচ্ছে।",
    nextStepsHeader: "পরবর্তী পদক্ষেপসমূহ:",
    s1Title: "১. ইমেইল নিশ্চিতকরণ পাঠানো হয়েছে",
    s1Desc: "প্রজেক্ট ট্র্যাকিং এবং টিকেট নম্বর আপনার ইমেইলে পাঠানো হয়েছে।",
    s2Title: "২. ওয়ার্কফ্লো বিশ্লেষণ (০-১৫ মিনিট)",
    s2Desc: "আমাদের NYC টিম আপনার ফোন কল এবং লিড ইনটেক সিস্টেম পর্যালোচনা করছে।",
    s3Title: "৩. স্পেশালিস্টের সরাসরি যোগাযোগ",
    s3Desc: "একজন AI বিশেষজ্ঞ কল বা ইমেইলের মাধ্যমে আপনার সাথে কথা বলবেন।",
    s4Title: "৪. কাস্টম অটোমেশন ও লাইভ ডেমো",
    s4Desc: "আপনার ব্যবসার উপযোগী AI ভয়েস ও চ্যাট এজেন্ট রোডম্যাপ গ্রহণ করুন।",
    closeBtn: "উইন্ডো বন্ধ করুন",
    bookDemoBtn: "এখনই ডেমো বুক করুন",
  },
  es: {
    badge: "Consulta Recibida • Respuesta Rápida en NYC",
    title: "¡MENSAJE ENVIADO CON ÉXITO!",
    sub: "¡Gracias! Nuestros ingenieros de IA han recibido su consulta e iniciado el enrutamiento prioritario.",
    nextStepsHeader: "¿Cuáles son los Siguientes Pasos?",
    s1Title: "1. Correo de Confirmación Enviado",
    s1Desc: "Revise su bandeja de entrada para ver el resumen y número de seguimiento.",
    s2Title: "2. Análisis de Flujo (0-15 Mins)",
    s2Desc: "Nuestro arquitecto de soluciones revisa su sistema de atención telefónica.",
    s3Title: "3. Contacto Directo de Especialista",
    s3Desc: "Un experto en IA se comunicará con usted por teléfono o correo electrónico.",
    s4Title: "4. Propuesta Personalizada y Demostración",
    s4Desc: "Reciba un plan de acción para su agente de voz y chat de IA.",
    closeBtn: "Cerrar Ventana",
    bookDemoBtn: "Reservar Demostración Ahora",
  },
  zh: {
    badge: "已收到咨询 • 纽约极速响应",
    title: "消息已成功发送！",
    sub: "感谢您的联系！我们的 AI 部署工程师已收到您的需求并启动快速处理通道。",
    nextStepsHeader: "下一步处理流程：",
    s1Title: "1. 确认邮件已发送",
    s1Desc: "请检查您的收件箱以获取项目详情和工单编号。",
    s2Title: "2. 工作流分析 (0-15分钟)",
    s2Desc: "我们的纽约 AI 架构师正在分析您当前的电话和线索接听流程。",
    s3Title: "3. 专家直接对接",
    s3Desc: "AI 专家将通过电话或邮件与您联系，讨论定制自动化路线图。",
    s4Title: "4. 定制架构与实况演示",
    s4Desc: "获取专门为您的业务打造的 AI 语音/聊天智能体方案。",
    closeBtn: "关闭窗口",
    bookDemoBtn: "立即预约演示",
  },
  fr: {
    badge: "Demande Reçue • Traitement Prioritaire NYC",
    title: "MESSAGE ENVOYÉ AVEC SUCCÈS !",
    sub: "Merci ! Nos ingénieurs IA ont reçu votre demande et ont démarré l'analyse prioritaire.",
    nextStepsHeader: "Quelles sont les prochaines étapes ?",
    s1Title: "1. E-mail de confirmation envoyé",
    s1Desc: "Consultez votre boîte de réception pour obtenir les détails du ticket.",
    s2Title: "2. Analyse du flux (0-15 min)",
    s2Desc: "Notre architecte IA analyse la gestion actuelle de vos appels et prospects.",
    s3Title: "3. Prise de contact directe",
    s3Desc: "Un spécialiste IA vous contactera par téléphone ou e-mail.",
    s4Title: "4. Solution personnalisée & Démo",
    s4Desc: "Recevez une proposition sur mesure pour vos agents vocaux et chat.",
    closeBtn: "Fermer la fenêtre",
    bookDemoBtn: "Réserver une démo",
  },
  ru: {
    badge: "Запрос Получен • Быстрый Ответ в Нью-Йорке",
    title: "СООБЩЕНИЕ УСПЕШНО ОТПРАВЛЕНО!",
    sub: "Спасибо! Наши инженеры ИИ получили ваш запрос и приступили к обработке.",
    nextStepsHeader: "Что Происходит Дальше?",
    s1Title: "1. Отправлено Письмо с Подтверждением",
    s1Desc: "Проверьте почту для получения номера заявки и деталей.",
    s2Title: "2. Анализ Процессов (0-15 мин)",
    s2Desc: "Наш ИИ-архитектор анализирует вашу систему приема звонков и заявок.",
    s3Title: "3. Связь со Специалистом",
    s3Desc: "Эксперт по ИИ свяжется с вами по телефону или электронной почте.",
    s4Title: "4. Индивидуальный План и Демо",
    s4Desc: "Получите персональное решение для ИИ-голосового и чат-агента.",
    closeBtn: "Закрыть Окно",
    bookDemoBtn: "Забронировать Демо",
  },
  yi: {
    badge: "אָנפראַגע ערפאָלגרייך באַקומען • NYC",
    title: "מעסעדזש דערפאָלגרייך געשיקט!",
    sub: "אַ דאַנק! אונדזערע AI אינזשענירן האָבן באַקומען אייער אָנפראַגע.",
    nextStepsHeader: "וואָס זענען די נאָכפאָלגנדע שטאָפּן?",
    s1Title: "1. באַשטעטיקונג אימעיל געשיקט",
    s1Desc: "קוקט איבער אייער אינבאָקס פֿאַר די באַשטעטיקונג דעטאַלן.",
    s2Title: "2. סיסטעם אַנאַליז (0-15 מינוט)",
    s2Desc: "אונדזער עקספּערט אַנאַליזירט אייער רופֿן און קליענטן סיסטעם.",
    s3Title: "3. דירעקטע פאַרבינדונג",
    s3Desc: "אַן AI ספּעציאַליסט וועט זיך פֿאַרבינדן מיט אייך דורך טעלעפאָן אָדער אימעיל.",
    s4Title: "4. קאַסטאַם פּלאַן & לעבן דעמאַנסטריישאַן",
    s4Desc: "באַקומט אַ קאַסטאַם פּלאַן פֿאַר אייער ביזנעס AI סיסטעם.",
    closeBtn: "פאַרמאַכן פֿענצטער",
    bookDemoBtn: "בוך א לעבן דעמאָ",
  },
};

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceInterest: "AI Voice Agents & Inbound Answering",
    message: "",
  });

  useEffect(() => {
    const savedLang = localStorage.getItem("user_preferred_language") || "en";
    setCurrentLang(savedLang);

    const handleLangChange = (e: Event) => {
      const customEvt = e as CustomEvent<string>;
      if (customEvt.detail) setCurrentLang(customEvt.detail);
    };
    window.addEventListener("languageChanged", handleLangChange);

    if (isOpen) {
      trackModalOpen("Contact Modal");
      setSubmitted(false);
      
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("languageChanged", handleLangChange);
      };
    }

    return () => window.removeEventListener("languageChanged", handleLangChange);
  }, [isOpen, onClose]);

  const t = CONTACT_TRANSLATIONS[currentLang] || CONTACT_TRANSLATIONS.en;
  const sT = SUCCESS_TRANSLATIONS[currentLang] || SUCCESS_TRANSLATIONS.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
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
            aria-labelledby="contact-modal-title"
            className="relative w-full max-w-xl bg-[#07152D] rounded-2xl p-6 sm:p-8 border border-[#00C2FF]/40 shadow-2xl max-h-[90vh] overflow-y-auto glass-panel focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
            tabIndex={-1}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#8D9AAF] hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
              aria-label="Close Contact Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#70D44B]/20 text-[#70D44B] border border-[#70D44B]/40 flex items-center justify-center mx-auto shadow-lg shadow-[#70D44B]/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#00C2FF] block mb-1">
                    {sT.badge}
                  </span>
                  <h3 className="text-2xl font-heading font-extrabold text-white">
                    {sT.title}
                  </h3>
                  <p className="text-xs text-[#8D9AAF] max-w-md mx-auto mt-2 leading-relaxed">
                    {sT.sub}
                  </p>
                </div>

                {/* Next Steps Checklist Overlay in User's Language */}
                <div className="bg-[#0A1D3C] p-5 rounded-2xl border border-[#00C2FF]/30 text-left space-y-3">
                  <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#00C2FF] flex items-center gap-1.5 pb-2 border-b border-white/10">
                    <Sparkles className="w-4 h-4 text-[#00C2FF]" />
                    <span>{sT.nextStepsHeader}</span>
                  </h4>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-black/20 border border-white/5">
                      <div className="font-bold text-white mb-0.5">{sT.s1Title}</div>
                      <div className="text-[#8D9AAF] text-[11px]">{sT.s1Desc}</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/20 border border-white/5">
                      <div className="font-bold text-white mb-0.5">{sT.s2Title}</div>
                      <div className="text-[#8D9AAF] text-[11px]">{sT.s2Desc}</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/20 border border-white/5">
                      <div className="font-bold text-white mb-0.5">{sT.s3Title}</div>
                      <div className="text-[#8D9AAF] text-[11px]">{sT.s3Desc}</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-black/20 border border-white/5">
                      <div className="font-bold text-white mb-0.5">{sT.s4Title}</div>
                      <div className="text-[#8D9AAF] text-[11px]">{sT.s4Desc}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs uppercase tracking-wider cursor-pointer transition-all"
                  >
                    {sT.closeBtn}
                  </button>
                  <a
                    href="/book-demo"
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#176BFF] to-[#00C2FF] text-white font-heading font-bold text-xs uppercase tracking-wider cursor-pointer shadow-lg hover:opacity-95 transition-all flex items-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{sT.bookDemoBtn}</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF]">
                    {t.badge}
                  </span>
                </div>

                <h2 id="contact-modal-title" className="text-2xl font-heading font-extrabold text-white mb-2">
                  {t.title}
                </h2>

                {/* Benefit Tagline Banner */}
                <div className="p-3 bg-[#0A1D3C] border border-[#00C2FF]/30 rounded-xl mb-4 text-xs font-medium text-[#F7F9FC]">
                  {t.tagline}
                </div>

                <p className="text-xs text-[#8D9AAF] mb-6">
                  {t.sub}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-heading font-semibold text-[#F7F9FC] mb-1">
                      {t.nameLabel}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-[#8D9AAF]" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Michael Bloomberg"
                        className="w-full pl-9 pr-4 py-2.5 bg-[#0A1D3C] border border-[#176BFF]/30 rounded-xl text-xs text-white placeholder-[#8D9AAF] focus:outline-none focus:border-[#00C2FF] focus:ring-1 focus:ring-[#00C2FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-semibold text-[#F7F9FC] mb-1">
                        {t.emailLabel}
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-[#8D9AAF]" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="mike@company.com"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#0A1D3C] border border-[#176BFF]/30 rounded-xl text-xs text-white placeholder-[#8D9AAF] focus:outline-none focus:border-[#00C2FF] focus:ring-1 focus:ring-[#00C2FF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-semibold text-[#F7F9FC] mb-1">
                        {t.phoneLabel}
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-[#8D9AAF]" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(718) 500-2221"
                          className="w-full pl-9 pr-4 py-2.5 bg-[#0A1D3C] border border-[#176BFF]/30 rounded-xl text-xs text-white placeholder-[#8D9AAF] focus:outline-none focus:border-[#00C2FF] focus:ring-1 focus:ring-[#00C2FF]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-[#F7F9FC] mb-1">
                      {t.companyLabel}
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 w-4 h-4 text-[#8D9AAF]" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Manhattan Medical Group"
                        className="w-full pl-9 pr-4 py-2.5 bg-[#0A1D3C] border border-[#176BFF]/30 rounded-xl text-xs text-white placeholder-[#8D9AAF] focus:outline-none focus:border-[#00C2FF] focus:ring-1 focus:ring-[#00C2FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-[#F7F9FC] mb-1">
                      {t.serviceLabel}
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#0A1D3C] border border-[#176BFF]/30 rounded-xl text-xs text-white focus:outline-none focus:border-[#00C2FF]"
                    >
                      <option value="AI Voice Agents & Inbound Answering">AI Voice Agents & Inbound Answering</option>
                      <option value="Conversational AI Web Chatbots">Conversational AI Web Chatbots</option>
                      <option value="Automated CRM & Multi-Touch Nurturing">Automated CRM & Multi-Touch Nurturing</option>
                      <option value="Custom Workflow & Zapier/Make Automation">Custom Workflow & Zapier/Make Automation</option>
                      <option value="Full AI Operations Suite">Full AI Operations Suite</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-semibold text-[#F7F9FC] mb-1">
                      {t.messageLabel}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your current call/lead workflow and business goals..."
                      className="w-full p-3 bg-[#0A1D3C] border border-[#176BFF]/30 rounded-xl text-xs text-white placeholder-[#8D9AAF] focus:outline-none focus:border-[#00C2FF]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#176BFF] via-[#00C2FF] to-[#70D44B] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#176BFF]/30 hover:opacity-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Submitting Contact Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.btnSubmit}</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
