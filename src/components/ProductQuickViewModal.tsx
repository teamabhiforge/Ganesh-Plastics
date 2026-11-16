import React, { useEffect } from 'react';
import { Product, PagePath } from '../types';

interface ProductQuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PagePath) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onNavigate,
  onSelectProduct,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleGoToDetails = () => {
    onSelectProduct(product);
    onClose();
    onNavigate('product-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInquireNow = () => {
    onClose();
    onNavigate('contact-us');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Ganesh Plastics, I would like to inquire about ${product.name} (SKU: ${product.sku}).`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-200/80 text-slate-700">
              {product.badge}
            </span>
            <span className="text-xs font-mono font-semibold text-slate-500">
              SKU: {product.sku}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Product Image Stage */}
            <div className="md:col-span-5 bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-xl p-6 border border-slate-200/80 flex flex-col items-center justify-center aspect-square relative group">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-3 text-[10px] text-slate-400 font-mono tracking-tight bg-white/80 px-2 py-0.5 rounded border border-slate-200/60">
                100% Virgin HDPE
              </span>
            </div>

            {/* Product Quick Specs */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  {product.category}
                </span>
                <h3 id="modal-product-title" className="text-2xl font-extrabold text-slate-900 mt-0.5">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Spec Grid */}
              <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-3.5 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="text-slate-500 font-medium">Available Sizes:</span>
                  <span className="font-bold text-slate-900 text-right">{product.sizes}</span>
                </div>
                {product.nominalCapacity && (
                  <div className="flex justify-between py-1 border-b border-slate-200/50">
                    <span className="text-slate-500 font-medium">Nominal Volume:</span>
                    <span className="font-bold text-slate-900">{product.nominalCapacity}</span>
                  </div>
                )}
                {product.grammage && (
                  <div className="flex justify-between py-1 border-b border-slate-200/50">
                    <span className="text-slate-500 font-medium">Standard Grammage:</span>
                    <span className="font-bold text-slate-900 font-mono">{product.grammage}</span>
                  </div>
                )}
                <div className="flex justify-between py-1 border-b border-slate-200/50">
                  <span className="text-slate-500 font-medium">Polymer Resin:</span>
                  <span className="font-bold text-teal-700">{product.resinGrade}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Closure Style:</span>
                  <span className="font-bold text-slate-900 text-right truncate max-w-[190px]">
                    {product.closureType}
                  </span>
                </div>
              </div>

              {/* Note */}
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <span className="material-symbols-outlined text-sm text-teal-600">verified</span>
                <span>Manufactured at TIF Industrial Green Park, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleGoToDetails}
            className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>View Full Specifications</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/919866778813?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              WhatsApp Quote
            </a>

            <button
              onClick={handleInquireNow}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
