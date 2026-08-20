import React, { useEffect } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: "success" | "info" | "warning";
}

interface ToastNotificationProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-3 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onDismiss: (id: string) => void }> = ({ toast, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const isSuccess = toast.type === "success" || !toast.type;
  const isWarning = toast.type === "warning";

  return (
    <div className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-[#0A1D3C]/95 backdrop-blur-md border border-[#176BFF]/40 text-white shadow-2xl animate-fade-in transition-all hover:border-[#00C2FF]/60">
      <div className="mt-0.5 shrink-0">
        {isSuccess && <CheckCircle2 className="w-5 h-5 text-[#70D44B]" />}
        {isWarning && <AlertCircle className="w-5 h-5 text-[#FFB800]" />}
        {!isSuccess && !isWarning && <Info className="w-5 h-5 text-[#00C2FF]" />}
      </div>

      <div className="flex-1 pr-2">
        <h4 className="font-heading font-semibold text-sm text-white">{toast.title}</h4>
        {toast.description && <p className="text-xs text-[#A1B3D3] mt-0.5 leading-relaxed">{toast.description}</p>}
      </div>

      <button
        onClick={() => onDismiss(toast.id)}
        className="text-[#889CBE] hover:text-white p-1 rounded-lg transition-colors shrink-0"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
