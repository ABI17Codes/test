'use client';

import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  Truck, 
  Package, 
  CreditCard, 
  X, 
  Eye, 
  Trash2,
  Lock,
  Copy,
  Check,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchOrders = () => {
    setLoading(true);
    fetch('/api/orders')
      .then((res) => res.json())
      .then((data) => {
        if (data.orders) setOrders(data.orders);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setOrders((prev) =>
          prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
        );
        if (selectedOrder?.id === id) {
          setSelectedOrder((prev: any) => ({ ...prev, status: newStatus }));
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleUpdatePayment = async (id: string, newPaymentStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payment_status: newPaymentStatus })
      });
      if (res.ok) {
        setOrders((prev) =>
          prev.map((o) => (o.id === id ? { ...o, payment_status: newPaymentStatus } : o))
        );
        if (selectedOrder?.id === id) {
          setSelectedOrder((prev: any) => ({ ...prev, payment_status: newPaymentStatus }));
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteOrder = async (id: string) => {
    if (!confirm(`Are you sure you want to cancel and delete order ${id}?`)) return;

    try {
      const res = await fetch(`/api/orders/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setOrders((prev) => prev.filter((o) => o.id !== id));
        if (selectedOrder?.id === id) setSelectedOrder(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredOrders = orders.filter((o) => {
    const matchesStatus = statusFilter === 'all' || o.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      o.order_number?.toLowerCase().includes(q) ||
      o.customer_name?.toLowerCase().includes(q) ||
      o.company_name?.toLowerCase().includes(q) ||
      o.email?.toLowerCase().includes(q) ||
      o.idempotency_key?.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
            Orders & Payments Management
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            Fulfill corporate orders, verify payments, and inspect idempotency tokens.
          </p>
        </div>

        <button
          onClick={fetchOrders}
          className="px-3.5 py-2 rounded-xl bg-white hover:bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral-700 flex items-center gap-1.5 shadow-2xs self-start sm:self-auto cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh</span>
        </button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Status Filter Tabs */}
        <div className="flex flex-wrap gap-1 bg-neutral-100 p-1 rounded-xl">
          {['all', 'pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors cursor-pointer ${
                statusFilter === st
                  ? 'bg-white text-neutral-900 shadow-2xs'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search order #, client, key..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-neutral-200 text-xs focus:ring-2 focus:ring-[#2563eb] focus:outline-none bg-white"
          />
        </div>

      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-2xs overflow-hidden">
        {loading ? (
          <div className="py-20 text-center text-xs text-neutral-400">Loading orders...</div>
        ) : filteredOrders.length === 0 ? (
          <div className="py-16 text-center text-xs text-neutral-500 space-y-1">
            <p className="font-bold">No orders match the current criteria.</p>
            <p className="text-neutral-400">Try adjusting your search query or status filter.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-400 font-bold uppercase text-[10px]">
                <tr>
                  <th className="py-3 px-4">Order #</th>
                  <th className="py-3 px-4">Client & Company</th>
                  <th className="py-3 px-4">Total Amount</th>
                  <th className="py-3 px-4">Payment</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Idempotency Key</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 font-medium">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-neutral-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-neutral-900">
                      {order.order_number}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-neutral-900">{order.customer_name}</div>
                      <div className="text-[11px] text-neutral-400">{order.company_name}</div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-neutral-900">
                      ₹{Number(order.total_amount).toLocaleString('en-IN')}
                    </td>
                    <td className="py-3.5 px-4">
                      <select
                        value={order.payment_status}
                        onChange={(e) => handleUpdatePayment(order.id, e.target.value)}
                        disabled={updatingId === order.id}
                        className={`text-[11px] font-bold py-1 px-2 rounded-lg border cursor-pointer ${
                          order.payment_status === 'paid'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}
                      >
                        <option value="unpaid">Unpaid</option>
                        <option value="paid">Paid</option>
                        <option value="refunded">Refunded</option>
                      </select>
                    </td>
                    <td className="py-3.5 px-4">
                      <select
                        value={order.status}
                        onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                        disabled={updatingId === order.id}
                        className="text-[11px] font-bold py-1 px-2 rounded-lg border border-neutral-200 bg-white cursor-pointer"
                      >
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[10px] text-neutral-500 max-w-[140px] truncate" title={order.idempotency_key}>
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{order.idempotency_key}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-1">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="px-2.5 py-1 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-[11px] font-bold cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => handleDeleteOrder(order.id)}
                        className="p-1 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                        title="Delete"
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

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-neutral-200 max-h-[90vh] overflow-y-auto text-left">
            
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#2563eb]">
                  Order Inspection
                </span>
                <h3 className="text-xl font-black text-neutral-900 font-mono">
                  {selectedOrder.order_number}
                </h3>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Idempotency Key Box */}
            <div className="p-3.5 rounded-2xl bg-[#fafcf9] border border-emerald-200 flex items-center justify-between gap-3">
              <div className="overflow-hidden">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                  🛡️ Verified Idempotency Token
                </span>
                <p className="font-mono text-xs text-neutral-700 break-all">
                  {selectedOrder.idempotency_key}
                </p>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedOrder.idempotency_key);
                  setCopiedKey(true);
                  setTimeout(() => setCopiedKey(false), 2000);
                }}
                className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 shrink-0 cursor-pointer flex items-center gap-1"
              >
                {copiedKey ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedKey ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Customer Details Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
              <div>
                <span className="text-neutral-400 block text-[10px] font-bold uppercase">Customer</span>
                <span className="font-bold text-neutral-900">{selectedOrder.customer_name}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px] font-bold uppercase">Company</span>
                <span className="font-bold text-neutral-900">{selectedOrder.company_name}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px] font-bold uppercase">Contact</span>
                <span className="text-neutral-700">{selectedOrder.phone} • {selectedOrder.email}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px] font-bold uppercase">Destination</span>
                <span className="text-neutral-700">{selectedOrder.shipping_address?.city || 'Bengaluru, India'}</span>
              </div>
            </div>

            {/* Shortlisted Items List */}
            <div>
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
                Order Items
              </h4>
              <div className="space-y-2 border border-neutral-200 rounded-2xl p-3 divide-y divide-neutral-100 text-xs">
                {(Array.isArray(selectedOrder.items) ? selectedOrder.items : []).map((item: any, idx: number) => (
                  <div key={idx} className="pt-2 first:pt-0 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-neutral-900">
                        {item.name || item.productId}
                      </span>
                      <p className="text-[11px] text-neutral-500">
                        Code: {item.code || 'N/A'} • Branding: {item.customization || 'Standard'}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-neutral-900">{item.quantity} units</span>
                      <p className="text-[11px] text-neutral-400">
                        ₹{(item.unitPrice || 450) * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Summary */}
            <div className="flex items-center justify-between pt-3 border-t border-neutral-200 text-xs">
              <span className="text-neutral-500">Order Total (incl. 18% GST):</span>
              <span className="text-lg font-black text-neutral-900">
                ₹{Number(selectedOrder.total_amount).toLocaleString('en-IN')}
              </span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

