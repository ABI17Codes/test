'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  Trash2, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Building, 
  Mail, 
  Phone, 
  User, 
  ChevronRight, 
  ArrowRight, 
  CreditCard, 
  ShieldCheck, 
  Copy, 
  Check, 
  AlertCircle,
  RefreshCw,
  Lock
} from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

export default function QuoteBasketPage() {
  const { items, removeFromQuote, updateQuantity, clearQuote } = useQuote();

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [customizationType, setCustomizationType] = useState('Laser Engraving');
  const [message, setMessage] = useState('');
  const [paymentMode, setPaymentMode] = useState<'rfq' | 'online_advance'>('rfq');

  // Idempotency Key State: Generated once per order attempt and preserved across retries
  const [idempotencyKey, setIdempotencyKey] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [orderResult, setOrderResult] = useState<any>(null);
  const [isReplayed, setIsReplayed] = useState(false);
  const [keyCopied, setKeyCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Generate unique Idempotency Key on component mount or reset
  useEffect(() => {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
      setIdempotencyKey(`ord-${window.crypto.randomUUID()}`);
    } else {
      setIdempotencyKey(`ord-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`);
    }
  }, []);

  const totalUnits = items.reduce((acc, item) => acc + item.quantity, 0);
  const estimatedSubtotal = items.reduce((acc, item) => acc + (item.product.mrp || 450) * item.quantity, 0);
  const gstTax = Math.round(estimatedSubtotal * 0.18);
  const estimatedTotal = estimatedSubtotal + gstTax;

  // Handle Idempotent Order / Quote Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || items.length === 0) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Send request with client-generated Idempotency-Key
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey
        },
        body: JSON.stringify({
          customerName: fullName,
          companyName: companyName,
          email: email,
          phone: phone,
          shippingAddress: {
            city: city,
            country: 'India'
          },
          items: items.map((i) => ({
            productId: i.product.id,
            name: i.product.name,
            code: i.product.code,
            quantity: i.quantity,
            unitPrice: i.product.mrp || 450,
            customization: i.customization || customizationType
          })),
          customizationDetails: {
            brandingType: customizationType,
            logoNotes: message
          },
          paymentMethod: paymentMode === 'online_advance' ? 'razorpay' : 'po',
          notes: message
        })
      });

      const wasReplayed = response.headers.get('Idempotent-Replayed') === 'true';
      setIsReplayed(wasReplayed);

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to place order.');
      }

      setOrderResult(result.order);
      setSubmitted(true);

      // If user chose online advance payment, initiate payment order
      if (paymentMode === 'online_advance' && result.order?.id) {
        await handleInitiatePayment(result.order.id);
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMsg(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Payment Gateway Flow (Razorpay / Sandbox Integration)
  const handleInitiatePayment = async (orderId: string) => {
    setIsPaying(true);
    try {
      const payRes = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': `pay-${idempotencyKey}`
        },
        body: JSON.stringify({ orderId })
      });

      const payData = await payRes.json();
      if (!payRes.ok) throw new Error(payData.error || 'Failed to create payment gateway order');

      // Simulate client verification or Razorpay checkout
      const verifyRes = await fetch('/api/payments/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId,
          gatewayOrderId: payData.gatewayOrderId,
          gatewayPaymentId: `pay_${Date.now()}`,
          signature: 'test_verified_signature'
        })
      });

      if (verifyRes.ok) {
        setOrderResult((prev: any) => ({
          ...prev,
          payment_status: 'paid',
          status: 'paid'
        }));
      }
    } catch (err: any) {
      console.error('Payment error:', err);
    } finally {
      setIsPaying(false);
    }
  };

  const copyIdempotencyKey = () => {
    navigator.clipboard.writeText(idempotencyKey);
    setKeyCopied(true);
    setTimeout(() => setKeyCopied(false), 2000);
  };

  const getWhatsAppForwardUrl = () => {
    const itemListText = items
      .map((i, idx) => `${idx + 1}. [${i.product.code}] ${i.product.name} - Qty: ${i.quantity} units`)
      .join('\n');

    const orderNum = orderResult?.order_number || `ORD-${Date.now().toString().slice(-6)}`;

    const text = encodeURIComponent(
      `*CORPORATE ORDER / RFQ - GLOBRANDS LIFESTYLE*\n\n` +
      `*Order/RFQ Number:* ${orderNum}\n` +
      `*Idempotency Key:* ${idempotencyKey}\n` +
      `*Client:* ${fullName} (${companyName})\n` +
      `*Contact:* ${phone} | ${email}\n` +
      `*Destination City:* ${city || 'India'}\n` +
      `*Branding Finish:* ${customizationType}\n\n` +
      `*Products Shortlisted (${totalUnits} units):*\n${itemListText}\n\n` +
      `*Event Notes:* ${message || 'Please send formal B2B invoice & digital mockups.'}`
    );

    return `https://wa.me/919900020456?text=${text}`;
  };

  return (
    <div className="py-12 bg-[#FCFBF9]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-2">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#916c27] font-semibold">Bulk Checkout & RFQ</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            CORPORATE CHECKOUT & BULK RFQ
          </h1>

          <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl font-normal leading-relaxed">
            Enterprise procurement desk backed by idempotent request safety, live inventory validation, and integrated corporate payment processing.
          </p>
        </div>

        {/* Idempotency Protection Banner */}
        <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/60">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                <span>Idempotency Key Protection Active</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono">
                  Deduplication ON
                </span>
              </p>
              <p className="text-[11px] text-neutral-500 font-mono break-all">
                Key: {idempotencyKey}
              </p>
            </div>
          </div>

          <button
            onClick={copyIdempotencyKey}
            className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            title="Copy unique Idempotency Key"
          >
            {keyCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{keyCopied ? 'Copied' : 'Copy Key'}</span>
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="max-w-3xl mx-auto p-10 sm:p-14 rounded-3xl bg-white border border-neutral-200/90 shadow-md text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                {isReplayed ? 'Duplicate Safe (Replayed From Cache)' : 'New Order Created in PostgreSQL'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111317] font-serif-luxury">
                Order #{orderResult?.order_number || 'GLO-2026-CONFIRMED'} Confirmed!
              </h2>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you, <b className="text-[#111317]">{fullName}</b> ({companyName}). Your corporate order has been securely registered with idempotency key.
              </p>
            </div>

            {/* Order Details Card */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-left space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-neutral-200/60">
                <span className="text-neutral-500">Order ID:</span>
                <span className="font-bold text-neutral-900">{orderResult?.id}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200/60">
                <span className="text-neutral-500">Idempotency Key:</span>
                <span className="font-bold text-emerald-700 break-all">{orderResult?.idempotency_key || idempotencyKey}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200/60">
                <span className="text-neutral-500">Payment Status:</span>
                <span className={`font-bold uppercase ${orderResult?.payment_status === 'paid' ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {orderResult?.payment_status || 'unpaid (B2B PO)'}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500">Total Units:</span>
                <span className="font-bold text-neutral-900">{totalUnits} units</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={getWhatsAppForwardUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Order Confirmation on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  clearQuote();
                  if (typeof window !== 'undefined' && window.crypto?.randomUUID) {
                    setIdempotencyKey(`ord-${window.crypto.randomUUID()}`);
                  }
                }}
                className="px-6 py-3.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-semibold hover:bg-neutral-200 transition-colors"
              >
                Place Another Order
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            
            {/* Left: Shortlisted Items Table */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-neutral-200/90 shadow-2xs space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <h3 className="text-base sm:text-lg font-bold text-[#111317] font-serif-luxury flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#b88e3e]" />
                    <span>Shortlisted Products ({items.length})</span>
                  </h3>
                  
                  {items.length > 0 && (
                    <button
                      onClick={clearQuote}
                      className="text-xs text-red-500 hover:underline font-semibold cursor-pointer"
                    >
                      Clear Basket
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-neutral-300 bg-[#FAF8F5] space-y-3">
                    <p className="text-base text-neutral-800 font-bold font-serif-luxury">Your RFQ basket is currently empty.</p>
                    <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                      Explore our catalog products and click &ldquo;Bulk Quote&rdquo; on any model to build your corporate proposal.
                    </p>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl gold-luxury-button text-xs font-bold shadow-xs mt-2"
                    >
                      <span>Explore Catalog</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4 divide-y divide-neutral-100">
                    {items.map((item) => (
                      <div key={item.product.id} className="pt-4 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 rounded-xl object-cover border border-neutral-200 bg-neutral-100"
                          />
                          <div>
                            <span className="text-[10px] font-bold text-[#916c27] uppercase">
                              {item.product.code}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">
                              {item.product.name}
                            </h4>
                            <p className="text-[11px] text-neutral-500">
                              Branding: {item.customization || customizationType}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                          <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50">
                            <button
                              onClick={() => updateQuantity(item.product.id, Math.max(10, item.quantity - 10))}
                              className="px-2.5 py-1 text-xs font-bold text-neutral-600 hover:bg-neutral-200"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 text-xs font-bold text-neutral-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 10)}
                              className="px-2.5 py-1 text-xs font-bold text-neutral-600 hover:bg-neutral-200"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromQuote(item.product.id)}
                            className="p-1.5 rounded-lg text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>

            {/* Right: Lead Capture & Idempotent Checkout Form */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-neutral-200/90 shadow-sm space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-[#111317] font-serif-luxury">
                    Enterprise Order Information
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Duplicate-safe checkout with unique idempotency token.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:ring-2 focus:ring-[#b88e3e] focus:outline-none bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Wipro Technologies Ltd"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:ring-2 focus:ring-[#b88e3e] focus:outline-none bg-neutral-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="anand@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:ring-2 focus:ring-[#b88e3e] focus:outline-none bg-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">Phone / Mobile *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:ring-2 focus:ring-[#b88e3e] focus:outline-none bg-neutral-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Delivery City & State</label>
                    <input
                      type="text"
                      placeholder="e.g. Bengaluru, Karnataka"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:ring-2 focus:ring-[#b88e3e] focus:outline-none bg-neutral-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Payment & Processing Mode</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMode('rfq')}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                          paymentMode === 'rfq'
                            ? 'bg-neutral-900 text-white border-neutral-900'
                            : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        B2B Purchase Order (PO)
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMode('online_advance')}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                          paymentMode === 'online_advance'
                            ? 'bg-[#2563eb] text-white border-[#2563eb]'
                            : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>Online Gateway</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Customization Instructions</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Laser engrave company logo on bottle and diary, deliver by 15th."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs focus:ring-2 focus:ring-[#b88e3e] focus:outline-none bg-neutral-50"
                    />
                  </div>

                  {/* Submit Button with Loading & Idempotency States */}
                  <button
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className="w-full py-3.5 rounded-xl bg-[#111317] hover:bg-[#2563eb] text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Processing Idempotent Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>
                          {paymentMode === 'online_advance' ? 'Place Order & Pay with Gateway' : 'Place Idempotent Order / RFQ'}
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-center text-neutral-400">
                    Protected against accidental double-clicks & network retries via Idempotency-Key.
                  </p>
                </form>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
