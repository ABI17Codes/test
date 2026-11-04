'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Plus, Edit2, Trash2, EyeOff } from 'lucide-react';
import { CATEGORIES } from '@/data/products';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = () => {
    setLoading(true);
    fetch('/api/products?includeInactive=1')
      .then((res) => res.json())
      .then((data) => {
        if (data.products) setProducts(data.products);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}" from the catalog?`)) return;

    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredProducts = products.filter((p) => {
    const matchesCat = categoryFilter === 'all' || p.category === categoryFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      p.name?.toLowerCase().includes(q) ||
      p.code?.toLowerCase().includes(q) ||
      p.brand?.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
            Product Catalog Manager
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            Create, update, and manage official catalog products across Gifting and Bags.
          </p>
        </div>

        <Link
          href="/admin/products/new"
          className="px-4 py-2 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </Link>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1 bg-neutral-100 p-1 rounded-xl">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                categoryFilter === cat.id
                  ? 'bg-white text-neutral-900 shadow-2xs'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search code, product, brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-neutral-200 text-xs focus:ring-2 focus:ring-[#2563eb] focus:outline-none bg-white"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-2xs overflow-hidden">
        {loading ? (
          <div className="py-20 text-center text-xs text-neutral-400">Loading catalog...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-xs text-neutral-500">
            No products match the filter.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-400 font-bold uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Code</th>
                  <th className="py-3 px-4">Brand</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Indicative MRP</th>
                  <th className="py-3 px-4">MOQ</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 font-medium">
                {filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-neutral-50/70 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={p.image_url || p.image || '/catalog/crops/hgs_h74.jpg'}
                          alt={p.name}
                          className="w-10 h-10 rounded-lg object-cover border border-neutral-200 bg-neutral-100 shrink-0"
                        />
                        <div className="min-w-0">
                          <span className="font-bold text-neutral-900 line-clamp-1 max-w-[220px]">
                            {p.name}
                          </span>
                          {p.is_active === false && (
                            <span className="inline-flex items-center gap-1 mt-0.5 px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-500 text-[10px] font-bold">
                              <EyeOff className="w-3 h-3" /> Hidden
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-[#2563eb]">
                      {p.code}
                    </td>
                    <td className="py-3 px-4 text-neutral-600 font-semibold">
                      {p.brand}
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 text-[10px] font-bold capitalize">
                        {p.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-neutral-900">
                      ₹{p.price || p.mrp || 450}
                    </td>
                    <td className="py-3 px-4 text-neutral-500">
                      {p.moq || 50}
                    </td>
                    <td className="py-3 px-4 text-right space-x-1 whitespace-nowrap">
                      <Link
                        href={`/admin/products/${encodeURIComponent(p.id)}/edit`}
                        className="inline-flex p-1.5 rounded-lg text-neutral-600 hover:bg-neutral-100"
                        title="Edit Product"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => handleDeleteProduct(p.id, p.name)}
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                        title="Delete Product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
