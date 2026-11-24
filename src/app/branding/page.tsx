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
      icon: Printer,
      title: 'DTF (Direct to Film) Printing',
      desc: 'Vibrant, full-color logo printing for backpacks, laptop sleeves, T-shirts, hoodies, and caps. Captures multi-color company logos with sharp detail and high durability.',
      bestFor: 'Backpacks, Corporate T-Shirts, Hoodies, Caps, Duffle Bags',
      turnaround: '24-48 Hours'
    },
    {
      icon: Sparkles,
      title: 'Computerized Logo Embroidery',
      desc: 'Premium multi-thread stitched embroidery directly onto backpack front panels, polo T-shirts, jackets, and caps for a long-lasting executive look.',
      bestFor: 'Laptop Backpacks, Polo T-Shirts, Corporate Jackets, Caps',
      turnaround: '48-72 Hours'
    },
    {
      icon: Palette,
      title: 'Screen Printing',
      desc: 'Clean, cost-effective single-color and multi-color screen printing ideal for bulk event backpacks, conference bags, drawstring pouches, and promotional giveaways.',
      bestFor: 'Bulk Backpacks, Event Bags, Drawstring Bags, Umbrellas',
      turnaround: '24-48 Hours'
    },
    {
      icon: Flame,
      title: 'Laser Engraving',
      desc: 'Permanent laser engraving of your company logo and employee name onto stainless steel water bottles, vacuum flasks, metal pens, keychains, and trophies.',
      bestFor: 'Vacuum Flasks, Water Bottles, Metal Pens, Trophies & Medals',
      turnaround: '24-48 Hours'
    },
    {
      icon: Package,
      title: 'Diary Embossing & Foil Stamping',
      desc: 'Clean logo embossing or gold/silver foil stamping on executive PU leather diaries, notebooks, and desktop organizers.',
      bestFor: 'Executive Diaries, Notebooks, Folders, Wallet Sets',
      turnaround: '2-3 Business Days'
    },
    {
      icon: UserCheck,
      title: 'Custom Gift Box Branding',
      desc: 'Add your company logo directly on rigid welcome kit gift boxes and combo hampers for employee onboarding and festive gifting.',
      bestFor: 'Employee Welcome Kits, Festive Gift Boxes, Combo Sets',
      turnaround: '2-3 Business Days'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Share Your Company Logo',
      desc: 'Send us your company logo file (PNG, PDF, CDR, or AI) on WhatsApp or email along with your selected backpack or corporate gift item.'
    },
    {
      step: '02',
      title: 'Digital Mockup Approval',
      desc: 'Our team shares a clear digital preview showing how your logo will look with DTF printing, embroidery, screen printing, or laser engraving.'
    },
    {
      step: '03',
      title: 'Sample Check',
      desc: 'For bulk corporate orders, we share a live photo or video of the printed/embroidered sample for your confirmation before full production.'
    },
    {
      step: '04',
      title: 'Fast Bulk Production & Delivery',
      desc: 'Our Bengaluru team completes the branding, checks quality on every piece, and dispatches your order safely.',
    }
  ];

  return (
    <div className="py-10 bg-[#F5F0E8] space-y-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#69635C]">
            <Link href="/" className="hover:text-[#211D1A]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#A98554] font-semibold">Branding &amp; Customisation Studio</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <Printer className="w-3.5 h-3.5 text-[#A98554]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#A98554]">
              DIRECT IN-HOUSE BENGALURU ATELIER &bull; ZERO OUTSOURCING
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#211D1A] tracking-[-0.03em]">
            Put Your Corporate Brand on{' '}
            <span className="brand-gradient-text">
              Every Detail
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#69635C] max-w-3xl font-normal leading-relaxed">
            From microscopic fiber laser ablation on food-grade stainless bottles to metallic hot-foil debossing on executive leather diaries, our in-house Bengaluru factory atelier guarantees zero distortion, Pantone fidelity, and 2-hour digital 3D proofing.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D8] text-xs font-semibold text-[#211D1A] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A98554]" />
              Zero Distortion Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D8] text-xs font-semibold text-[#211D1A] shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#A98554]" />
              Free 3D Mockup in 2 Hours
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D8] text-xs font-semibold text-[#211D1A] shadow-2xs">
              <Palette className="w-3.5 h-3.5 text-[#C5A16D]" />
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
          <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#A98554]">
            INDUSTRIAL MANUFACTURING TECHNIQUES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#211D1A] tracking-tight">
            Engineered Customisation Methods
          </h2>
          <p className="text-xs sm:text-sm text-[#69635C] max-w-2xl">
            Select the optimal finish based on product substrate, corporate branding guidelines, and longevity requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {techniques.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#EAE3D8] hover:border-[#A98554]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#A98554] flex items-center justify-center border border-blue-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#211D1A]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#69635C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE3D8] space-y-1.5 text-[11px]">
                  <div className="text-[#69635C]">
                    <b className="text-[#211D1A]">Best for:</b> {item.bestFor}
                  </div>
                  <div className="inline-flex items-center gap-1 font-bold text-[#A98554]">
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
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#A98554]">
              PRECISION WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#211D1A] tracking-tight">
              From Vector Logo to Factory Delivery in 4 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {workflowSteps.map((ws) => (
              <div 
                key={ws.step}
                className="p-6 rounded-2xl bg-white border border-[#EAE3D8] shadow-2xs space-y-3 relative overflow-hidden"
              >
                <div className="text-3xl font-black text-[#A98554]/20">
                  {ws.step}
                </div>
                <h4 className="text-sm font-bold text-[#211D1A]">
                  {ws.title}
                </h4>
                <p className="text-xs text-[#69635C] leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Artwork Guideline Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#211D1A] text-white shadow-xl text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C5A16D]">
              FREE 3D DIGITAL PROOF IN 2 HOURS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to See Your Logo on Globrands Merchandise?
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-300">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A16D] shrink-0" />
                Upload your vector logo (.AI, .EPS, .SVG) or send via WhatsApp.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A16D] shrink-0" />
                Receive photorealistic 3D scale mockups with exact PMS coordinates.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A16D] shrink-0" />
                Physical strike-off samples courier-dispatched across India on request.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/quote"
              className="px-6 py-3 rounded-full bg-[#C5A16D] hover:bg-[#A98554] text-[#211D1A] text-xs font-bold transition-all shadow-md text-center"
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
