'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  HeartHandshake, 
  Calendar, 
  Award, 
  Sparkles, 
  Crown,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  PackageCheck
} from 'lucide-react';
import { CORPORATE_SOLUTIONS } from '../../data/products';
import { useQuote } from '../../context/QuoteContext';

export default function SolutionsPage() {
  const { setIsDrawerOpen } = useQuote();

  const getIcon = (id: string) => {
    switch (id) {
      case 'welcome-kits': return <Users className="w-6 h-6 text-[#b88e3e]" />;
      case 'client-appreciation': return <HeartHandshake className="w-6 h-6 text-[#b88e3e]" />;
      case 'event-conferences': return <Calendar className="w-6 h-6 text-[#b88e3e]" />;
      case 'promotional-merch': return <Award className="w-6 h-6 text-[#b88e3e]" />;
      case 'festival-diwali': return <Sparkles className="w-6 h-6 text-[#b88e3e]" />;
      case 'leadership-vip': return <Crown className="w-6 h-6 text-[#b88e3e]" />;
      default: return <Sparkles className="w-6 h-6 text-[#b88e3e]" />;
    }
  };

  return (
    <div className="py-12 bg-[#FCFBF9]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#916c27] font-semibold">Strategic Corporate Solutions</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold">
            <Sparkles className="w-3.5 h-3.5 text-[#b88e3e]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#916c27]">
              END-TO-END CORPORATE GIFTING PROGRAMS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            THE RIGHT GIFTS FOR EVERY BUSINESS MOMENT
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl font-normal leading-relaxed">
            Whether onboarding 200 software engineers, rewarding 50 key channel partners, or gifting your executive board, our B2B turnkey programs handle curation, personalization, kitting, and pan-India multi-location dispatch.
          </p>
        </div>

        {/* 6 Solution Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {CORPORATE_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="luxury-card rounded-3xl bg-white border border-neutral-200/90 p-7 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-neutral-200 text-[#916c27]">
                    {getIcon(sol.id)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full badge-gold text-[#916c27]">
                    {sol.tag}
                  </span>
                </div>

                <div className="relative my-5 aspect-[16/10] rounded-2xl overflow-hidden bg-[#F3EFEA] border border-neutral-200/60 shadow-inner">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs text-white font-medium block drop-shadow-md">
                      {sol.subtitle}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#111317] group-hover:text-[#916c27] transition-colors font-serif-luxury">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed">
                  {sol.description}
                </p>

                {/* Recommended SKUs */}
                <div className="mt-5 pt-4 border-t border-neutral-100">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-2 font-bold">
                    Recommended Catalogue Models:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.recommendedProducts.map((sku, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#FAF8F5] text-neutral-800 border border-neutral-200"
                      >
                        {sku}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-100 flex flex-col gap-2">
                <Link
                  href={`/contact?subject=${encodeURIComponent(sol.title)}`}
                  className="w-full py-3 px-4 rounded-xl gold-luxury-button text-xs font-bold flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Enquire For {sol.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/products"
                  className="w-full py-2 rounded-xl text-center text-xs text-neutral-600 hover:text-black font-semibold"
                >
                  Browse Matching Products →
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Turnkey Logistics Guarantee */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200 shadow-sm text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <PackageCheck className="w-8 h-8 text-[#b88e3e]" />
              <h3 className="text-base font-bold text-[#111317] font-serif-luxury">Individual Address Dropshipping</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Direct doorstep dispatch to individual employee home addresses across Tier 1, 2, and 3 cities with real-time tracking numbers provided to HR.
              </p>
            </div>
            <div className="space-y-2">
              <Sparkles className="w-8 h-8 text-[#b88e3e]" />
              <h3 className="text-base font-bold text-[#111317] font-serif-luxury">Custom Greeting Cards & Sleeves</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Personalized welcome letters, foil-embossed greeting cards signed by leadership, and custom branded outer packaging sleeves.
              </p>
            </div>
            <div className="space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#b88e3e]" />
              <h3 className="text-base font-bold text-[#111317] font-serif-luxury">Warehousing & Scheduled Dispatch</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We store your pre-branded employee welcome inventory in our Bengaluru hub and dispatch batches automatically on every new joining Monday.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

