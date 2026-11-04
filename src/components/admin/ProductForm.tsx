'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  ImageIcon,
  Plus,
  Trash2,
  Save,
  Tag,
  Palette,
  ListChecks,
  Sparkles
} from 'lucide-react';

export interface ProductFormValues {
  code: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  price: number | '';
  moq: number | '';
  image_url: string;
  tags: string[];
  branding_options: string[];
  colors: { name: string; hex: string }[];
  specs: { label: string; value: string }[];
  is_active: boolean;
}

export const EMPTY_PRODUCT: ProductFormValues = {
  code: '',
  name: '',
  category: 'gift-sets',
  brand: 'Globrands Lifestyle',
  description: '',
  price: '',
  moq: 50,
  image_url: '',
  tags: [],
  branding_options: [],
  colors: [],
  specs: [],
  is_active: true
};

const CATEGORY_OPTIONS = [
  { value: 'gift-sets', label: 'Corporate Gift Sets' },
  { value: 'bags', label: 'Bags & Backpacks' },
  { value: 'drinkware', label: 'Bottles & Flasks' },
  { value: 'mugs', label: 'Coffee Mugs & Tumblers' },
  { value: 'diaries', label: 'Executive Diaries' },
  { value: 'promotional', label: 'Keychains & Accessories' },
  { value: 'desktop', label: 'Desk Organizers & Clocks' }
];

const BRAND_OPTIONS = ['Globrands Lifestyle', 'Ninja Gear', 'ADMA London'];

const BRANDING_METHODS = [
  'Laser Engraving',
  'Screen Printing',
  'UV Printing',
  'Embroidery',
  'Debossing',
  'Embossing',
  'Pad Printing',
  'Sublimation',
  'Metal Badge'
];

/** Convert any product record (DB or static catalog) to form values */
export function productToFormValues(p: any): ProductFormValues {
  const rawSpecs = p.specs ?? p.specifications;
  const specs = Array.isArray(rawSpecs)
    ? rawSpecs.filter((s: any) => s && typeof s.label === 'string')
    : rawSpecs && typeof rawSpecs === 'object'
      ? Object.entries(rawSpecs).map(([label, value]) => ({ label, value: String(value) }))
      : [];

  return {
    code: p.code ?? '',
    name: p.name ?? '',
    category: p.category ?? 'gift-sets',
    brand: p.brand ?? 'Globrands Lifestyle',
    description: p.description ?? '',
    price: Number(p.price ?? p.mrp) || '',
    moq: parseInt(String(p.moq ?? '50').replace(/[^0-9]/g, ''), 10) || 50,
    image_url: p.image_url ?? p.image ?? '',
    tags: Array.isArray(p.tags) ? p.tags : [],
    branding_options: p.branding_options ?? p.brandingOptions ?? [],
    colors: Array.isArray(p.colors) ? p.colors : [],
    specs,
    is_active: p.is_active !== false
  };
}

interface ProductFormProps {
  mode: 'create' | 'edit';
  productId?: string;
  initialValues?: ProductFormValues;
}

