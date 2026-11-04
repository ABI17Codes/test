'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  FileText, 
  Users, 
  LogOut, 
  ExternalLink, 
  Menu, 
  X, 
  ShieldCheck,
  Building2,
  ChevronRight,
  Bell
} from 'lucide-react';

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>({
    name: 'Globrands Admin',
    email: 'admin@globrandslifestyle.com',
    role: 'admin'
  });

  useEffect(() => {
    // Check authentication
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setCurrentUser(data.user);
        }
      })
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } finally {
      router.push('/login');
    }
  };

  const navItems = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Orders & Payments', href: '/admin/orders', icon: ShoppingBag },
    { label: 'Product Catalog', href: '/admin/products', icon: Package },
    { label: 'Quotes & RFQs', href: '/admin/quotes', icon: FileText },
    { label: 'Corporate Accounts', href: '/admin/customers', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-neutral-900 flex flex-col lg:flex-row text-left">
      
      {/* Mobile Header Bar */}
      <div className="lg:hidden bg-white border-b border-neutral-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
            GL
          </div>
          <span className="font-bold text-sm text-neutral-900">Admin Console</span>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1.5 rounded-lg border border-neutral-200 text-neutral-700"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Admin Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-neutral-200 transform transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col justify-between`}
      >
        <div className="p-5 space-y-6">
          
          {/* Logo & Portal Identity */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center p-1 border border-neutral-200">
                <img
                  src="/globrands-logo.jpg"
                  alt="Globrands"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <span className="font-extrabold text-sm text-neutral-900 leading-tight block">
                  GLOBRANDS
                </span>
                <span className="text-[10px] text-[#2563eb] font-bold uppercase tracking-wider block">
                  Enterprise Admin
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === '/admin' ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-[#2563eb] text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

        </div>

        {/* Sidebar Bottom Profile & Storefront Return */}
        <div className="p-5 border-t border-neutral-100 space-y-3">
          <Link
            href="/"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Back to Storefront</span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          </Link>

          <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-7 h-7 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-xs shrink-0">
                {currentUser?.name?.charAt(0) || 'A'}
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-neutral-900 truncate">
                  {currentUser?.name || 'Administrator'}
                </p>
                <p className="text-[10px] text-neutral-500 truncate">
                  {currentUser?.email}
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-1.5 text-neutral-400 hover:text-red-600 transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}

