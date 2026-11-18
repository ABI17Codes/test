'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  ShieldCheck, 
  ChevronRight, 
  Award, 
  Zap, 
  Lock, 
  BatteryCharging, 
  ArrowRight,
  Droplets,
  Laptop,
  CheckCircle2,
  Truck,
  Sparkles,
  Factory,
  Layers,
  Check
} from 'lucide-react';
import { PRODUCTS, Product } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

export default function BagsPage() {
  const [selectedBrand, setSelectedBrand] = useState<'all' | 'Ninja Gear' | 'ADMA London'>('all');
  const [bagTypeFilter, setBagTypeFilter] = useState<string>('all');
  const [allBags, setAllBags] = useState<Product[]>(() =>
    PRODUCTS.filter((p) => p.category === 'bags')
  );

  useEffect(() => {
    fetch('/api/products?category=bags')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && Array.isArray(data.products) && data.products.length > 0) {
          setAllBags(data.products);
        }
      })
      .catch(() => {});
  }, []);

  const filteredBags = allBags.filter((bag) => {
    const matchesBrand = selectedBrand === 'all' || bag.brand === selectedBrand;
    const nameLower = bag.name.toLowerCase();
    const descLower = bag.description.toLowerCase();
    const tagsLower = bag.tags.map(t => t.toLowerCase()).join(' ');

    const matchesType =
      bagTypeFilter === 'all' ||
      (bagTypeFilter === 'antitheft' && (tagsLower.includes('antitheft') || descLower.includes('anti-theft') || descLower.includes('antitheft'))) ||
      (bagTypeFilter === 'laptop' && (nameLower.includes('backpack') || nameLower.includes('boxer') || nameLower.includes('volvo') || nameLower.includes('smart') || nameLower.includes('jio') || nameLower.includes('inspire') || nameLower.includes('vip') || nameLower.includes('nexa'))) ||
      (bagTypeFilter === '17inch' && (nameLower.includes('volvo') || nameLower.includes('boxer') || descLower.includes('17') || descLower.includes('15.6'))) ||
      (bagTypeFilter === 'waterproof' && (descLower.includes('rain cover') || descLower.includes('water') || tagsLower.includes('weather') || descLower.includes('weather'))) ||
      (bagTypeFilter === 'duffle' && (nameLower.includes('duffle') || nameLower.includes('gym') || nameLower.includes('overnighter') || nameLower.includes('shine'))) ||
      (bagTypeFilter === 'sleeve' && (nameLower.includes('sleeve') || nameLower.includes('sling') || nameLower.includes('pouch') || nameLower.includes('waist') || nameLower.includes('strings'))) ||
      (bagTypeFilter === 'travel' && (nameLower.includes('rucksack') || nameLower.includes('kamiliant') || nameLower.includes('mountain') || nameLower.includes('volvo')));
    return matchesBrand && matchesType;
  });

  return (
    <div className="py-10 bg-gradient-to-b from-[#F5F0E8] via-[#F5F0E8] to-[#F5F0E8] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="text-left space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#69635C]">
            <Link href="/" className="hover:text-[#211D1A]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#A98554] font-semibold">Backpack Manufacturing (Primary Focus)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D8] border border-[#C5A16D] shadow-2xs">
            <Factory className="w-3.5 h-3.5 text-[#A98554]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#A98554]">
              GLOBRANDS LIFESTYLE PVT. LTD. &bull; DIRECT FACTORY BACKPACK MANUFACTURERS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#211D1A] tracking-tight">
            Direct Factory Backpack Manufacturing &amp;{' '}
            <span className="brand-gradient-text">
              Corporate Carrywear
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#69635C] max-w-4xl font-normal leading-relaxed">
            <strong className="text-[#211D1A]">Globrands Lifestyle Pvt. Ltd.</strong> is India&apos;s premier direct factory backpack manufacturer, operating a specialized production atelier in Bengaluru. Unlike third-party gifting resellers, we manufacture 32 proprietary backpack and carrywear models in-house under our registered brands—<strong>Ninja Gear Original</strong> and <strong>ADMA London</strong>—backed by our unconditional 1-Year Direct Factory Replacement Warranty.
          </p>
        </div>

        {/* Dual Brand Selector Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Ninja Gear Card */}
          <div 
            onClick={() => setSelectedBrand(selectedBrand === 'Ninja Gear' ? 'all' : 'Ninja Gear')}
            className={`p-6 sm:p-8 rounded-3xl cursor-pointer transition-all border flex flex-col justify-between group ${
              selectedBrand === 'Ninja Gear'
                ? 'bg-white border-[#A98554] shadow-xl ring-2 ring-[#A98554]/30'
                : 'bg-white border-[#EAE3D8] hover:border-amber-400/70 shadow-xs hover:shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-14 p-2 bg-white rounded-xl border border-slate-200 flex items-center justify-center">
                  <img
                    src="/catalog/brands/ninja_gear_logo.jpg"
                    alt="Ninja Gear Original Corporate Laptop Bags"
                    className="max-h-full max-w-full object-contain rounded"
                  />
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Tactical &bull; Antitheft &bull; USB
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#211D1A]">
                NINJA GEAR ORIGINAL
              </h3>
              <p className="text-xs text-[#69635C] mt-2 leading-relaxed">
                Engineered with concealed anti-theft zipper geometry, quick-access security pockets, external USB fast-charging ports, suspended 17&quot; laptop cradles, and tear-resistant ballistic poly fabric.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE3D8] flex items-center justify-between text-xs font-bold text-[#A98554]">
              <span>{selectedBrand === 'Ninja Gear' ? 'Showing Ninja Gear Range (12 Models) ✓' : 'Filter Ninja Gear Bags'}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#C5A16D]" />
            </div>
          </div>

          {/* ADMA London Card */}
          <div 
            onClick={() => setSelectedBrand(selectedBrand === 'ADMA London' ? 'all' : 'ADMA London')}
            className={`p-6 sm:p-8 rounded-3xl cursor-pointer transition-all border flex flex-col justify-between group ${
              selectedBrand === 'ADMA London'
                ? 'bg-white border-[#A98554] shadow-xl ring-2 ring-[#A98554]/30'
                : 'bg-white border-[#EAE3D8] hover:border-sky-400/70 shadow-xs hover:shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-14 p-2 bg-white rounded-xl border border-slate-200 flex items-center justify-center">
                  <img
                    src="/catalog/brands/adma_london_logo.jpg"
                    alt="ADMA London A Real Companion Corporate Bags"
                    className="max-h-full max-w-full object-contain rounded"
                  />
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Executive &bull; Weatherproof &bull; Travel
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#211D1A]">
                ADMA LONDON
              </h3>
              <p className="text-xs text-[#69635C] mt-2 leading-relaxed">
                &ldquo;A Real Companion&rdquo; for modern enterprise travel. Features integrated deployable waterproof rain covers, front RFID-blocking pockets, 38L–40L jumbo compartments, and isolated shoe sacks.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE3D8] flex items-center justify-between text-xs font-bold text-[#A98554]">
              <span>{selectedBrand === 'ADMA London' ? 'Showing ADMA London Range (20 Models) ✓' : 'Filter ADMA London Bags'}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#C5A16D]" />
            </div>
          </div>

        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-4 rounded-3xl bg-white border border-[#EAE3D8] shadow-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full lg:w-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: `All In-House Bags (${allBags.length})` },
              { id: 'laptop', label: 'Laptop Backpacks' },
              { id: '17inch', label: '17" & 15.6" Laptop Holders' },
              { id: 'antitheft', label: 'Antitheft & USB Fast-Charge' },
              { id: 'waterproof', label: 'Rain Cover & Weatherproof' },
              { id: 'duffle', label: 'Duffles & Gym Bags' },
              { id: 'sleeve', label: 'Sleeves, Slings & Pouches' },
              { id: 'travel', label: 'Expedition Rucksacks' }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setBagTypeFilter(type.id)}
                className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
                  bagTypeFilter === type.id
                    ? 'bg-[#211D1A] text-white shadow-xs'
                    : 'bg-[#F5F0E8] hover:bg-slate-200/80 text-[#69635C]'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold shrink-0">
            <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              1-Year Factory Warranty
            </span>
            <Link
              href="/catalog-viewer?type=bags"
              className="text-[#A98554] hover:underline font-bold"
            >
              Open Bag PDF Catalogue &rarr;
            </Link>
          </div>
        </div>

        {/* Bags Grid: 32 Studio Models */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredBags.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Factory Production & Quality Protocol Section */}
        <section className="pt-12 pb-6 border-t border-[#EAE3D8] text-left space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#A98554] text-[11px] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>In-House Production Protocol &bull; Zero Defects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#211D1A]">
              5-Stage Quality Control &amp; Direct Factory Assurance
            </h2>
            <p className="text-xs sm:text-sm text-[#69635C] leading-relaxed">
              At <strong className="text-[#211D1A]">Globrands Lifestyle Pvt. Ltd.</strong>, every backpack passes through 5 distinct quality checkpoints before leaving our Bengaluru atelier for dispatch across India.
            </p>
          </div>

          {/* 5 QC Stages from PDF Page 36 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] shadow-2xs space-y-2">
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 font-bold text-xs flex items-center justify-center">
                01
              </div>
              <h4 className="text-xs font-bold text-[#211D1A]">Raw Material Inspection</h4>
              <p className="text-[11px] text-[#69635C] leading-relaxed">
                Comprehensive inspection of raw fabrics, zippers, buckles, and webbing prior to production.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] shadow-2xs space-y-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center">
                02
              </div>
              <h4 className="text-xs font-bold text-[#211D1A]">Cutting Inspection</h4>
              <p className="text-[11px] text-[#69635C] leading-relaxed">
                Verification of panel dimensions and client size requirements prior to sewing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] shadow-2xs space-y-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center">
                03
              </div>
              <h4 className="text-xs font-bold text-[#211D1A]">Stitching Quality Check</h4>
              <p className="text-[11px] text-[#69635C] leading-relaxed">
                Cross-checking stitch tension, seam alignment, and bar-tack reinforcement at load-bearing points.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] shadow-2xs space-y-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center">
                04
              </div>
              <h4 className="text-xs font-bold text-[#211D1A]">QC Manager Inspection</h4>
              <p className="text-[11px] text-[#69635C] leading-relaxed">
                Dedicated QC Manager sign-off ensuring zero defect status before movement to packing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] shadow-2xs space-y-2">
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-700 font-bold text-xs flex items-center justify-center">
                05
              </div>
              <h4 className="text-xs font-bold text-[#211D1A]">Factory Manager Final Clearance</h4>
              <p className="text-[11px] text-[#69635C] leading-relaxed">
                Oversight of safe packing and final audit ensuring 100% compliance before nationwide dispatch.
              </p>
            </div>
          </div>

          {/* Quick FAQ / RFQ Strip */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0B132B] to-[#211D1A] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
            <div className="space-y-1">
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Factory className="w-4 h-4 text-[#C5A16D]" />
                <span>Need custom branded backpacks directly from our Bengaluru manufacturing unit?</span>
              </div>
              <div className="text-xs text-slate-300">
                Tiered volume slabs from 50 to 50,000+ units &bull; 1-Year Direct Factory Replacement Warranty &bull; Free 3D digital mockups
              </div>
            </div>

            <Link
              href="/quote"
              className="px-6 py-3 rounded-xl bg-[#C5A16D] hover:bg-[#D49B27] text-slate-950 text-xs font-bold transition-all shadow-sm shrink-0"
            >
              Request Factory Bulk Quote
            </Link>
          </div>

        </section>

      </div>
    </div>
  );
}
