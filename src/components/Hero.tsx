'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Gift,
  CheckCircle2,
  Printer,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { HERO_CONTENT } from '../data/siteContent';

const AUTOPLAY_INTERVAL_MS = 4500;

export const Hero: React.FC = () => {
  const {
    badge,
    pretitle,
    primaryCta,
    secondaryCta,
    tertiaryCta,
    slides,
    giftingStrip
  } = HERO_CONTENT;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Autoplay with smooth progress bar
  useEffect(() => {
    if (isPaused) return;
    const stepMs = 50;
    const increment = (stepMs / AUTOPLAY_INTERVAL_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          setCurrentSlide((s) => (s + 1) % totalSlides);
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides, currentSlide]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  // Mobile Touch / Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const deltaX = touchStartX.current - touchEndX.current;
    if (Math.abs(deltaX) > 45) {
      if (deltaX > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative bg-gradient-to-b from-[#FFFFFF] via-[#FAFBFD] to-[#F2F7FC] text-[#0F172A] overflow-hidden border-b border-slate-200/80"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Globrands Lifestyle Featured Manufacturing & Corporate Gifting Showcase"
    >
      {/* Subtle Ambient Studio Glows */}
      <div className="absolute -top-28 right-1/4 w-[600px] h-[600px] bg-[#E0F2FE]/45 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-28 left-8 w-[520px] h-[520px] bg-[#FEF3C7]/45 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Two-Column Hero Container (Independent Column Boundaries & Balanced Bottom Transition) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-7 sm:pt-9 lg:pt-11 pb-14 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* ================================================================
              LEFT SECTION (5 cols / ~42%): Brand Authority, Typography & CTAs
          ================================================================ */}
          <div className="lg:col-span-5 min-w-0 w-full max-w-full overflow-hidden flex flex-col justify-center items-start space-y-4 sm:space-y-5 text-left order-1 lg:pr-2">

            {/* 1. Single-Line Horizontal Company Information Badge on Desktop */}
            <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#D97706] shrink-0" />
              <span className="text-[10.5px] xl:text-[11px] font-extrabold uppercase tracking-[0.05em] text-[#0B4F82] whitespace-nowrap">
                {pretitle}
              </span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <span className="text-[10px] xl:text-[10.5px] font-bold uppercase tracking-[0.04em] text-[#475569] whitespace-nowrap">
                {badge}
              </span>
            </div>

            {/* 2. Business Category Indicators (Primary & Secondary Business) */}
            <div className="flex flex-wrap items-center gap-2.5 w-full">
              <Link
                href="/bags"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white shadow-xs transition-all"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                <span className="text-xs font-bold tracking-wide">
                  <span className="text-[#FDE047] font-semibold">Primary:</span> Backpack Manufacturing
                </span>
              </Link>

              <Link
                href="/gift-sets"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFFBEB] hover:bg-[#FEF3C7] border border-[#FCD34D] text-[#0F172A] shadow-2xs transition-all"
              >
                <Gift className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span className="text-xs font-bold tracking-wide">
                  <span className="text-[#B45309] font-semibold">Secondary:</span> A-to-Z Corporate Gifting
                </span>
              </Link>
            </div>

            {/* 3. Main Headline with Balanced Line Breaks & Distinct Typography Treatments */}
            <h1 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-black uppercase tracking-tight leading-[1.1] font-sans">
              <span className="text-[#0F172A] block">
                DIRECT <span className="text-[#0B4F82]">BACKPACK</span>
              </span>
              <span className="text-[#0B4F82] block mt-0.5">
                MANUFACTURING
              </span>
              <span className="text-[#0F172A] block mt-0.5">
                &amp; COMPLETE
              </span>
              <span className="relative inline-block text-[#D97706] mt-0.5">
                CORPORATE GIFTING
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-transparent rounded-full" />
              </span>
            </h1>

            {/* 4. Description */}
            <p className="text-sm sm:text-[15px] text-[#334155] font-normal leading-[1.62]">
              We manufacture our own registered backpack brands (
              <strong className="font-bold text-[#0F172A]">Ninja Gear Original</strong> &amp;{' '}
              <strong className="font-bold text-[#0F172A]">ADMA London</strong>) in Bengaluru, supply leading partner brands (
              <strong className="font-semibold text-[#0F172A]">Skybags, Arctic Hunter, Swiss Military</strong>), and deliver A-to-Z corporate gifts customized with in-house{' '}
              <strong className="font-bold text-[#0B4F82]">DTF Printing, Embroidery &amp; Screen Printing</strong>.
            </p>

            {/* 5. Service Highlights */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { label: 'DTF Printing', icon: Printer },
                { label: 'Computerized Embroidery', icon: Sparkles },
                { label: 'Screen Printing', icon: CheckCircle2 },
                { label: '1-Year Backpack Warranty', icon: ShieldCheck, gold: true }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                      item.gold
                        ? 'bg-[#FFFBEB] border-[#FDE68A] text-[#92400E]'
                        : 'bg-white border-slate-200/90 text-[#1E293B] shadow-2xs'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${item.gold ? 'text-[#D97706]' : 'text-[#0B4F82]'}`} />
                    <span>{item.label}</span>
                  </span>
                );
              })}
            </div>

            {/* 6. Three Horizontal Single-Line CTA Buttons on Desktop (Sized Strictly Within Left Column Boundary) */}
            <div className="flex flex-wrap xl:flex-nowrap items-center gap-2 pt-1.5 w-full max-w-full">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-1.5 h-10 sm:h-11 px-3 2xl:px-3.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-[10.5px] 2xl:text-[11px] font-extrabold uppercase tracking-[0.03em] transition-all shadow-xs hover:shadow-md group whitespace-nowrap shrink-0"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FDE047] group-hover:translate-x-0.5 transition-transform shrink-0" />
              </Link>

              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-1.5 h-10 sm:h-11 px-3 2xl:px-3.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-[10.5px] 2xl:text-[11px] font-extrabold uppercase tracking-[0.03em] transition-all shadow-xs hover:shadow-md group whitespace-nowrap shrink-0"
              >
                <span>{secondaryCta.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform shrink-0" />
              </Link>

              <Link
                href={tertiaryCta?.href || '/contact'}
                className="inline-flex items-center justify-center h-10 sm:h-11 px-3 2xl:px-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#0F172A] text-[10.5px] 2xl:text-[11px] font-bold uppercase tracking-[0.03em] transition-all shadow-2xs whitespace-nowrap shrink-0"
              >
                <span>{tertiaryCta?.label || 'Contact Us'}</span>
              </Link>
            </div>

          </div>

          {/* ================================================================
              RIGHT SECTION (7 cols / ~58%): Interactive 4-Slide Product Carousel
          ================================================================ */}
          <div className="lg:col-span-7 min-w-0 w-full max-w-full flex flex-col gap-3 order-2">

            {/* Main Carousel Stage */}
            <div
              className="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_14px_34px_-12px_rgba(11,79,130,0.09)] overflow-hidden select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Top Animated Progress Bar */}
              <div className="h-1 w-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0B4F82] via-[#0284C7] to-[#D97706] transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Slider Header Bar: All 4 Tabs Fully Visible + Prev/Next Arrows */}
              <div className="px-3.5 sm:px-5 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none py-0.5">
                  {slides.map((s, idx) => {
                    const active = idx === currentSlide;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => goToSlide(idx)}
                        className={`px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 shrink-0 ${
                          active
                            ? 'bg-[#0B4F82] text-white shadow-2xs'
                            : 'bg-slate-100/80 hover:bg-slate-200/70 text-[#475569]'
                        }`}
                      >
                        <span className={`font-mono text-[10px] ${active ? 'text-[#FDE047]' : 'text-slate-400'}`}>
                          {s.slideNumber}
                        </span>
                        <span>{s.tabLabel}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Prev / Next Arrow Buttons */}
                <div className="flex items-center gap-1.5 shrink-0 pl-1">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous Collection"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-[#0B4F82] text-[#0F172A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next Collection"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-[#0B4F82] text-[#0F172A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Horizontal Sliding Track (Compact & Identical Structure Across All 4 Slides) */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide) => {
                    const isFourGrid = slide.items.length === 4;
                    return (
                      <div
                        key={slide.id}
                        className={`w-full shrink-0 bg-gradient-to-br ${slide.themeBg} px-4 sm:px-5 py-3.5 flex flex-col justify-between`}
                      >
                        {/* Uniform Product Showcase Grid (Complete 2-Line Product Names — Zero Ellipsis Truncation!) */}
                        <div
                          className={`grid gap-2.5 sm:gap-3 items-stretch ${
                            isFourGrid ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'
                          }`}
                        >
                          {slide.items.map((item, i) => (
                            <Link
                              key={i}
                              href={slide.ctaHref}
                              className="group/card rounded-2xl bg-white border border-slate-200/85 hover:border-[#0B4F82]/45 p-2.5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
                            >
                              {/* Identical Centered Product Image Container Across All 4 Slides */}
                              <div className="h-[158px] sm:h-[176px] w-full rounded-xl bg-[#F8FAFC] flex items-center justify-center overflow-hidden p-2">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="max-h-full max-w-full object-contain drop-shadow-[0_6px_12px_rgba(15,23,42,0.09)] group-hover/card:scale-105 transition-transform duration-500"
                                />
                              </div>

                              {/* Complete Product Name & Category Label (Zero Truncation, Clean 2-Line Support) */}
                              <div className="w-full text-center pt-2 mt-1.5 border-t border-slate-100 min-h-[54px] flex flex-col justify-center">
                                <span className="text-[9.5px] font-bold text-[#D97706] uppercase tracking-wider block leading-tight">
                                  {item.tag}
                                </span>
                                <span className="text-[11.5px] sm:text-xs font-extrabold text-[#0F172A] block mt-0.5 leading-snug">
                                  {item.name}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Compact Bottom Collection Information Area (Tight Vertical Spacing & Clear Separation from Pagination/CTA) */}
                        <div className="mt-3 pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-3 text-left flex-1 min-w-0 pr-2">
                            {slide.brandLogo && (
                              <div className="h-10 w-14 rounded-xl bg-white border border-slate-200/90 p-1 shadow-2xs flex items-center justify-center shrink-0">
                                <img
                                  src={slide.brandLogo}
                                  alt={slide.brandBadge}
                                  className="max-h-full max-w-full object-contain"
                                />
                              </div>
                            )}
                            <div className="space-y-0.5 flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h2 className="text-sm sm:text-[15px] font-extrabold text-[#0F172A] tracking-tight">
                                  {slide.title}
                                </h2>
                                <span className="px-2 py-0.5 rounded-md bg-[#0B4F82]/10 text-[#0B4F82] text-[9.5px] font-extrabold uppercase tracking-wider">
                                  {slide.brandBadge}
                                </span>
                              </div>
                              <p className="text-xs text-[#475569] leading-relaxed">
                                {slide.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                            {/* Pagination Dots */}
                            <div className="flex items-center gap-1.5">
                              {slides.map((s, idx) => (
                                <button
                                  key={s.id}
                                  type="button"
                                  onClick={() => goToSlide(idx)}
                                  aria-label={`Go to slide ${idx + 1}: ${s.tabLabel}`}
                                  className={`h-2 rounded-full transition-all cursor-pointer ${
                                    idx === currentSlide
                                      ? 'w-5 bg-[#0B4F82]'
                                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                                  }`}
                                />
                              ))}
                            </div>

                            {/* Consistent Explore Collection CTA */}
                            <Link
                              href={slide.ctaHref}
                              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-xs group/btn whitespace-nowrap"
                            >
                              <span>{slide.ctaLabel}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#FDE047] group-hover/btn:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 7. Corporate Gifting Category Strip Below Slider (Generous Text Spacing, Zero Truncation) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              {giftingStrip.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white hover:bg-[#F8FAFC] border border-slate-200/90 hover:border-[#0B4F82]/60 shadow-2xs hover:shadow-sm transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-slate-200/80 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <span className="text-xs sm:text-[13px] font-extrabold text-[#0F172A] group-hover:text-[#0B4F82] block leading-snug">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-[#64748B] block leading-tight mt-0.5">
                      {item.sub}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
