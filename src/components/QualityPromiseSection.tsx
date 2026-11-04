import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Factory, Sparkles, ArrowRight } from 'lucide-react';

const QUALITY_STAGES = [
  {
    step: '01',
    title: 'Raw Material Selection',
    desc: 'High-density ballistic nylon, vegan leathers, and food-grade 304 steel components certified for tensile strength and resilience.',
  },
  {
    step: '02',
    title: 'Digital & Physical Proof',
    desc: 'Pre-production visual mockups and tangible golden prototypes signed off by your leadership before full batch production.',
  },
  {
    step: '03',
    title: 'Precision Brand Finishing',
    desc: 'Micro-precision fiber laser debossing, Japanese Tajima 12-needle embroidery, and UV printing calibrated to exact Pantone codes.',
  },
  {
    step: '04',
    title: 'Stress & Seam Inspection',
    desc: 'Comprehensive stress testing of reinforced bar-tack joints, waterproof zippers, and weight-bearing points under load.',
  },
  {
    step: '05',
    title: 'White-Glove Dispatch',
    desc: 'Tamper-proof signature gift packaging with live tracking for direct doorstep employee fulfillment across India.',
  },
];

export const QualityPromiseSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0E679C]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0E679C]">
              In-House Manufacturing Excellence
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-[-0.035em]">
            Zero-defect standards,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E679C] to-[#F5B800]">
              direct from Bengaluru.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Eliminating broker markups with complete ownership over raw material selection, precision custom branding, and a zero-tolerance 5-stage quality audit.
          </p>
        </div>

        {/* 5-Stage Bento Step Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {QUALITY_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="bento-card p-5 flex flex-col justify-between group hover:border-[#0E679C]/40"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-3">
                  <span className="text-xl font-extrabold text-[#0E679C] font-mono">
                    {stage.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-[#0E679C] transition-colors" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">
                  {stage.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero-Defect Checked</span>
              </div>
            </div>
          ))}
        </div>

        {/* Factory Highlight Bar */}
        <div className="bento-card p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0E679C] border border-blue-200 flex items-center justify-center shrink-0">
              <Factory className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-neutral-900">
                Tour Our Bengaluru Production Facility
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                Enterprise procurement and HR delegations are welcome to inspect live Tajima embroidery, fiber laser engraving, and assemble customized sample kits.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/branding"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0E679C]" />
              <span>Branding Studio</span>
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#0F172A] hover:bg-[#0E679C] text-white transition-colors shadow-xs"
            >
              <span>Schedule Facility Visit</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F5B800]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
