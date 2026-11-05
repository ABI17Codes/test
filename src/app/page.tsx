'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Hero } from '../components/Hero';
import { EnterpriseTrustBar } from '../components/EnterpriseTrustBar';
import { SignatureCollections } from '../components/SignatureCollections';
import { FeaturedProductsSection } from '../components/FeaturedProductsSection';
import { GiftingWorkflowSection } from '../components/GiftingWorkflowSection';
import { CorporatePromotionsSection } from '../components/CorporatePromotionsSection';
import { CustomerTestimonials } from '../components/CustomerTestimonials';
import { DigitalCataloguesSection } from '../components/DigitalCataloguesSection';
import { BespokeConciergeCTA } from '../components/BespokeConciergeCTA';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="bg-[#F5F7FA] text-[#101828] min-h-screen">
      {/* 1. Hero Section - Sophisticated Split Layout */}
      <Hero
        onExploreCollection={() => router.push('/products')}
        onRequestQuote={() => router.push('/quote')}
      />

      {/* 2. Trust & Statistics Section */}
      <EnterpriseTrustBar />

      {/* 3. Signature Collections (4 Core Brand Pillars) */}
      <SignatureCollections />

      {/* 4. Featured Products (Curated 4-Column Grid) */}
      <FeaturedProductsSection />

      {/* 5. Corporate Gifting Experience (3-Step Process) */}
      <GiftingWorkflowSection />

      {/* 6. Dedicated B2B Promotional Section */}
      <CorporatePromotionsSection />

      {/* 7. Testimonials & Client Trust */}
      <CustomerTestimonials />

      {/* 8. Digital Catalogue Flipbooks (All-in-One & Executive Bags) */}
      <DigitalCataloguesSection />

      {/* 9. Final High-Impact CTA */}
      <BespokeConciergeCTA />
    </div>
  );
}
