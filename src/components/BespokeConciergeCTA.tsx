'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const BespokeConciergeCTA: React.FC = () => {
  const whatsappNumber = '919900020456';
  const whatsappMsg = encodeURIComponent(
    'Hello Globrands Lifestyle, I would like to discuss a custom corporate gifting requirement for our organization.'
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="rounded-2xl bg-[#0B111E] text-white px-7 py-12 sm:px-12 sm:py-14 relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-left">
            
            <div className="space-y-2.5 max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8B43A]">
                Corporate Procurement &amp; Bulk RFQs
              </p>

              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-[1.15]">
                Ready to plan your next corporate <br className="hidden sm:inline" />
                gifting milestone?
              </h2>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal pt-1">
                Share your quantity and timeline to receive factory-direct volume pricing and complimentary 3D logo mockups within 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#D49B27] hover:bg-[#E8B43A] text-[#0B111E] text-xs font-bold transition-all shadow-xs group"
              >
                <span>Request Bulk Proposal</span>
                <ArrowRight className="w-4 h-4 text-[#0B111E] group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp B2B Desk</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
