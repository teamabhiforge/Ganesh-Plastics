/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PagePath, Product, RFQFormData } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { ContactPage } from './pages/ContactPage';
import { EnquiryReceivedPage } from './pages/EnquiryReceivedPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PagePath>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(PRODUCTS.length > 0 ? PRODUCTS[0] : null);
  const [lastRfqData, setLastRfqData] = useState<RFQFormData | null>(null);

  const handleNavigate = (page: PagePath) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRfqSubmitted = (data: RFQFormData) => {
    setLastRfqData(data);
    setCurrentPage('enquiry-received');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {currentPage === 'about-us' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {currentPage === 'product-details' && (
          <ProductDetailPage
            product={selectedProduct}
            onNavigate={handleNavigate}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {currentPage === 'manufacturing-and-quality' && (
          <ManufacturingPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'why-choose-us' && (
          <WhyChooseUsPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact-us' && (
          <ContactPage
            onNavigate={handleNavigate}
            onSubmitInquiry={handleRfqSubmitted}
          />
        )}

        {currentPage === 'enquiry-received' && (
          <EnquiryReceivedPage
            rfqData={lastRfqData}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="tel:+919866778813"
          className="px-4 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group cursor-pointer border border-slate-700"
          title="Direct Plant Phone: +91 9866778813"
        >
          <span className="material-symbols-outlined text-xl">call</span>
          <span className="hidden sm:inline font-bold text-xs tracking-wider uppercase pr-1">
            Call +91 9866778813
          </span>
        </a>

        <a
          href="https://wa.me/919866778813?text=Hello%20Ganesh%20Plastics,%20I%20am%20looking%20for%20HDPE%20bottles%20inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group cursor-pointer"
          title="Chat with Technical Sales on WhatsApp"
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
          <span className="hidden sm:inline font-bold text-xs tracking-wider uppercase pr-1">
            WhatsApp Us
          </span>
        </a>
      </div>
    </div>
  );
}
