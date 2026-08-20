import React, { useState } from "react";
import { motion } from "motion/react";
import { SERVICES_DATA } from "../../data/servicesData";
import { ArrowRight, PhoneCall, MessageSquare, Globe, Database, Zap, Calendar, RefreshCw, Star, TrendingUp, Share2, Cpu, BarChart3, Sparkles, CheckCircle2 } from "lucide-react";
import { playClickSound } from "../../lib/audioFeedback";

interface ServiceCardGridProps {
  navigate: (path: string) => void;
}

const iconMap: Record<string, any> = {
  PhoneCall,
  MessageSquare,
  Globe,
  Database,
  Zap,
  Calendar,
  RefreshCw,
  Star,
  TrendingUp,
  Share2,
  Cpu,
  BarChart3
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface TiltCardProps {
  service: typeof SERVICES_DATA[0];
  navigate: (path: string) => void;
}

const TiltServiceCard: React.FC<TiltCardProps> = ({ service, navigate }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = iconMap[service.iconName] || Zap;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle 8 degree tilt
    const rotateX = -(y / (rect.height / 2)) * 8;
    const rotateY = (x / (rect.width / 2)) * 8;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      variants={cardVariants}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.5,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className={`h-full bento-card p-6 sm:p-7 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
          isHovered ? "border-[#00C2FF]/60 shadow-2xl shadow-[#00C2FF]/20" : ""
        }`}
        onClick={() => {
          playClickSound();
          navigate(`/services/${service.slug}`);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {/* Subtle Ambient Card Gradient Shine */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#176BFF]/10 via-[#00C2FF]/5 to-transparent rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

        <div className="space-y-4 relative z-10" style={{ transform: "translateZ(15px)" }}>
          {/* Top Row: Icon + Category Badge */}
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#176BFF] via-[#00C2FF] to-[#70D44B] p-0.5 shadow-md shadow-[#176BFF]/20 group-hover:scale-110 group-hover:shadow-[#00C2FF]/40 transition-all duration-300">
              <div className="w-full h-full bg-[#07152D] rounded-[14px] flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-[#00C2FF] group-hover:text-white transition-colors" />
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-heading font-semibold text-[#70D44B] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#70D44B] animate-pulse" />
              <span className="capitalize">{service.category}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#00C2FF] transition-colors leading-snug">
            {service.name}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#8D9AAF] leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>

          {/* Outcome Pill Box */}
          <div className="p-3.5 rounded-xl bg-[#07152D]/90 border border-white/10 text-xs text-[#F7F9FC] flex items-start gap-2 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
            <div>
              <span className="text-[#00C2FF] font-semibold">Key Outcome: </span>
              <span>{service.outcome}</span>
            </div>
          </div>
        </div>

        {/* Bottom Action Pill */}
        <div
          className="pt-5 mt-5 border-t border-white/10 relative z-10"
          style={{ transform: "translateZ(10px)" }}
        >
          <div className="w-full py-2.5 px-4 rounded-full bg-white/[0.04] group-hover:bg-gradient-to-r group-hover:from-[#176BFF] group-hover:to-[#00C2FF] text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 group-hover:border-transparent">
            <span>Explore {service.name}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00C2FF] group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ServiceCardGrid: React.FC<ServiceCardGridProps> = ({ navigate }) => {
  return (
    <section className="py-24 bg-[#07152D] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ambient-glow-blue pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#70D44B]" />
            <span>Modular AI Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            COMPLETE AI BUSINESS SYSTEM
          </h2>
          <p className="text-sm sm:text-base text-[#8D9AAF] leading-relaxed">
            These are not disconnected third-party tools. Every module communicates seamlessly inside a unified customer acquisition and revenue infrastructure.
          </p>
        </div>

        {/* 12 Service Cards Grid with Framer Motion Staggered Viewport Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {SERVICES_DATA.map((service) => (
            <TiltServiceCard key={service.slug} service={service} navigate={navigate} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
