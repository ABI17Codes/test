'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Search, 
  Sparkles, 
  X, 
  Filter, 
  SlidersHorizontal,
  ChevronRight,
  ArrowUpDown,
  ShieldCheck,
  Award,
  Layers,
  Truck,
  RotateCcw
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get('category') || 'all';
  const initialBrand = searchParams.get('brand') || 'all';
  const initialSearch = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState<'featured' | 'code' | 'name'>('featured');

  const brands = [
    { id: 'all', label: 'All Brands' },
    { id: 'Globrands Lifestyle', label: 'Globrands Lifestyle' },
    { id: 'Ninja Gear', label: 'Ninja Gear' },
    { id: 'ADMA London', label: 'ADMA London' },
  ];

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const matchesBrand =
        selectedBrand === 'all' || product.brand === selectedBrand;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.code.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.tags.some((t) => t.toLowerCase().includes(q)) ||
        (product.composition &&
          product.composition.some((c) => c.toLowerCase().includes(q)));

      return matchesCategory && matchesBrand && matchesSearch;
    });

    if (sortBy === 'code') {
      result = [...result].sort((a, b) => a.code.localeCompare(b.code));
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  const resetAll = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSearchQuery('');
    setSortBy('featured');
    router.push('/products');
  };

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        
        {/* Breadcrumb & Section Header */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0E679C] font-semibold">Corporate Product Directory</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0E679C]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0E679C]">
              B2B DIRECT FACTORY CATALOGUE &bull; 180+ VERIFIED SKUS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em]">
            Corporate Gifting &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E679C] via-[#0284C7] to-[#F5B800]">
              Executive Carrywear Directory
            </span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl font-normal leading-relaxed">
            Explore verified executive gift hampers, tech suites, and engineered bags manufactured in-house at our Bengaluru atelier. Filter by brand, category, or specifications to build your corporate RFQ.
          </p>

          {/* Quick SLA / Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold text-neutral-700 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#0E679C]" />
              180+ Ready SKUs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold text-neutral-700 shadow-2xs">
              <Truck className="w-3.5 h-3.5 text-[#0E679C]" />
              3-5 Days SLA Dispatch
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold text-neutral-700 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0E679C]" />
              1-Yr Bag Replacement Warranty
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200/80 text-xs font-semibold text-neutral-700 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#F5B800]" />
              Free 3D Proof in 24 Hours
            </span>
          </div>
        </div>

        {/* Master Filter & Search Toolbar */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-neutral-200/90 shadow-sm space-y-4 text-left">
          
          {/* Top Row: Search Input + Brand Switcher + Sort */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by SKU code (e.g. HGS-H74, Boxer, Volvo), product name, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#0E679C] focus:bg-white focus:ring-2 focus:ring-[#0E679C]/20 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Brand Switcher Segmented Control */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider px-1 shrink-0">Brand:</span>
              {brands.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBrand(b.id)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedBrand === b.id
                      ? 'bg-[#0F172A] text-white shadow-xs font-bold'
                      : 'bg-neutral-100 hover:bg-neutral-200/70 text-neutral-700 border border-neutral-200/60'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <ArrowUpDown className="w-4 h-4 text-neutral-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral-800 focus:outline-none focus:border-[#0E679C] cursor-pointer"
              >
                <option value="featured">Featured Ordering</option>
                <option value="code">Product Code (A - Z)</option>
                <option value="name">Product Name (A - Z)</option>
              </select>
            </div>

          </div>

          {/* Bottom Row: Category Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1 scrollbar-none border-t border-neutral-100">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0E679C] text-white shadow-sm font-bold scale-[1.02]'
                      : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border border-neutral-200/80'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white font-extrabold'
                        : 'bg-neutral-200/80 text-neutral-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Counter & Active Filter Indicators */}
        <div className="flex items-center justify-between text-xs text-neutral-500 pb-2 border-b border-neutral-200/80">
          <div className="flex items-center gap-2">
            <span>Showing <b className="text-neutral-900 font-bold">{filteredProducts.length}</b> verified corporate models</span>
            {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0E679C] font-semibold border border-blue-200 text-[11px]">
                Filtered
              </span>
            )}
          </div>

          {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
            <button
              onClick={resetAll}
              className="text-[#0E679C] hover:underline font-bold text-xs flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 rounded-3xl border border-neutral-200 bg-white shadow-xs space-y-4">
            <p className="text-xl text-neutral-900 font-bold">No products match your search criteria.</p>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mx-auto">
              Try adjusting your filters or search by generic terms such as "boxer", "hamper", "diary", or "bottle".
            </p>
            <button
              onClick={resetAll}
              className="px-6 py-2.5 rounded-full bg-[#0E679C] hover:bg-[#0A4E78] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="py-24 text-center text-sm font-semibold text-neutral-500">
        Loading Corporate Catalogue...
      </div>
    }>
      <ProductsCatalogContent />
    </Suspense>
  );
}
