'use client';

import React, { Suspense } from 'react';
import { UnifiedCataloguesHub } from '../../components/UnifiedCataloguesHub';

export default function BagsAndBrandsMergedPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-slate-500">Loading Catalogues...</div>}>
      <UnifiedCataloguesHub defaultSection="backpacks" />
    </Suspense>
  );
}
