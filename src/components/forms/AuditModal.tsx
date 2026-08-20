import React, { useEffect, useRef } from "react";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LeadAuditForm } from "./LeadAuditForm";
import { trackModalOpen } from "../../lib/dataLayer";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      trackModalOpen("Audit Modal");
      
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
            ref={modalContainerRef}
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="audit-modal-title"
            aria-describedby="audit-modal-desc"
            className="relative w-full max-w-2xl bg-[#07152D] rounded-2xl p-6 sm:p-8 border border-[#176BFF]/40 shadow-2xl max-h-[90vh] overflow-y-auto glass-panel focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
            tabIndex={-1}
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#8D9AAF] hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2FF]"
              aria-label="Close Audit Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-widest text-[#00C2FF] bg-[#00C2FF]/10 px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5" /> 100% Free • No Obligation
              </div>
              <h2 id="audit-modal-title" className="text-xl sm:text-2xl font-heading font-bold text-white">
                BOOK YOUR FREE AI AUTOMATION AUDIT
              </h2>
              <p id="audit-modal-desc" className="text-xs text-[#8D9AAF] mt-1 max-w-md mx-auto">
                We'll analyze your current lead workflow, phone calls, and booking process to pinpoint where AI can increase your monthly appointments.
              </p>
            </div>

            {/* Audit Form Component */}
            <LeadAuditForm onSuccess={() => {}} onCloseModal={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
