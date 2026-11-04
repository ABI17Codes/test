'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { AlertCircle, RefreshCw } from 'lucide-react';
import ProductForm, { productToFormValues, type ProductFormValues } from '@/components/admin/ProductForm';

export default function AdminEditProductPage() {
  const { id } = useParams<{ id: string }>();
  const [initialValues, setInitialValues] = useState<ProductFormValues | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    fetch(`/api/products/${encodeURIComponent(id)}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || !data.product) throw new Error(data.error || 'Product not found');
        setInitialValues(productToFormValues(data.product));
      })
      .catch((err) => setError(err.message || 'Failed to load product'));
  }, [id]);

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-16 p-6 rounded-2xl bg-white border border-neutral-200 text-center space-y-3">
        <AlertCircle className="w-8 h-8 text-red-500 mx-auto" />
        <p className="text-sm font-bold text-neutral-900">{error}</p>
        <Link href="/admin/products" className="text-xs font-bold text-[#2563eb] hover:underline">
          Back to catalog
        </Link>
      </div>
    );
  }

  if (!initialValues) {
    return (
      <div className="py-24 text-center text-neutral-400 text-xs">
        <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#2563eb]" />
        Loading product...
      </div>
    );
  }

  return <ProductForm mode="edit" productId={id} initialValues={initialValues} />;
}

