'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Building2, 
  Mail, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  Briefcase,
  KeyRound
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Invalid credentials.');
      }

      setSuccess(true);
      setTimeout(() => {
        if (data.user?.role === 'admin') {
          router.push('/admin');
        } else {
          router.push('/');
        }
      }, 1000);
    } catch (err: any) {
      setError(err.message || 'Login failed. Please verify your email and password.');
    } finally {
      setLoading(false);
    }
  };

  // Demo Credentials Quick Fill
  const fillAdminDemo = () => {
    setEmail('admin@globrandslifestyle.com');
    setPassword('admin123');
    setError('');
  };

  const fillClientDemo = () => {
    setEmail('buyer@wipro.com');
    setPassword('client123');
    setError('');
  };

  return (
    <div className="min-h-[80vh] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-[#fafcf9]">
      <div className="w-full max-w-md">
        
        <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-xl p-8 sm:p-10 space-y-6 text-left">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-white flex items-center justify-center mx-auto shadow-md">
              <KeyRound className="w-6 h-6 text-[#eddab4]" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111317] tracking-tight">
              Sign In to Globrands
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500">
              Access your corporate RFQ orders, invoices, and admin portal.
            </p>
          </div>

          {/* Quick Demo Credentials Banner */}
          <div className="p-3.5 rounded-2xl bg-[#faf6ee] border border-[#b88e3e]/30 space-y-2 text-left">
            <span className="text-[10px] font-bold text-[#916c27] tracking-wider uppercase block">
              ⚡ Quick Fill Demo Accounts
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={fillAdminDemo}
                className="py-1.5 px-2.5 rounded-lg bg-white hover:bg-neutral-50 border border-neutral-200 text-[11px] font-bold text-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-2xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>Admin Demo</span>
              </button>
              <button
                type="button"
                onClick={fillClientDemo}
                className="py-1.5 px-2.5 rounded-lg bg-white hover:bg-neutral-50 border border-neutral-200 text-[11px] font-bold text-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-2xs"
              >
                <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                <span>Client Demo</span>
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
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Authentication successful! Redirecting...</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Work Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="admin@globrandslifestyle.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-200 text-xs focus:ring-2 focus:ring-[#2563eb] focus:outline-none bg-neutral-50"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-neutral-700">Password</label>
                <span className="text-[11px] text-neutral-400">Default: admin123</span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-200 text-xs focus:ring-2 focus:ring-[#2563eb] focus:outline-none bg-neutral-50"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#111317] hover:bg-[#2563eb] text-white text-xs font-bold tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Footer Navigation */}
          <div className="pt-4 border-t border-neutral-100 text-center text-xs text-neutral-500">
            <span>New enterprise client? </span>
            <Link href="/register" className="font-bold text-[#2563eb] hover:underline">
              Create an account
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

