'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Hero } from '../components/Hero';
import { EnterpriseTrustBar } from '../components/EnterpriseTrustBar';
import { SignatureCollections } from '../components/SignatureCollections';
import { GiftingWorkflowSection } from '../components/GiftingWorkflowSection';
import { DigitalCataloguesSection } from '../components/DigitalCataloguesSection';
import { QualityPromiseSection } from '../components/QualityPromiseSection';
import { BespokeConciergeCTA } from '../components/BespokeConciergeCTA';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen">
      {/* 1. Modern Studio Luxe + Delight Hero with Flagship Showcase */}
      <Hero
        onExploreCollection={() => router.push('/products')}
        onRequestQuote={() => router.push('/quote')}
      />

      {/* 2. Fortune 500 Enterprise Trust Bar & Verified Metrics */}
      <EnterpriseTrustBar />

      {/* 3. The 4 Curated Signature Collections (Asymmetrical Bento) */}
      <SignatureCollections />

      {/* 4. The 3-Step Enterprise Gifting Experience (Curate -> Proof -> Dispatch) */}
      <GiftingWorkflowSection />

      {/* 5. Official Digital Catalogue Flipbooks (All-in-One & Executive Bags) */}
      <DigitalCataloguesSection />

      {/* 6. 5-Stage In-House Quality Assurance & Bengaluru Manufacturing */}
      <QualityPromiseSection />

      {/* 7. Dark Luxury Bespoke Concierge & Bulk RFQ Invitation */}
      <BespokeConciergeCTA />
    </div>
  );
}
