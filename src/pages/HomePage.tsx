import React, { useState, useEffect } from 'react';
import { PagePath, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductQuickViewModal } from '../components/ProductQuickViewModal';

interface HomePageProps {
  onNavigate: (page: PagePath) => void;
  onSelectProduct: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
}) => {
  const featuredProducts = PRODUCTS;
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Live simulated units counter for dynamic feel
  const [liveUnits, setLiveUnits] = useState(43280);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUnits((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

  const targetDailyUnits = 50000;
  const progressPercent = Math.min(100, Math.round((liveUnits / targetDailyUnits) * 1000) / 10);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section with Clean Clinical Minimalism and Live Manufacturing Stats */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-100/90 via-slate-50 to-white">
        {/* Subtle engineering grid background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300/80 shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-label-technical text-xs font-bold tracking-wider uppercase text-slate-700">
                  MANUFACTURING PLANT • TIF INDUSTRIAL GREEN PARK, TELANGANA
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-slate-900 font-black tracking-tight text-3xl sm:text-5xl lg:text-6xl uppercase block leading-none">
                  GANESH PLASTICS
                </span>

                <h1 className="font-headline-lg text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-800 leading-snug">
                  Precision <span className="text-teal-700 font-semibold">HDPE Bottle</span> & Industrial Container Manufacturing
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                Engineering high-integrity polymer containers, cylindrical bottles, and heavy canisters with zero-leak precision parison control. Supplying certified packaging to pharmaceutical, agrochemical, and specialty chemical manufacturers across India.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  Contact Us
                </button>

                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm tracking-wide uppercase transition-all border border-slate-300 shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">inventory_2</span>
                  Explore Product Catalog
                </button>

                <a
                  href="https://wa.me/919866778813?text=Hello%20Ganesh%20Plastics,%20I%20have%20an%20inquiry%20for%20HDPE%20bottles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-xs flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  WhatsApp
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">verified</span>
                  <span>100% Virgin Grade HDPE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">verified</span>
                  <span>Zero Leak Sealed Integrity</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">verified</span>
                  <span>Custom Moulding Available</span>
                </div>
              </div>
            </div>

            {/* Right Hero Showcase with Live Manufacturing Telemetry */}
            <div className="lg:col-span-5 relative space-y-4">
              {/* Product Hero Image Card */}
              <div className="relative rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-xl">
                <div className="relative rounded-xl overflow-hidden bg-slate-50 aspect-16/10 flex items-center justify-center p-1 group border border-slate-200/60">
                  <img
                    src="/src/assets/images/main_home_bottles_1791269420163.jpg"
                    alt="Precision HDPE Bottles and Containers Lineup"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 text-white font-bold text-[11px] tracking-wider uppercase shadow-xs backdrop-blur-xs">
                    Factory Direct
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-base text-slate-900">
                        Precision HDPE Container Collection
                      </h3>
                      <p className="text-xs text-slate-500">
                        Capacities: 60ml to 20 Litres • Comprehensive Closure Varieties
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                      <span className="block font-bold text-xs text-slate-900 font-mono">
                        50,000+
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase font-medium">
                        Daily Capacity
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                      <span className="block font-bold text-xs text-slate-900 font-mono">
                        100% Virgin
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase font-medium">
                        Prime Resin
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60">
                      <span className="block font-bold text-xs text-slate-900 font-mono">
                        24-48h
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase font-medium">
                        Dispatch Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Manufacturing Capability Telemetry with Sleek Progress Indicators */}
              <div className="rounded-2xl bg-slate-900 text-white p-5 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                      PLANT TELEMETRY • SHIFT 1 ACTIVE
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Choutuppal Plant
                  </span>
                </div>

                {/* Progress Indicator 1: Output Progress */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">Daily Output Progress</span>
                    <span className="font-mono font-bold text-emerald-400">
                      {liveUnits.toLocaleString()} / {targetDailyUnits.toLocaleString()} ({progressPercent}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-emerald-400 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>

                {/* Progress Indicator 2: Parison Wall Uniformity */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">Parison Wall Thickness Uniformity</span>
                    <span className="font-mono font-bold text-sky-400">99.4% (±0.03mm)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-sky-400 h-2 rounded-full"
                      style={{ width: '99.4%' }}
                    ></div>
                  </div>
                </div>

                {/* Progress Indicator 3: Machine OEE & Leak Test */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <div className="text-[11px] text-slate-400 uppercase font-medium">Mould Cavitation</div>
                    <div className="text-sm font-mono font-bold text-white mt-0.5">8 / 8 Heads Active</div>
                    <div className="w-full bg-slate-700 rounded-full h-1 mt-1.5 overflow-hidden">
                      <div className="bg-emerald-400 h-1 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <div className="text-[11px] text-slate-400 uppercase font-medium">Leak-Test Integrity</div>
                    <div className="text-sm font-mono font-bold text-emerald-400 mt-0.5">100.0% Pass Rate</div>
                    <div className="w-full bg-slate-700 rounded-full h-1 mt-1.5 overflow-hidden">
                      <div className="bg-emerald-400 h-1 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-10 shadow-lg border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="space-y-1 border-r border-slate-800 last:border-none pr-4">
              <div className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono">
                50,000+
              </div>
              <div className="text-sm font-bold text-white">Daily Output Units</div>
              <p className="text-xs text-slate-400">Continuous production across multi-head extrusion blow moulding lines.</p>
            </div>

            <div className="space-y-1 border-r border-slate-800 last:border-none pr-4">
              <div className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono">
                100%
              </div>
              <div className="text-sm font-bold text-white">Virgin Polymer</div>
              <p className="text-xs text-slate-400">Zero regrind or contaminated scrap in chemical lines.</p>
            </div>

            <div className="space-y-1 border-r border-slate-800 last:border-none pr-4">
              <div className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono">
                100%
              </div>
              <div className="text-sm font-bold text-white">Leak-Proof Integrity</div>
              <p className="text-xs text-slate-400">Engineered for robust and safe road and rail transport.</p>
            </div>

            <div className="space-y-1">
              <div className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-teal-400 font-mono">
                250+
              </div>
              <div className="text-sm font-bold text-white">Enterprise Clients</div>
              <p className="text-xs text-slate-400">Supplying leading pharma & agrochemical formulation plants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - Compact Technical Cards with Instant Quick View */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-label-technical text-xs font-bold uppercase tracking-widest text-teal-700 mb-2">
              CATALOG HIGHLIGHTS
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-slate-900">
              Featured Industrial Packaging
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mt-1">
              Precision blow moulded containers with calibrated wall distribution, induction wad seals, and high Environmental Stress Crack Resistance.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-600 mt-2.5">
              <span className="material-symbols-outlined text-sm text-teal-700 shrink-0">info</span>
              <span>Note: The image may not be exact as the product, but similar.</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-bold text-sm cursor-pointer"
          >
            <span>View All HDPE Products</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Compact Technical Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col group cursor-pointer"
            >
              {/* Product Visual */}
              <div className="p-4 bg-gradient-to-b from-slate-50 to-slate-100/50 aspect-square flex items-center justify-center relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/90 text-slate-700 border border-slate-200 shadow-xs">
                  {product.badge}
                </span>
                <span className="absolute top-3 right-3 text-[10px] font-mono text-slate-600 bg-white/90 px-1.5 py-0.5 rounded border border-slate-200 shadow-xs">
                  {product.sku}
                </span>

                {/* Instant Quick View Hover Pill */}
                <button
                  onClick={(e) => handleOpenQuickView(e, product)}
                  className="absolute bottom-3 inset-x-4 py-1.5 px-3 rounded-lg bg-slate-900/85 hover:bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs shadow-md transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Quick View Specs"
                >
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  Quick View
                </button>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>Sizes:</span>
                    <span className="font-semibold text-slate-800">{product.sizes}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Resin:</span>
                    <span className="font-semibold text-teal-700">{product.resinGrade.split(' ')[0]} Virgin</span>
                  </div>
                </div>

                {/* Card Dual Action Buttons */}
                <div className="pt-1 grid grid-cols-2 gap-2">
                  <button
                    onClick={(e) => handleOpenQuickView(e, product)}
                    className="py-2 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    <span>Quick</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product);
                    }}
                    className="py-2 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="font-label-technical text-xs font-bold uppercase tracking-widest text-teal-700">
            MARKET APPLICATIONS
          </div>
          <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-slate-900">
            Serving Key Industrial Sectors
          </h2>
          <p className="text-sm text-slate-600">
            Reliable packaging trusted by enterprise procurement teams across South India and nationally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">medication</span>
            </div>
            <h4 className="font-bold text-base text-slate-900">Pharmaceutical Formulations</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cleanroom produced syrup bottles, suspension containers, and tablet wide-mouth jars with high-grade virgin polymers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">agriculture</span>
            </div>
            <h4 className="font-bold text-base text-slate-900">Agrochemicals & Pesticides</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Heavy-walled graduated bottles with high chemical resistance to surfactants, EC/SC formulations, and weedicides.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">oil_barrel</span>
            </div>
            <h4 className="font-bold text-base text-slate-900">Industrial Chemicals & Lubricants</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Heavy-duty durable canisters and jerrycans with vented closures and ergonomic stacking profiles.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">cleaning_services</span>
            </div>
            <h4 className="font-bold text-base text-slate-900">Commercial Cleaning & Sanitizers</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standard cylindrical and flip-top liquid bottles for hospital-grade sanitizers, bleaches, and industrial cleaners.
            </p>
          </div>
        </div>
      </section>

      {/* Plant Location & Infrastructure Callout */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold tracking-wider uppercase w-fit border border-slate-200">
              <span className="material-symbols-outlined text-sm text-teal-700">factory</span>
              Modern Manufacturing Facility
            </div>

            <h3 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-slate-900">
              Strategically Located in TIF Industrial Green Park, Telangana
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Our state-of-the-art blow moulding facility is situated in the landmark TIF Industrial Green Park at Dandumalkapur, Choutuppal. With immediate access to National Highway 65 (Hyderabad-Vijayawada highway), we ensure accelerated road dispatch to industrial hubs across Telangana, Andhra Pradesh, Karnataka, and Maharashtra.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="block font-bold text-sm text-slate-900">Direct Highway Access</span>
                <span className="text-xs text-slate-500">Minutes from Hyderabad ORR & NH65</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <span className="block font-bold text-sm text-slate-900">Dedicated Power & Green Park</span>
                <span className="text-xs text-slate-500">Uninterrupted 24/7 manufacturing</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="tel:+919866778813"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-colors border border-slate-200"
              >
                <span className="material-symbols-outlined text-sm text-teal-700">call</span>
                Direct Plant Phone: +91 9866778813
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-100 to-slate-200/60 flex items-center justify-center p-6 relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYlV-l9hQQYotLDPtYXHRaYXgzUpJ4j4SMcUq2di_SiklDeL6FCDIDm_MdiI3y4X7gIEwQDpa4W6EXDX5e2Th6WdpxVJSOyQ6aokPFt0ZPgbfJBa0wv0HZgLZAzmaFLBuIkXmMj48M9jzEA-HkzcnfW-9Zib_-P65S1v5TIbeWqcYmraNMu-7dwrjq4s3AdfrS23slM92S4bIScWqAkJOlF1RSQvb84D9AALhMm2RmXpatk56GVxA"
              alt="Ganesh Plastics HDPE Bottles"
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden shadow-xl border border-slate-800">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs uppercase tracking-wider border border-teal-500/30">
              Accelerate Your Packaging Supply
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-4xl font-extrabold text-white">
              Need Custom Moulding or Urgent Factory Direct Supply?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Connect with our technical manufacturing team today. We provide dimensional drawings, resin test certificates, and accelerated wholesale dispatch.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact-us')}
                className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                Contact Us Directly
              </button>
              <a
                href="https://wa.me/919866778813?text=Hello%20Ganesh%20Plastics,%20I%20am%20looking%20for%20HDPE%20bottles%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                WhatsApp Direct (+91 9866778813)
              </a>
            </div>
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
