import React from 'react';
import { PagePath } from '../types';

interface FooterProps {
  onNavigate: (page: PagePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (path: PagePath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Value Strip */}
      <div className="border-b border-slate-800 py-10 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-teal-400 shrink-0 border border-slate-700">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <div>
              <h4 className="font-bold text-base text-white">100% Virgin HDPE Resin</h4>
              <p className="text-xs text-slate-400 mt-1">
                US-FDA compliant polymer grades with zero regrind compromise.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-teal-400 shrink-0 border border-slate-700">
              <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
            </div>
            <div>
              <h4 className="font-bold text-base text-white">50,000+ Daily Capacity</h4>
              <p className="text-xs text-slate-400 mt-1">
                High-speed extrusion blow moulding lines for continuous bulk supply.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-teal-400 shrink-0 border border-slate-700">
              <span className="material-symbols-outlined text-2xl">science</span>
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Zero-Leak Testing</h4>
              <p className="text-xs text-slate-400 mt-1">
                Vacuum decay and 1.8-meter drop test verification for every production run.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-teal-400 shrink-0 border border-slate-700">
              <span className="material-symbols-outlined text-2xl">local_shipping</span>
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Direct Factory Dispatch</h4>
              <p className="text-xs text-slate-400 mt-1">
                Prime industrial corridor in Telangana with rapid multi-state highway access.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Company Identity */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white shrink-0 border border-slate-700">
              <span className="material-symbols-outlined text-2xl text-teal-400">science</span>
            </div>
            <div>
              <span className="font-headline-sm font-bold text-xl tracking-tight text-white block">
                GANESH PLASTICS
              </span>
              <span className="text-[11px] tracking-wider uppercase text-teal-400 font-semibold font-mono">
                HDPE Bottle Manufacturers
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Engineering high-integrity blow moulded HDPE bottles, graduated laboratory containers, and chemical jerrycans. Partnering with enterprise pharmaceutical, agrochemical, and industrial leaders across India.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => handleNav('contact-us')}
              className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs tracking-wide uppercase transition-colors shadow-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              Contact Us
            </button>
            <a
              href="https://wa.me/919866778813?text=Hello%20Ganesh%20Plastics,%20I%20would%20like%20to%20enquire%20about%20HDPE%20bottles"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs tracking-wide uppercase transition-colors border border-slate-700 inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm text-emerald-400">chat</span>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 mb-4 font-mono">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <button
                onClick={() => handleNav('home')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('about-us')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                About Our Plant
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('products')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Product Catalog
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('manufacturing-and-quality')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Manufacturing & QA
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('why-choose-us')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Why Choose Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('contact-us')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Plant Contact Info */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-xs uppercase tracking-wider text-teal-400 mb-4 font-mono">
            Manufacturing Plant
          </h4>
          <address className="not-italic text-sm text-slate-400 space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-base text-teal-400 shrink-0 mt-0.5">
                location_on
              </span>
              <span>
                Plot No. 24, Phase-II, TIF Industrial Green Park, Dandumalkapur, Choutuppal, Telangana 508252
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-teal-400 shrink-0">
                call
              </span>
              <a href="tel:+919866778813" className="hover:text-white transition-colors">
                +91 9866778813
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-base text-teal-400 shrink-0">
                mail
              </span>
              <a href="mailto:ganeshplastics347@gmail.com" className="hover:text-white transition-colors">
                ganeshplastics347@gmail.com
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 bg-slate-950/60 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} Ganesh Plastics. All rights reserved. High Density Polyethylene (HDPE) Manufacturing Excellence.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>TIF Industrial Green Park, Telangana</span>
            <span>•</span>
            <span>ISO Compliant Protocols</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
