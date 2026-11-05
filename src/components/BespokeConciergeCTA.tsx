'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const BespokeConciergeCTA: React.FC = () => {
  const whatsappNumber = '919900020456';
  const whatsappMsg = encodeURIComponent(
    'Hello Globrands Lifestyle, I would like to discuss a custom corporate gifting requirement for our organization.'
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="rounded-2xl bg-[#101828] text-white px-6 py-12 sm:px-12 sm:py-16 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,118,180,0.28)_0%,transparent_65%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-left">
            <div className="space-y-3 max-w-xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8B43A]">
                Corporate Procurement &amp; Bulk RFQs
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.025em] leading-[1.12]">
                Ready to plan your next corporate gifting milestone?
              </h2>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Share your quantity and timeline to receive factory-direct volume pricing and complimentary 3D logo mockups within 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0876B4] hover:bg-[#168FC9] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm group"
              >
                <span>Request Bulk Proposal</span>
                <ArrowRight className="w-4 h-4 text-[#E8B43A] group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp B2B Desk</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
