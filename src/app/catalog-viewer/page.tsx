'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  ZoomIn, 
  ZoomOut, 
  MessageCircle,
  ShoppingBag,
  ArrowLeft,
  Share2
} from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

function CatalogViewerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsDrawerOpen } = useQuote();

  const initialType = (searchParams.get('type') === 'bags' ? 'bags' : 'gifts') as 'bags' | 'gifts';
  const initialPage = parseInt(searchParams.get('page') || '1') || 1;

  const [type, setType] = useState<'bags' | 'gifts'>(initialType);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isZoomed, setIsZoomed] = useState(false);

  const totalPages = type === 'bags' ? 37 : 146;

  useEffect(() => {
    setType(initialType);
    setCurrentPage(initialPage);
  }, [initialType, initialPage]);

  const getPageImagePath = (page: number) => {
    if (type === 'bags') {
      const padded = page.toString().padStart(2, '0');
      return `/catalog/bags/page_${padded}.jpg`;
    } else {
      const padded = page.toString().padStart(3, '0');
      return `/catalog/gifts/page_${padded}.jpg`;
    }
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const getPageWhatsAppUrl = () => {
    const catalogName = type === 'bags' ? 'Globrands Bag Catalogue 2025' : 'ALL In One Corporate Gift Catalogue';
    const text = encodeURIComponent(
      `Hello Globrands Lifestyle, I am reviewing your ${catalogName} on Page ${currentPage} of ${totalPages} and would like to request bulk pricing and quotation for the products shown on this page.`
    );
    return `https://wa.me/919900020456?text=${text}`;
  };

  const switchType = (newType: 'bags' | 'gifts') => {
    setType(newType);
    setCurrentPage(1);
    setIsZoomed(false);
    router.push(`/catalog-viewer?type=${newType}&page=1`);
  };

  return (
    <div className="py-8 bg-[#FAF8F5] min-h-[90vh]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-6">
        
        {/* Top Control Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200/90 shadow-xs flex flex-wrap items-center justify-between gap-4 text-left">
          
          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
              title="Return to Product Catalog"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            {/* Switcher */}
            <div className="flex items-center bg-neutral-100 p-1 rounded-xl border border-neutral-200">
              <button
                onClick={() => switchType('bags')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  type === 'bags'
                    ? 'bg-[#111317] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                Globrands Bags (37 Pages)
              </button>
              <button
                onClick={() => switchType('gifts')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  type === 'gifts'
                    ? 'bg-[#111317] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                All-In-One Gifts (146 Pages)
              </button>
            </div>

            <span className="text-xs text-neutral-500 font-medium hidden md:inline">
              Page <b className="text-[#111317]">{currentPage}</b> of {totalPages}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-700 shadow-2xs transition-colors flex items-center gap-1.5 text-xs font-semibold"
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
              onClick={() => setIsDrawerOpen(true)}
              className="px-3.5 py-2 rounded-xl gold-luxury-button font-bold text-xs flex items-center gap-1.5 shadow-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Bulk RFQ</span>
            </button>
          </div>

        </div>

        {/* Center Page Canvas */}
        <div className="relative rounded-3xl overflow-auto bg-[#ECE8DE] border border-neutral-300 min-h-[75vh] flex items-center justify-center p-4 sm:p-8 shadow-inner">
          <img
            src={getPageImagePath(currentPage)}
            alt={`Page ${currentPage}`}
            className={`transition-all duration-300 rounded-xl shadow-2xl border border-neutral-300 ${
              isZoomed ? 'max-w-none w-[130%] cursor-zoom-out' : 'max-h-[80vh] max-w-full object-contain cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/95 hover:bg-white text-neutral-800 border border-neutral-300 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-xl hover:scale-105"
            title="Previous Page"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/95 hover:bg-white text-neutral-800 border border-neutral-300 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-xl hover:scale-105"
            title="Next Page"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Page Navigation Bar */}
        <div className="bg-white p-4 rounded-2xl border border-neutral-200/90 shadow-xs flex items-center justify-between gap-4 text-xs font-semibold text-neutral-700">
          <div className="flex items-center gap-2">
            <span>Jump to page:</span>
            <input
              type="number"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (val >= 1 && val <= totalPages) setCurrentPage(val);
              }}
              className="w-16 px-2 py-1.5 rounded-lg bg-neutral-100 border border-neutral-300 text-neutral-900 text-center font-bold"
            />
            <span className="text-neutral-400">/ {totalPages}</span>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <input
              type="range"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => setCurrentPage(parseInt(e.target.value))}
              className="w-full accent-[#b88e3e] cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 disabled:opacity-30"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 disabled:opacity-30"
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function CatalogViewerPage() {
  return (
    <Suspense fallback={
      <div className="py-24 text-center text-sm font-semibold text-neutral-500">
        Loading Digital PDF Catalogue...
      </div>
    }>
      <CatalogViewerContent />
    </Suspense>
  );
}

