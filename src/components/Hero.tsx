'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Briefcase, Gift, CheckCircle2, Printer, Phone } from 'lucide-react';
import { HERO_CONTENT, COMPANY_INFO } from '../data/siteContent';

export const Hero: React.FC = () => {
  const {
    badge,
    pretitle,
    image,
    imageAlt,
    imageBadge,
    primaryCta,
    secondaryCta,
    stats
  } = HERO_CONTENT;

  return (
    <section className="relative bg-gradient-to-br from-[#F0F7FF] via-[#FFFFFF] to-[#FEF9E7] text-[#1E293B] overflow-hidden border-b border-[#DBEAFE]">
      {/* Soft Pastel Blue & Warm Gold Ambient Accents (Matches Globrands Blue & Yellow Logo) */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#DBEAFE]/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FEF3C7]/70 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Two-Column Brand Store Hero Container */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-10 py-10 sm:py-14 lg:py-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column (6 cols): Explicitly Highlights BOTH Primary & Secondary Business */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start space-y-5 text-left order-2 lg:order-1">

            {/* Company Identity Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BFDBFE] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B4F82]">
                {pretitle}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#475569]">
                {badge}
              </span>
            </div>

            {/* Dual Business Focus Badges (Primary & Secondary Clearly Visible at First Glance) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
              <Link
                href="/brands"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0B4F82] text-white shadow-sm hover:bg-[#093E68] transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E5A93C] text-[#0B4F82] flex items-center justify-center shrink-0 font-bold">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#FDE68A] font-bold block">
                    1. Primary Business
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-tight block">
                    Backpack Manufacturing
                  </span>
                </div>
              </Link>

              <a
                href="#corporate-gifting"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FFFBEB] border-2 border-[#E5A93C] text-[#1E293B] shadow-sm hover:bg-[#FEF3C7] transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0B4F82] text-white flex items-center justify-center shrink-0">
                  <Gift className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#B45309] font-bold block">
                    2. Secondary Business
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-tight text-[#0B4F82] block">
                    A-to-Z Corporate Gifting
                  </span>
                </div>
              </a>
            </div>

            {/* Main Headline with "Manufacturing" & "Corporate Gifting" Highlighted */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight leading-[1.12] text-[#0F172A] font-sans">
              Direct{' '}
              <span className="px-2.5 py-0.5 rounded-lg bg-[#DBEAFE] text-[#0B4F82] border border-[#93C5FD] inline-block">
                Backpack Manufacturing
              </span>{' '}
              &amp; Complete{' '}
              <span className="px-2.5 py-0.5 rounded-lg bg-[#FEF3C7] text-[#B45309] border border-[#FCD34D] inline-block mt-1">
                Corporate Gifting
              </span>
            </h1>

            {/* Clear, Plain-English Description (DTF, Embroidery, Screen Printing) */}
            <p className="text-sm sm:text-base text-[#334155] font-normal leading-relaxed">
              We manufacture our own registered backpack brands (<strong className="text-[#0B4F82]">Ninja Gear Original</strong> &amp; <strong className="text-[#0B4F82]">ADMA London</strong>) in Bengaluru, supply leading partner brands (<strong className="text-[#0F172A]">Skybags, Arctic Hunter, Swiss Military</strong>), and deliver A-to-Z corporate gifts customized with in-house{' '}
              <strong className="text-[#0B4F82] underline decoration-[#E5A93C] decoration-2">DTF Printing, Embroidery &amp; Screen Printing</strong>.
            </p>

            {/* Simple Branding Method Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B4F82] text-xs font-bold">
                <Printer className="w-3.5 h-3.5 text-[#E5A93C]" />
                DTF Printing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B4F82] text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0B4F82]" />
                Computerized Embroidery
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B4F82] text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0B4F82]" />
                Screen Printing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] border border-[#FDE047] text-[#854D0E] text-xs font-bold">
                1-Year Backpack Warranty
              </span>
            </div>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md group whitespace-nowrap"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#FDE047] group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E5A93C] hover:bg-[#D4952A] text-[#0F172A] text-xs font-extrabold uppercase tracking-wider transition-all shadow-md whitespace-nowrap"
              >
                <span>{secondaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#0F172A]" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] text-[#0B4F82] text-xs font-bold transition-all whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>{COMPANY_INFO.contact.corporatePhone}</span>
              </a>
            </div>

          </div>

          {/* Right Column (6 cols): Bright High-Contrast Brand Store Showcase (Zero Dark Background!) */}
          <div className="lg:col-span-6 flex flex-col gap-3 order-1 lg:order-2 w-full">
            <div className="relative w-full h-[340px] sm:h-[400px] lg:h-[430px] rounded-2xl overflow-hidden shadow-lg border-2 border-[#DBEAFE] bg-gradient-to-b from-[#F4F9FF] via-white to-[#E0EEFE] group flex items-center justify-center">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-contain object-center p-2 group-hover:scale-103 transition-transform duration-500 ease-out"
                fetchPriority="high"
              />

              {/* Top Brand Store Pills */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-[#0B4F82] text-white font-bold text-[10px] uppercase tracking-wider shadow-xs">
                  In-House Manufactured Models
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FCD34D] text-[#92400E] font-bold text-[10px] uppercase tracking-wider shadow-xs">
                  Ninja Gear &bull; ADMA London
                </span>
              </div>

              {/* Bottom High-Contrast Light Badge */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between bg-white/95 backdrop-blur-md border border-[#DBEAFE] px-4 py-2 rounded-xl shadow-sm">
                <span className="text-[#0B4F82] font-bold text-[11px] tracking-wide">
                  {imageBadge}
                </span>
                <Link
                  href="/bags"
                  className="text-[11px] font-extrabold text-[#D97706] hover:underline pointer-events-auto"
                >
                  View All 32 Models &rarr;
                </Link>
              </div>
            </div>

            {/* Quick Secondary Business Preview Strip right below Hero Image */}
            <div className="grid grid-cols-4 gap-2.5 bg-white p-2.5 rounded-xl border border-[#DBEAFE] shadow-2xs">
              {[
                { label: 'Welcome Kits', img: '/catalog/crops/hgs_h74.jpg', href: '#corporate-gifting' },
                { label: 'Drinkware', img: '/catalog/crops/hgs_h118_vacuum.jpg', href: '#corporate-gifting' },
                { label: 'Trophies & Awards', img: '/images/gifting-categories/trophy-1.jpg', href: '#corporate-gifting' },
                { label: 'Apparels & Trolleys', img: '/images/gifting-categories/trolley-1.jpg', href: '#corporate-gifting' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2 p-1.5 rounded-lg bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-[#E2E8F0] transition-colors group"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-9 h-9 rounded-md object-cover shrink-0 bg-white border border-slate-200"
                  />
                  <span className="text-[10px] font-bold text-[#1E293B] group-hover:text-[#0B4F82] leading-tight line-clamp-2">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Summary Bar (High-Contrast Light Cards) */}
        <div className="mt-10 pt-6 border-t border-[#DBEAFE] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all ${
                stat.highlight
                  ? 'bg-white border-[#93C5FD] shadow-2xs'
                  : 'bg-[#F8FAFC] border-[#E2E8F0]'
              }`}
            >
              <div className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#0B4F82]">
                {stat.category}
              </div>
              <div className="text-sm font-extrabold text-[#0F172A] mt-0.5">
                {stat.title}
              </div>
              <div className="text-xs text-[#475569] mt-0.5">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
