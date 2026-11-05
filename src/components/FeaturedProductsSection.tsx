'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

export const FeaturedProductsSection: React.FC = () => {
  const featuredIds = ['hgs-h74', 'bg-boxer', 'hgs-h71', 'bg-volvo-2'];
  const featuredProducts = featuredIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Header matching media_1793878039758_2b665fa3.jpg */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2.5 max-w-lg">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0876B4]">
              Featured Products
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#101828] tracking-[-0.025em] leading-[1.12]">
              Corporate essentials, ready to brand
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0876B4] hover:text-[#101828] transition-colors self-start sm:self-end"
          >
            <span>View all (180+) products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
