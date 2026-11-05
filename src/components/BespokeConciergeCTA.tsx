'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export const BespokeConciergeCTA: React.FC = () => {
  const whatsappNumber = '919900020456';
  const whatsappMsg = encodeURIComponent(
    'Hello Globrands Concierge, I would like to discuss a custom corporate gifting requirement for our organization.'
  );

  return (
    <section className="py-20 bg-[#101828] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Brand ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-[#0876B4]/20 via-[#168FC9]/15 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-gradient-to-br from-[#E8B43A]/15 via-transparent to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E8B43A]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#E8B43A]">
              Corporate Procurement &amp; Bulk RFQs
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-white">
            Make Every Corporate Gift a{' '}
            <span className="brand-gradient-text">
              Lasting Impression.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto">
            From 50 bespoke executive backpacks to 5,000 pan-India festive hampers, our dedicated account managers guide your project from prototype sample to doorstep delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold bg-[#0876B4] hover:bg-[#076296] text-white shadow-xl shadow-[#0876B4]/30 transition-all duration-200 cursor-pointer"
            >
              <span>Request a Corporate Gifting Proposal</span>
              <ArrowRight className="w-4 h-4 text-[#E8B43A]" />
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Talk to Our B2B Team</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
