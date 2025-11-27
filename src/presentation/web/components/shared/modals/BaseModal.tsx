import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  showCloseIcon?: boolean;
  children: React.ReactNode;
  preventCloseOnOutsideClick?: boolean;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  showCloseIcon = true,
  children,
  preventCloseOnOutsideClick = false,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (!preventCloseOnOutsideClick && e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose, preventCloseOnOutsideClick]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={() => !preventCloseOnOutsideClick && onClose()}
      />
      <div 
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-md bg-white rounded-xl shadow-2xl ring-1 ring-slate-200 transform transition-all scale-100 animate-in fade-in zoom-in-95 duration-200"
      >
        {(title || showCloseIcon) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            {title && <h3 className="text-lg font-semibold text-slate-800">{title}</h3>}
            
            {showCloseIcon && (
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1 rounded-full transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        <div className="px-6 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};