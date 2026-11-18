'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  User,
  Building2,
  Mail,
  Phone,
  MapPin,
  FileText,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Save,
  LogOut,
  ArrowRight,
  PlusCircle,
  Clock,
  MessageCircle,
  RefreshCw,
  Award,
  Hash
} from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

export default function ProfilePage() {
  const router = useRouter();
  const { items: basketItems } = useQuote();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState('');
  const [saveError, setSaveError] = useState('');

  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [gstin, setGstin] = useState('');

  const [myOrders, setMyOrders] = useState<any[]>([]);
  const [myQuotes, setMyQuotes] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'quotes' | 'orders'>('quotes');

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (!data?.authenticated || !data?.user) {
          router.push('/login');
          return;
        }
        const u = data.user;
        setUser(u);
        setName(u.name || '');
        setCompanyName(u.company_name || '');
        setPhone(u.phone || '');
        setCity(u.city || '');
        setGstin(u.gstin || '');

        // Fetch orders and quotes for this user
        Promise.all([
          fetch('/api/orders').then((r) => r.json()).catch(() => ({ orders: [] })),
          fetch('/api/quotes').then((r) => r.json()).catch(() => ({ quotes: [] }))
        ]).then(([ordersData, quotesData]) => {
          const emailLower = (u.email || '').toLowerCase();
          if (Array.isArray(ordersData?.orders)) {
            setMyOrders(
              ordersData.orders.filter(
                (o: any) => (o.email || '').toLowerCase() === emailLower
              )
            );
          }
          if (Array.isArray(quotesData?.quotes)) {
            setMyQuotes(
              quotesData.quotes.filter(
                (q: any) => (q.email || '').toLowerCase() === emailLower
              )
            );
          }
        });
      })
      .catch(() => {
        router.push('/login');
      })
      .finally(() => setLoading(false));
  }, [router]);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveSuccess('');
    setSaveError('');

    try {
      const res = await fetch('/api/auth/me', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          company_name: companyName,
          phone,
          city,
          gstin
        })
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to update profile');
      }
      setUser(data.user);
      setSaveSuccess('Corporate profile updated successfully.');
    } catch (err: any) {
      setSaveError(err.message || 'Could not update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } finally {
      router.push('/login');
    }
  };

  if (loading) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center bg-[#F8F9FA]">
        <div className="flex items-center gap-2.5 text-xs font-bold text-[#69635C]">
          <RefreshCw className="w-4 h-4 animate-spin text-[#A98554]" />
          <span>Loading Corporate Profile...</span>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const totalBasketUnits = basketItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="py-10 bg-[#F8F9FA] min-h-screen">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10 space-y-8 text-left">
        
        {/* Top Profile Identity Banner */}
        <div className="rounded-3xl bg-[#0B111E] text-white p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#C5A16D]/15 border border-[#C5A16D]/40 flex items-center justify-center text-2xl font-extrabold text-[#C5A16D] shrink-0">
              {user.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                  {user.name}
                </h1>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    user.role === 'admin'
                      ? 'bg-purple-500/20 text-purple-200 border-purple-400/30'
                      : 'bg-[#C5A16D]/20 text-[#C5A16D] border-[#C5A16D]/40'
                  }`}
                >
                  {user.role === 'admin' ? 'Enterprise Admin' : 'Corporate Buyer'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/75">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A16D]" />
                  <span>{user.company_name || 'Corporate Account'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#A98554]" />
                  <span>{user.email}</span>
                </span>
                {user.city && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{user.city}</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {user.role === 'admin' && (
              <>
                <Link
                  href="/admin"
                  className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Admin Console</span>
                </Link>
                <Link
                  href="/admin/products/new"
                  className="px-4 py-2.5 rounded-xl bg-[#A98554] hover:bg-[#40352D] text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Add Product</span>
                </Link>
              </>
            )}

            <Link
              href="/quote"
              className="px-4 py-2.5 rounded-xl bg-[#D49B27] hover:bg-[#C28B1E] text-[#0B111E] text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>RFQ Basket ({totalBasketUnits})</span>
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-red-500/20 text-white hover:text-red-200 border border-white/15 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* 3 Summary Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#69635C] block">
                Submitted RFQs
              </span>
              <span className="text-2xl font-extrabold text-[#211D1A] mt-1 block">
                {myQuotes.length} Inquiries
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#EAE3D8] border border-[#C5A16D] flex items-center justify-center text-[#D49B27]">
              <FileText className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#69635C] block">
                Corporate Orders
              </span>
              <span className="text-2xl font-extrabold text-[#211D1A] mt-1 block">
                {myOrders.length} Orders
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#A98554]">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#69635C] block">
                Active RFQ Shortlist
              </span>
              <span className="text-2xl font-extrabold text-[#211D1A] mt-1 block">
                {basketItems.length} SKUs ({totalBasketUnits} pcs)
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Award className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Main Grid: Left Profile Settings + Right Orders & RFQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Editable Corporate Profile Details */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#EAE3D8] shadow-2xs p-6 sm:p-7 space-y-5">
            <div className="border-b border-[#EAE3D8] pb-4">
              <h2 className="text-lg font-bold text-[#211D1A]">
                Corporate Profile &amp; Billing Details
              </h2>
              <p className="text-xs text-[#69635C] mt-0.5">
                Used to auto-fill your bulk RFQ requests and B2B tax invoices.
              </p>
            </div>

            {saveSuccess && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>{saveSuccess}</span>
              </div>
            )}

            {saveError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{saveError}</span>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#211D1A] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-[#69635C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-xs text-[#211D1A] focus:bg-white focus:outline-none focus:border-[#A98554]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#211D1A] mb-1">
                  Company / Organization *
                </label>
                <div className="relative">
                  <Building2 className="w-3.5 h-3.5 text-[#69635C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-xs text-[#211D1A] focus:bg-white focus:outline-none focus:border-[#A98554]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#211D1A] mb-1">
                  Official Work Email
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-[#69635C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    disabled
                    value={user.email}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-neutral-100 border border-[#EAE3D8] text-xs text-[#69635C] cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#211D1A] mb-1">
                    Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-[#69635C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-xs text-[#211D1A] focus:bg-white focus:outline-none focus:border-[#A98554]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#211D1A] mb-1">
                    Primary City
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-[#69635C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Bengaluru"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-xs text-[#211D1A] focus:bg-white focus:outline-none focus:border-[#A98554]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#211D1A] mb-1">
                  Corporate GSTIN (Optional for B2B Invoice)
                </label>
                <div className="relative">
                  <Hash className="w-3.5 h-3.5 text-[#69635C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value.toUpperCase())}
                    placeholder="29AABCG1234F1Z5"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-xs font-mono text-[#211D1A] focus:bg-white focus:outline-none focus:border-[#A98554]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={saving}
                className="w-full py-3 rounded-xl bg-[#0B111E] hover:bg-[#211D1A] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer disabled:opacity-50"
              >
                <Save className="w-4 h-4 text-[#C5A16D]" />
                <span>{saving ? 'Saving Profile...' : 'Save Profile Changes'}</span>
              </button>
            </form>
          </div>

          {/* Right Column: My RFQs & My Orders */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EAE3D8] shadow-2xs p-6 sm:p-7 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE3D8] pb-4">
              <div>
                <h2 className="text-lg font-bold text-[#211D1A]">
                  My RFQs &amp; Corporate Orders
                </h2>
                <p className="text-xs text-[#69635C]">
                  Track your submitted quotation requests and bulk purchase orders.
                </p>
              </div>

              <div className="flex items-center gap-1.5 bg-[#F5F0E8] p-1 rounded-xl border border-[#EAE3D8]">
                <button
                  type="button"
                  onClick={() => setActiveTab('quotes')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === 'quotes'
                      ? 'bg-[#0B111E] text-white'
                      : 'text-[#69635C] hover:text-[#211D1A]'
                  }`}
                >
                  My RFQs ({myQuotes.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('orders')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === 'orders'
                      ? 'bg-[#0B111E] text-white'
                      : 'text-[#69635C] hover:text-[#211D1A]'
                  }`}
                >
                  My Orders ({myOrders.length})
                </button>
              </div>
            </div>

            {activeTab === 'quotes' ? (
              myQuotes.length === 0 ? (
                <div className="text-center py-14 px-4 rounded-2xl border border-dashed border-[#EAE3D8] bg-[#F5F0E8] space-y-3">
                  <FileText className="w-8 h-8 text-[#69635C] mx-auto" />
                  <p className="text-sm font-bold text-[#211D1A]">
                    No RFQ inquiries submitted yet
                  </p>
                  <p className="text-xs text-[#69635C] max-w-sm mx-auto">
                    Explore our 180+ corporate gift hampers and backpacks to request your first bulk quotation.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#0B111E] text-white text-xs font-bold"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A16D]" />
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {myQuotes.map((q) => (
                    <div
                      key={q.id}
                      className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#EAE3D8] space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#A98554]">
                          {q.quote_number}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold uppercase">
                          {q.status || 'new'}
                        </span>
                      </div>

                      <div className="text-xs text-[#475467]">
                        {Array.isArray(q.items) && q.items.length > 0 ? (
                          <ul className="space-y-1">
                            {q.items.map((item: any, idx: number) => (
                              <li key={idx} className="flex items-center justify-between text-[#211D1A] font-medium">
                                <span>
                                  {item.product?.code ? `[${item.product.code}] ` : ''}
                                  {item.product?.name || item.name || 'Corporate SKU'}
                                </span>
                                <span className="font-bold text-[#69635C]">
                                  {item.quantity} pcs
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span>Custom Corporate Inquiry</span>
                        )}
                      </div>

                      <div className="pt-2 border-t border-[#EAE3D8] flex items-center justify-between text-[11px] text-[#69635C]">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>
                            {q.created_at
                              ? new Date(q.created_at).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })
                              : 'Recent'}
                          </span>
                        </span>

                        <a
                          href={`https://wa.me/919900020456?text=${encodeURIComponent(
                            `Hello Globrands Lifestyle, following up on my corporate RFQ ${q.quote_number} (${user.company_name}).`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:underline"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Follow up on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : myOrders.length === 0 ? (
              <div className="text-center py-14 px-4 rounded-2xl border border-dashed border-[#EAE3D8] bg-[#F5F0E8] space-y-3">
                <ShoppingBag className="w-8 h-8 text-[#69635C] mx-auto" />
                <p className="text-sm font-bold text-[#211D1A]">
                  No corporate orders placed yet
                </p>
                <p className="text-xs text-[#69635C] max-w-sm mx-auto">
                  Shortlist items into your RFQ basket to place a B2B Purchase Order or online advance order.
                </p>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#0B111E] text-white text-xs font-bold"
                >
                  <span>Go to Bulk Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A16D]" />
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {myOrders.map((ord) => (
                  <div
                    key={ord.id}
                    className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#EAE3D8] space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#211D1A]">
                        {ord.order_number}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            ord.payment_status === 'paid'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-amber-50 text-amber-700 border border-amber-200'
                          }`}
                        >
                          {ord.payment_status}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#A98554] text-[10px] font-bold uppercase">
                          {ord.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[#69635C]">
                        {Array.isArray(ord.items) ? `${ord.items.length} SKU(s)` : 'Bulk Order'}
                      </span>
                      <span className="font-extrabold text-[#211D1A]">
                        ₹{Number(ord.total_amount || 0).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

