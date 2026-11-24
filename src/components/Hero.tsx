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

  const activeSlideData = slides[currentSlide];

  return (
    <section
      className="relative bg-gradient-to-b from-[#FFFFFF] via-[#FBFBFD] to-[#F4F8FB] text-[#0F172A] overflow-hidden border-b border-slate-200/80"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Globrands Lifestyle Featured Manufacturing & Corporate Gifting Showcase"
    >
      {/* Subtle Ambient Luxury Studio Glows */}
      <div className="absolute -top-24 right-1/4 w-[600px] h-[600px] bg-[#E0F2FE]/55 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-[520px] h-[520px] bg-[#FEF3C7]/55 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Two-Column Hero Container */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ================================================================
              LEFT SECTION (5 cols): Brand Authority, Typography & CTAs
          ================================================================ */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start space-y-6 text-left">

            {/* 1. Small Premium Brand Label */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#0B4F82]">
                {pretitle}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#64748B]">
                {badge}
              </span>
            </div>

            {/* 2. Business Category Indicators (Primary & Secondary Business) */}
            <div className="flex flex-wrap items-center gap-2.5 w-full">
              <Link
                href="/brands"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B4F82] text-white shadow-xs hover:bg-[#083B63] transition-all"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#FDE047] shrink-0" />
                <span className="text-[11px] font-bold tracking-wide">
                  <span className="text-[#FDE047] font-semibold">Primary:</span> Backpack Manufacturing
                </span>
              </Link>

              <Link
                href="/gift-sets"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFFBEB] border border-[#FCD34D] text-[#0F172A] shadow-2xs hover:bg-[#FEF3C7] transition-all"
              >
                <Gift className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span className="text-[11px] font-bold tracking-wide">
                  <span className="text-[#B45309] font-semibold">Secondary:</span> A-to-Z Corporate Gifting
                </span>
              </Link>
            </div>

            {/* 3. Main Headline with Distinct Typography Treatments */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black uppercase tracking-tight leading-[1.08] font-sans">
              <span className="text-[#0F172A] block">DIRECT</span>
              <span className="text-[#0B4F82] block mt-0.5">
                BACKPACK MANUFACTURING
              </span>
              <span className="text-[#0F172A] block mt-0.5">
                &amp; COMPLETE{' '}
              </span>
              <span className="relative inline-block text-[#D97706] mt-0.5">
                CORPORATE GIFTING
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-transparent rounded-full" />
              </span>
            </h1>

            {/* 4. Description */}
            <p className="text-sm sm:text-[15px] text-[#475569] font-normal leading-relaxed">
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
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${
                      item.gold
                        ? 'bg-[#FFFBEB] border-[#FDE68A] text-[#92400E]'
                        : 'bg-white border-slate-200/90 text-[#1E293B] shadow-2xs'
                    }`}
                  >
                    <Icon className={`w-3 h-3 ${item.gold ? 'text-[#D97706]' : 'text-[#0B4F82]'}`} />
                    <span>{item.label}</span>
                  </span>
                );
              })}
            </div>

            {/* 6. CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md hover:shadow-lg group"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#FDE047] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md hover:shadow-lg group"
              >
                <span>{secondaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={tertiaryCta?.href || '/contact'}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#0F172A] text-xs font-bold uppercase tracking-wider transition-all shadow-2xs"
              >
                <span>{tertiaryCta?.label || 'Contact Us'}</span>
              </Link>
            </div>

          </div>

          {/* ================================================================
              RIGHT SECTION (7 cols): Interactive 4-Slide Premium Product Carousel
          ================================================================ */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 w-full">

            {/* Main Carousel Stage */}
            <div
              className="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(11,79,130,0.12)] overflow-hidden select-none"
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

              {/* Top Slide Selector Tabs */}
              <div className="px-4 sm:px-6 pt-3.5 pb-2.5 bg-white/90 border-b border-slate-100 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
                <div className="flex items-center gap-1.5">
                  {slides.map((s, idx) => {
                    const active = idx === currentSlide;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => goToSlide(idx)}
                        className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                          active
                            ? 'bg-[#0B4F82] text-white shadow-xs'
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
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0B4F82] text-[#0F172A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0B4F82] text-[#0F172A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Horizontal Sliding Track */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide) => (
                    <div
                      key={slide.id}
                      className={`w-full shrink-0 bg-gradient-to-br ${slide.themeBg} p-5 sm:p-7 flex flex-col justify-between min-h-[410px] sm:min-h-[440px]`}
                    >
                      {/* Slide Top Metadata Header */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          {slide.brandLogo && (
                            <div className="h-9 px-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center">
                              <img
                                src={slide.brandLogo}
                                alt={slide.brandBadge}
                                className="max-h-6 w-auto object-contain"
                              />
                            </div>
                          )}
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="px-2.5 py-0.5 rounded-full bg-[#0B4F82] text-white text-[10px] font-extrabold uppercase tracking-wider">
                              {slide.label}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#FFFBEB] border border-[#FCD34D] text-[#92400E] text-[10px] font-extrabold uppercase tracking-wider">
                              {slide.brandBadge}
                            </span>
                          </div>
                        </div>

                        <span className="text-[11px] font-mono font-bold text-slate-400">
                          {slide.slideNumber} / 0{totalSlides}
                        </span>
                      </div>

                      {/* Slide Center Visual Product Showcase */}
                      {slide.layout === 'grid-Showcase' ? (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
                          {slide.items.map((item, i) => (
                            <Link
                              key={i}
                              href={slide.ctaHref}
                              className="group/card rounded-2xl bg-white border border-slate-200/80 p-3 flex flex-col items-center justify-between shadow-2xs hover:shadow-md hover:border-[#0B4F82] transition-all"
                            >
                              <div className="h-32 sm:h-36 w-full flex items-center justify-center overflow-hidden p-1">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="max-h-full max-w-full object-contain group-hover/card:scale-108 transition-transform duration-500"
                                />
                              </div>
                              <div className="w-full text-center pt-2 border-t border-slate-100">
                                <span className="text-[9px] font-mono font-bold text-[#D97706] uppercase block">
                                  {item.tag}
                                </span>
                                <span className="text-xs font-extrabold text-[#0F172A] line-clamp-1">
                                  {item.name}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 gap-3 sm:gap-5 items-end my-4 px-1">
                          {slide.items.map((item, i) => {
                            const isFeatured = (item as any).featured;
                            return (
                              <Link
                                key={i}
                                href={slide.ctaHref}
                                className={`group/item relative rounded-2xl bg-white/90 hover:bg-white border transition-all flex flex-col items-center justify-between p-3 sm:p-4 ${
                                  isFeatured
                                    ? 'border-[#93C5FD] shadow-md sm:-translate-y-1.5'
                                    : 'border-slate-200/80 shadow-2xs'
                                }`}
                              >
                                <span className="self-start px-2 py-0.5 rounded bg-slate-100 text-[#0B4F82] font-mono text-[9px] font-bold">
                                  {item.code}
                                </span>

                                <div
                                  className={`w-full flex items-center justify-center my-1 ${
                                    isFeatured ? 'h-40 sm:h-48' : 'h-32 sm:h-40'
                                  }`}
                                >
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain drop-shadow-[0_10px_18px_rgba(15,23,42,0.14)] group-hover/item:scale-106 transition-transform duration-500"
                                  />
                                </div>

                                <div className="w-full text-center pt-1.5 border-t border-slate-100">
                                  <span className="text-[9.5px] font-bold text-[#D97706] uppercase tracking-wider block">
                                    {item.tag}
                                  </span>
                                  <span className="text-xs font-extrabold text-[#0F172A] line-clamp-1">
                                    {item.name}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}

                      {/* Slide Bottom Caption & CTA Footer */}
                      <div className="pt-3 border-t border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-0.5 text-left max-w-md">
                          <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A] tracking-tight">
                            {slide.title}
                          </h2>
                          <p className="text-xs text-[#475569] line-clamp-1">
                            {slide.description}
                          </p>
                        </div>

                        <Link
                          href={slide.ctaHref}
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-xs shrink-0 group/btn"
                        >
                          <span>{slide.ctaLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#FDE047] group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Pagination Dots & Collection Indicator */}
              <div className="px-5 py-2.5 bg-white border-t border-slate-100 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#0B4F82]">{activeSlideData.brandBadge}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#64748B] hidden sm:inline">
                    Hover to pause • Swipe or use arrows to browse collections
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}: ${s.tabLabel}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentSlide
                          ? 'w-6 bg-[#0B4F82]'
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 7. Corporate Gifting Category Strip Below Slider */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {giftingStrip.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white hover:bg-[#F8FAFC] border border-slate-200/90 hover:border-[#0B4F82] shadow-2xs hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-slate-200/80 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-xs font-extrabold text-[#0F172A] group-hover:text-[#0B4F82] block truncate">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-[#64748B] block truncate">
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
