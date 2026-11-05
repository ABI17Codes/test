'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Printer, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  Flame,
  ArrowRight,
  Palette,
  Package,
  UserCheck,
  FileCheck2,
  Clock,
  MessageSquare
} from 'lucide-react';
import { BrandingSimulator } from '../../components/BrandingSimulator';

export default function BrandingStudioPage() {
  const techniques = [
    {
      icon: Sparkles,
      title: 'Precision Laser Engraving',
      desc: 'Sub-millimeter fiber laser ablation directly onto 304 stainless steel flasks, metal pens, and tech accessories. Scratch-proof, permanent, and dishwasher-safe.',
      bestFor: 'Vacuum Flasks, Metal Pens, Keychains, Wireless Tech',
      turnaround: '24-48 Hours'
    },
    {
      icon: Printer,
      title: 'UV Flatbed & Screen Printing',
      desc: 'High-adhesion UV-cured photographic printing with vivid saturation and Pantone fidelity across engineered backpacks, ceramic drinkware, and rigid gift boxes.',
      bestFor: 'Backpacks, Ceramic Mugs, Box Sleeves, Bluetooth Audio',
      turnaround: '48-72 Hours'
    },
    {
      icon: Palette,
      title: 'Pantone Color Matching',
      desc: 'Precision color calibration guaranteeing Delta E < 1.0 brand compliance across textiles, coated metals, vegan leathers, and exterior hamper packaging.',
      bestFor: 'Custom Dyed Fabrics, Corporate Pantone Enamel, Bag Linings',
      turnaround: 'Immediate Calibration'
    },
    {
      icon: Flame,
      title: 'Blind Deboss & Foil Stamping',
      desc: 'Heated magnesium die stamps creating tactile recessed impressions on thermo-PU diaries and leather organisers. Available in blind deboss or metallic gold/silver foil.',
      bestFor: 'Executive Leather Organizers, Hardbound Diaries, Folders',
      turnaround: '2-3 Business Days'
    },
    {
      icon: Package,
      title: 'Bespoke Custom Packaging',
      desc: 'Custom-engineered rigid magnetic presentation boxes with precision laser-cut high-density EVA foam trays contoured to securely cradle each curated executive item.',
      bestFor: 'VIP Onboarding Hampers, C-Suite Gift Sets, Event Keepsakes',
      turnaround: 'Custom Die-Cut'
    },
    {
      icon: UserCheck,
      title: 'Personalised Individual Gifting',
      desc: 'Laser engrave each employee’s or client’s individual name alongside your corporate emblem on pens, diaries, and bottles for deeply personal recognition.',
      bestFor: 'Employee Milestone Awards, Leadership Retreats, Client Gifts',
      turnaround: 'Bulk Variable Data'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Vector Artwork Submission',
      desc: 'Submit your corporate brand logo in vector format (.AI, .EPS, .SVG, or vector PDF) with your Pantone PMS codes and positioning preferences.'
    },
    {
      step: '02',
      title: 'Photorealistic 3D Proof',
      desc: 'Our Bangalore atelier design studio renders a detailed 3D digital proof showing exact scale, laser depth, and placement within 2 hours.'
    },
    {
      step: '03',
      title: 'Physical Pre-Production Sample',
      desc: 'For enterprise bulk programs, we produce an actual physical sample photograph or express-courier a physical strike-off sample for leadership sign-off.'
    },
    {
      step: '04',
      title: 'Precision Factory Execution',
      desc: 'In-house fiber laser machines, automated deboss presses, and multi-color UV printers manufacture your entire batch under strict ISO 9001 quality audits.'
    }
  ];

  return (
    <div className="py-10 bg-[#F5F7FA] space-y-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#667085]">
            <Link href="/" className="hover:text-[#101828]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0876B4] font-semibold">Branding &amp; Customisation Studio</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <Printer className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              DIRECT IN-HOUSE BENGALURU ATELIER &bull; ZERO OUTSOURCING
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-[-0.03em]">
            Put Your Corporate Brand on{' '}
            <span className="brand-gradient-text">
              Every Detail
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#667085] max-w-3xl font-normal leading-relaxed">
            From microscopic fiber laser ablation on food-grade stainless bottles to metallic hot-foil debossing on executive leather diaries, our in-house Bengaluru factory atelier guarantees zero distortion, Pantone fidelity, and 2-hour digital 3D proofing.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#101828] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0876B4]" />
              Zero Distortion Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#101828] shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#0876B4]" />
              Free 3D Mockup in 2 Hours
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#101828] shadow-2xs">
              <Palette className="w-3.5 h-3.5 text-[#E8B43A]" />
              Delta E &lt; 1.0 Pantone Match
            </span>
          </div>
        </div>

      </div>

      {/* Embedded Live Branding Simulator Engine */}
      <BrandingSimulator />

      {/* 6 In-House Branding Techniques Breakdown */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        <div className="text-left space-y-2">
          <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
            INDUSTRIAL MANUFACTURING TECHNIQUES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101828] tracking-tight">
            Engineered Customisation Methods
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] max-w-2xl">
            Select the optimal finish based on product substrate, corporate branding guidelines, and longevity requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {techniques.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0876B4]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0876B4] flex items-center justify-center border border-blue-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#101828]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E7EB] space-y-1.5 text-[11px]">
                  <div className="text-[#667085]">
                    <b className="text-[#101828]">Best for:</b> {item.bestFor}
                  </div>
                  <div className="inline-flex items-center gap-1 font-bold text-[#0876B4]">
                    <span>Turnaround:</span> {item.turnaround}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Branding Workflow */}
        <div className="pt-10 space-y-8">
          <div className="text-left space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              PRECISION WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
              From Vector Logo to Factory Delivery in 4 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {workflowSteps.map((ws) => (
              <div 
                key={ws.step}
                className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs space-y-3 relative overflow-hidden"
              >
                <div className="text-3xl font-black text-[#0876B4]/20">
                  {ws.step}
                </div>
                <h4 className="text-sm font-bold text-[#101828]">
                  {ws.title}
                </h4>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Artwork Guideline Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#101828] text-white shadow-xl text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#E8B43A]">
              FREE 3D DIGITAL PROOF IN 2 HOURS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to See Your Logo on Globrands Merchandise?
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-300">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8B43A] shrink-0" />
                Upload your vector logo (.AI, .EPS, .SVG) or send via WhatsApp.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8B43A] shrink-0" />
                Receive photorealistic 3D scale mockups with exact PMS coordinates.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8B43A] shrink-0" />
                Physical strike-off samples courier-dispatched across India on request.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/quote"
              className="px-6 py-3 rounded-full bg-[#E8B43A] hover:bg-[#d4a02c] text-[#101828] text-xs font-bold transition-all shadow-md text-center"
            >
              Request Free 3D Proof in RFQ
            </Link>
            <a
              href="https://wa.me/919900020456?text=Hi%20Globrands%2C%20I%20would%20like%20to%20request%20a%20free%203D%20logo%20proof%20for%20our%20corporate%20merchandise."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Studio</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
