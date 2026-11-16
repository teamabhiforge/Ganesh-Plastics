import React, { useState, useEffect } from 'react';
import { PagePath, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductQuickViewModal } from '../components/ProductQuickViewModal';

interface ProductDetailPageProps {
  product: Product | null;
  onNavigate: (page: PagePath) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onNavigate,
  onSelectProduct,
}) => {
  const activeProduct = product || (PRODUCTS.length > 0 ? PRODUCTS[0] : null);
  const [selectedImage, setSelectedImage] = useState<string>(activeProduct ? activeProduct.image : '');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  useEffect(() => {
    if (activeProduct) {
      setSelectedImage(activeProduct.image);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeProduct]);

  if (!activeProduct) {
    return (
      <div className="pt-36 pb-20 max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-700 mx-auto flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl">inventory_2</span>
        </div>
        <div className="space-y-2">
          <h2 className="font-headline-lg text-2xl font-bold text-slate-900">
            Catalog Product Not Found
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Please select a product from our catalog or contact our technical team for custom bottle requirements.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('products')}
            className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Go to Products Page
          </button>
          <button
            onClick={() => onNavigate('contact-us')}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Contact Sales Team
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter((p) => p.id !== activeProduct.id).slice(0, 4);

  const handleRelatedClick = (p: Product) => {
    onSelectProduct(p);
    setSelectedImage(p.image);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuickView = (e: React.MouseEvent, p: Product) => {
    e.stopPropagation();
    setQuickViewProduct(p);
    setIsQuickViewOpen(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Ganesh Plastics, I would like to inquire about ${activeProduct.name} (SKU: ${activeProduct.sku}).`
  );

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-16">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium" aria-label="Breadcrumb">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-teal-700 cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate('products')}
            className="hover:text-teal-700 cursor-pointer"
          >
            Products
          </button>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate max-w-xs">{activeProduct.name}</span>
        </nav>
      </div>

      {/* Main Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Gallery Column */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Stage Image */}
            <div className="rounded-3xl bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200 p-8 aspect-square flex items-center justify-center relative overflow-hidden shadow-sm">
              <img
                src={selectedImage}
                alt={activeProduct.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-md transition-all duration-300"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-white/95 text-slate-800 border border-slate-200 shadow-xs">
                  {activeProduct.badge}
                </span>
                {activeProduct.subBadge && (
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-white backdrop-blur-xs">
                    {activeProduct.subBadge}
                  </span>
                )}
              </div>
              <span className="absolute top-4 right-4 text-xs font-mono font-bold text-slate-600 bg-white/90 px-2.5 py-1 rounded border border-slate-200 shadow-xs">
                {activeProduct.sku}
              </span>
            </div>

            {/* Image Disclaimer */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <span className="material-symbols-outlined text-sm text-teal-700 shrink-0">info</span>
              <span>Note: The image may not be exact as the product, but similar.</span>
            </div>

            {/* Quality Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                <span className="material-symbols-outlined text-teal-700 text-xl block mb-1">
                  verified
                </span>
                <span className="text-[11px] font-bold text-slate-900 block">100% Virgin HDPE</span>
                <span className="text-[10px] text-slate-500">Prime Grade Resin</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                <span className="material-symbols-outlined text-teal-700 text-xl block mb-1">
                  speed
                </span>
                <span className="text-[11px] font-bold text-slate-900 block">Zero Leak Tested</span>
                <span className="text-[10px] text-slate-500">Hermetic Closure</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                <span className="material-symbols-outlined text-teal-700 text-xl block mb-1">
                  package_2
                </span>
                <span className="text-[11px] font-bold text-slate-900 block">Heavy Gauge Wall</span>
                <span className="text-[10px] text-slate-500">Impact Resistant</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs & Inquiry Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-teal-700 border border-slate-200">
                  {activeProduct.category}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Catalog Model: {activeProduct.sku}
                </span>
              </div>
              <h1 className="font-headline-lg text-2xl sm:text-4xl font-extrabold text-slate-900">
                {activeProduct.name}
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeProduct.description}
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-900">
                  Technical Specifications
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  Standard Factory Tolerance ±3%
                </span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="grid grid-cols-2 px-5 py-3">
                  <span className="text-slate-500 font-medium">Nominal Capacity</span>
                  <span className="font-bold text-slate-900">{activeProduct.nominalCapacity || activeProduct.sizes}</span>
                </div>

                <div className="grid grid-cols-2 px-5 py-3">
                  <span className="text-slate-500 font-medium">Standard Grammage</span>
                  <span className="font-bold text-slate-900">{activeProduct.grammage || 'Engineered per application'}</span>
                </div>

                <div className="grid grid-cols-2 px-5 py-3">
                  <span className="text-slate-500 font-medium">Polymer Resin Grade</span>
                  <span className="font-bold text-teal-700">{activeProduct.resinGrade}</span>
                </div>

                <div className="grid grid-cols-2 px-5 py-3">
                  <span className="text-slate-500 font-medium">Closure & Lining</span>
                  <span className="font-bold text-slate-900">{activeProduct.closureType}</span>
                </div>

                <div className="grid grid-cols-2 px-5 py-3">
                  <span className="text-slate-500 font-medium">Wall Gauge</span>
                  <span className="font-bold text-slate-900">{activeProduct.wallThickness || '1.1mm Radial Parison Controlled'}</span>
                </div>

                <div className="grid grid-cols-2 px-5 py-3">
                  <span className="text-slate-500 font-medium">Compatible Media</span>
                  <span className="font-bold text-slate-900">{activeProduct.compatibleMedia || 'Industrial chemicals, pesticides, syrups'}</span>
                </div>
              </div>
            </div>

            {/* Instant Actions Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Factory Direct Bulk Supply</h4>
                  <p className="text-xs text-slate-500">
                    Standard MOQs from 5,000 units • Custom masterbatch colors available
                  </p>
                </div>
                <span className="text-xs font-bold text-teal-700 font-mono">
                  Factory Direct Dispatch
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  Contact Sales Office
                </button>

                <a
                  href={`https://wa.me/919866778813?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  WhatsApp Enquiry
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Direct wholesale and contract supply available.</span>
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="text-teal-700 font-bold hover:underline cursor-pointer"
                >
                  Inquire Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Recommendation */}
      <section className="max-w-7xl mx-auto px-6 space-y-8 pt-8 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-headline-lg text-2xl font-bold text-slate-900">
              Explore Alternative Packaging
            </h3>
            <p className="text-xs text-slate-500">
              Related containers frequently specified together for chemical and pharma product lines.
            </p>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs font-bold text-teal-700 hover:underline cursor-pointer"
          >
            All Products →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relProduct) => (
            <div
              key={relProduct.id}
              onClick={() => handleRelatedClick(relProduct)}
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="bg-gradient-to-b from-slate-50 to-slate-100/50 rounded-xl p-4 aspect-4/3 flex items-center justify-center mb-3 relative overflow-hidden">
                <img
                  src={relProduct.image}
                  alt={relProduct.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
                <button
                  onClick={(e) => handleOpenQuickView(e, relProduct)}
                  className="absolute bottom-2 inset-x-3 py-1 px-2 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs shadow-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-xs">visibility</span>
                  Quick View
                </button>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-teal-700">
                  {relProduct.sku}
                </span>
                <h4 className="font-bold text-sm text-slate-900 group-hover:text-teal-700 truncate">
                  {relProduct.name}
                </h4>
                <p className="text-xs text-slate-500 truncate">
                  Sizes: {relProduct.sizes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onNavigate={onNavigate}
        onSelectProduct={onSelectProduct}
      />
    </div>
  );
};
