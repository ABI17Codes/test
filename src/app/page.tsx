import React from 'react';
import { Hero } from '../components/Hero';
import { BackpackCategoriesSection } from '../components/BackpackCategoriesSection';
import { ManufacturingStorySection } from '../components/ManufacturingStorySection';
import { InHouseBrandsSpotlight } from '../components/InHouseBrandsSpotlight';
import { CorporateGiftingSection } from '../components/CorporateGiftingSection';
import { EnterpriseTrustBar } from '../components/EnterpriseTrustBar';
import { ContactSection } from '../components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#292725] flex flex-col">
      {/* 1. Immersive Full-Screen Editorial Hero: "BUILT TO MOVE. MADE TO LAST." */}
      <Hero />

      {/* 2. Asymmetrical Editorial Product Collection Grid: "DESIGNED FOR EVERY JOURNEY." */}
      <BackpackCategoriesSection />

      {/* 3. Immersive Manufacturing Storytelling: "PRECISION IN EVERY STITCH." */}
      <ManufacturingStorySection />

      {/* 4. Independent Brand Campaigns: ADMA LONDON & NINJA GEAR */}
      <InHouseBrandsSpotlight />

      {/* 5. Corporate Gifting (Secondary Segment): "THOUGHTFUL GIFTS. LASTING IMPRESSIONS." */}
      <CorporateGiftingSection />

      {/* 6. Minimalist Trust & Capabilities: "WHY GLOBRANDS." */}
      <EnterpriseTrustBar />

      {/* 7. Final Business Enquiry Concierge: "LET'S BUILD SOMETHING TOGETHER." */}
      <ContactSection />
    </div>
  );
}
