'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Palette, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Scissors, 
  Layers, 
  ArrowRight, 
  CheckCircle2,
  FileCheck,
  Eye,
  Settings
} from 'lucide-react';

interface CustomizationFeature {
  title: string;
  subtitle: string;
  description: string;
  technique: string;
  specs: string[];
}

const BRANDING_TECHNIQUES: CustomizationFeature[] = [
  {
    title: 'Precision Tajima Thread Embroidery',
    subtitle: 'High-Density Textile Branding',
    description: 'Executed on Japanese 12-needle Tajima computerized embroidery machines, ensuring needle-sharp thread resolution, zero puckering, and lifetime colorfastness.',
    technique: 'Direct Backpack Harness & Pocket Placement',
    specs: ['Up to 12 colors per logo', 'High-density Madeira threads', 'Zero fray guarantee']
  },
  {
    title: 'Permanent Fiber Laser Engraving',
    subtitle: 'Micron-Level Metallic Etching',
    description: 'High-precision industrial fiber laser machines etch razor-sharp logos and individual employee names into stainless steel vacuum bottles, pens, and metal zipper pullers.',
    technique: 'Metal Drinkware & Hardware Plates',
    specs: ['Indelible & scratch-proof', 'Variable name personalization', 'Sub-millimeter precision']
  },
  {
    title: 'High-Definition Screen & UV Flatbed Print',
    subtitle: 'Vibrant Multi-Color Pantone Calibration',
    description: 'Specialized ink formulations bonded to technical nylon, PU leather, and hard goods. Cured under ultraviolet light for exceptional vibrancy, abrasion resistance, and wash durability.',
    technique: 'Backpack Shells, T-Shirts & Hampers',
    specs: ['Exact Pantone (PMS) matching', 'Full-color gradient UV prints', 'Water-resistant ink curing']
  },
  {
    title: 'Hot Foil & Blind Leather Debossing',
    subtitle: 'Sophisticated Tactile Impressions',
    description: 'Heat and high-pressure brass die impressions crafted for premium leatherette diaries, executive folios, and luxury gift box lids with optional metallic gold or silver foils.',
    technique: 'Executive Diaries, Folders & Packaging',
    specs: ['Deep tactile indentation', 'Metallic gold/silver foil options', 'Zero edge bleeding']
  },
  {
    title: 'Custom Molded Silicone & Metal Pullers',
    subtitle: 'Proprietary Brand Hardware',
    description: 'Custom-molded 3D rubber badges, branded zipper pullers, and woven damask labels engineered to integrate your company identity directly into the bag architecture.',
    technique: 'Backpack Zippers & Front Badges',
    specs: ['3D embossed silicone', 'Zinc alloy electroplated pullers', 'Bespoke shape molding']
  },
  {
    title: 'Complimentary 24-Hour 3D Digital Proofing',
    subtitle: 'Virtual Prototyping Before Production',
    description: 'Our in-house design studio produces photorealistic 3D virtual mockups showing your exact logo placement, scale, and Pantone fidelity before any physical sample is made.',
    technique: 'Pre-Production Visualization',
    specs: ['24-hour turnaround', 'Multi-angle photorealistic render', 'Zero commitment preview']
  }
];

export const CustomizationCapabilitiesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#172B4D] text-white border-b border-white/10 text-left relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C5A46D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#0876B4]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <Palette className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span className="text-[11px] uppercase tracking-[0.16em] font-extrabold text-[#C5A46D]">
                IN-HOUSE BRANDING &bull; CUSTOMIZATION CAPABILITIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Precision Branding Studio &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A46D] via-amber-200 to-[#168FC9]">
                Custom Manufacturing Atelier
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              At <strong className="text-white">GLOBRANDS LIFESTYLE PVT. LTD.</strong>, customization is performed entirely in-house. We do not outsource embroidery or laser printing to third parties, guaranteeing strict Pantone fidelity, confidential intellectual property, and accelerated delivery.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/branding"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C5A46D] hover:bg-[#b8955c] text-[#172B4D] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md group"
            >
              <span>Explore Branding Studio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
            >
              <span>Request Free Mockup</span>
            </a>
          </div>
        </div>

        {/* 6 Branding Techniques Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDING_TECHNIQUES.map((feat, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A46D]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-[#C5A46D]/20 border border-[#C5A46D]/30 text-[10px] font-bold text-[#C5A46D] uppercase tracking-wider">
                    {feat.technique}
                  </span>
                  <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    {feat.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#C5A46D] transition-colors">
                    {feat.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {feat.description}
                </p>

                {/* Specs List */}
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  {feat.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">In-House Quality SLA</span>
                <Link
                  href="/branding"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#C5A46D] hover:text-white transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Prototype to Volume Production Pipeline */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#20242C] border border-white/10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A46D]">
              FAST-TRACK PROTOTYPING &amp; VOLUME WORKFLOW
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              From Logo Upload to Pan-India Factory Dispatch
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#C5A46D]/20 text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="text-sm font-bold text-white">24h 3D Digital Proof</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Send your vector logo. Receive a 3D digital simulation with exact placement, size, and Pantone matching within 24 hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#C5A46D]/20 text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="text-sm font-bold text-white">3-Day Physical Sample</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pre-production physical counter-sample dispatched to your corporate office for touch, feel, and C-Suite sign-off.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#C5A46D]/20 text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="text-sm font-bold text-white">Volume Manufacturing</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Automated cutting, heavy-duty bar-tacking, in-house embroidery/laser, and 5-point quality audit in our Bengaluru facility.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#C5A46D]/20 text-[#C5A46D] flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div className="text-sm font-bold text-white">Palletized Dispatch</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Inspected cartons dispatched with 1-Year Warranty cards to branch offices or employee doorsteps across 28 Indian states.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
