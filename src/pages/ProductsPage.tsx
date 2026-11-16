import React, { useState, useMemo } from 'react';
import { PagePath, Product, ProductCategory } from '../types';
import { PRODUCTS, TECHNICAL_MATRIX } from '../data/products';
import { ProductQuickViewModal } from '../components/ProductQuickViewModal';

interface ProductsPageProps {
  onNavigate: (page: PagePath) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sizes.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleProductClick = (product: Product) => {
    onSelectProduct(product);
    onNavigate('product-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuickView = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const categories: { key: ProductCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Packaging', count: PRODUCTS.length },
    {
      key: 'cylindrical',
      label: 'Cylindrical Bottles',
      count: PRODUCTS.filter((p) => p.category === 'cylindrical').length,
    },
    {
      key: 'narrow-neck',
      label: 'Narrow-Neck / Graduated',
      count: PRODUCTS.filter((p) => p.category === 'narrow-neck').length,
    },
    {
      key: 'jerrycans',
      label: 'Industrial Jerrycans',
      count: PRODUCTS.filter((p) => p.category === 'jerrycans').length,
    },
    {
      key: 'wide-mouth',
      label: 'Wide-Mouth Jars',
      count: PRODUCTS.filter((p) => p.category === 'wide-mouth').length,
    },
  ];

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-16">
      {/* Header Banner */}
      <section className="bg-slate-100/80 py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold tracking-wider uppercase border border-slate-300/80">
            <span className="material-symbols-outlined text-sm text-teal-700">inventory_2</span>
            ENTERPRISE CATALOGUE
          </div>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-extrabold text-slate-900">
            HDPE Bottles & Industrial Containers
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Discover our comprehensive range of high-density polyethylene bottles, graduated chemical containers, and heavy canisters engineered with precision parison wall distribution.
          </p>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 shadow-xs">
            <span className="material-symbols-outlined text-sm text-teal-700 shrink-0">info</span>
            <span>Note: The image may not be exact as the product, but similar.</span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
            <input
              type="text"
              placeholder="Search by SKU, volume, or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                aria-label="Clear search query"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid - Compact Technical Cards */}
        <div className="mt-10">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center space-y-4 bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <span className="material-symbols-outlined text-5xl text-slate-400">
                inventory_2
              </span>
              <h3 className="font-bold text-lg text-slate-900">
                No products match your search
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Try searching for a different size or clear the filter to view all products.
              </p>
              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Reset Filters
                </button>
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col group cursor-pointer"
                >
                  {/* Image Showcase */}
                  <div className="relative bg-gradient-to-b from-slate-50 to-slate-100/60 p-6 aspect-square flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300 filter drop-shadow-sm"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 border border-slate-200 shadow-xs">
                        {product.badge}
                      </span>
                      {product.subBadge && (
                        <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-slate-900/80 text-white backdrop-blur-xs">
                          {product.subBadge}
                        </span>
                      )}
                    </div>
                    <span className="absolute top-4 right-4 text-[10px] font-mono font-bold text-slate-600 bg-white/90 px-2 py-0.5 rounded border border-slate-200 shadow-xs">
                      {product.sku}
                    </span>

                    {/* Quick View Hover Button */}
                    <button
                      onClick={(e) => handleOpenQuickView(e, product)}
                      className="absolute bottom-4 inset-x-6 py-2 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs shadow-md transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">visibility</span>
                      Instant Quick View
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-slate-900 group-hover:text-teal-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Spec Summary Table */}
                    <div className="bg-slate-50 rounded-xl p-3.5 space-y-2 text-xs border border-slate-200/70">
                      <div className="flex justify-between items-center text-slate-600">
                        <span>Sizes / Capacities:</span>
                        <span className="font-bold text-slate-900">{product.sizes}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600">
                        <span>Closure Option:</span>
                        <span className="font-bold text-slate-900 text-right truncate max-w-[160px]">
                          {product.closureType.split('/')[0]}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600">
                        <span>Resin Grade:</span>
                        <span className="font-bold text-teal-700">{product.resinGrade.split(' ')[0]} Virgin</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-1 grid grid-cols-2 gap-2">
                      <button
                        onClick={(e) => handleOpenQuickView(e, product)}
                        className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        Quick View
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(product);
                        }}
                        className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Full Specs</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Technical Matrix Section */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="space-y-2">
          <div className="font-label-technical text-xs font-bold uppercase tracking-widest text-teal-700">
            SPECIFICATION REFERENCE
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-slate-900">
            HDPE Technical Engineering Matrix
          </h2>
          <p className="text-sm text-slate-600">
            Standard production specifications, volumetric capacities, and grammage tolerances for procurement planning.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Model SKU</th>
                  <th className="py-4 px-6">Nominal Volume</th>
                  <th className="py-4 px-6">Grammage Weight</th>
                  <th className="py-4 px-6">Typical Payload</th>
                  <th className="py-4 px-6 text-center">Status</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {TECHNICAL_MATRIX.map((item) => (
                  <tr key={item.modelId} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-teal-700">
                      {item.modelId}
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900">{item.nominalVol}</td>
                    <td className="py-4 px-6 font-mono text-slate-700">{item.grammage}</td>
                    <td className="py-4 px-6 text-slate-600">{item.typicalPayload}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800">
                        Ready Run
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => {
                          const target = PRODUCTS.find((p) => p.sku === item.modelId);
                          if (target) {
                            onSelectProduct(target);
                            onNavigate('product-details');
                          } else {
                            onNavigate('contact-us');
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Moulding Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-slate-900 p-8 md:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold tracking-wider uppercase border border-teal-500/30">
              OEM & Private Moulds
            </span>
            <h3 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-white">
              Need a Proprietary Custom Bottle Shape or Embossed Logo?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We specialize in custom tooling for brand-exclusive packaging. Our engineering team assists with 3D CAD modeling, volumetric optimization, shrinkage calculations, and rapid CNC mould manufacturing with trial batches in 10-14 days.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md text-center cursor-pointer"
            >
              Discuss Custom Tooling
            </button>
            <a
              href="https://wa.me/919866778813?text=Hello%20Ganesh%20Plastics,%20I%20have%20a%20custom%20mould%20requirement"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-colors text-center"
            >
              Share CAD / Drawings via WhatsApp
            </a>
          </div>
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
