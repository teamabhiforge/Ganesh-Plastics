import React, { useState } from 'react';
import { PagePath, RFQFormData } from '../types';

interface ContactPageProps {
  onNavigate: (page: PagePath) => void;
  onSubmitInquiry: (data: RFQFormData) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onSubmitInquiry,
}) => {
  const [formData, setFormData] = useState<RFQFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    productCategory: 'General Container Inquiry',
    monthlyVolume: '',
    inductionSeal: false,
    tamperEvident: false,
    measuringCap: false,
    specDetails: '',
    urgentDispatch: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp is required';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitInquiry(formData);
    }, 600);
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-16">
      {/* Header Banner */}
      <section className="bg-slate-100/80 py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold tracking-wider uppercase border border-slate-300">
            <span className="material-symbols-outlined text-sm text-teal-700">location_on</span>
            PLANT OFFICE & DISPATCH HUB
          </div>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-extrabold text-slate-900">
            Contact Ganesh Plastics
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Connect directly with our manufacturing plant at TIF Industrial Green Park, Telangana. Whether you need bottle specifications or custom mould tooling, our engineering team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Plant Contact & Map Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 space-y-6 shadow-sm">
              <h2 className="font-headline-lg text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Factory & Plant Headquarters
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 border border-slate-200">
                    <span className="material-symbols-outlined text-xl text-teal-700">factory</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Manufacturing Plant Address</span>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      Plot No. 24, Phase-II, TIF Industrial Green Park, Dandumalkapur, Choutuppal Mandal, Yadadri Bhuvanagiri District, Telangana 508252, India
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-mono font-bold text-teal-700 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                      NH65 Highway Corridor
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 border border-slate-200">
                    <span className="material-symbols-outlined text-xl text-teal-700">call</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Direct Telephone / WhatsApp</span>
                    <a
                      href="tel:+919866778813"
                      className="text-teal-700 font-bold text-base block mt-0.5 hover:underline"
                    >
                      +91 9866778813
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Direct line to plant procurement & dispatch
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 border border-slate-200">
                    <span className="material-symbols-outlined text-xl text-teal-700">mail</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Technical Sales & Inquiries Email</span>
                    <a
                      href="mailto:ganeshplastics347@gmail.com"
                      className="text-slate-900 hover:text-teal-700 font-semibold text-xs block mt-0.5"
                    >
                      ganeshplastics347@gmail.com
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Send CAD drawings, specification sheets, & tender documents
                    </span>
                  </div>
                </div>
              </div>

              {/* Highway Route Guidance */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-teal-700 text-sm">directions_car</span>
                  Route from Hyderabad / Outer Ring Road (ORR)
                </span>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Take the Vijayawada Highway (NH65) from Hyderabad ORR Exit 11 (Pedda Amberpet). Proceed approximately 25 km toward Choutuppal. TIF Industrial Green Park entrance is prominently marked with dedicated industrial wide-entry gates.
                </p>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919866778813?text=Hello%20Ganesh%20Plastics,%20I%20am%20enquiring%20about%20HDPE%20bottles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Chat on WhatsApp Directly (+91 9866778813)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-teal-700 border border-slate-200">
                  Fast Response Protocol
                </span>
                <h2 className="font-headline-lg text-2xl font-bold text-slate-900 mt-2">
                  Send Inquiry & Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your packaging specifications below. Our plant team responds with container details, mold availability, and dimensional drawings promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Ramesh Reddy"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs ${
                        errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Company / Formulation Unit <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => {
                        setFormData({ ...formData, companyName: e.target.value });
                        if (errors.companyName) setErrors({ ...errors, companyName: '' });
                      }}
                      placeholder="e.g. Reddy Chemical Industries Ltd."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs ${
                        errors.companyName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      WhatsApp / Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+91 98667 78813"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs ${
                        errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      Official Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="procurement@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs ${
                        errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Specifications & Inquiry Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.specDetails}
                    onChange={(e) => setFormData({ ...formData, specDetails: e.target.value })}
                    placeholder="Specify target bottle dimensions, intended liquid/chemical payload, delivery destination, or timelines..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-teal-700 text-sm">shield</span>
                    100% Confidential B2B Inquiry.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-sm">send</span>
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
