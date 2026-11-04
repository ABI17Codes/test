'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Clock, FileCheck2, Globe2, ShieldCheck, Sparkles } from 'lucide-react';

export const BespokeConciergeCTA: React.FC = () => {
  const whatsappNumber = '919845012345';
  const whatsappMsg = encodeURIComponent(
    'Hello Globrands Concierge, I would like to discuss a custom corporate gifting requirement for our organization.'
  );

  return (
    <section className="py-20 bg-[#0F172A] text-white relative overflow-hidden">
      {/* 2026 Ambient Mesh Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-sky-500/20 via-blue-600/15 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bento-card-dark p-8 sm:p-12 lg:p-16 backdrop-blur-xl">
          
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#F5B800]">
                Corporate Procurement & Bulk RFQs
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-white">
              Elevate your organization&apos;s{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-[#F5B800]">
                gifting standard.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto">
              From 50 bespoke executive bags to 5,000 pan-India festive hampers, our dedicated account managers guide your project from prototype sample to doorstep delivery.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
              <Link
                href="/quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold bg-[#0E679C] hover:bg-[#0284C7] text-white shadow-xl shadow-[#0E679C]/30 transition-all duration-200"
              >
                <span>Request Custom Corporate Quotation</span>
                <ArrowRight className="w-4 h-4 text-[#F5B800]" />
              </Link>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp Concierge</span>
              </a>
            </div>

            {/* 2026 Trust Points Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10 text-left">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">24-Hour Turnaround</div>
                  <div className="text-[11px] text-neutral-400">Digital proofs & quotes</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <FileCheck2 className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">100% GST Compliant</div>
                  <div className="text-[11px] text-neutral-400">Formal B2B invoicing</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Globe2 className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Pan-India Delivery</div>
                  <div className="text-[11px] text-neutral-400">Direct employee dispatch</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Dedicated Manager</div>
                  <div className="text-[11px] text-neutral-400">End-to-end single contact</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
