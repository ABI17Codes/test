'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Truck, 
  Eye, 
  CheckCircle2, 
  Star,
  FileText,
  Clock,
  Layers,
  Heart,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { PRODUCTS } from '../data/products';

interface HeroProps {
  onExploreCollection: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollection, onRequestQuote }) => {
  const { addToQuote, setActiveProductModal } = useQuote();

  const heroShowcaseItems = [
    {
      id: 'hamper',
      product: PRODUCTS.find((p) => p.id === 'hgs-h74') || PRODUCTS[0],
      tabLabel: '🎁 VIP Executive Hampers',
      categoryBadge: 'All-in-One Flagship',
      headline: 'VIP 5-in-1 Executive Tech Suite',
      tagline: 'Smart Temp LED Bottle + Wireless Mouse + Vegan Leather Notebook + Signature Metal Pen',
      image: '/catalog/crops/hgs_h74.jpg',
      specs: [
        '304 Stainless Double-Wall Smart Temp Flask',
        'Ergonomic Silent Slim Optical Mouse',
        'Magnetic Loop A5 Executive Journal',
        'Matte Metal Rollerball Pen & Cardholder'
      ],
      socialProof: {
        quote: 'Delivered 2,400 kits for Tech Mahindra on time.',
        author: 'Enterprise People Ops',
        rating: 5
      },
      moq: '50 sets',
      leadTime: '3-5 Days SLA',
      craft: 'Fiber Laser & UV Print'
    },
    {
      id: 'ninja-boxer',
      product: PRODUCTS.find((p) => p.id === 'bg-boxer') || PRODUCTS[1],
      tabLabel: '🎒 Engineered Backpacks',
      categoryBadge: 'Proprietary Ninja Gear',
      headline: 'Ninja Gear BOXER 28L Antitheft',
      tagline: '15.6" Vault Pocket + External USB Fast Charging + Heavy-Duty Dobby All-Weather Fabric',
      image: '/catalog/crops/boxer_ninja_gear_main.jpg',
      specs: [
        '15.6" Shockproof Padded Laptop Sleeve',
        'Integrated USB Fast-Charging Pass-Through',
        'Weather-Resistant Ballistic Dobby Weave',
        '1-Year Factory Replacement Warranty'
      ],
      socialProof: {
        quote: 'Zero seam failure across 8,000 bags shipped.',
        author: 'IT Procurement Head',
        rating: 5
      },
      moq: '50 units',
      leadTime: 'Ready Stock',
      craft: 'Tajima Multi-Thread Embroidery'
    },
    {
      id: 'adma-volvo',
      product: PRODUCTS.find((p) => p.id === 'bg-volvo-2') || PRODUCTS[2],
      tabLabel: '💼 ADMA London Travel',
      categoryBadge: 'British Heritage Series',
      headline: 'ADMA London VOLVO 2.0 38L',
      tagline: 'Concealed Rain Cover + Air-Mesh Spinal Backing + Dual Quick-Stash Security Compartments',
      image: '/catalog/crops/volvo_2_adma_london_main.jpg',
      specs: [
        'Integrated High-Vis All-Weather Rain Cover',
        'Orthopedic Ergonomic Air-Flow Back Cushion',
        'Heavy-Duty Bar-Tack Stress Reinforcement',
        'Water-Repellent Hydro-Shield Coated Finish'
      ],
      socialProof: {
        quote: 'Executive travel bags that our leadership loves.',
        author: 'Global MNC Admin',
        rating: 5
      },
      moq: '50 units',
      leadTime: 'Ready Stock',
      craft: 'High-Density Dual-Tone Screen'
    },
    {
      id: 'eco-bamboo',
      product: PRODUCTS.find((p) => p.id === 'hgs-h66') || PRODUCTS[3],
      tabLabel: '🌿 Sustainable Sets',
      categoryBadge: 'Eco-Conscious 2026',
      headline: 'Organic Bamboo & Cork Executive Set',
      tagline: '100% Biodegradable Cork Cover + Vacuum Bamboo Flask + Recycled Kraft Keepsake Box',
      image: '/catalog/crops/hgs_h66.jpg',
      specs: [
        'Natural Cork Bound A5 Sustainable Journal',
        'Double-Wall Vacuum Insulated Bamboo Flask',
        'Precision Laser-Etched Organic Bamboo Pen',
        'Recycled Eco-Kraft Gift Presentation Case'
      ],
      socialProof: {
        quote: 'Perfect ESG gift set for our annual green summit.',
        author: 'Sustainability Lead',
        rating: 5
      },
      moq: '50 sets',
      leadTime: '4-6 Days SLA',
      craft: 'Organic Laser Deboss'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = heroShowcaseItems[activeIndex];

  const whatsappNumber = '919845012345';
  const whatsappMsg = encodeURIComponent(
    'Hello Globrands Lifestyle, I would like to inquire about customized corporate gifting collections for our organization.'
  );

  return (
    <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#FAFAF9] to-[#F1F5F9] border-b border-neutral-200/80">
      
      {/* 2026 Luminous Atmospheric Glows (Ocean Blue & Sun Gold) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-b from-sky-400/12 via-amber-400/8 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-24 -left-20 w-[350px] h-[350px] bg-sky-500/8 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-36 -right-20 w-[350px] h-[350px] bg-amber-400/10 blur-3xl pointer-events-none rounded-full" />

      {/* Subtle modern micro-grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_25%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-10">
        
        {/* ============================================================== */}
        {/* HEADER: Centered Modern Headline with Warm Gifting Delight      */}
        {/* ============================================================== */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          
          {/* Live 2026 Badge Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 shadow-2xs">
            <span className="live-pulse">
              <span className="bg-[#0E679C]" />
              <span className="bg-[#0E679C]" />
            </span>
            <span className="text-[11px] font-bold tracking-tight text-neutral-800">
              Direct Bengaluru Factory Atelier &bull; Corporate Gifting 2026 Edit
            </span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
              180+ Ready SKUs
            </span>
          </div>

          {/* Master 2026 Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#0F172A] tracking-[-0.035em] leading-[1.08]">
            Thoughtfully curated corporate gifting,{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0E679C] via-[#0284C7] to-[#F5B800]">
              engineered for memorable brands.
            </span>
          </h1>

          {/* Engaging Subline */}
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
            From VIP executive tech hampers to engineered laptop carrywear. Custom branded in-house to your Pantone specs and delivered seamlessly to enterprise teams across India.
          </p>

          {/* Modern CTA Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onExploreCollection}
              className="px-7 py-3.5 modern-primary-button text-xs sm:text-sm flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Explore 180+ Products</span>
              <ArrowRight className="w-4 h-4 text-[#F5B800] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onRequestQuote}
              className="px-6 py-3.5 modern-secondary-button text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#0E679C]" />
              <span>Request Custom RFQ</span>
            </button>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-200/90 transition-all shadow-2xs hover:shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp B2B Desk</span>
            </a>
          </div>

        </div>

        {/* ============================================================== */}
        {/* FLAGSHIP INTERACTIVE STAGE (1 + 3 Synthesis: Studio Luxe + Delight) */}
        {/* ============================================================== */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Segmented Luxury Category Switcher Tabs */}
          <div className="flex items-center justify-center gap-2 mb-4 overflow-x-auto p-1.5 bg-white/80 backdrop-blur-md rounded-2xl border border-neutral-200 shadow-xs max-w-2xl mx-auto scrollbar-none">
            {heroShowcaseItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  idx === activeIndex
                    ? 'bg-[#0F172A] text-white shadow-sm font-bold scale-[1.02]'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80'
                }`}
              >
                <span>{item.tabLabel}</span>
              </button>
            ))}
          </div>

          {/* Master Studio Stage Card */}
          <div className="relative rounded-3xl bg-white border border-neutral-200/90 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
            
            {/* Subtle stage ambient radial light */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-[#0E679C]/8 via-[#F5B800]/6 to-transparent blur-3xl pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Side: Staged Product Visual with Floating Goody/Giftly Pills */}
              <div className="lg:col-span-6 relative">
                
                {/* Floating Social Proof Bubble (Top-Left) */}
                <div className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-md">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-[11px] font-semibold text-neutral-800 line-clamp-1">
                    {activeItem.socialProof.quote}
                  </div>
                </div>

                {/* Floating Stock/SLA Tag (Bottom-Right) */}
                <div className="hidden sm:flex absolute -bottom-3 -right-3 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-md text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{activeItem.leadTime} &bull; Factory Dispatch</span>
                </div>

                {/* Product Visual Container with Ambient Soft Staging */}
                <div 
                  onClick={() => setActiveProductModal(activeItem.product)}
                  className="relative aspect-square sm:aspect-[4/3] rounded-2xl bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] border border-neutral-200/80 overflow-hidden cursor-pointer group flex items-center justify-center p-6 shadow-inner"
                >
                  <img
                    src={activeItem.image}
                    alt={activeItem.headline}
                    className="max-h-full max-w-full object-contain rounded-xl drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E679C] text-[10px] font-bold uppercase tracking-wider shadow-2xs border border-neutral-200">
                      {activeItem.categoryBadge}
                    </span>
                  </div>

                  {/* Hover Quick View Trigger */}
                  <div className="absolute inset-0 bg-neutral-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                    <span className="px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-xl flex items-center gap-1.5 border border-neutral-200">
                      <Eye className="w-3.5 h-3.5 text-[#0E679C]" />
                      <span>Quick View Specifications</span>
                    </span>
                  </div>

                  {/* Bottom SKU Pill */}
                  <div className="absolute bottom-3 left-3 pointer-events-none">
                    <span className="text-[10px] font-mono font-semibold text-neutral-600 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-200">
                      SKU: {activeItem.product.code}
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Side: High-End Curated Product Details & Ordering Specs */}
              <div className="lg:col-span-6 text-left space-y-4">
                
                {/* Product Title & Brand Badge */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0E679C]">
                      {activeItem.product.brand}
                    </span>
                    <span className="text-neutral-300">&bull;</span>
                    <span className="text-xs font-medium text-neutral-500">
                      Bengaluru In-House Atelier
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    {activeItem.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 line-clamp-2">
                    {activeItem.tagline}
                  </p>
                </div>

                {/* Specs Pill List (What's Inside / Key Features) */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                    Key Features &amp; Inclusions:
                  </div>
                  <div className="space-y-1.5">
                    {activeItem.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E679C] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Parameters Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs">
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase font-bold tracking-wider">Min. Order</span>
                    <span className="font-bold text-neutral-800">{activeItem.moq}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase font-bold tracking-wider">Turnaround</span>
                    <span className="font-bold text-emerald-700">{activeItem.leadTime}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase font-bold tracking-wider">Finishing</span>
                    <span className="font-bold text-[#0E679C] truncate block">{activeItem.craft}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => addToQuote(activeItem.product, 50)}
                    className="flex-1 py-3 px-5 rounded-full bg-[#0E679C] hover:bg-[#0A4E78] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg cursor-pointer text-center"
                  >
                    Add 50 sets to RFQ Quote
                  </button>

                  <button
                    onClick={() => setActiveProductModal(activeItem.product)}
                    className="py-3 px-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-semibold border border-neutral-200/90 transition-colors shadow-2xs cursor-pointer"
                  >
                    View Specs
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* 4 Feature Value Badges Under the Stage */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200 shadow-2xs text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900">
                <ShieldCheck className="w-4 h-4 text-[#0E679C]" />
                <span>5-Stage QC</span>
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">Zero-defect factory SLA</div>
            </div>

            <div className="p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200 shadow-2xs text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900">
                <Award className="w-4 h-4 text-[#0E679C]" />
                <span>1-Yr Warranty</span>
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">On all executive bags</div>
            </div>

            <div className="p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200 shadow-2xs text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900">
                <Sparkles className="w-4 h-4 text-[#0E679C]" />
                <span>Free 3D Proof</span>
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">Digital sample in 24 hrs</div>
            </div>

            <div className="p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200 shadow-2xs text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900">
                <Truck className="w-4 h-4 text-[#0E679C]" />
                <span>Pan-India SLA</span>
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">Direct employee dispatch</div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
