'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  Package, 
  FileText, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Plus
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [quotes, setQuotes] = useState<any[]>([]);
  const [productsCount, setProductsCount] = useState<number>(48);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/orders').then((res) => res.json()),
      fetch('/api/quotes').then((res) => res.json()),
      fetch('/api/products').then((res) => res.json())
    ])
      .then(([ordersData, quotesData, productsData]) => {
        if (ordersData.orders) setOrders(ordersData.orders);
        if (quotesData.quotes) setQuotes(quotesData.quotes);
        if (productsData.count) setProductsCount(productsData.count);
      })
      .catch((err) => console.error('Dashboard data load error:', err))
      .finally(() => setLoading(false));
  }, []);

  const totalRevenue = orders
    .filter((o) => o.payment_status === 'paid' || o.status === 'delivered')
    .reduce((sum, o) => sum + (Number(o.total_amount) || 0), 0);

  const pendingOrdersCount = orders.filter((o) => o.status === 'pending').length;

  return (
    <div className="space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            Real-time corporate orders, quotation pipeline, and catalogue inventory.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/products"
            className="px-3.5 py-2 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Product</span>
          </Link>
          <Link
            href="/admin/orders"
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 text-xs font-semibold shadow-2xs transition-colors"
          >
            View Orders
          </Link>
        </div>
      </div>

      {/* 4 Metric KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Revenue */}
        <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="text-xs font-bold uppercase tracking-wider">Confirmed Revenue</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-neutral-900">
              ₹{totalRevenue.toLocaleString('en-IN')}
            </h2>
            <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <span>+18.4%</span>
              <span className="text-neutral-400 font-normal">vs last month</span>
            </p>
          </div>
        </div>

        {/* Total Orders */}
        <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="text-xs font-bold uppercase tracking-wider">Total Orders</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-neutral-900">
              {orders.length} Orders
            </h2>
            <p className="text-[11px] text-amber-600 font-semibold">
              {pendingOrdersCount} pending fulfillment
            </p>
          </div>
        </div>

        {/* Active RFQs */}
        <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="text-xs font-bold uppercase tracking-wider">Active RFQs</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-neutral-900">
              {quotes.length} RFQs
            </h2>
            <p className="text-[11px] text-neutral-500">
              Bulk corporate inquiries
            </p>
          </div>
        </div>

        {/* Catalog SKUs */}
        <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between text-neutral-500">
            <span className="text-xs font-bold uppercase tracking-wider">Active SKUs</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-neutral-900">
              {productsCount} Products
            </h2>
            <p className="text-[11px] text-neutral-500">
              Across 2 PDF catalogues
            </p>
          </div>
        </div>

      </div>

      {/* Grid: Recent Orders & Recent Quotes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Recent Orders Table */}
        <div className="lg:col-span-8 bg-white p-5 sm:p-6 rounded-3xl border border-neutral-200/90 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                Recent Corporate Orders
              </h3>
              <p className="text-xs text-neutral-500">
                Track payments and delivery fulfillment stages.
              </p>
            </div>

            <Link
              href="/admin/orders"
              className="text-xs font-bold text-[#2563eb] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {loading ? (
            <p className="text-xs text-neutral-400 py-8 text-center">Loading orders...</p>
          ) : orders.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-neutral-200 rounded-2xl">
              <p className="text-xs text-neutral-500">No orders placed yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-neutral-100 text-neutral-400 font-bold uppercase text-[10px]">
                    <th className="py-2.5">Order</th>
                    <th className="py-2.5">Client</th>
                    <th className="py-2.5">Amount</th>
                    <th className="py-2.5">Payment</th>
                    <th className="py-2.5">Status</th>
                    <th className="py-2.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 font-medium">
                  {orders.slice(0, 6).map((order) => (
                    <tr key={order.id} className="hover:bg-neutral-50/80 transition-colors">
                      <td className="py-3 font-mono font-bold text-neutral-900">
                        {order.order_number}
                      </td>
                      <td className="py-3">
                        <div className="font-semibold text-neutral-800">{order.customer_name}</div>
                        <div className="text-[11px] text-neutral-400">{order.company_name}</div>
                      </td>
                      <td className="py-3 font-bold text-neutral-900">
                        ₹{Number(order.total_amount).toLocaleString('en-IN')}
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          order.payment_status === 'paid'
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-amber-50 text-amber-700'
                        }`}>
                          {order.payment_status}
                        </span>
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          order.status === 'delivered' ? 'bg-emerald-100 text-emerald-800' :
                          order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'processing' ? 'bg-purple-100 text-purple-800' :
                          'bg-neutral-100 text-neutral-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <Link
                          href={`/admin/orders`}
                          className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-[11px] font-semibold"
                        >
                          Manage
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Recent Quotes & Inquiries */}
        <div className="lg:col-span-4 bg-white p-5 sm:p-6 rounded-3xl border border-neutral-200/90 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                Recent Inquiries & RFQs
              </h3>
              <p className="text-xs text-neutral-500">
                Direct buyer quotation requests.
              </p>
            </div>

            <Link
              href="/admin/quotes"
              className="text-xs font-bold text-[#2563eb] hover:underline"
            >
              All RFQs
            </Link>
          </div>

          {quotes.length === 0 ? (
            <div className="text-center py-10 border border-dashed border-neutral-200 rounded-2xl">
              <p className="text-xs text-neutral-500">No quotation requests yet.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {quotes.slice(0, 5).map((q) => {
                const waUrl = `https://wa.me/91${q.phone?.replace(/\D/g, '')}?text=Hi%20${encodeURIComponent(q.customer_name)},%20regarding%20your%20quotation%20request%20${q.quote_number}%20at%20Globrands%20Lifestyle.`;

                return (
                  <div
                    key={q.id}
                    className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2 hover:bg-white hover:border-neutral-300 transition-all text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-[#2563eb]">
                        {q.quote_number}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#2563eb] text-[10px] font-bold">
                        {q.status}
                      </span>
                    </div>

                    <div>
                      <div className="font-bold text-neutral-900">{q.customer_name}</div>
                      <div className="text-neutral-500">{q.company_name} • {q.city || 'India'}</div>
                    </div>

                    <div className="pt-1 flex items-center justify-between border-t border-neutral-200/60">
                      <span className="text-[11px] text-neutral-500">
                        {Array.isArray(q.items) ? `${q.items.length} items shortlisted` : 'Multiple SKUs'}
                      </span>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center gap-1 transition-colors"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>Reply WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

