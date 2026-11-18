'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HERO_CONTENT } from '../data/siteContent';

export const Hero: React.FC = () => {
  const { 
    badge, 
    pretitle, 
    title, 
    titleHighlight, 
    subheading, 
    description, 
    image, 
    imageAlt, 
    imageBadge, 
    primaryCta, 
    secondaryCta, 
    stats 
  } = HERO_CONTENT;

  return (
    <section className="relative bg-gradient-to-br from-[#211D1A] via-[#292725] to-[#40352D] text-white overflow-hidden border-b border-white/10">
      {/* Background Subtle Ambience Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A16D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#211D1A]/90 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Two-Column Hero Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-14 sm:py-16 lg:py-20 min-h-[560px] lg:min-h-[600px] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (6 / 12 cols, max 540px width) */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start space-y-6 text-left max-w-[540px] order-2 lg:order-1">
            
            {/* Small Company Identity Label */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#C5A16D] font-bold block">
                {pretitle}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#EAE3D8]/70 block">
                {badge}
              </span>
            </div>

            {/* Main Master Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black uppercase tracking-tight leading-[1.04] text-white font-sans">
              {title} <br />
              <span className="text-[#C5A16D]">{titleHighlight}</span>
            </h1>

            {/* Supporting Description */}
            <div className="space-y-2.5">
              <p className="text-sm sm:text-base font-bold text-[#F5F0E8] uppercase tracking-wide">
                {subheading}
              </p>
              <p className="text-sm text-[#EAE3D8]/90 font-normal leading-relaxed">
                {description}
              </p>
            </div>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#C5A16D] hover:bg-[#A98554] text-[#211D1A] text-xs font-bold uppercase tracking-[0.14em] transition-all shadow-lg group whitespace-nowrap"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#211D1A] group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#40352D]/35 hover:bg-[#40352D]/70 border border-white/20 hover:border-[#C5A16D] text-[#F5F0E8] text-xs font-bold uppercase tracking-[0.14em] transition-all backdrop-blur-sm whitespace-nowrap"
              >
                <span>{secondaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A16D]" />
              </a>
            </div>

          </div>

          {/* Right Column: 52% (6 / 12 cols, Vertically Centered 440px-480px Image) */}
          <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 w-full">
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#292725] group">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/75 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-[#211D1A]/85 backdrop-blur-md border border-white/15 text-[#F5F0E8] font-mono text-[11px] tracking-wider">
                  {imageBadge}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Minimalist Bottom Stat Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`space-y-0.5 border-l-2 pl-3.5 ${stat.highlight ? 'border-[#C5A16D]' : 'border-white/20'}`}
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A16D]">
                {stat.category}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                {stat.title}
              </div>
              <div className="text-[11px] text-[#EAE3D8]/70">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
