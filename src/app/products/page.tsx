'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
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

  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState<'featured' | 'code' | 'name'>('featured');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && Array.isArray(data.products) && data.products.length > 0) {
          setProducts(data.products);
        }
      })
      .catch(() => {});
  }, []);

  const brands = [
    { id: 'all', label: 'All Brands' },
    { id: 'Ninja Gear', label: 'Ninja Gear (In-House Backpacks)' },
    { id: 'ADMA London', label: 'ADMA London (In-House Bags)' },
    { id: 'Globrands Lifestyle Pvt. Ltd.', label: 'Globrands Lifestyle Pvt. Ltd.' },
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const matchesBrand =
        selectedBrand === 'all' ||
        product.brand === selectedBrand ||
        (selectedBrand.startsWith('Globrands') && product.brand.startsWith('Globrands'));

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.code.toLowerCase().includes(q) ||
        (product.description && product.description.toLowerCase().includes(q)) ||
        (Array.isArray(product.tags) && product.tags.some((t) => t.toLowerCase().includes(q))) ||
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
  }, [products, selectedCategory, selectedBrand, searchQuery, sortBy]);

  const resetAll = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSearchQuery('');
    setSortBy('featured');
    router.push('/products');
  };

  return (
    <div className="py-10 bg-[#F5F0E8] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        
        {/* Breadcrumb & Section Header */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#69635C]">
            <Link href="/" className="hover:text-[#211D1A]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#A98554] font-semibold">Corporate Gifting &amp; Carrywear</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#A98554]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#A98554]">
              B2B DIRECT FACTORY CATALOGUE &bull; 180+ VERIFIED SKUS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#211D1A] tracking-[-0.03em]">
            Corporate Gifting &amp;{' '}
            <span className="brand-gradient-text">
              Executive Carrywear
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#69635C] max-w-3xl font-normal leading-relaxed">
            Explore verified executive gift hampers, tech suites, and engineered bags manufactured in-house at our Bengaluru atelier. Filter by brand, category, or specifications to build your corporate RFQ.
          </p>

          {/* Quick SLA / Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D8] text-xs font-semibold text-[#211D1A] shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#A98554]" />
              180+ Ready SKUs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D8] text-xs font-semibold text-[#211D1A] shadow-2xs">
              <Truck className="w-3.5 h-3.5 text-[#A98554]" />
              3-5 Days SLA Dispatch
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D8] text-xs font-semibold text-[#211D1A] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A98554]" />
              1-Yr Bag Replacement Warranty
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#EAE3D8] text-xs font-semibold text-[#211D1A] shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#C5A16D]" />
              Free 3D Proof in 24 Hours
            </span>
          </div>
        </div>

        {/* Master Filter & Search Toolbar */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#EAE3D8] shadow-xs space-y-4 text-left">
          
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
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-[#F5F0E8] border border-[#EAE3D8] text-sm text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#A98554] focus:bg-white focus:ring-2 focus:ring-[#A98554]/20 transition-all font-medium"
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
              <span className="text-xs text-[#69635C] font-bold uppercase tracking-wider px-1 shrink-0">Brand:</span>
              {brands.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBrand(b.id)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedBrand === b.id
                      ? 'bg-[#211D1A] text-white shadow-xs font-bold'
                      : 'bg-[#F5F0E8] hover:bg-neutral-200/70 text-[#69635C] border border-[#EAE3D8]'
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
                className="px-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-xs font-semibold text-[#211D1A] focus:outline-none focus:border-[#A98554] cursor-pointer"
              >
                <option value="featured">Featured Ordering</option>
                <option value="code">Product Code (A - Z)</option>
                <option value="name">Product Name (A - Z)</option>
              </select>
            </div>

          </div>

          {/* Bottom Row: Category Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1 scrollbar-none border-t border-[#EAE3D8]">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#A98554] text-white shadow-sm font-bold scale-[1.02]'
                      : 'bg-[#F5F0E8] hover:bg-neutral-100 text-[#69635C] border border-[#EAE3D8]'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white font-extrabold'
                        : 'bg-neutral-200/80 text-[#69635C]'
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
        <div className="flex items-center justify-between text-xs text-[#69635C] pb-2 border-b border-[#EAE3D8]">
          <div className="flex items-center gap-2">
            <span>Showing <b className="text-[#211D1A] font-bold">{filteredProducts.length}</b> verified corporate models</span>
            {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
              <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#A98554] font-semibold border border-blue-200 text-[11px]">
                Filtered
              </span>
            )}
          </div>

          {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
            <button
              onClick={resetAll}
              className="text-[#A98554] hover:underline font-bold text-xs flex items-center gap-1 cursor-pointer"
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
          <div className="text-center py-24 rounded-3xl border border-[#EAE3D8] bg-white shadow-xs space-y-4">
            <p className="text-xl text-[#211D1A] font-bold">No products match your search criteria.</p>
            <p className="text-xs sm:text-sm text-[#69635C] max-w-sm mx-auto">
              Try adjusting your filters or search by generic terms such as "boxer", "hamper", "diary", or "bottle".
            </p>
            <button
              onClick={resetAll}
              className="px-6 py-2.5 rounded-full bg-[#A98554] hover:bg-[#40352D] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
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
