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
  PackageCheck,
  Building2,
  Truck,
  ShieldCheck,
  FileCheck2,
  Send,
  MessageSquare
} from 'lucide-react';
import { CORPORATE_SOLUTIONS } from '../../data/products';
import { useQuote } from '../../context/QuoteContext';

export default function SolutionsPage() {
  const { setIsDrawerOpen } = useQuote();

  const getIcon = (id: string) => {
    switch (id) {
      case 'welcome-kits': return <Users className="w-6 h-6 text-[#A98554]" />;
      case 'client-appreciation': return <HeartHandshake className="w-6 h-6 text-[#A98554]" />;
      case 'event-conferences': return <Calendar className="w-6 h-6 text-[#A98554]" />;
      case 'promotional-merch': return <Award className="w-6 h-6 text-[#A98554]" />;
      case 'festival-diwali': return <Sparkles className="w-6 h-6 text-[#C5A16D]" />;
      case 'leadership-vip': return <Crown className="w-6 h-6 text-[#C5A16D]" />;
      default: return <Sparkles className="w-6 h-6 text-[#A98554]" />;
    }
  };

  return (
    <div className="py-10 bg-[#F5F0E8] min-h-screen space-y-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#69635C]">
            <Link href="/" className="hover:text-[#211D1A]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#A98554] font-semibold">Enterprise Solutions</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-[#A98554]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#A98554]">
              TURNKEY B2B ENTERPRISE PROGRAMS &bull; PAN-INDIA FULFILLMENT
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#211D1A] tracking-[-0.03em]">
            Strategic Corporate Gifting for{' '}
            <span className="brand-gradient-text">
              Every Business Milestone
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#69635C] max-w-3xl font-normal leading-relaxed">
            Whether onboarding 500 tech hires across India, celebrating Diwali with premium branded hampers, or presenting bespoke executive leather sets to your board, our turnkey Bangalore atelier manages curation, branding, custom packaging, and doorstep logistics.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D8] text-xs font-semibold text-[#211D1A] shadow-2xs">
              <Truck className="w-3.5 h-3.5 text-[#A98554]" />
              Doorstep Delivery to 19,000+ Pin Codes
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D8] text-xs font-semibold text-[#211D1A] shadow-2xs">
              <PackageCheck className="w-3.5 h-3.5 text-[#A98554]" />
              Custom Rigid Box &amp; Foam Tray Kitting
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D8] text-xs font-semibold text-[#211D1A] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A16D]" />
              Dedicated Enterprise Account Manager
            </span>
          </div>
        </div>

        {/* 6 Solution Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {CORPORATE_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="rounded-3xl bg-white border border-[#EAE3D8] hover:border-[#A98554]/60 p-7 flex flex-col justify-between group shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D8]">
                  <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100">
                    {getIcon(sol.id)}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#211D1A] text-white">
                    {sol.tag}
                  </span>
                </div>

                <div className="relative my-5 aspect-[16/10] rounded-2xl overflow-hidden bg-[#F5F0E8] border border-[#EAE3D8]">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/80 via-[#211D1A]/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs text-white font-semibold block drop-shadow-md">
                      {sol.subtitle}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#211D1A] group-hover:text-[#A98554] transition-colors">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#69635C] mt-2.5 leading-relaxed">
                  {sol.description}
                </p>

                {/* Recommended SKUs */}
                <div className="mt-5 pt-4 border-t border-[#EAE3D8]">
                  <span className="text-[10px] text-[#69635C] uppercase tracking-wider block mb-2 font-bold">
                    Curated Product Models:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.recommendedProducts.map((sku, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#F5F0E8] text-[#211D1A] border border-[#EAE3D8]"
                      >
                        {sku}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#EAE3D8] flex flex-col gap-2">
                <Link
                  href={`/contact?subject=${encodeURIComponent(sol.title)}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#211D1A] hover:bg-[#A98554] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all"
                >
                  <span>Request Solution Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A16D]" />
                </Link>
                <Link
                  href="/products"
                  className="w-full py-2 rounded-xl text-center text-xs text-[#69635C] hover:text-[#A98554] font-semibold transition-colors"
                >
                  Browse Matching Products &rarr;
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Turnkey Logistics Guarantee */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAE3D8] shadow-xs text-left">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#A98554]">
              ENTERPRISE FULFILLMENT INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#211D1A] tracking-tight">
              Seamless Logistics, Storage &amp; Doorstep Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 p-5 rounded-2xl bg-[#F5F0E8] border border-[#EAE3D8]">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#A98554] flex items-center justify-center border border-blue-100">
                <PackageCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#211D1A]">Individual Address Dropshipping</h3>
              <p className="text-xs text-[#69635C] leading-relaxed">
                Direct doorstep dispatch to individual employee home addresses across Tier 1, 2, and 3 cities with real-time tracking numbers provided to HR dashboard.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-[#F5F0E8] border border-[#EAE3D8]">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#A98554] flex items-center justify-center border border-blue-100">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#211D1A]">Custom Greeting Cards &amp; Sleeves</h3>
              <p className="text-xs text-[#69635C] leading-relaxed">
                Personalized welcome letters, foil-embossed greeting cards signed by leadership, and custom branded outer packaging sleeves tailored to your campaign.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-[#F5F0E8] border border-[#EAE3D8]">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#A98554] flex items-center justify-center border border-blue-100">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#211D1A]">Warehousing &amp; Scheduled Dispatch</h3>
              <p className="text-xs text-[#69635C] leading-relaxed">
                We store your pre-branded employee welcome inventory in our Bengaluru facility and dispatch batches automatically on every new joining Monday.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Concierge CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#211D1A] text-white shadow-xl text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C5A16D]">
              CUSTOM ENTERPRISE PROPOSALS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Planning a Large Corporate Gifting Campaign?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Connect directly with our senior corporate gifting specialists for volume pricing slabs, customized packaging designs, and dedicated project management.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#A98554] hover:bg-[#40352D] text-white text-xs font-bold transition-all shadow-md text-center"
            >
              Request Custom Proposal
            </Link>
            <a
              href="https://wa.me/919900020456?text=Hi%20Globrands%2C%20I%20would%20like%20to%20discuss%20an%20enterprise%20corporate%20gifting%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
