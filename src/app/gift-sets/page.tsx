'use client';

import React, { Suspense } from 'react';
import { UnifiedCataloguesHub } from '../../components/UnifiedCataloguesHub';

export default function GiftSetsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-slate-500">Loading Corporate Gifting Catalogue...</div>}>
      <UnifiedCataloguesHub defaultSection="gifting" />
    </Suspense>
  );
}