export default function ProductForm({ mode, productId, initialValues }: ProductFormProps) {
  const router = useRouter();
  const [values, setValues] = useState<ProductFormValues>(initialValues ?? EMPTY_PRODUCT);
  const [tagInput, setTagInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [imageError, setImageError] = useState(false);

  const set = <K extends keyof ProductFormValues>(key: K, value: ProductFormValues[K]) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  // --- Tags ---
  const addTag = () => {
    const t = tagInput.trim();
    if (t && !values.tags.includes(t)) set('tags', [...values.tags, t]);
    setTagInput('');
  };

  // --- Branding methods ---
  const toggleBranding = (method: string) =>
    set(
      'branding_options',
      values.branding_options.includes(method)
        ? values.branding_options.filter((m) => m !== method)
        : [...values.branding_options, method]
    );

  // --- Colors ---
  const updateColor = (i: number, patch: Partial<{ name: string; hex: string }>) =>
    set('colors', values.colors.map((c, idx) => (idx === i ? { ...c, ...patch } : c)));

  // --- Specs ---
  const updateSpec = (i: number, patch: Partial<{ label: string; value: string }>) =>
    set('specs', values.specs.map((s, idx) => (idx === i ? { ...s, ...patch } : s)));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (values.price === '' || Number(values.price) < 0) {
      setError('Please enter a valid indicative price.');
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        ...values,
        price: Number(values.price),
        moq: Number(values.moq) || 50,
        colors: values.colors.filter((c) => c.name.trim()),
        specs: values.specs.filter((s) => s.label.trim() && s.value.trim())
      };

      const res = await fetch(mode === 'create' ? '/api/products' : `/api/products/${productId}`, {
        method: mode === 'create' ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to save product');

      setSuccess(mode === 'create' ? 'Product created! Redirecting...' : 'Changes saved! Redirecting...');
      setTimeout(() => {
        router.push('/admin/products');
        router.refresh();
      }, 800);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
      setSubmitting(false);
    }
  };

  const inputCls =
    'w-full px-3 py-2 rounded-xl border border-neutral-200 bg-neutral-50 text-xs text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]';
  const labelCls = 'block text-xs font-bold text-neutral-700 mb-1';
  const cardCls = 'bg-white rounded-2xl border border-neutral-200/80 shadow-2xs p-5 space-y-4';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="p-2 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50"
            title="Back to catalog"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-black text-neutral-900 tracking-tight">
              {mode === 'create' ? 'Add New Product' : 'Edit Product'}
            </h1>
            <p className="text-xs text-neutral-500">
              {mode === 'create'
                ? 'Create a new catalog item for the storefront and RFQ basket.'
                : `Update catalog details for ${values.code || 'this product'}.`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/products"
            className="px-4 py-2 rounded-xl border border-neutral-200 bg-white text-neutral-700 text-xs font-bold hover:bg-neutral-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs disabled:opacity-50 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            {submitting ? 'Saving...' : mode === 'create' ? 'Create Product' : 'Save Changes'}
          </button>
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
      {success && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: main details */}
        <div className="lg:col-span-2 space-y-6">
          <section className={cardCls}>
            <h2 className="text-sm font-extrabold text-neutral-900">Basic Information</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Product Code *</label>
                <input
                  required
                  value={values.code}
                  onChange={(e) => set('code', e.target.value.toUpperCase())}
                  placeholder="e.g. HGS - H120"
                  className={`${inputCls} font-mono`}
                />
              </div>
              <div>
                <label className={labelCls}>Brand *</label>
                <select value={values.brand} onChange={(e) => set('brand', e.target.value)} className={inputCls}>
                  {BRAND_OPTIONS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelCls}>Product Name *</label>
              <input
                required
                value={values.name}
                onChange={(e) => set('name', e.target.value)}
                placeholder="e.g. VIP 5-in-1 Executive Hamper"
                className={inputCls}
              />
            </div>

            <div>
              <label className={labelCls}>Description</label>
              <textarea
                rows={4}
                value={values.description}
                onChange={(e) => set('description', e.target.value)}
                placeholder="Materials, contents, ideal occasions..."
                className={inputCls}
              />
            </div>
          </section>

          <section className={cardCls}>
            <h2 className="text-sm font-extrabold text-neutral-900">Pricing & Ordering</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className={labelCls}>Category *</label>
                <select value={values.category} onChange={(e) => set('category', e.target.value)} className={inputCls}>
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls}>Indicative MRP (₹) *</label>
                <input
                  type="number"
                  min={0}
                  required
                  value={values.price}
                  onChange={(e) => set('price', e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="1499"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Minimum Order Qty *</label>
                <input
                  type="number"
                  min={1}
                  required
                  value={values.moq}
                  onChange={(e) => set('moq', e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="50"
                  className={inputCls}
                />
              </div>
            </div>
          </section>

          <section className={cardCls}>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-extrabold text-neutral-900 flex items-center gap-1.5">
                <ListChecks className="w-4 h-4 text-[#b88e3e]" /> Specifications
              </h2>
              <button
                type="button"
                onClick={() => set('specs', [...values.specs, { label: '', value: '' }])}
                className="text-xs font-bold text-[#2563eb] flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add Spec
              </button>
            </div>
            {values.specs.length === 0 ? (
              <p className="text-xs text-neutral-400">No specifications yet (e.g. Material → Vegan Leather).</p>
            ) : (
              <div className="space-y-2">
                {values.specs.map((s, i) => (
                  <div key={i} className="flex gap-2">
                    <input
                      value={s.label}
                      onChange={(e) => updateSpec(i, { label: e.target.value })}
                      placeholder="Label (e.g. Capacity)"
                      className={`${inputCls} flex-1`}
                    />
                    <input
                      value={s.value}
                      onChange={(e) => updateSpec(i, { value: e.target.value })}
                      placeholder="Value (e.g. 30 L)"
                      className={`${inputCls} flex-1`}
                    />
                    <button
                      type="button"
                      onClick={() => set('specs', values.specs.filter((_, idx) => idx !== i))}
                      className="p-2 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className={cardCls}>
            <h2 className="text-sm font-extrabold text-neutral-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#b88e3e]" /> Branding Methods
            </h2>
            <div className="flex flex-wrap gap-2">
              {BRANDING_METHODS.map((m) => {
                const active = values.branding_options.includes(m);
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggleBranding(m)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                      active
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right: media, status, tags, colors */}
        <div className="space-y-6">
          <section className={cardCls}>
            <h2 className="text-sm font-extrabold text-neutral-900 flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-[#b88e3e]" /> Product Image
            </h2>
            <div className="aspect-square rounded-xl border border-dashed border-neutral-300 bg-neutral-50 flex items-center justify-center overflow-hidden">
              {values.image_url && !imageError ? (
                <img
                  src={values.image_url}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="text-center text-neutral-400 text-xs px-4">
                  <ImageIcon className="w-8 h-8 mx-auto mb-1 text-neutral-300" />
                  {imageError ? 'Image could not be loaded' : 'Image preview'}
                </div>
              )}
            </div>
            <div>
              <label className={labelCls}>Image URL / Path</label>
              <input
                value={values.image_url}
                onChange={(e) => {
                  setImageError(false);
                  set('image_url', e.target.value);
                }}
                placeholder="/catalog/crops/hgs_h74.jpg"
                className={`${inputCls} font-mono text-[11px]`}
              />
              <p className="text-[10px] text-neutral-400 mt-1">
                Use a path inside <code>/public</code> or a full https:// URL.
              </p>
            </div>
          </section>

          <section className={cardCls}>
            <h2 className="text-sm font-extrabold text-neutral-900">Visibility</h2>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-xs text-neutral-700">
                {values.is_active ? 'Visible on storefront' : 'Hidden from storefront'}
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={values.is_active}
                onClick={() => set('is_active', !values.is_active)}
                className={`relative w-10 h-6 rounded-full transition-colors cursor-pointer ${
                  values.is_active ? 'bg-emerald-500' : 'bg-neutral-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    values.is_active ? 'translate-x-4' : ''
                  }`}
                />
              </button>
            </label>
          </section>

          <section className={cardCls}>
            <h2 className="text-sm font-extrabold text-neutral-900 flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-[#b88e3e]" /> Tags
            </h2>
            <div className="flex gap-2">
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ',') {
                    e.preventDefault();
                    addTag();
                  }
                }}
                placeholder="e.g. Diwali, Onboarding"
                className={inputCls}
              />
              <button
                type="button"
                onClick={addTag}
                className="px-3 rounded-xl bg-neutral-900 text-white text-xs font-bold cursor-pointer"
              >
                Add
              </button>
            </div>
            {values.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {values.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 text-[11px] font-semibold"
                  >
                    {t}
                    <button
                      type="button"
                      onClick={() => set('tags', values.tags.filter((x) => x !== t))}
                      className="text-neutral-400 hover:text-red-600 cursor-pointer"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </section>

          <section className={cardCls}>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-extrabold text-neutral-900 flex items-center gap-1.5">
                <Palette className="w-4 h-4 text-[#b88e3e]" /> Colours
              </h2>
              <button
                type="button"
                onClick={() => set('colors', [...values.colors, { name: '', hex: '#111317' }])}
                className="text-xs font-bold text-[#2563eb] flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
            </div>
            {values.colors.length === 0 ? (
              <p className="text-xs text-neutral-400">No colour variants.</p>
            ) : (
              <div className="space-y-2">
                {values.colors.map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="color"
                      value={c.hex}
                      onChange={(e) => updateColor(i, { hex: e.target.value })}
                      className="w-9 h-9 rounded-lg border border-neutral-200 cursor-pointer shrink-0"
                    />
                    <input
                      value={c.name}
                      onChange={(e) => updateColor(i, { name: e.target.value })}
                      placeholder="Colour name"
                      className={inputCls}
                    />
                    <button
                      type="button"
                      onClick={() => set('colors', values.colors.filter((_, idx) => idx !== i))}
                      className="p-2 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </form>
  );
}

