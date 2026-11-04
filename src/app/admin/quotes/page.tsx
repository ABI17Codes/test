'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Eye, 
  Trash2, 
  Building2, 
  Calendar, 
  DollarSign, 
  Tag, 
  Phone, 
  Mail, 
  MapPin, 
  RefreshCw,
  X,
  Send,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface QuoteItem {
  product: {
    id?: string;
    code?: string;
    name?: string;
    mrp?: number;
    image?: string;
    moq?: string;
  };
  quantity: number;
  customization?: string;
  notes?: string;
}

interface Quote {
  id: string;
  quote_number?: string;
  idempotency_key?: string;
  customer_name: string;
  company_name: string;
  email: string;
  phone: string;
  city?: string;
  target_date?: string;
  estimated_budget?: string;
  items: QuoteItem[];
  branding_requirements?: string;
  notes?: string;
  status: 'new' | 'reviewing' | 'quoted' | 'approved' | 'rejected' | string;
  created_at: string;
  updated_at?: string;
  internal_notes?: string;
}

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [internalNote, setInternalNote] = useState('');

  const fetchQuotes = () => {
    setLoading(true);
    fetch('/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        if (data.quotes) setQuotes(data.quotes);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/quotes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setQuotes((prev) =>
          prev.map((q) => (q.id === id ? { ...q, status: newStatus } : q))
        );
        if (selectedQuote?.id === id) {
          setSelectedQuote((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error('Failed to update quote status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleSaveInternalNote = async (id: string) => {
    if (!internalNote.trim()) return;
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/quotes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ internal_notes: internalNote })
      });
      if (res.ok) {
        setQuotes((prev) =>
          prev.map((q) => (q.id === id ? { ...q, internal_notes: internalNote } : q))
        );
        if (selectedQuote?.id === id) {
          setSelectedQuote((prev) => (prev ? { ...prev, internal_notes: internalNote } : null));
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDeleteQuote = async (id: string) => {
    if (!confirm(`Are you sure you want to delete inquiry ${id}?`)) return;

    try {
      const res = await fetch(`/api/quotes/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setQuotes((prev) => prev.filter((q) => q.id !== id));
        if (selectedQuote?.id === id) setSelectedQuote(null);
      }
    } catch (err) {
      console.error('Failed to delete quote:', err);
    }
  };

  const getWhatsAppLink = (quote: Quote) => {
    const cleanPhone = quote.phone.replace(/[^0-9]/g, '');
    const phoneWithCountry = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
    const text = encodeURIComponent(
      `Hello ${quote.customer_name},\n\nThank you for reaching out to Globrands Lifestyle for quotation #${quote.quote_number || quote.id} for ${quote.company_name}.\n\nWe have reviewed your request for ${quote.items.length} items and would like to share the official price quote and branding proposal with you. Are you available for a quick discussion?`
    );
    return `https://wa.me/${phoneWithCountry}?text=${text}`;
  };

  const filteredQuotes = quotes.filter((q) => {
    const matchesStatus = statusFilter === 'all' || q.status === statusFilter;
    const qNumber = q.quote_number || q.id;
    const matchesSearch =
      qNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.customer_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (q.city && q.city.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  // KPI Metrics
  const totalCount = quotes.length;
  const newCount = quotes.filter((q) => q.status === 'new').length;
  const reviewingCount = quotes.filter((q) => q.status === 'reviewing').length;
  const quotedCount = quotes.filter((q) => q.status === 'quoted').length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3 h-3" /> New RFQ
          </span>
        );
      case 'reviewing':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Eye className="w-3 h-3" /> In Review
          </span>
        );
      case 'quoted':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
            <FileText className="w-3 h-3" /> Quote Sent
          </span>
        );
      case 'approved':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3" /> Approved
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200">
            <XCircle className="w-3 h-3" /> Declined
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-700">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-neutral-900 flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#b88e3e]" />
            Corporate RFQs & Quote Pipeline
          </h1>
          <p className="text-sm text-neutral-500 mt-1">
            Manage inbound enterprise bulk enquiries, custom branding requests, and instant WhatsApp follow-ups.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchQuotes}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-neutral-200 text-neutral-700 text-xs font-bold hover:bg-neutral-50 transition-colors shadow-2xs cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
          <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Total Inquiries</div>
          <div className="text-2xl font-black text-neutral-900 mt-1">{totalCount}</div>
        </div>
        <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 shadow-2xs">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            New / Unattended
          </div>
          <div className="text-2xl font-black text-amber-800 mt-1">{newCount}</div>
        </div>
        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/60 shadow-2xs">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">In Review</div>
          <div className="text-2xl font-black text-blue-800 mt-1">{reviewingCount}</div>
        </div>
        <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200/60 shadow-2xs">
          <div className="text-xs font-bold text-purple-700 uppercase tracking-wider">Quotes Sent</div>
          <div className="text-2xl font-black text-purple-800 mt-1">{quotedCount}</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search company, contact, or RFQ ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          <Filter className="w-3.5 h-3.5 text-neutral-400 shrink-0 ml-1 mr-1" />
          {[
            { label: 'All RFQs', value: 'all' },
            { label: 'New', value: 'new' },
            { label: 'In Review', value: 'reviewing' },
            { label: 'Quoted', value: 'quoted' },
            { label: 'Approved', value: 'approved' },
            { label: 'Declined', value: 'rejected' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setStatusFilter(tab.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-colors cursor-pointer ${
                statusFilter === tab.value
                  ? 'bg-neutral-900 text-white shadow-2xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quotes Table */}
      <div className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-2xs">
        {loading ? (
          <div className="p-12 text-center text-neutral-400">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2 text-[#b88e3e]" />
            <p className="text-sm font-medium">Loading quotation inquiries...</p>
          </div>
        ) : filteredQuotes.length === 0 ? (
          <div className="p-12 text-center text-neutral-400">
            <FileText className="w-10 h-10 mx-auto mb-2 text-neutral-300" />
            <p className="text-sm font-semibold text-neutral-600">No quotation requests found</p>
            <p className="text-xs text-neutral-400 mt-1">Try switching filters or check back when clients request bulk pricing.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-neutral-50/80 border-b border-neutral-200 text-neutral-500 font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">RFQ Number & Date</th>
                  <th className="py-3 px-4">Client / Company</th>
                  <th className="py-3 px-4">Items & Details</th>
                  <th className="py-3 px-4">Budget / Target</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredQuotes.map((q) => {
                  const qNumber = q.quote_number || q.id;
                  const dateStr = new Date(q.created_at).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  });

                  return (
                    <tr key={q.id} className="hover:bg-neutral-50/70 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-extrabold text-neutral-900">{qNumber}</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">{dateStr}</div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#b88e3e] shrink-0" />
                          <span>{q.company_name}</span>
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-0.5 flex items-center gap-2">
                          <span>{q.customer_name}</span>
                          {q.city && <span className="text-neutral-400">• {q.city}</span>}
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-neutral-800">
                          {q.items?.length || 0} product line{q.items?.length !== 1 ? 's' : ''}
                        </div>
                        <div className="text-[11px] text-neutral-500 truncate max-w-xs mt-0.5">
                          {q.items?.map((it) => it.product?.name || it.product?.code).filter(Boolean).join(', ')}
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-medium text-neutral-800">
                          {q.estimated_budget ? `₹ ${q.estimated_budget}` : 'Standard Catalog'}
                        </div>
                        {q.target_date && (
                          <div className="text-[10px] text-neutral-400 flex items-center gap-1 mt-0.5">
                            <Calendar className="w-3 h-3 text-neutral-400" />
                            <span>Needed by {q.target_date}</span>
                          </div>
                        )}
                      </td>

                      <td className="py-3.5 px-4">
                        <select
                          value={q.status}
                          disabled={updatingId === q.id}
                          onChange={(e) => handleUpdateStatus(q.id, e.target.value)}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#2563eb] cursor-pointer"
                        >
                          <option value="new">New RFQ</option>
                          <option value="reviewing">In Review</option>
                          <option value="quoted">Quote Sent</option>
                          <option value="approved">Approved</option>
                          <option value="rejected">Declined</option>
                        </select>
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => {
                              setSelectedQuote(q);
                              setInternalNote(q.internal_notes || '');
                            }}
                            className="p-1.5 text-neutral-600 hover:text-[#2563eb] hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                            title="Inspect Quote Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          <a
                            href={getWhatsAppLink(q)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                            title="Chat with Buyer on WhatsApp"
                          >
                            <MessageCircle className="w-4 h-4 fill-emerald-100" />
                          </a>

                          <button
                            onClick={() => handleDeleteQuote(q.id)}
                            className="p-1.5 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                            title="Delete Request"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Quote Details Slide-Over / Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg text-neutral-900">
                    {selectedQuote.quote_number || selectedQuote.id}
                  </span>
                  {getStatusBadge(selectedQuote.status)}
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  Submitted on {new Date(selectedQuote.created_at).toLocaleString('en-IN')}
                </p>
              </div>

              <button
                onClick={() => setSelectedQuote(null)}
                className="p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs">
              
              {/* Buyer Contact Information */}
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-3">
                <div className="font-bold text-neutral-900 text-sm flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#b88e3e]" />
                  <span>{selectedQuote.company_name}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-600">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-800">Contact:</span>
                    <span>{selectedQuote.customer_name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-neutral-400" />
                    <a href={`mailto:${selectedQuote.email}`} className="text-[#2563eb] hover:underline">
                      {selectedQuote.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{selectedQuote.phone}</span>
                  </div>
                  {selectedQuote.city && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{selectedQuote.city}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Items Requested */}
              <div className="space-y-3">
                <div className="font-bold text-neutral-900 text-sm flex items-center justify-between">
                  <span>Products In Inquiry ({selectedQuote.items?.length || 0})</span>
                </div>

                <div className="space-y-2">
                  {selectedQuote.items?.map((it, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border border-neutral-200 bg-white flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        {it.product?.image && (
                          <img
                            src={it.product.image}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover border border-neutral-100 shrink-0"
                          />
                        )}
                        <div>
                          <p className="font-bold text-neutral-900">
                            {it.product?.name || `Product Code: ${it.product?.code}`}
                          </p>
                          <p className="text-[11px] text-neutral-400">
                            Code: {it.product?.code || 'Custom'} • MRP: ₹{it.product?.mrp || 'N/A'} • MOQ: {it.product?.moq || '50'}
                          </p>
                          {it.customization && (
                            <p className="text-[11px] text-amber-700 mt-0.5">
                              Branding: {it.customization}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="inline-block px-2 py-1 rounded-md bg-neutral-100 font-black text-neutral-900 text-xs">
                          Qty: {it.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Requirements & Notes */}
              {(selectedQuote.branding_requirements || selectedQuote.notes) && (
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-2">
                  <span className="font-bold text-amber-900 text-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Branding Requirements & Client Notes
                  </span>
                  {selectedQuote.branding_requirements && (
                    <p className="text-neutral-700">
                      <strong>Branding:</strong> {selectedQuote.branding_requirements}
                    </p>
                  )}
                  {selectedQuote.notes && (
                    <p className="text-neutral-700">
                      <strong>Client Note:</strong> {selectedQuote.notes}
                    </p>
                  )}
                </div>
              )}

              {/* Internal Sales Follow-up Note */}
              <div className="space-y-2">
                <label className="font-bold text-neutral-800 text-xs block">
                  Internal Sales Note / Pricing Calculation:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={internalNote}
                    onChange={(e) => setInternalNote(e.target.value)}
                    placeholder="e.g. Quoted ₹1250/unit for 200 pcs with UV printing on 02/11..."
                    className="flex-1 px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
                  />
                  <button
                    onClick={() => handleSaveInternalNote(selectedQuote.id)}
                    disabled={updatingId === selectedQuote.id}
                    className="px-3.5 py-2 rounded-xl bg-neutral-900 text-white font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Save Note
                  </button>
                </div>
              </div>

              {/* Technical / Idempotency Key */}
              {selectedQuote.idempotency_key && (
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Idempotency Key:
                  </span>
                  <code className="font-mono text-neutral-700">{selectedQuote.idempotency_key}</code>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between">
              <a
                href={getWhatsAppLink(selectedQuote)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Follow Up On WhatsApp</span>
              </a>

              <button
                onClick={() => setSelectedQuote(null)}
                className="px-4 py-2 rounded-xl bg-white border border-neutral-200 text-neutral-700 font-bold text-xs hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

