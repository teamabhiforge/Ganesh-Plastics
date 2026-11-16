import React from 'react';
import { PagePath } from '../types';

interface ManufacturingPageProps {
  onNavigate: (page: PagePath) => void;
}

export const ManufacturingPage: React.FC<ManufacturingPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="pt-28 md:pt-36 pb-20 space-y-20">
      {/* Header Banner */}
      <section className="bg-slate-100/80 py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold tracking-wider uppercase border border-slate-300">
            <span className="material-symbols-outlined text-sm text-teal-700">precision_manufacturing</span>
            ENGINEERING & QUALITY ASSURANCE
          </div>
          <h1 className="font-headline-lg text-3xl sm:text-5xl font-extrabold text-slate-900">
            Extrusion Blow Moulding Technology & Quality Control
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Discover the precision manufacturing protocols behind Ganesh Plastics. From microprocessor parison programming to rigorous destructive drop testing, our Telangana facility is engineered for zero-defect output.
          </p>
        </div>
      </section>

      {/* The 6-Stage Manufacturing Process */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="font-label-technical text-xs font-bold uppercase tracking-widest text-teal-700">
            PROCESS WALKTHROUGH
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-slate-900">
            The 6-Stage Precision Extrusion Blow Moulding Protocol
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            How we transform virgin HDPE granules into dimensionally stable, leak-proof industrial packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                01
              </span>
              <span className="text-[11px] font-mono text-teal-700 font-bold">Resin Feed</span>
            </div>
            <h3 className="font-bold text-base text-slate-900">Virgin Resin Homogenization</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Prime virgin polymer pellets (0.952 - 0.958 g/cm³ density) are vacuum-conveyed into gravimetric blenders with virgin masterbatch. Multi-zone heated screws ensure uniform plasticization without thermal degradation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                02
              </span>
              <span className="text-[11px] font-mono text-teal-700 font-bold">Parison Control</span>
            </div>
            <h3 className="font-bold text-base text-slate-900">Multi-Point Parison Profiling</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated servo-hydraulic die gap regulators adjust the tubular parison thickness dynamically as it extrudes downward. Extra polymer is concentrated in container corners and handle knuckles to eliminate pinch thinning.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                03
              </span>
              <span className="text-[11px] font-mono text-teal-700 font-bold">Clamping & Blow</span>
            </div>
            <h3 className="font-bold text-base text-slate-900">High-Pressure Mould Inflation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hardened aircraft-grade aluminum/beryllium copper moulds clamp the parison. Calibrated blow pins inject filtered 8-10 bar compressed air, forming sharp threads and locking in neck tolerances.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                04
              </span>
              <span className="text-[11px] font-mono text-teal-700 font-bold">Chilled Cooling</span>
            </div>
            <h3 className="font-bold text-base text-slate-900">Rapid Cycle Mold Chilling</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Closed-circuit refrigerated chillers maintain mould wall temperature at 10-12°C, preventing thermal post-shrinkage warpage and ensuring dimensional consistency across every production shift.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                05
              </span>
              <span className="text-[11px] font-mono text-teal-700 font-bold">Deflashing</span>
            </div>
            <h3 className="font-bold text-base text-slate-900">Automated Neck & Base Deflashing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In-line pneumatic punches cleanly separate top flash and bottom pinch tails without operator handling. Sealing lips are inspected to verify flawless mating surfaces for induction heat foils.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                06
              </span>
              <span className="text-[11px] font-mono text-teal-700 font-bold">In-Line Testing</span>
            </div>
            <h3 className="font-bold text-base text-slate-900">Vacuum Leak & Optical Testing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every unit is transferred through pressure differential leak detection stations. Any bottle with microscopic pinholes or neck out-of-roundness is automatically rejected before packing.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Control & Destructive Testing Laboratory */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="font-label-technical text-xs font-bold uppercase tracking-widest text-teal-700">
              ON-SITE QA LABORATORY
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-slate-900">
              Comprehensive Quality Assurance & Laboratory Testing
            </h2>
            <p className="text-sm text-slate-600">
              Every production lot undergoes destructive and non-destructive laboratory evaluation to ensure zero leakage during warehousing, stacking, and rough logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Test 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-teal-700 border border-slate-200">
                  <span className="material-symbols-outlined text-xl">vertical_align_bottom</span>
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">1.8-Meter Drop Impact Testing</h3>
                  <span className="text-xs text-teal-700 font-bold font-mono">Calibrated Drop Impact Protocol</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bottles are filled to nominal capacity with water or glycol solution and conditioned to ambient and sub-zero temperatures. They are dropped from a calibrated height of 1.8 meters onto hard concrete at base, diagonal, and side-impact angles. Zero rupture or leakage allowed.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-900 font-semibold flex items-center justify-between border border-slate-200">
                <span>Pass Requirement:</span>
                <span className="text-teal-700 font-bold">100% Hermetic Seal Retention</span>
              </div>
            </div>

            {/* Test 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-teal-700 border border-slate-200">
                  <span className="material-symbols-outlined text-xl">air</span>
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">Vacuum Decay & Leak Test Chamber</h3>
                  <span className="text-xs text-teal-700 font-bold font-mono">Sub-Atmospheric Pressure Testing</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Filled and capped containers are submerged in an acrylic vacuum test chamber evacuated to -30 kPa to -50 kPa pressure. Any bubble generation or vapor escape indicates closure micro-defects or sealing surface irregularities.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-900 font-semibold flex items-center justify-between border border-slate-200">
                <span>Pass Requirement:</span>
                <span className="text-teal-700 font-bold">Zero Bubble Emission at -50 kPa</span>
              </div>
            </div>

            {/* Test 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-teal-700 border border-slate-200">
                  <span className="material-symbols-outlined text-xl">science</span>
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">ESCR (Stress Crack Resistance)</h3>
                  <span className="text-xs text-teal-700 font-bold font-mono">168-Hour Accelerated Stress Testing</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bottles are filled with 10% Igepal surfactant solution and maintained at 50°C in an environmental testing chamber for up to 168 hours to simulate aggressive agrochemical and detergent interactions under pressurized warehousing.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-900 font-semibold flex items-center justify-between border border-slate-200">
                <span>Pass Requirement:</span>
                <span className="text-teal-700 font-bold">F0 Failure Rating (0 Cracks after 168h)</span>
              </div>
            </div>

            {/* Test 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-teal-700 border border-slate-200">
                  <span className="material-symbols-outlined text-xl">straighten</span>
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">Ultrasonic Wall Gauge Profiling</h3>
                  <span className="text-xs text-teal-700 font-bold font-mono">Precision Magna-Mike Gauging</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Non-destructive Hall-effect and ultrasonic thickness sensors measure wall distribution across 12 radial zones (neck, shoulder, sidewall, parting lines, and base pinch-off) to verify strict adherence to minimum thickness thresholds.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-900 font-semibold flex items-center justify-between border border-slate-200">
                <span>Tolerance:</span>
                <span className="text-teal-700 font-bold">Within ±0.05 mm of CAD profile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleanroom Standards & Hygiene */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-12 space-y-8 shadow-xs">
          <div className="max-w-3xl space-y-2">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-teal-700 text-xs font-bold uppercase tracking-wider border border-slate-200">
              Pharma & Food Grade Protocols
            </span>
            <h3 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-slate-900">
              Controlled Clean Packaging for Pharma & Food Formulations
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              For pharmaceutical syrup and diagnostic packaging, our plant enforces positive air pressure filtration, automated bagging at the mould discharge, and gamma-irradiation compatible virgin resins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-sm text-slate-900 block">Zero Particulate Ingress</span>
              <p className="text-xs text-slate-600">
                Dust-controlled handling zones with operators in specialized cleanroom attire.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-sm text-slate-900 block">Non-Toxic Additive Free</span>
              <p className="text-xs text-slate-600">
                Zero heavy metals, bisphenol-A (BPA), or phthalates in HDPE polymers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-sm text-slate-900 block">Batch Certificate of Analysis</span>
              <p className="text-xs text-slate-600">
                Physical property reports and resin COA provided with every shipment lot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-slate-900 p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-2">
            <h3 className="font-headline-lg text-2xl font-bold">
              Require Full Technical Data Sheets (TDS) & QA Certificates?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Our technical engineering department will send complete dimensional drawings, resin specs, and drop-test certificates for audit reviews.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              Contact Lab Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
