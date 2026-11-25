'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  ShoppingBag,
  Check,
  ArrowRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Briefcase,
  Gift,
  Layers,
  Printer,
  CheckCircle2,
  X
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { COMPANY_INFO, CORPORATE_GIFTING_DATA } from '../data/siteContent';
import { useQuote } from '../context/QuoteContext';

type StoreTab =
  | 'home'
  | 'adma'
  | 'ninja'
  | 'backpacks'
  | 'duffle'
  | 'gifting'
  | 'partner';

export const AmazonBrandStoreHome: React.FC = () => {
  const { addToQuote, items } = useQuote();
  const [activeTab, setActiveTab] = useState<StoreTab>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllAdma, setShowAllAdma] = useState(false);
  const [showAllNinja, setShowAllNinja] = useState(false);

  // Curated Product Lists
  const allAdmaProducts = useMemo(
    () => PRODUCTS.filter((p) => p.brand === 'ADMA London'),
    []
  );
  const allNinjaProducts = useMemo(
    () => PRODUCTS.filter((p) => p.brand === 'Ninja Gear'),
    []
  );
  const partnerProducts = useMemo(
    () =>
      PRODUCTS.filter((p) =>
        ['Skybags', 'Arctic Hunter', 'Swiss Military'].includes(p.brand)
      ),
    []
  );
  const duffleAndRucksacks = useMemo(
    () =>
      PRODUCTS.filter((p) =>
        [
          'bg-duffle-bag',
          'bg-duffle-shine',
          'bg-royal-duffle',
          'bg-gymbag',
          'bg-kamiliant',
          'bg-mountain',
          'bg-eno-sling',
          'bg-ninja-sling'
        ].includes(p.id)
      ),
    []
  );
  const featuredGiftProducts = useMemo(
    () =>
      [
        'hgs-h74',
        'hgs-h71',
        'hgs-h65',
        'hgs-h55',
        'bot-h135',
        'bot-h125',
        'bot-h117',
        'hgs-h35'
      ]
        .map((id) => PRODUCTS.find((p) => p.id === id))
        .filter(Boolean) as Product[],
    []
  );

  // Featured products for the 2 ADMA Model Editorial Portraits
  const modelLeftProduct =
    PRODUCTS.find((p) => p.id === 'bg-nexa') || allAdmaProducts[0];
  const modelRightProduct =
    PRODUCTS.find((p) => p.id === 'bg-jio-2') || allAdmaProducts[1];
  const deskFeaturedProduct =
    PRODUCTS.find((p) => p.id === 'bg-essential') || allAdmaProducts[2];

  // Search filter across all products
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const isInQuote = (productId: string) =>
    items.some((i) => i.product.id === productId);

  const visibleAdma = showAllAdma ? allAdmaProducts : allAdmaProducts.slice(0, 8);
  const visibleNinja = showAllNinja ? allNinjaProducts : allNinjaProducts.slice(0, 8);

  const storeTabs: { id: StoreTab; label: string; count?: number }[] = [
    { id: 'home', label: 'HOME PAGE' },
    { id: 'adma', label: 'ADMA LONDON', count: allAdmaProducts.length },
    { id: 'ninja', label: 'NINJA GEAR ORIGINAL', count: allNinjaProducts.length },
    {
      id: 'backpacks',
      label: 'BACKPACKS',
      count: allAdmaProducts.length + allNinjaProducts.length
    },
    { id: 'duffle', label: 'DUFFLE & LUGGAGE', count: duffleAndRucksacks.length },
    { id: 'gifting', label: 'CORPORATE GIFTING (A-TO-Z)' },
    { id: 'partner', label: 'PARTNER BRANDS', count: partnerProducts.length }
  ];

  const showAdmaSection =
    activeTab === 'home' || activeTab === 'adma' || activeTab === 'backpacks';
  const showNinjaSection =
    activeTab === 'home' || activeTab === 'ninja' || activeTab === 'backpacks';
  const showDuffleOnly = activeTab === 'duffle';
  const showGiftingSection = activeTab === 'home' || activeTab === 'gifting';
  const showPartnerSection =
    activeTab === 'home' || activeTab === 'partner' || activeTab === 'backpacks';

  return (
    <div className="bg-[#F4F3EF] text-[#0F172A] min-h-screen pb-14">
      {/* ====================================================================
          1. PARENT STORE TOP BANNER (GLOBRANDS LIFESTYLE PVT. LTD.)
             Cream studio sunlit palm-shadow banner matching Amazon Brand Store
      ==================================================================== */}
      <div className="max-w-[1440px] mx-auto bg-white shadow-2xs">
        <div className="relative w-full overflow-hidden bg-[#EAE0D0]">
          <img
            src="/images/store/globrands-header-banner.png"
            alt="Globrands Lifestyle Pvt. Ltd. — Official Factory Brand Store (ADMA London, Ninja Gear & Corporate Gifting)"
            className="w-full h-auto max-h-[340px] object-cover object-center block"
          />
        </div>

        {/* ====================================================================
            2. AMAZON BRAND STORE STICKY NAVIGATION & SEARCH BAR
        ==================================================================== */}
        <div className="sticky top-14 z-30 bg-white border-y border-slate-200 shadow-xs">
          <div className="px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Store Avatar + Tabs */}
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-0.5">
              {/* Circular Brand Store Avatar */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('home');
                  setSearchQuery('');
                }}
                className="flex items-center gap-2 pr-3 border-r border-slate-200 shrink-0 cursor-pointer group"
                title="Globrands Lifestyle Official Brand Store Home"
              >
                <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-300 bg-white p-0.5 shadow-2xs shrink-0">
                  <img
                    src="/globrands-emblem-clean.png"
                    alt="Globrands Lifestyle"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left hidden sm:block">
                  <span className="text-[11px] font-black uppercase tracking-tight text-[#0F172A] group-hover:text-[#0B4F82] block leading-none">
                    GLOBRANDS STORE
                  </span>
                  <span className="text-[9.5px] font-semibold text-[#64748B] block mt-0.5">
                    Bengaluru Factory
                  </span>
                </div>
              </button>

              {/* Store Navigation Tabs (Amazon Brand Store Style) */}
              <nav className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                {storeTabs.map((tab) => {
                  const active = activeTab === tab.id && !searchQuery.trim();
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(tab.id);
                        setSearchQuery('');
                      }}
                      className={`px-3 py-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border-b-2 ${
                        active
                          ? 'border-[#D97706] text-[#0F172A] bg-[#FFFBEB]/60'
                          : 'border-transparent text-[#475569] hover:text-[#0F172A] hover:border-slate-300'
                      }`}
                    >
                      <span>{tab.label}</span>
                      {typeof tab.count === 'number' && (
                        <span
                          className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[9.5px] font-bold ${
                            active
                              ? 'bg-[#D97706] text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {tab.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Amazon Store Style Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search all Globrands models..."
                className="w-full pl-9 pr-8 py-1.5 rounded-lg bg-[#F8FAFC] border border-slate-300 focus:border-[#0B4F82] focus:bg-white focus:outline-none text-xs text-[#0F172A] placeholder:text-slate-400 font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                  aria-label="Clear store search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ====================================================================
            3. PARENT STORE FEATURED SUB-BRANDS STRIP (Just below parent banner)
               ADMA London (Brand #1) + Ninja Gear Original (Brand #2) + Corporate Gifting
        ==================================================================== */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 bg-gradient-to-r from-[#FAF8F5] via-[#FFFFFF] to-[#F0F7FF] border-b border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Featured Sub-Brand 1: ADMA LONDON */}
            <div
              onClick={() => {
                setActiveTab('adma');
                setSearchQuery('');
              }}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                activeTab === 'adma'
                  ? 'bg-[#FFFBEB] border-[#D97706] shadow-xs'
                  : 'bg-white hover:bg-[#FFFDF9] border-slate-200/90 hover:border-[#D97706]/60 shadow-2xs'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src="/images/store/adma-circle-logo.jpg"
                  alt="ADMA London"
                  className="w-12 h-12 rounded-full object-cover border border-amber-300 shadow-2xs shrink-0"
                />
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#D97706]">
                      IN-HOUSE BRAND #1
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-amber-100 text-[#92400E] text-[9px] font-bold">
                      20 Models
                    </span>
                  </div>
                  <h2 className="text-sm sm:text-base font-black text-[#0F172A] truncate">
                    ADMA LONDON
                  </h2>
                  <p className="text-[11px] text-[#475569] truncate">
                    Office, Travel &amp; Rain-Cover Backpacks • 1-Yr Warranty
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#D97706] shrink-0" />
            </div>

            {/* Featured Sub-Brand 2: NINJA GEAR ORIGINAL */}
            <div
              onClick={() => {
                setActiveTab('ninja');
                setSearchQuery('');
              }}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                activeTab === 'ninja'
                  ? 'bg-[#FFFBEB] border-[#D97706] shadow-xs'
                  : 'bg-white hover:bg-[#FFFDF9] border-slate-200/90 hover:border-[#0B4F82]/60 shadow-2xs'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-300 bg-[#262626] p-1 flex items-center justify-center shadow-2xs shrink-0">
                  <img
                    src="/catalog/brands/ninja_gear_logo.jpg"
                    alt="Ninja Gear Original"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#0B4F82]">
                      IN-HOUSE BRAND #2
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-blue-100 text-[#0B4F82] text-[9px] font-bold">
                      12 Models
                    </span>
                  </div>
                  <h2 className="text-sm sm:text-base font-black text-[#0F172A] truncate">
                    NINJA GEAR ORIGINAL
                  </h2>
                  <p className="text-[11px] text-[#475569] truncate">
                    Anti-Theft, USB Charging &amp; 17&quot; Laptop Backpacks
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0B4F82] shrink-0" />
            </div>

            {/* Featured Segment 3: A-TO-Z CORPORATE GIFTING & IN-HOUSE BRANDING */}
            <div
              onClick={() => {
                setActiveTab('gifting');
                setSearchQuery('');
              }}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                activeTab === 'gifting'
                  ? 'bg-[#EFF6FF] border-[#0B4F82] shadow-xs'
                  : 'bg-white hover:bg-[#F8FBFF] border-slate-200/90 hover:border-[#0B4F82]/60 shadow-2xs'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-blue-200 bg-[#EFF6FF] p-1.5 flex items-center justify-center shadow-2xs shrink-0">
                  <Gift className="w-6 h-6 text-[#0B4F82]" />
                </div>
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#0B4F82]">
                      SECONDARY BUSINESS
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-amber-100 text-[#92400E] text-[9px] font-bold">
                      A-to-Z Gifts
                    </span>
                  </div>
                  <h2 className="text-sm sm:text-base font-black text-[#0F172A] truncate">
                    CORPORATE GIFTING STORE
                  </h2>
                  <p className="text-[11px] text-[#475569] truncate">
                    Welcome Kits, Drinkware, Trophies, Bamboo &amp; DTF Branding
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0B4F82] shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          MAIN AMAZON BRAND STORE CANVAS (max-w-[1440px], clean editorial tiles)
      ==================================================================== */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 pt-6 space-y-8">
        {/* LIVE SEARCH RESULTS VIEW (When user types in the store search bar) */}
        {searchQuery.trim() !== '' ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-6 text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B4F82] block">
                  Store Search Results
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                  Showing {searchResults.length} matching models for &ldquo;{searchQuery}&rdquo;
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#0F172A] cursor-pointer"
              >
                Reset Search
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="py-12 text-center space-y-3">
                <p className="text-sm text-slate-600 font-medium">
                  No exact product match found. Call our Bengaluru Corporate Desk for custom sourcing!
                </p>
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B4F82] text-white text-xs font-extrabold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FDE047]" />
                  <span>Call {COMPANY_INFO.contact.corporatePhone}</span>
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {searchResults.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {/* ================================================================
                DUFFLE & LUGGAGE DEDICATED TAB VIEW
            ================================================================ */}
            {showDuffleOnly && (
              <section className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200 bg-white">
                  <img
                    src="/images/store/adma-travelling-easy.jpg"
                    alt="ADMA London & Ninja Gear Travel Duffle & Rucksack Range"
                    className="w-full h-auto object-cover block"
                  />
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-5 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider font-extrabold text-[#D97706]">
                        GYM DUFFLES • EXPEDITION RUCKSACKS • CROSSBODY SLINGS
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                        Duffle Bags, Travel Rucksacks &amp; Luggage Range
                      </h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {duffleAndRucksacks.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* ================================================================
                SECTION A: ADMA LONDON OFFICIAL AMAZON BRAND STORE SHOWCASE
            ================================================================ */}
            {showAdmaSection && (
              <section className="space-y-5" id="adma-london-store">
                {/* A1. Official ADMA London Cream Studio Logo Banner */}
                <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200/90 bg-[#EAE0D0]">
                  <img
                    src="/images/store/adma-header-banner.png"
                    alt="ADMA LONDON Official Brand Banner"
                    className="w-full h-auto max-h-[300px] object-cover object-center block"
                  />
                </div>

                {/* A2. Official ADMA London "OUR BACKPACK Collection" Podium Banner */}
                <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200/90 bg-white">
                  <img
                    src="/images/store/adma-podium-collection.png"
                    alt="ADMA LONDON — OUR BACKPACK Collection — Stylish Strong | Everyday Performance"
                    className="w-full h-auto object-cover block"
                  />
                </div>

                {/* A3. Official Amazon Editorial Split Row #1: Two Side-by-Side Model Portraits with B2B Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    {
                      img: '/images/store/adma-model-left.png',
                      alt: 'ADMA London Quilted Laptop Backpack — Model Studio View 1',
                      prod: modelLeftProduct,
                      discountBadge: 'Direct Factory Price'
                    },
                    {
                      img: '/images/store/adma-model-right.png',
                      alt: 'ADMA London Quilted Laptop Backpack — Model Studio View 2',
                      prod: modelRightProduct,
                      discountBadge: '1-Yr Factory Warranty'
                    }
                  ].map((tile, idx) => {
                    const added = isInQuote(tile.prod.id);
                    return (
                      <div
                        key={idx}
                        className="relative rounded-2xl overflow-hidden bg-[#DDEBF7] border border-slate-200/90 shadow-xs group"
                      >
                        <Link href={`/products/${tile.prod.id}`} className="block">
                          <img
                            src={tile.img}
                            alt={tile.alt}
                            className="w-full aspect-square object-cover group-hover:scale-[1.02] transition-transform duration-500 block"
                          />
                        </Link>

                        {/* Floating Amazon-Store Style Product Overlay Card at Bottom */}
                        <div className="p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-[#CC0C39] text-white text-[10px] font-extrabold uppercase">
                                {tile.discountBadge}
                              </span>
                              <span className="text-[10.5px] font-mono font-bold text-[#0B4F82]">
                                {tile.prod.code}
                              </span>
                            </div>
                            <Link
                              href={`/products/${tile.prod.id}`}
                              className="text-sm font-extrabold text-[#0F172A] hover:text-[#0B4F82] block truncate mt-1"
                            >
                              {tile.prod.name}
                            </Link>
                            <div className="flex items-center gap-3 mt-0.5 text-xs">
                              <span className="text-[#475569]">
                                M.R.P.:{' '}
                                <strong className="text-[#0F172A] font-black">
                                  ₹{(tile.prod.mrp || 1599).toLocaleString('en-IN')}
                                </strong>
                              </span>
                              <span className="text-slate-300">|</span>
                              <span className="text-[#0B4F82] font-bold">
                                Min. order: {tile.prod.moq}
                              </span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => addToQuote(tile.prod)}
                            className={`px-4 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0 ${
                              added
                                ? 'bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]'
                                : 'bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] border border-[#FCD200] shadow-2xs'
                            }`}
                          >
                            {added ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#D97706]" />
                                <span>Added to Quote</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="w-3.5 h-3.5 text-[#0F1111]" />
                                <span>Add to Quote</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* A4. Product Carousel / Grid Row #1: "Best Sellers from ADMA LONDON" */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-5 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/images/store/adma-circle-logo.jpg"
                        alt="ADMA London"
                        className="w-11 h-11 rounded-full object-cover border border-amber-300 shadow-2xs shrink-0"
                      />
                      <div>
                        <span className="text-[10.5px] font-mono uppercase tracking-wider font-extrabold text-[#D97706] block">
                          IN-HOUSE REGISTERED BRAND #1 • BENGALURU DIRECT FACTORY
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                          Best Sellers from ADMA LONDON
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 self-start sm:self-center">
                      <button
                        type="button"
                        onClick={() => setShowAllAdma(!showAllAdma)}
                        className="px-4 py-2 rounded-xl bg-[#FFFBEB] hover:bg-[#FEF3C7] border border-[#FCD34D] text-[#92400E] text-xs font-extrabold transition-all cursor-pointer"
                      >
                        {showAllAdma
                          ? 'Show Top 8 Best Sellers'
                          : `View All ${allAdmaProducts.length} ADMA London Models`}
                      </button>
                      <a
                        href="https://www.amazon.in/stores/ADMALONDON/page/E2B71F27-2694-4EB3-A021-D0BB201BF792"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-bold transition-colors"
                      >
                        <span>Amazon Store</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#D97706]" />
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {visibleAdma.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>

                {/* A5. Official Amazon Editorial Split Row #2: "CARRY CONFIDENCE. ANYWHERE." + Desk Lifestyle & Text Tile */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                  {/* Left Half (6 cols): Square Carry Confidence Editorial Tile */}
                  <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xs flex flex-col">
                    <img
                      src="/images/store/adma-carry-confidence.png"
                      alt="ADMA LONDON — CARRY CONFIDENCE. ANYWHERE. Minimal design. Maximum impact."
                      className="w-full h-full object-cover block"
                    />
                  </div>

                  {/* Right Half (6 cols): Stacked Desk Lifestyle Image + Editorial Callout Tile */}
                  <div className="lg:col-span-6 flex flex-col justify-between gap-5">
                    <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xs">
                      <img
                        src="/images/store/adma-desk-lifestyle.png"
                        alt="ADMA LONDON Two-Tone Laptop Backpack on Executive Desk"
                        className="w-full h-auto object-cover block"
                      />
                    </div>

                    {/* Exact Amazon Store Editorial Text Tile + B2B Featured Product Strip */}
                    <div className="flex-1 rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between gap-4 text-left">
                      <div className="space-y-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[10.5px] font-extrabold uppercase tracking-wider text-[#92400E]">
                          ADMA LONDON • WORK • LIFE • TRAVEL
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-snug">
                          🎒 Designed for modern journeys with comfort, style &amp; functionality.
                        </h3>
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                          Every ADMA London backpack is manufactured in our Bengaluru facility with water-resistant high-density polyester, padded 15.6&quot;–17&quot; laptop sleeves, and dual bottle pockets — backed by our{' '}
                          <strong className="text-[#0F172A]">1-Year Direct Factory Replacement Warranty</strong>.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="text-xs font-extrabold text-[#0F172A] block">
                            Featured Two-Tone Pack: {deskFeaturedProduct.name}
                          </span>
                          <span className="text-xs text-[#475569]">
                            M.R.P.:{' '}
                            <strong className="text-[#0F172A]">
                              ₹{(deskFeaturedProduct.mrp || 1499).toLocaleString('en-IN')}
                            </strong>{' '}
                            • Min. order: <strong className="text-[#0B4F82]">{deskFeaturedProduct.moq}</strong>
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => addToQuote(deskFeaturedProduct)}
                          className="px-4 py-2.5 rounded-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] border border-[#FCD200] text-xs font-extrabold cursor-pointer flex items-center gap-1.5 shadow-2xs"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>
                            {isInQuote(deskFeaturedProduct.id) ? 'Added to Quote ✓' : 'Add to Quote'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* A6. Official Amazon Full-Width Feature Infographic Banner: "CARRY SMART, WORK STUDY EXPLORE." */}
                <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200/90 bg-white">
                  <img
                    src="/images/store/adma-carry-smart-banner.png"
                    alt="CARRY SMART, WORK STUDY EXPLORE — 16.4 Inch Laptop Compartment, Premium & Durable Material, Water Bottle Pocket, Unisex Design"
                    className="w-full h-auto object-cover block"
                  />
                </div>

                {/* A7. Official Amazon Editorial Split Row #3: "PADDED STRAPS & BREATHABLE BACK MESH" + "SPACIOUS & ORGANIZED" */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                  {/* Left Half (6 cols): Square Padded Straps & Breathable Back Mesh Tile */}
                  <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xs flex flex-col">
                    <img
                      src="/images/store/adma-padded-straps-clean.png"
                      alt="PADDED STRAPS & BREATHABLE BACK MESH — Stay comfortable all day, even during long hours."
                      className="w-full h-full object-cover block"
                    />
                  </div>

                  {/* Right Half (6 cols): Stacked Spacious & Organized Image + Smart Storage Callout */}
                  <div className="lg:col-span-6 flex flex-col justify-between gap-5">
                    <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xs">
                      <img
                        src="/images/store/adma-spacious-organized.jpg"
                        alt="SPACIOUS & ORGANIZED — Smart compartments keep everything in place."
                        className="w-full h-auto object-cover block"
                      />
                    </div>

                    <div className="flex-1 rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between gap-4 text-left">
                      <div className="space-y-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[10.5px] font-extrabold uppercase tracking-wider text-[#0B4F82]">
                          MULTI-COMPARTMENT ENGINEERING • CUSTOM LOGO BRANDING
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-snug">
                          🎒 Smart Storage — Keep essentials neatly organized
                        </h3>
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                          Equipped with dedicated cushioned laptop compartments, internal pen &amp; gadget slots, powerbank organizer pockets, and custom corporate logo branding via in-house{' '}
                          <strong className="text-[#0B4F82]">
                            DTF Printing, Computerized Embroidery &amp; Screen Printing
                          </strong>
                          .
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                        {[
                          { label: 'DTF Printing', icon: Printer },
                          { label: 'Computerized Embroidery', icon: Sparkles },
                          { label: 'Screen Printing', icon: CheckCircle2 },
                          { label: '1-Year Replacement Warranty', icon: ShieldCheck }
                        ].map((b, i) => {
                          const Icon = b.icon;
                          return (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8FAFC] border border-slate-200 text-xs font-bold text-[#0F172A]"
                            >
                              <Icon className="w-3.5 h-3.5 text-[#D97706]" />
                              <span>{b.label}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* A8. Official Amazon Panoramic Banner: "Travelling is Easy" */}
                <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200/90 bg-white">
                  <img
                    src="/images/store/adma-travelling-easy.jpg"
                    alt="Travelling is Easy — ADMA London & Ninja Gear Travel Backpacks"
                    className="w-full h-auto object-cover block"
                  />
                </div>
              </section>
            )}

            {/* ================================================================
                SECTION B: NINJA GEAR ORIGINAL BRAND STORE SHOWCASE
            ================================================================ */}
            {showNinjaSection && (
              <section className="space-y-5 pt-2" id="ninja-gear-store">
                {/* B1. Ninja Gear Original Studio Podium Collection Banner */}
                <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200/90 bg-white">
                  <img
                    src="/images/store/ninja-podium-collection.png"
                    alt="NINJA GEAR ORIGINAL — OUR BACKPACK Collection — Anti-Theft, USB Tech, 17 Inch Laptop"
                    className="w-full h-auto object-cover block"
                  />
                </div>

                {/* B2. Product Carousel / Grid Row #2: "Best Sellers from NINJA GEAR ORIGINAL" */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-5 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-300 bg-[#262626] p-1 flex items-center justify-center shadow-2xs shrink-0">
                        <img
                          src="/catalog/brands/ninja_gear_logo.jpg"
                          alt="Ninja Gear Original"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-[10.5px] font-mono uppercase tracking-wider font-extrabold text-[#0B4F82] block">
                          IN-HOUSE REGISTERED BRAND #2 • ANTI-THEFT &amp; USB CHARGING TECH
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                          Best Sellers from NINJA GEAR ORIGINAL
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 self-start sm:self-center">
                      <button
                        type="button"
                        onClick={() => setShowAllNinja(!showAllNinja)}
                        className="px-4 py-2 rounded-xl bg-[#EFF6FF] hover:bg-[#DBEAFE] border border-[#93C5FD] text-[#0B4F82] text-xs font-extrabold transition-all cursor-pointer"
                      >
                        {showAllNinja
                          ? 'Show Top 8 Best Sellers'
                          : `View All ${allNinjaProducts.length} Ninja Gear Models`}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {visibleNinja.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* ================================================================
                SECTION C: PARTNER BRANDS (SKYBAGS, ARCTIC HUNTER, SWISS MILITARY)
            ================================================================ */}
            {showPartnerSection && (
              <section className="space-y-5 pt-2" id="partner-brands-store">
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-5 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10.5px] font-mono uppercase tracking-wider font-extrabold text-[#D97706] block">
                        AUTHORIZED MULTI-BRAND CORPORATE PARTNER • CUSTOM LOGO BRANDING
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                        Partner Brand Backpacks: Skybags, Arctic Hunter &amp; Swiss Military
                      </h2>
                      <p className="text-xs text-[#475569] mt-0.5">
                        Alongside our in-house brands (ADMA London &amp; Ninja Gear), we supply and custom-brand leading national and international backpack brands for bulk corporate orders.
                      </p>
                    </div>

                    <Link
                      href="/bags"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-extrabold whitespace-nowrap self-start sm:self-center"
                    >
                      <span>Open Full Bag Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FDE047]" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {partnerProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* ================================================================
                SECTION D: CORPORATE GIFTING STORE SECTION (Same Amazon Store Style)
            ================================================================ */}
            {showGiftingSection && (
              <section className="space-y-5 pt-2" id="corporate-gifting-store">
                {/* D1. Corporate Gifting Studio Podium Collection Banner */}
                <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200/90 bg-white">
                  <img
                    src="/images/store/gifting-podium-collection.png"
                    alt="GLOBRANDS GIFTING — CORPORATE GIFTS Collection — Welcome Kits, Drinkware, Trophies & Bamboo"
                    className="w-full h-auto object-cover block"
                  />
                </div>

                {/* D2. 9 A-to-Z Corporate Gifting Category Store Tiles (4-Image Grids) */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-5 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10.5px] font-mono uppercase tracking-wider font-extrabold text-[#0B4F82] block">
                        SECONDARY BUSINESS SEGMENT • COMPLETE A-TO-Z CORPORATE GIFTING
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                        Shop Corporate Gifting by Category (A to Z)
                      </h2>
                      <p className="text-xs text-[#475569] mt-0.5">
                        From Employee Welcome Kits, Sustainable Bamboo, and Vacuum Drinkware to Trophies &amp; Medals, Apparels, Trolleys, and Kitchen Appliances.
                      </p>
                    </div>

                    <Link
                      href="/gift-sets"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-extrabold whitespace-nowrap self-start sm:self-center"
                    >
                      <span>View 146-Page Gifting Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {CORPORATE_GIFTING_DATA.categories.map((cat, idx) => {
                      const IconComp = cat.icon;
                      const multiImages = (cat as any).images || [cat.image];
                      return (
                        <div
                          key={idx}
                          className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 hover:border-[#0B4F82]/60 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                        >
                          <div className="p-3 bg-[#F4F6F9] border-b border-slate-200/80 relative">
                            <div className="grid grid-cols-2 gap-2">
                              {multiImages.slice(0, 4).map((imgSrc: string, i: number) => (
                                <div
                                  key={i}
                                  className="aspect-[4/3] rounded-xl bg-white border border-slate-200/80 p-1.5 flex items-center justify-center"
                                >
                                  <img
                                    src={imgSrc}
                                    alt={`${cat.title} ${i + 1}`}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                  />
                                </div>
                              ))}
                            </div>
                            <span className="absolute top-4 left-4 text-[9px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#0B4F82] text-white shadow-2xs">
                              {cat.tag}
                            </span>
                          </div>

                          <div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col justify-between bg-white">
                            <div>
                              <div className="flex items-center gap-1.5 text-[#0B4F82] mb-1">
                                <IconComp className="w-3.5 h-3.5 text-[#D97706]" />
                                <span className="text-[10px] font-mono uppercase font-bold">
                                  {cat.subtitle}
                                </span>
                              </div>
                              <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                                {cat.title}
                              </h3>
                              <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                                {cat.description}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                              <a
                                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                                className="text-xs font-extrabold text-[#0B4F82] hover:text-[#D97706] flex items-center gap-1"
                              >
                                <Phone className="w-3 h-3" />
                                <span>Call for Bulk Quote</span>
                              </a>
                              <a
                                href={`https://wa.me/${COMPANY_INFO.contact.phoneRaw}?text=${encodeURIComponent(
                                  `Hello Globrands, please share options and bulk pricing for ${cat.title}.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-xs font-bold text-emerald-700 border border-emerald-200 flex items-center gap-1 transition-colors"
                              >
                                <MessageSquare className="w-3 h-3" />
                                <span>WhatsApp</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* D3. Featured Corporate Gift Sets & Smart Drinkware Product Row */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-5 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10.5px] font-mono uppercase tracking-wider font-extrabold text-[#D97706] block">
                        BEST-SELLING EXECUTIVE HAMPERS • BAMBOO SETS • SMART VACUUM FLASKS
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
                        Featured Corporate Gift Sets &amp; Drinkware
                      </h2>
                    </div>

                    <Link
                      href="/gift-sets"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFFBEB] hover:bg-[#FEF3C7] border border-[#FCD34D] text-[#92400E] text-xs font-extrabold whitespace-nowrap self-start sm:self-center"
                    >
                      <span>Browse All Gift Sets</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {featuredGiftProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
};
