'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Layers, 
  Palette, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Discover Your Collection',
    badge: '180+ Ready SKUs',
    description: 'Select from our verified executive gift hampers, tech suites, and engineered bags, or custom-curate a tailored mix suited to your budget and milestone.',
    icon: Layers,
    color: 'from-blue-500/10 to-sky-500/10',
    borderColor: 'border-blue-200',
    iconColor: 'text-[#0876B4]',
    points: ['Pre-curated executive gift sets', 'Bespoke item mixing & matching', 'Transparent tiered bulk pricing']
  },
  {
    step: '02',
    title: 'Customise Your Branding',
    badge: 'Free 3D Proof in 24h',
    description: 'Our Bengaluru design studio maps your corporate logo, typography, and Pantone codes onto realistic 3D product previews for team approval before batch production.',
    icon: Palette,
    color: 'from-amber-500/10 to-orange-500/10',
    borderColor: 'border-amber-200',
    iconColor: 'text-[#E8B43A]',
    points: ['Fiber laser deboss simulation', 'Japanese Tajima embroidery proofs', 'Pantone color fidelity guarantee']
  },
  {
    step: '03',
    title: 'Deliver Across India',
    badge: 'Zero-Defect SLA',
    description: 'Every single hamper and bag undergoes our rigorous 5-stage QC before direct dispatch to bulk office locations or individual employee home doorsteps nationwide.',
    icon: Truck,
    color: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-200',
    iconColor: 'text-emerald-600',
    points: ['Direct remote employee doorstep delivery', 'Multi-city office pallet shipments', 'Real-time dispatch tracking']
  }
];

export const GiftingWorkflowSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F7FA] border-b border-[#E5E7EB] relative overflow-hidden">
      
      {/* Subtle brand ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#0876B4]/5 via-[#A2AA9B]/5 to-[#E8B43A]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#0876B4]">
              The Enterprise Gifting Experience
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-[-0.035em]">
            How Globrands powers{' '}
            <span className="brand-gradient-text">
              effortless corporate gifting.
            </span>
          </h2>

          <p className="text-base text-[#667085] font-normal leading-relaxed">
            From initial concept to nationwide milestone fulfillment. No friction, no intermediary markups, and zero quality compromises.
          </p>
        </div>

        {/* 3 Modern Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {WORKFLOW_STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#0876B4]/40 p-7 lg:p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
              >
                {/* Top Step Pill & Badge */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-neutral-300 group-hover:text-[#0876B4] transition-colors font-mono">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#F5F7FA] border border-[#E5E7EB] text-[#101828] shadow-2xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>

                  {/* Title & Copy */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-[#101828] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Checklist Points */}
                <div className="pt-6 mt-6 border-t border-[#E5E7EB] space-y-2">
                  {item.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#101828]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0876B4] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#101828] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-left border border-white/10">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold">
              Planning an employee onboarding or annual conference?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              Receive a customized digital presentation and exact tiered volume pricing within 2 hours.
            </p>
          </div>

          <Link
            href="/quote"
            className="px-6 py-3.5 btn-gold text-xs font-bold shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Request Instant Proposal</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
