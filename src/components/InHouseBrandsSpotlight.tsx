"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Layers } from "lucide-react";
import { IN_HOUSE_BRANDS_DATA, COMPANY_INFO } from "../data/siteContent";

export const InHouseBrandsSpotlight: React.FC = () => {
  const { header, brands } = IN_HOUSE_BRANDS_DATA;
  const { ninjaGear, admaLondon } = brands;

  return (
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 bg-white text-[#1E293B] text-left border-b border-[#DBEAFE]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#DBEAFE]">
          <div className="space-y-2.5 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[11px] uppercase tracking-wider font-extrabold text-[#0B4F82]">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{header.tag}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#0F172A] font-sans uppercase leading-tight">
              {header.title}
            </h2>
            <p className="text-sm sm:text-[15px] text-[#475569] font-normal leading-relaxed">
              At{" "}
              <strong className="text-[#0B4F82]">
                {COMPANY_INFO.legalName}
              </strong>
              , we own, design, and manufacture our registered backpack brands (
              <strong className="text-[#0F172A]">Ninja Gear Original</strong>{" "}
              &amp; <strong className="text-[#0F172A]">ADMA London</strong>) in
              Bengaluru — backed by our {COMPANY_INFO.warrantyText} and
              in-house{" "}
              <strong className="text-[#0B4F82]">
                DTF Printing, Embroidery &amp; Screen Printing
              </strong>
              .
            </p>
          </div>

          <Link
            href="/bags"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-bold uppercase tracking-wider transition-all self-start lg:self-end group shadow-xs whitespace-nowrap"
          >
            <span>Open In-House Brand Store (32 Models)</span>
            <ArrowRight className="w-4 h-4 text-[#FDE047] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ================================================================
            PART 1: BRAND STORE EDITORIAL SHOWCASE (ADMA LONDON PEDESTAL & MODEL LOOKBOOK)
            Partly integrated from the official ADMA London Brand Store aesthetic
        ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left 7 Cols: Official ADMA London Pedestal Collection Banner */}
          <Link
            href="/bags?brand=ADMA+London"
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-[#F8F6F2] border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="relative w-full aspect-[2/1] overflow-hidden bg-[#F8F6F2]">
              <img
                src="/images/brand-store/adma-pedestal-collection.png"
                alt="ADMA London — Our Backpack Collection on Studio Pedestals"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            <div className="px-5 py-3.5 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0B4F82] text-white text-[10px] font-extrabold uppercase tracking-wider">
                  Official Brand Store Lookbook
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                  ADMA London Pedestal Collection — Laptop, Commuter &amp; Gym Duffles
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0B4F82] group-hover:text-[#D97706] transition-colors">
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          {/* Right 5 Cols: Official Pastel-Blue Studio Model Lookbook Duo */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-2 gap-3.5 flex-1">
              <Link
                href="/bags?brand=ADMA+London"
                className="group relative rounded-2xl overflow-hidden bg-[#DCEBF7] border border-[#BFDBFE] shadow-2xs hover:shadow-md transition-all"
              >
                <img
                  src="/images/brand-store/model-studio-blue-1.png"
                  alt="ADMA London Quilted Executive Backpack — Studio Model Look 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-xs text-[#0F172A] text-[10px] font-extrabold shadow-2xs">
                  Executive Quilted Pack
                </span>
              </Link>

              <Link
                href="/bags?brand=ADMA+London"
                className="group relative rounded-2xl overflow-hidden bg-[#DCEBF7] border border-[#BFDBFE] shadow-2xs hover:shadow-md transition-all"
              >
                <img
                  src="/images/brand-store/model-studio-blue-2.png"
                  alt="ADMA London Quilted Executive Backpack — Studio Model Look 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-xs text-[#0F172A] text-[10px] font-extrabold shadow-2xs">
                  Ergonomic Daily Carry
                </span>
              </Link>
            </div>

            {/* Clean Brand Store Caption Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#EFF6FF] via-[#F8FAFC] to-[#FFFBEB] border border-[#BFDBFE] flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-[#D97706] block">
                  DESIGNED FOR WORK &bull; LIFE &bull; TRAVEL
                </span>
                <p className="text-xs sm:text-[13px] font-bold text-[#0F172A]">
                  Designed for modern corporate journeys with comfort, style &amp; custom logo branding.
                </p>
              </div>
              <Link
                href="/bags"
                className="px-3.5 py-2 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-[11px] font-extrabold uppercase tracking-wider shrink-0 transition-colors"
              >
                View Models
              </Link>
            </div>
          </div>
        </div>

        {/* ================================================================
            PART 2: TWO SIDE-BY-SIDE IN-HOUSE BRAND STORE CARDS (NINJA GEAR & ADMA LONDON)
            Featuring Official "CARRY SMART — WORK STUDY EXPLORE" Feature Banners + Studio Models
        ================================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* BRAND 1: NINJA GEAR ORIGINAL */}
          <div className="rounded-3xl bg-gradient-to-b from-[#FFFDF7] to-[#FEF9E7] border-2 border-[#FDE68A] p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-5">
              {/* Brand Header */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#FDE68A]">
                <div className="flex items-center gap-3.5">
                  <div className="h-13 w-22 rounded-xl bg-white border border-[#FCD34D] p-1.5 flex items-center justify-center shadow-2xs shrink-0">
                    <img
                      src={ninjaGear.logo}
                      alt={`${ninjaGear.name} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B45309] font-extrabold block">
                      {ninjaGear.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0F172A] tracking-tight">
                      {ninjaGear.name}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#F59E0B]/40 text-[#92400E] text-[10px] font-extrabold uppercase whitespace-nowrap">
                  12 Models
                </span>
              </div>

              {/* Official "WORK STUDY EXPLORE — NINJA GEAR" Feature Banner */}
              <Link
                href={ninjaGear.cta.href}
                className="block relative rounded-2xl overflow-hidden bg-white border border-[#FDE68A] shadow-2xs group"
              >
                <img
                  src="/images/brand-store/feature-ninja-work-study.png"
                  alt="Ninja Gear — Carry Smart: Work, Study, Explore"
                  className="w-full aspect-[2/1] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </Link>

              {/* 3 Supporting Studio Models Row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    image: ninjaGear.flagship.image,
                    label: "BG-BOXER",
                    name: "Boxer Anti-Theft"
                  },
                  ...ninjaGear.supportingImages.slice(0, 2).map((item) => ({
                    image: item.image,
                    label: (item as any).label,
                    name: item.alt.replace("Ninja Gear ", "")
                  }))
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={ninjaGear.cta.href}
                    className="rounded-xl bg-white border border-[#FDE68A] p-2.5 flex flex-col items-center justify-between group shadow-2xs hover:shadow-sm transition-all"
                  >
                    <div className="h-24 w-full flex items-center justify-center p-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full text-center pt-1.5 border-t border-amber-100">
                      <span className="text-[9px] font-mono font-extrabold text-[#B45309] block">
                        {item.label}
                      </span>
                      <span className="text-[11px] font-extrabold text-[#0F172A] block leading-tight mt-0.5">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                {ninjaGear.description}
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-2.5">
                {ninjaGear.features.map((feat, idx) => {
                  const IconComponent = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white border border-[#FDE68A] flex items-center gap-2 shadow-2xs"
                    >
                      <IconComponent className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span className="text-xs font-bold text-[#0F172A]">
                        {feat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-1">
              <Link
                href={ninjaGear.cta.href}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-xs group"
              >
                <span>{ninjaGear.cta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* BRAND 2: ADMA LONDON */}
          <div className="rounded-3xl bg-gradient-to-b from-[#F8FBFF] to-[#EAF3FE] border-2 border-[#BFDBFE] p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-5">
              {/* Brand Header */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#BFDBFE]">
                <div className="flex items-center gap-3.5">
                  <div className="h-13 w-22 rounded-xl bg-white border border-[#93C5FD] p-1.5 flex items-center justify-center shadow-2xs shrink-0">
                    <img
                      src={admaLondon.logo}
                      alt={`${admaLondon.name} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0B4F82] font-extrabold block">
                      {admaLondon.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0F172A] tracking-tight">
                      {admaLondon.name}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DBEAFE] border border-[#93C5FD] text-[#0B4F82] text-[10px] font-extrabold uppercase whitespace-nowrap">
                  20 Models
                </span>
              </div>

              {/* Official "WORK STUDY EXPLORE — ADMA LONDON" Feature Banner */}
              <Link
                href={admaLondon.cta.href}
                className="block relative rounded-2xl overflow-hidden bg-white border border-[#BFDBFE] shadow-2xs group"
              >
                <img
                  src="/images/brand-store/feature-adma-work-study.png"
                  alt="ADMA London — Carry Smart: Work, Study, Explore"
                  className="w-full aspect-[2/1] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </Link>

              {/* 3 Supporting Studio Models Row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    image: admaLondon.flagship.image,
                    label: "BG-VOLVO-2",
                    name: "Volvo 2.0 (38L)"
                  },
                  ...admaLondon.supportingImages.slice(0, 2).map((item) => ({
                    image: item.image,
                    label: (item as any).label,
                    name: item.alt.replace("ADMA London ", "")
                  }))
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={admaLondon.cta.href}
                    className="rounded-xl bg-white border border-[#BFDBFE] p-2.5 flex flex-col items-center justify-between group shadow-2xs hover:shadow-sm transition-all"
                  >
                    <div className="h-24 w-full flex items-center justify-center p-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full text-center pt-1.5 border-t border-blue-100">
                      <span className="text-[9px] font-mono font-extrabold text-[#0B4F82] block">
                        {item.label}
                      </span>
                      <span className="text-[11px] font-extrabold text-[#0F172A] block leading-tight mt-0.5">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                {admaLondon.description}
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-2.5">
                {admaLondon.features.map((feat, idx) => {
                  const IconComponent = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-2 shadow-2xs"
                    >
                      <IconComponent className="w-4 h-4 text-[#0B4F82] shrink-0" />
                      <span className="text-xs font-bold text-[#0F172A]">
                        {feat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-1">
              <Link
                href={admaLondon.cta.href}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-xs group"
              >
                <span>{admaLondon.cta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#FDE047] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* ================================================================
            PART 3: BRAND STORE EDITORIAL BENTO ROW (3-TILE LIFESTYLE & SMART STORAGE STRIP)
        ================================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Tile 1 (4 Cols): Carry Confidence Anywhere Model Editorial */}
          <Link
            href="/bags?brand=ADMA+London"
            className="md:col-span-4 group relative rounded-2xl overflow-hidden bg-[#EBE6DF] border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="h-[240px] sm:h-[260px] w-full overflow-hidden flex items-center justify-center bg-[#E7E1D8]">
              <img
                src="/images/brand-store/editorial-carry-confidence.png"
                alt="ADMA London — Carry Confidence Anywhere"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase font-extrabold text-[#D97706] block">
                  MINIMAL DESIGN &bull; MAXIMUM IMPACT
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                  Carry Confidence. Anywhere.
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0B4F82] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Tile 2 (4 Cols): Executive Office Desk Showcase */}
          <Link
            href="/bags?type=laptop"
            className="md:col-span-4 group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="h-[240px] sm:h-[260px] w-full overflow-hidden">
              <img
                src="/images/brand-store/editorial-office-desk.png"
                alt="ADMA London Executive Office & Laptop Backpack"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase font-extrabold text-[#0B4F82] block">
                  OFFICE &bull; IT TEAMS &bull; ONBOARDING
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                  Built for Modern Workspaces
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0B4F82] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>

          {/* Tile 3 (4 Cols): Spacious & Organized Multi-Compartment Interior */}
          <Link
            href="/bags"
            className="md:col-span-4 group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="h-[240px] sm:h-[260px] w-full overflow-hidden bg-[#F8FAFC]">
              <img
                src="/images/brand-store/feature-spacious-organized.jpg"
                alt="Spacious & Organized — Smart Compartments Keep Everything in Place"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase font-extrabold text-[#D97706] block">
                  SMART MULTI-COMPARTMENT STORAGE
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                  Spacious &amp; Neatly Organized
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0B4F82] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
