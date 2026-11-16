import React from 'react';
import { PagePath } from '../types';

interface WhyChooseUsPageProps {
  onNavigate: (page: PagePath) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({
  onNavigate,
}) => {
  const pillars = [
    {
      icon: 'verified',
      title: '100% Prime Virgin HDPE Resin',
      desc: 'We never compromise with reprocessed regrind or contaminated scrap. Our containers are blown from high-density virgin resin sourced directly from leading petrochemical plants with full melt flow index (MFI) consistency.',
    },
    {
      icon: 'tune',
      title: 'Automated Parison Profiling',
      desc: 'Microprocessor-controlled die gap regulation optimizes wall thickness from neck to base. Reinforcing high-stress corners eliminates transit stress cracking and pin-hole ruptures.',
    },
    {
      icon: 'water_drop',
      title: 'Hermetic Leak-Proof Sealing',
      desc: 'Precision neck calibration tools guarantee perfectly flat lip surfaces for induction foil sealing (HIS) and tamper-evident cap snap rings. 100% batch tested under vacuum decay.',
    },
    {
      icon: 'speed',
      title: 'High-Volume Scalability (50k+/day)',
      desc: 'With continuous multi-head extrusion blow moulding stations operating in TIF Industrial Green Park, we easily fulfill recurring orders of 500,000+ bottles per month without bottlenecks.',
    },
    {
      icon: 'architecture',
      title: 'Rapid Custom Tooling & Prototyping',
      desc: 'Need a proprietary shape, ergonomic grip, or embossed logo? Our in-house tool design team crafts precision blow moulds with pilot sample batches dispatched within 10-14 days.',
    },
    {
      icon: 'local_shipping',
      title: 'Strategic Logistics on NH65 Corridor',
      desc: 'Direct proximity to NH65 and Hyderabad Outer Ring Road (ORR) allows 24-48 hour delivery timelines across Telangana, Andhra Pradesh, Maharashtra, and Karnataka.',
    },
    {
      icon: 'currency_rupee',
      title: 'Transparent Factory-Direct Pricing',
      desc: 'By working directly with our Telangana manufacturing plant, enterprise procurement teams eliminate trader markups and gain volume tiered pricing tied to virgin resin index.',
    },
    {
      icon: 'support_agent',
      title: 'Dedicated Technical Account Support',
      desc: 'Every client is paired with an experienced polymer packaging specialist who assists with chemical compatibility tests, cap torque guidelines, and comprehensive technical support.',
    },
  ];

  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-20">
      {/* Header Banner */}
      <section className="bg-slate-100/80 py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold tracking-wider uppercase border border-slate-300">
            <span className="material-symbols-outlined text-sm text-teal-700">stars</span>
            VALUE PROPOSITION
          </div>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-extrabold text-slate-900">
            Why Enterprise Leaders Choose Ganesh Plastics
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Delivering the reliability, chemical resistance, and batch uniformity that high-consequence packaging demands. Here is why procurement leaders across India trust our bottles.
          </p>
        </div>
      </section>

      {/* 8 Core Pillars Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="font-label-technical text-xs font-bold uppercase tracking-widest text-teal-700">
            OUR COMMITMENTS
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-slate-900">
            The 8 Pillars of Manufacturing Reliability
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 hover:border-slate-300 hover:shadow-md transition-all shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-teal-700 border border-slate-200">
                <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
              </div>
              <h3 className="font-bold text-base text-slate-900">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <div className="font-label-technical text-xs font-bold uppercase tracking-widest text-teal-700">
            DIRECT COMPARISON
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ganesh Plastics vs. Generic Plastic Suppliers
          </h2>
          <p className="text-sm text-slate-600">
            Understand how our engineering protocols prevent expensive packaging failures and product recalls.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6">Quality Feature</th>
                  <th className="py-4 px-6 text-teal-700 font-bold">Ganesh Plastics Standard</th>
                  <th className="py-4 px-6 text-slate-500">Unorganized Generic Suppliers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-slate-900">Polymer Raw Material</td>
                  <td className="py-4 px-6 font-semibold text-teal-700 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    100% Prime Virgin HDPE Polymer
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    Often blended with 20-50% unverified regrind scrap
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-slate-900">Wall Thickness Uniformity</td>
                  <td className="py-4 px-6 font-semibold text-teal-700 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Automated Multi-Point Parison Profiling
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    Manual die gap setting with uneven corner thinning
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-slate-900">Induction Seal Integrity</td>
                  <td className="py-4 px-6 font-semibold text-teal-700 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Micro-Milled Lip Sealing Plane
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    Flash residue and waviness leading to liquid seepage
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-slate-900">Batch Consistency</td>
                  <td className="py-4 px-6 font-semibold text-teal-700 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    ±0.5g Tight Grammage Tolerances
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    Fluctuating bottle weights causing capping jams
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-slate-900">Logistics & Location</td>
                  <td className="py-4 px-6 font-semibold text-teal-700 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    TIF Industrial Green Park on NH65
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    Congested city fringes with dispatch delays
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ready to Upgrade CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-2">
            <h3 className="font-headline-lg text-2xl font-bold">
              Ready to Upgrade Your Packaging Supply Chain?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Partner with Ganesh Plastics for reliable zero-defect HDPE packaging. Fast turnaround for standard lines and custom tooling.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact-us')}
            className="px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-md cursor-pointer"
          >
            Contact Plant Sales
          </button>
        </div>
      </section>
    </div>
  );
};
