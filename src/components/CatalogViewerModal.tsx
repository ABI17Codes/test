'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  ZoomIn, 
  ZoomOut, 
  Download, 
  MessageCircle,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

interface CatalogViewerModalProps {
  isOpen: boolean;
  type: 'bags' | 'gifts';
  initialPage?: number;
  onClose: () => void;
  onSwitchType: (type: 'bags' | 'gifts') => void;
}

export const CatalogViewerModal: React.FC<CatalogViewerModalProps> = ({
  isOpen,
  type,
  initialPage = 1,
  onClose,
  onSwitchType
}) => {
  const { setIsDrawerOpen } = useQuote();
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isZoomed, setIsZoomed] = useState(false);

  const totalPages = type === 'bags' ? 37 : 146;

  useEffect(() => {
    setCurrentPage(initialPage);
    setIsZoomed(false);
  }, [type, initialPage, isOpen]);

  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-5xl h-[92vh] bg-white border border-neutral-300 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-[#FAF8F5] border-b border-neutral-200 flex items-center justify-between gap-3 text-xs">
          
          {/* Switcher & Title */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-neutral-200/70 p-1 rounded-xl border border-neutral-300/60">
              <button
                onClick={() => onSwitchType('bags')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  type === 'bags'
                    ? 'bg-[#111317] text-white font-bold shadow-xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                Bags (37 Pages)
              </button>
              <button
                onClick={() => onSwitchType('gifts')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  type === 'gifts'
                    ? 'bg-[#111317] text-white font-bold shadow-xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                All-In-One Gifts (146 Pages)
              </button>
            </div>

            <span className="hidden md:inline text-neutral-500 font-medium">
              Page <b className="text-[#111317]">{currentPage}</b> of {totalPages}
            </span>
          </div>

          {/* Quick Page Jump & Zoom */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-1.5 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-700 shadow-2xs transition-colors"
              title={isZoomed ? 'Zoom Out' : 'Zoom In'}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>

            <a
              href={getPageWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-semibold shadow-2xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Enquire Page {currentPage}</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100 shadow-2xs transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Center Page Canvas */}
        <div className="flex-1 relative overflow-auto bg-[#F4F1EA] flex items-center justify-center p-4">
          
          <img
            src={getPageImagePath(currentPage)}
            alt={`Page ${currentPage}`}
            className={`transition-all duration-300 rounded-lg shadow-xl border border-neutral-300 ${
              isZoomed ? 'max-w-none w-[130%] cursor-zoom-out' : 'max-h-full max-w-full object-contain cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Prev Page Floating Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 hover:bg-white text-neutral-800 border border-neutral-300 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-lg hover:scale-105"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Page Floating Arrow */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/95 hover:bg-white text-neutral-800 border border-neutral-300 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-lg hover:scale-105"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Navigation Slider & Page Bar */}
        <div className="px-6 py-3 bg-[#FAF8F5] border-t border-neutral-200 flex items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center gap-2 text-neutral-600 font-medium">
            <span>Jump to:</span>
            <input
              type="number"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (val >= 1 && val <= totalPages) setCurrentPage(val);
              }}
              className="w-16 px-2 py-1 rounded-md bg-white border border-[#E5E7EB] text-[#101828] text-center font-bold focus:outline-none focus:border-[#0876B4] shadow-2xs"
            />
          </div>

          <div className="flex-1 max-w-xs mx-4">
            <input
              type="range"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => setCurrentPage(parseInt(e.target.value))}
              className="w-full accent-[#0876B4] cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                setIsDrawerOpen(true);
              }}
              className="px-4 py-1.5 rounded-full bg-[#0876B4] hover:bg-[#075f91] text-white font-bold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

