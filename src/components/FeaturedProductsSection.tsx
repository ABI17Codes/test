'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

export const FeaturedProductsSection: React.FC = () => {
  // Select top featured items across categories
  const featuredIds = ['hgs-h74', 'bg-boxer', 'bg-volvo-2', 'hgs-h66'];
  const featuredProducts = PRODUCTS.filter((p) => featuredIds.includes(p.id));

  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-[#0876B4]" />
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
                Enterprise Best-Sellers
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-[-0.035em]">
              Curated corporate staples,{' '}
              <span className="brand-gradient-text">
                ready to brand.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#667085] font-normal leading-relaxed">
              Our most-requested executive gift sets and corporate backpacks, trusted by over 500+ enterprise procurement teams across India.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 btn-primary text-xs sm:text-sm self-start md:self-end group cursor-pointer"
          >
            <span>View All 180+ Products</span>
            <ArrowRight className="w-4 h-4 text-[#E8B43A] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
