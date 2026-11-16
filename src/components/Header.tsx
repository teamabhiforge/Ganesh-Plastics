import React, { useState, useEffect } from 'react';
import { PagePath } from '../types';

interface HeaderProps {
  currentPage: PagePath;
  onNavigate: (page: PagePath) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks: { path: PagePath; label: string }[] = [
    { path: 'home', label: 'Home' },
    { path: 'about-us', label: 'About Us' },
    { path: 'products', label: 'Products' },
    { path: 'product-details', label: 'Product Details' },
    { path: 'manufacturing-and-quality', label: 'Manufacturing & Quality' },
    { path: 'why-choose-us', label: 'Why Choose Us' },
    { path: 'contact-us', label: 'Contact Us' },
  ];

  const handleLinkClick = (path: PagePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(15,23,42,0.06)] bg-white">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 hidden lg:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between font-label-technical text-label-technical">
          <div className="flex items-center gap-6 text-xs">
            <a
              href="tel:+919866778813"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-teal-400">call</span>
              <span>+91 9866778813</span>
            </a>
            <a
              href="mailto:ganeshplastics347@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-teal-400">mail</span>
              <span>ganeshplastics347@gmail.com</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="material-symbols-outlined text-[14px] text-teal-400">location_on</span>
              <span>TIF Industrial Green Park, Telangana</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="px-2 py-0.5 rounded bg-slate-800 text-teal-300 tracking-wider uppercase font-semibold">
              B2B Factory Direct
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 tracking-wider uppercase">
              Custom Moulding & Tooling
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white border border-slate-800 group-hover:bg-teal-700 transition-colors shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-2xl text-teal-300">science</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-extrabold tracking-tight text-slate-900 leading-tight">
                  GANESH PLASTICS
                </span>
                <span className="font-label-technical text-label-technical tracking-widest uppercase text-teal-700 font-bold">
                  HDPE Bottle Manufacturers
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 h-full" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`py-2 transition-colors cursor-pointer text-sm font-semibold tracking-normal relative ${
                    isActive
                      ? 'text-teal-700 font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-teal-700 hover:bg-slate-100 font-label-md text-label-md transition-colors font-bold"
              href="https://wa.me/919866778813"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => handleLinkClick('contact-us')}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-label-md text-label-md font-bold tracking-wide transition-all shadow-xs cursor-pointer"
            >
              Contact Us
            </button>

            <button
              onClick={() => setUserModalOpen(!userModalOpen)}
              title="Customer Procurement Portal"
              aria-label="Customer Procurement Portal"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors border border-slate-200"
            >
              <span className="material-symbols-outlined text-[20px]">person</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <div className="xl:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl hover:bg-slate-100 text-slate-800 focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="material-symbols-outlined text-2xl">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Slide-over panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-200">
            {/* Header of mobile menu */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-base text-slate-900 block">GANESH PLASTICS</span>
                <span className="text-[10px] font-mono uppercase text-teal-700 font-bold">HDPE Manufacturers</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-100 text-teal-700 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-teal-700"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-6 border-t border-slate-100 space-y-3 bg-slate-50">
              <a
                href="https://wa.me/919866778813"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                WhatsApp: +91 9866778813
              </a>
              <button
                onClick={() => handleLinkClick('contact-us')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">mail</span>
                Contact Sales Office
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Portal / Works Contact Popover */}
      {userModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-end p-6 bg-slate-900/40 backdrop-blur-xs"
          onClick={() => setUserModalOpen(false)}
        >
          <div
            className="w-80 bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 mt-16 mr-2 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-700 text-xl">account_circle</span>
                <span className="text-sm font-bold text-slate-900">Client Procurement Desk</span>
              </div>
              <button
                onClick={() => setUserModalOpen(false)}
                className="w-6 h-6 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center text-xs"
                aria-label="Close portal window"
              >
                ✕
              </button>
            </div>
            <div className="py-4 space-y-3 text-xs text-slate-600">
              <p>Direct B2B account support for contract manufacturing and dispatch status.</p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                <p className="font-bold text-slate-900">Dedicated Works Officer:</p>
                <p>Phone: +91 9866778813</p>
                <p>Email: ganeshplastics347@gmail.com</p>
                <p>Plant: TIF Industrial Green Park, Telangana</p>
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  setUserModalOpen(false);
                  onNavigate('contact-us');
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider text-center cursor-pointer hover:bg-slate-800 transition-colors"
              >
                Contact Sales Office
              </button>
              <a
                href="https://wa.me/919866778813"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider text-center hover:bg-slate-200 transition-colors"
              >
                <span className="material-symbols-outlined text-sm text-emerald-600">chat</span>
                Direct WhatsApp Line
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
