import React from 'react';
import { PagePath, RFQFormData } from '../types';

interface EnquiryReceivedPageProps {
  rfqData: RFQFormData | null;
  onNavigate: (page: PagePath) => void;
}

export const EnquiryReceivedPage: React.FC<EnquiryReceivedPageProps> = ({
  rfqData,
  onNavigate,
}) => {
  const referenceId = `GP-INQ-${Math.floor(100000 + Math.random() * 900000)}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Ganesh Plastics team, I have submitted an inquiry on your website. Reference ID: ${referenceId}. Name: ${
      rfqData?.fullName || 'Client'
    }. Company: ${rfqData?.companyName || 'Enterprise'}.`
  );

  return (
    <div className="pt-28 md:pt-36 pb-20 max-w-4xl mx-auto px-6 space-y-10">
      {/* Confirmation Card */}
      <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-12 shadow-xl text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border-2 border-emerald-200">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            Inquiry Successfully Transmitted
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-slate-900">
            Thank You, {rfqData?.fullName || 'Valued Partner'}!
          </h1>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Your inquiry has been received by our plant dispatch and engineering team at TIF Industrial Green Park, Telangana.
          </p>
        </div>

        {/* Reference ID Pill */}
        <div className="p-4 rounded-2xl bg-slate-50 max-w-md mx-auto border border-slate-200 space-y-1">
          <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
            Your Official Inquiry Reference Code
          </span>
          <div className="font-mono font-extrabold text-xl text-teal-700">
            {referenceId}
          </div>
        </div>

        {/* Recap Table if data exists */}
        {rfqData && (
          <div className="text-left bg-slate-50 rounded-2xl p-6 border border-slate-200 text-xs space-y-3 max-w-lg mx-auto">
            <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-2">
              Inquiry Summary
            </h4>
            <div className="flex justify-between">
              <span className="text-slate-500">Contact Name:</span>
              <span className="font-bold text-slate-900">{rfqData.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Company / Plant:</span>
              <span className="font-bold text-slate-900">{rfqData.companyName}</span>
            </div>
            {rfqData.phone && (
              <div className="flex justify-between">
                <span className="text-slate-500">Phone / WhatsApp:</span>
                <span className="font-bold text-teal-700 font-mono">{rfqData.phone}</span>
              </div>
            )}
            {rfqData.email && (
              <div className="flex justify-between">
                <span className="text-slate-500">Email:</span>
                <span className="font-bold text-slate-900">{rfqData.email}</span>
              </div>
            )}
          </div>
        )}

        {/* 3-Step Fulfillment Timeline */}
        <div className="pt-6 border-t border-slate-200 text-left space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900 text-center">
            Next Steps in Your Procurement Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                1
              </div>
              <h5 className="font-bold text-xs text-slate-900">Specification Review</h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Our plant engineers review volume capacity, grammage, and barrier requirements.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                2
              </div>
              <h5 className="font-bold text-xs text-slate-900">Factory Direct Response</h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                You receive full documentation, dimensional drawings, and TDS via WhatsApp & Email.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                3
              </div>
              <h5 className="font-bold text-xs text-slate-900">Production & Dispatch</h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Direct container manufacturing and fast highway logistics coordination for your facility.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/919866778813?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            Send Reference via WhatsApp
          </a>

          <button
            onClick={() => onNavigate('products')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 transition-colors cursor-pointer"
          >
            Explore More Products
          </button>
        </div>
      </div>
    </div>
  );
};
