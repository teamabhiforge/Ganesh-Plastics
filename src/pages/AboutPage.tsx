import React from 'react';
import { PagePath } from '../types';

interface AboutPageProps {
  onNavigate: (page: PagePath) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-20">
      {/* Header Banner */}
      <section className="bg-slate-100/80 py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold tracking-wider uppercase border border-slate-300">
            <span className="material-symbols-outlined text-sm text-teal-700">factory</span>
            ABOUT GANESH PLASTICS
          </div>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-extrabold text-slate-900">
            Pioneering Precision HDPE Blow Moulding in Telangana
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Located in the premier TIF Industrial Green Park, Dandumalkapur, Ganesh Plastics is a specialized high-density polyethylene (HDPE) container manufacturer engineering zero-leak packaging solutions for India's leading pharmaceutical, chemical, and agrochemical enterprises.
          </p>
        </div>
      </section>

      {/* Corporate Overview & Story */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-slate-900">
              Engineered for Critical Packaging Applications Where Failure Is Not an Option
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Industrial chemicals, active pharmaceutical ingredients, and concentrated pesticides require packaging that can withstand harsh hydrostatic pressures, environmental stress cracking, and turbulent inter-state transport.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Ganesh Plastics, we established our modern manufacturing facility with a single uncompromising philosophy: <strong>100% Virgin Polymer Integrity combined with Automated Parison Control</strong>. By eliminating recycled contaminants and utilizing high-precision extrusion blow moulding equipment, we supply containers that deliver guaranteed seal hermeticity and flawless neck finishes.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              <div>
                <span className="block font-headline-lg text-3xl font-extrabold text-teal-700 font-mono">
                  50,000+
                </span>
                <span className="text-xs text-slate-900 font-bold uppercase tracking-wider">
                  Daily Bottle Capacity
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Multi-station high speed lines for rapid turnaround.
                </p>
              </div>

              <div>
                <span className="block font-headline-lg text-3xl font-extrabold text-teal-700 font-mono">
                  100%
                </span>
                <span className="text-xs text-slate-900 font-bold uppercase tracking-wider">
                  Prime Virgin Resin
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Batch test certificates with every single delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white border border-slate-200 p-4 overflow-hidden shadow-lg">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYlV-l9hQQYotLDPtYXHRaYXgzUpJ4j4SMcUq2di_SiklDeL6FCDIDm_MdiI3y4X7gIEwQDpa4W6EXDX5e2Th6WdpxVJSOyQ6aokPFt0ZPgbfJBa0wv0HZgLZAzmaFLBuIkXmMj48M9jzEA-HkzcnfW-9Zib_-P65S1v5TIbeWqcYmraNMu-7dwrjq4s3AdfrS23slM92S4bIScWqAkJOlF1RSQvb84D9AALhMm2RmXpatk56GVxA"
                alt="Factory Product Array"
                className="w-full h-80 object-contain rounded-xl bg-slate-50 p-4 border border-slate-100"
              />
              <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs space-y-1 border border-slate-200/70">
                <div className="font-bold text-slate-900">Precision Polymer Blow Moulding</div>
                <div className="text-slate-500">Plot 24, Phase-II, TIF Industrial Green Park, Telangana</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location - TIF Industrial Green Park */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="font-label-technical text-xs font-bold uppercase tracking-widest text-teal-700">
              INFRASTRUCTURE ADVANTAGE
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-slate-900">
              Situated in the TIF Industrial Green Park, Dandumalkapur
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our plant is located in Telangana’s landmark eco-industrial park, designed for pollution-free modern manufacturing with uninterrupted industrial power and dedicated logistics corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="material-symbols-outlined text-teal-700 text-3xl">route</span>
              <h3 className="font-bold text-base text-slate-900">Direct NH65 Highway Proximity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless connectivity via NH65 (Hyderabad-Vijayawada) and Hyderabad Outer Ring Road (ORR) ensures swift freight dispatch within 24-48 hours across South and Central India.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="material-symbols-outlined text-teal-700 text-3xl">bolt</span>
              <h3 className="font-bold text-base text-slate-900">Uninterrupted 24/7 Operations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated power substation and backup infrastructure guarantee consistent thermal stability during blow extrusion, preventing batch variation and warpage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="material-symbols-outlined text-teal-700 text-3xl">eco</span>
              <h3 className="font-bold text-base text-slate-900">Eco-Friendly Closed-Loop Utilities</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero industrial effluent discharge with closed-circuit recirculating water chillers, adhering strictly to TSPCB and national environmental norms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Manufacturing Capabilities */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="font-label-technical text-xs font-bold uppercase tracking-widest text-teal-700">
            CAPABILITIES
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-slate-900">
            End-to-End Polymer Manufacturing Capabilities
          </h2>
          <p className="text-sm text-slate-600">
            From mould conception to cleanroom packaging, we manage the complete lifecycle in-house.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h4 className="font-bold text-base text-slate-900">Extrusion Blow Moulding</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with high-precision continuous extrusion blow moulding machines supporting single and multi-cavity moulds for high-volume repeat runs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h4 className="font-bold text-base text-slate-900">Custom Tooling & CNC</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              In-house 3D CAD/CAM tooling facility producing custom bottle geometries, corporate embossed emblems, and specialized ergonomic handle designs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h4 className="font-bold text-base text-slate-900">Closure Engineering</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full compatibility with induction heat seal (HIS) wads, EPE liners, vented breathers for active gas-emitting agrochemicals, and tamper-evident ratchet rings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-teal-700 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h4 className="font-bold text-base text-slate-900">Batch Traceability</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive raw material batch documentation, MFI test verification, and automated optical neck inspection ensuring standard-compliant quality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Have a contract manufacturing requirement?</h3>
            <p className="text-slate-400 text-sm">Our works management team welcomes on-site facility audits and discussions.</p>
          </div>
          <button
            onClick={() => onNavigate('contact-us')}
            className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 cursor-pointer shadow-md"
          >
            Schedule Plant Visit / Inquiry
          </button>
        </div>
      </section>
    </div>
  );
};
