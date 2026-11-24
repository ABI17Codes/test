'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Factory,
  Phone,
  Briefcase,
  Layers,
  Gift,
  FileText,
  ZoomIn,
  ZoomOut,
  MessageCircle,
  MessageSquare,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { COMPANY_INFO, CORPORATE_GIFTING_DATA } from '../data/siteContent';
import { useQuote } from '../context/QuoteContext';

export type CatalogueSectionTab = 'backpacks' | 'gifting' | 'pdf';

const PARTNER_AND_CATEGORY_TABS = [
  {
    id: 'partner',
    label: 'Partner Brands: Skybags, Arctic Hunter & Swiss Military (6)',
    ids: [
      'bg-skybags-corporate-pro',
      'bg-skybags-campus-lite',
      'bg-arctic-hunter-tech',
      'bg-arctic-hunter-briefcase',
      'bg-swiss-military-voyager',
      'bg-swiss-military-commuter'
    ]
  },
  {
    id: 'laptop',
    label: 'Laptop & Office Backpacks (3)',
    ids: ['bg-inspire', 'bg-smart', 'bg-classic']
  },
  {
    id: 'travel',
    label: 'Travel & Rain-Cover Backpacks (3)',
    ids: ['bg-volvo-2', 'bg-volvo-1', 'bg-mountain']
  },
  {
    id: 'duffle',
    label: 'Gym Duffles & Slings (3)',
    ids: ['bg-duffle-shine', 'bg-royal-duffle', 'bg-eno-sling']
  }
];

interface UnifiedCataloguesHubProps {
  defaultSection?: CatalogueSectionTab;
}

