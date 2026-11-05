import React from 'react';
import { Hero } from '../components/Hero';
import { EnterpriseTrustBar } from '../components/EnterpriseTrustBar';
import { SignatureCollections } from '../components/SignatureCollections';
import { CorporatePromotionsSection } from '../components/CorporatePromotionsSection';
import { HomepageSolutionsSection } from '../components/HomepageSolutionsSection';
import { FeaturedProductsSection } from '../components/FeaturedProductsSection';
import { CustomerTestimonials } from '../components/CustomerTestimonials';
import { BespokeConciergeCTA } from '../components/BespokeConciergeCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#101828] flex flex-col">
      {/* 2. Split Hero */}
      <Hero />

      {/* 3. Enterprise Statistics */}
      <EnterpriseTrustBar />

      {/* 4. Signature Collections (Asymmetric 7/5 Bento Grid) */}
      <SignatureCollections />

      {/* 5. Why Choose Globrands */}
      <CorporatePromotionsSection />

      {/* 6. Corporate Gifting Solutions */}
      <HomepageSolutionsSection />

      {/* 7. Featured Products */}
      <FeaturedProductsSection />

      {/* 8. Client Testimonials */}
      <CustomerTestimonials />

      {/* 9. Premium CTA Section */}
      <BespokeConciergeCTA />
    </div>
  );
}
