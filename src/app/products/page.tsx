'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  Search, 
  Sparkles, 
  X, 
  Filter, 
  SlidersHorizontal,
  ChevronRight,
  ArrowUpDown
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

  const brands = ['all', 'Globrands Lifestyle', 'Ninja Gear', 'ADMA London'];

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
    <div className="py-12 bg-[#FCFBF9]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Breadcrumb Header */}
        <div className="text-left mb-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <a href="/" className="hover:text-black">Home</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#916c27] font-semibold">Corporate Product Catalogue</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            OFFICIAL B2B PRODUCT CATALOGUE
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl font-normal">
            Explore 183+ verified SKUs from the ALL In One and Globrands Bag Catalogues. Filter by brand, product type, and features to build your corporate RFQ.
          </p>
        </div>

        {/* Master Filter & Search Toolbar */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200/90 shadow-xs mb-8 space-y-5">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by code (e.g. HGS-H74, Boxer, Volvo), product name, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] focus:bg-white focus:ring-2 focus:ring-[#b88e3e]/20 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Brand Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <span className="text-xs text-neutral-500 font-semibold px-2 shrink-0">Brand:</span>
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all shadow-2xs ${
                    selectedBrand === b
                      ? 'bg-[#111317] text-white shadow-xs'
                      : 'bg-neutral-100 hover:bg-neutral-200/70 text-neutral-700 border border-neutral-200/60'
                  }`}
                >
                  {b === 'all' ? 'All Brands' : b}
                </button>
              ))}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <ArrowUpDown className="w-4 h-4 text-neutral-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-xl bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800 focus:outline-none focus:border-[#b88e3e]"
              >
                <option value="featured">Featured Ordering</option>
                <option value="code">Product Code (A - Z)</option>
                <option value="name">Product Name (A - Z)</option>
              </select>
            </div>

          </div>

          {/* Category Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1 scrollbar-none border-t border-neutral-100">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 shadow-2xs ${
                    isSelected
                      ? 'bg-[#b88e3e] text-white shadow-xs'
                      : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border border-neutral-200/80'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white font-extrabold'
                        : 'bg-neutral-200/70 text-neutral-600'
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
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-6 pb-2 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <span>Showing <b className="text-neutral-900 font-bold">{filteredProducts.length}</b> verified corporate models</span>
            {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
              <span className="px-2 py-0.5 rounded-full bg-[#fbf5e8] text-[#916c27] font-semibold border border-[#b88e3e]/30 text-[11px]">
                Filtered
              </span>
            )}
          </div>

          <button
            onClick={resetAll}
            className="text-[#916c27] hover:underline font-bold text-xs"
          >
            Reset All Filters
          </button>
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
          <div className="text-center py-24 rounded-3xl border border-neutral-200 bg-white shadow-xs space-y-3">
            <p className="text-lg text-neutral-800 font-bold font-serif-luxury">No products match your search criteria.</p>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              Try adjusting your filters or search by generic terms such as "boxer", "hamper", "diary", or "bottle".
            </p>
            <button
              onClick={resetAll}
              className="px-5 py-2.5 rounded-xl gold-luxury-button text-xs font-bold"
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