export const UnifiedCataloguesHub: React.FC<UnifiedCataloguesHubProps> = ({
  defaultSection = 'backpacks'
}) => {
  const { setIsDrawerOpen } = useQuote();

  const [activeSection, setActiveSection] = useState<CatalogueSectionTab>(defaultSection);
  const [activeBagCategoryTab, setActiveBagCategoryTab] = useState<string>('partner');
  const [showAllNinja, setShowAllNinja] = useState(false);
  const [showAllAdma, setShowAllAdma] = useState(false);

  // Digital PDF Flipbook State
  const [pdfType, setPdfType] = useState<'bags' | 'gifts'>('bags');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const totalPages = pdfType === 'bags' ? 37 : 146;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sectionParam = params.get('section') as CatalogueSectionTab | null;
    const typeParam = params.get('type');
    const brandParam = params.get('brand');
    const pageParam = parseInt(params.get('page') || '1', 10) || 1;

    if (sectionParam && ['backpacks', 'gifting', 'pdf'].includes(sectionParam)) {
      setActiveSection(sectionParam);
    }

    if (brandParam === 'Ninja Gear') {
      setActiveSection('backpacks');
      setShowAllNinja(true);
    } else if (brandParam === 'ADMA London') {
      setActiveSection('backpacks');
      setShowAllAdma(true);
    } else if (typeParam === 'laptop') {
      setActiveSection('backpacks');
      setActiveBagCategoryTab('laptop');
    } else if (typeParam === 'waterproof') {
      setActiveSection('backpacks');
      setActiveBagCategoryTab('travel');
    } else if (typeParam === 'duffle') {
      setActiveSection('backpacks');
      setActiveBagCategoryTab('duffle');
    } else if (typeParam === 'bags' || typeParam === 'gifts') {
      setPdfType(typeParam);
      setCurrentPage(pageParam);
      if (window.location.pathname.includes('catalog-viewer') && params.has('type')) {
        setActiveSection('pdf');
      }
    }
  }, []);

  // 1. Backpacks & In-House Brands Data
  const allNinjaProducts = PRODUCTS.filter((p) => p.brand === 'Ninja Gear');
  const allAdmaProducts = PRODUCTS.filter((p) => p.brand === 'ADMA London');
  const ninjaProducts = showAllNinja ? allNinjaProducts : allNinjaProducts.slice(0, 3);
  const admaProducts = showAllAdma ? allAdmaProducts : allAdmaProducts.slice(0, 3);

  const currentBagGroup =
    PARTNER_AND_CATEGORY_TABS.find((g) => g.id === activeBagCategoryTab) ||
    PARTNER_AND_CATEGORY_TABS[0];
  const categoryBags = currentBagGroup.ids
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  // 2. Corporate Gifting Featured Sets
  const topGiftBoxes = ['hgs-h74', 'hgs-h71', 'hgs-h65']
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  const bambooAndBottles = ['hgs-h35', 'hgs-h117', 'hgs-h118']
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  // 3. PDF Flipbook Helpers
  const getPageImagePath = (page: number) => {
    if (pdfType === 'bags') {
      const padded = page.toString().padStart(2, '0');
      return `/catalog/bags/page_${padded}.jpg`;
    }
    const padded = page.toString().padStart(3, '0');
    return `/catalog/gifts/page_${padded}.jpg`;
  };

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(1, prev - 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(totalPages, prev + 1));

  const getPageWhatsAppUrl = () => {
    const catalogName =
      pdfType === 'bags'
        ? 'Globrands Bag Catalogue 2025'
        : 'ALL In One Corporate Gift Catalogue';
    const text = encodeURIComponent(
      `Hello Globrands Lifestyle Pvt. Ltd., I am reviewing your ${catalogName} on Page ${currentPage} of ${totalPages} and would like to request bulk pricing and quotation for the products shown on this page.`
    );
    return `https://wa.me/${COMPANY_INFO.contact.phoneRaw}?text=${text}`;
  };

  const showBackpacks = activeSection === 'backpacks';
  const showGifting = activeSection === 'gifting';
  const showPdf = activeSection === 'pdf';

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-8 space-y-10">
        {/* Unified Page Header */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs text-left space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs text-[#475569]">
                <Link href="/" className="hover:text-[#0B4F82]">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-[#0B4F82] font-bold">Catalogues</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE]">
                <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0B4F82]">
                  ALL-IN-ONE MASTER CATALOGUES &bull; IN-HOUSE BACKPACKS &bull; CORPORATE GIFTING &bull; PDF FLIPBOOKS
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0F172A] tracking-tight leading-tight">
                Globrands Master <span className="text-[#0B4F82]">Catalogues</span>
              </h1>

              <p className="text-sm sm:text-[15px] text-[#475569] font-normal leading-relaxed">
                Explore our complete product range in one unified catalogue hub: our in-house manufactured backpack brands (
                <strong className="text-[#0B4F82]">Ninja Gear Original</strong> &amp;{' '}
                <strong className="text-[#0B4F82]">ADMA London</strong>), partner backpacks (
                <strong className="text-[#0F172A]">Skybags, Arctic Hunter, Swiss Military</strong>),{' '}
                <strong className="text-[#0F172A]">A-to-Z Corporate Gifting</strong> categories, and full digital PDF catalogues.
              </p>
            </div>

            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-extrabold uppercase tracking-wider whitespace-nowrap self-start lg:self-end shadow-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#FDE047]" />
              <span>Corporate Desk: {COMPANY_INFO.contact.corporatePhone}</span>
            </a>
          </div>

          {/* Unified Filter Tabs (3 Items Only) */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
            {[
              {
                id: 'backpacks' as CatalogueSectionTab,
                label: '01. In-House Brands & Backpacks',
                icon: Briefcase
              },
              {
                id: 'gifting' as CatalogueSectionTab,
                label: '02. Corporate Gifting (A-to-Z)',
                icon: Gift
              },
              {
                id: 'pdf' as CatalogueSectionTab,
                label: '03. Digital PDF Flipbooks',
                icon: FileText
              }
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSection(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#0B4F82] text-white shadow-xs'
                      : 'bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#334155] border border-slate-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#FDE047]' : 'text-[#0B4F82]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================
            SECTION 1: IN-HOUSE BRANDS & CORPORATE BACKPACKS
        ================================================================ */}
        {showBackpacks && (
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-left">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider font-extrabold text-[#0B4F82] block">
                  CATALOGUE SECTION 01 &bull; PRIMARY BUSINESS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                  Backpacks &amp; In-House Brands (Ninja Gear &amp; ADMA London)
                </h2>
              </div>
            </div>

            {/* 1A. NINJA GEAR ORIGINAL */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#FDE68A] shadow-xs text-left space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#FDE68A]">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-28 rounded-xl overflow-hidden border border-[#FCD34D] bg-white p-2 flex items-center justify-center shrink-0">
                    <img
                      src="/catalog/brands/ninja_gear_logo.jpg"
                      alt="Ninja Gear Original"
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-extrabold text-[#B45309] uppercase tracking-wider block">
                      In-House Manufactured Brand #1 &bull; Anti-Theft &bull; USB Tech
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                      NINJA GEAR ORIGINAL
                    </h3>
                    <p className="text-xs text-[#475569] mt-0.5">
                      Concealed anti-theft zippers, external USB charging port, and 17&quot; padded laptop protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 self-start md:self-center">
                  <button
                    type="button"
                    onClick={() => setShowAllNinja(!showAllNinja)}
                    className="px-4 py-2.5 rounded-xl bg-[#FFFBEB] hover:bg-[#FEF3C7] border border-[#FCD34D] text-[#92400E] text-xs font-extrabold transition-all cursor-pointer"
                  >
                    {showAllNinja
                      ? 'Show Top 3 Only'
                      : `View All ${allNinjaProducts.length} Ninja Gear Models`}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ninjaProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>

            {/* 1B. ADMA LONDON */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#BFDBFE] shadow-xs text-left space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#DBEAFE]">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-28 rounded-xl overflow-hidden border border-[#93C5FD] bg-white p-2 flex items-center justify-center shrink-0">
                    <img
                      src="/catalog/brands/adma_london_logo.jpg"
                      alt="ADMA London"
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-extrabold text-[#0B4F82] uppercase tracking-wider block">
                      In-House Manufactured Brand #2 &bull; Rain Cover &bull; Executive Travel
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                      ADMA LONDON
                    </h3>
                    <p className="text-xs text-[#475569] mt-0.5">
                      38L–40L jumbo travel capacity, integrated waterproof rain cover, RFID security pocket, and shoe pouch.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 self-start md:self-center">
                  <button
                    type="button"
                    onClick={() => setShowAllAdma(!showAllAdma)}
                    className="px-4 py-2.5 rounded-xl bg-[#EFF6FF] hover:bg-[#DBEAFE] border border-[#93C5FD] text-[#0B4F82] text-xs font-extrabold transition-all cursor-pointer"
                  >
                    {showAllAdma
                      ? 'Show Top 3 Only'
                      : `View All ${allAdmaProducts.length} ADMA London Models`}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {admaProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>

            {/* 1C. PARTNER BRAND BACKPACKS & CATEGORIES */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200/90 shadow-xs text-left space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-200">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-extrabold text-[#D97706] uppercase tracking-wider flex items-center gap-1.5">
                    <Factory className="w-3.5 h-3.5 text-[#0B4F82]" />
                    <span>Multi-Brand Partner Backpacks &amp; Categories</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                    Partner Brand Bags (Skybags, Arctic Hunter, Swiss Military) &amp; Categories
                  </h3>
                  <p className="text-xs text-[#475569]">
                    We also supply and custom-brand leading national and international backpack brands for corporate gifting orders.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {PARTNER_AND_CATEGORY_TABS.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setActiveBagCategoryTab(group.id)}
                    className={`text-xs px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                      activeBagCategoryTab === group.id
                        ? 'bg-[#0B4F82] text-white shadow-2xs'
                        : 'bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#334155] border border-[#E2E8F0]'
                    }`}
                  >
                    {group.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categoryBags.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================
            SECTION 2: A-TO-Z CORPORATE GIFTING CATALOGUE
        ================================================================ */}
        {showGifting && (
          <div className="space-y-8 pt-2">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-left">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider font-extrabold text-[#D97706] block">
                  CATALOGUE SECTION 02 &bull; SECONDARY BUSINESS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                  A-to-Z Corporate Gifting &amp; Employee Welcome Kits
                </h2>
              </div>
            </div>

            {/* 9 Corporate Gifting Categories with 4-Image Grids */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {CORPORATE_GIFTING_DATA.categories.map((cat, idx) => {
                const IconComp = cat.icon;
                const multiImages = (cat as any).images || [cat.image];
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border-2 border-[#DBEAFE] overflow-hidden shadow-2xs flex flex-col justify-between"
                  >
                    <div className="p-3 bg-[#F0F7FF] border-b border-[#DBEAFE] relative">
                      <div className="grid grid-cols-2 gap-2">
                        {multiImages.slice(0, 4).map((imgSrc: string, i: number) => (
                          <div
                            key={i}
                            className="aspect-[4/3] rounded-lg bg-white border border-[#E2E8F0] p-1 flex items-center justify-center"
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
                      <span className="absolute top-4 left-4 text-[9px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#0B4F82] text-white">
                        {cat.tag}
                      </span>
                    </div>

                    <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-[#0B4F82] mb-1">
                          <IconComp className="w-4 h-4 text-[#D97706]" />
                          <span className="text-[10px] font-mono uppercase font-bold">
                            {cat.subtitle}
                          </span>
                        </div>
                        <h3 className="text-base font-extrabold text-[#0F172A]">{cat.title}</h3>
                        <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                          {cat.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <a
                          href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                          className="text-xs font-extrabold text-[#0B4F82] hover:text-[#D97706] flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call for Options</span>
                        </a>
                        <a
                          href={`https://wa.me/${COMPANY_INFO.contact.phoneRaw}?text=${encodeURIComponent(
                            `Hello Globrands, please share options and bulk pricing for ${cat.title}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
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

            {/* 3 Sample Executive Gift Boxes */}
            <div className="space-y-4 text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                Sample Executive Gift Boxes (3 Featured Sets)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topGiftBoxes.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* 3 Sample Bamboo & Drinkware Items */}
            {bambooAndBottles.length > 0 && (
              <div className="space-y-4 text-left">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                  Sample Sustainable Bamboo &amp; Vacuum Drinkware (3 Featured Items)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {bambooAndBottles.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================================================================
            SECTION 3: DIGITAL PDF CATALOGUES FLIPBOOK VIEWER
        ================================================================ */}
        {showPdf && (
          <div className="space-y-6 pt-2">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-left">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider font-extrabold text-[#0B4F82] block">
                  CATALOGUE SECTION 03 &bull; DIGITAL PDF FLIPBOOKS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                  Interactive PDF Catalogues (37-Page Backpacks &amp; 146-Page Corporate Gifts)
                </h2>
              </div>
            </div>

            {/* Top Control Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center bg-[#F8FAFC] p-1 rounded-xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      setPdfType('bags');
                      setCurrentPage(1);
                      setIsZoomed(false);
                    }}
                    className={`px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                      pdfType === 'bags'
                        ? 'bg-[#0B4F82] text-white shadow-2xs'
                        : 'text-[#475569] hover:text-[#0F172A]'
                    }`}
                  >
                    Globrands Bags PDF (37 Pages)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPdfType('gifts');
                      setCurrentPage(1);
                      setIsZoomed(false);
                    }}
                    className={`px-3.5 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                      pdfType === 'gifts'
                        ? 'bg-[#0B4F82] text-white shadow-2xs'
                        : 'text-[#475569] hover:text-[#0F172A]'
                    }`}
                  >
                    All-In-One Gifts PDF (146 Pages)
                  </button>
                </div>

                <span className="text-xs text-[#64748B] font-semibold">
                  Page <b className="text-[#0F172A]">{currentPage}</b> of {totalPages}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-[#334155] shadow-2xs transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isZoomed ? 'Actual Size' : 'Zoom In'}</span>
                </button>

                <a
                  href={getPageWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  <span>Enquire Page {currentPage}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(true)}
                  className="px-3.5 py-2 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Bulk RFQ</span>
                </button>
              </div>
            </div>

            {/* Center Page Canvas */}
            <div className="relative rounded-3xl overflow-auto bg-[#F1F5F9] border border-slate-200 min-h-[70vh] flex items-center justify-center p-4 sm:p-8 shadow-inner">
              <img
                src={getPageImagePath(currentPage)}
                alt={`Catalogue Page ${currentPage}`}
                className={`transition-all duration-300 rounded-xl shadow-xl border border-slate-200 ${
                  isZoomed
                    ? 'max-w-none w-[130%] cursor-zoom-out'
                    : 'max-h-[75vh] max-w-full object-contain cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />

              <button
                type="button"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 hover:bg-[#0B4F82] text-[#0F172A] hover:text-white border border-slate-200 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-lg cursor-pointer"
                title="Previous Page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 hover:bg-[#0B4F82] text-[#0F172A] hover:text-white border border-slate-200 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-lg cursor-pointer"
                title="Next Page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Page Navigation Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#334155]">
              <div className="flex items-center gap-2">
                <span>Jump to page:</span>
                <input
                  type="number"
                  min={1}
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    if (val >= 1 && val <= totalPages) setCurrentPage(val);
                  }}
                  className="w-16 px-2 py-1.5 rounded-lg bg-[#F8FAFC] border border-slate-200 text-[#0F172A] text-center font-bold"
                />
                <span className="text-slate-400">/ {totalPages}</span>
              </div>

              <div className="flex-1 max-w-md mx-4">
                <input
                  type="range"
                  min={1}
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => setCurrentPage(parseInt(e.target.value, 10))}
                  className="w-full accent-[#0B4F82] cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="px-3.5 py-1.5 rounded-lg bg-[#F8FAFC] hover:bg-slate-200/70 border border-slate-200 disabled:opacity-30 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-3.5 py-1.5 rounded-lg bg-[#0B4F82] text-white hover:bg-[#083B63] disabled:opacity-30 cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
