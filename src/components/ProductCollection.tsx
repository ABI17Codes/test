'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  X
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductCollectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onQuickView: (product: Product) => void;
  onOpenCatalogPage: (type: 'bags' | 'gifts', page: number) => void;
}

export const ProductCollection: React.FC<ProductCollectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onOpenCatalogPage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      // Brand match
      const matchesBrand =
        selectedBrand === 'all' || product.brand === selectedBrand;

      // Search match (name, code, description, tags, composition)
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
  }, [selectedCategory, selectedBrand, searchQuery]);

  const brands = ['all', 'Globrands Lifestyle', 'Ninja Gear', 'ADMA London'];

  return (
    <section id="collection" className="py-24 relative bg-[#fcfbf9] border-t border-neutral-200/60">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf5e8] border border-[#b88e3e]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#916c27]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#916c27]">
              OFFICIAL CATALOGUE SHOWCASE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-serif-luxury">
            EXPLORE OUR COLLECTION
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Thoughtfully selected products for every occasion, corporate event, and brand identity. Real catalogue items with verified specifications.
          </p>
        </div>

        {/* Filter Controls & Search Bar in Clean Light Luxury Panel */}
        <div className="bg-white p-5 sm:p-7 rounded-2xl border border-neutral-200/80 mb-10 space-y-5 shadow-xs">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
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

            {/* Brand Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
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

          </div>

          {/* Category Chips Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 pb-1 scrollbar-none border-t border-neutral-100">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs whitespace-nowrap transition-all ${
                    isSelected
                      ? 'gold-luxury-button shadow-sm font-bold'
                      : 'bg-neutral-100 hover:bg-neutral-200/70 text-neutral-700 hover:text-black border border-neutral-200 font-semibold'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter & Quick Actions */}
        <div className="flex items-center justify-between text-xs text-neutral-500 pb-6 px-1">
          <div>
            Showing <span className="font-bold text-neutral-900">{filteredProducts.length}</span> curated corporate products
            {selectedCategory !== 'all' && (
              <span className="text-[#916c27] font-bold ml-1">
                in {CATEGORIES.find((c) => c.id === selectedCategory)?.name}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-neutral-400">
              Direct from Official Catalogues
            </span>
            <button
              onClick={() => {
                setSelectedBrand('all');
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="text-[#916c27] hover:underline font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onOpenCatalogPage={onOpenCatalogPage}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl border border-neutral-200 bg-white shadow-xs">
            <p className="text-base text-neutral-800 font-bold">No products match your search criteria.</p>
            <p className="text-xs text-neutral-500 mt-1">Try resetting filters or search by product code like "HGS" or "Ninja".</p>
            <button
              onClick={() => {
                setSelectedBrand('all');
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 rounded-xl primary-luxury-button text-xs font-bold"
            >
              Show All Products
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
