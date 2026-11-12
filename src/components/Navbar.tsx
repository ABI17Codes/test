'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  FileText,
  ChevronDown,
  BookOpen,
  Briefcase,
  User,
  ShieldCheck,
  Building2,
  LogOut,
  UserPlus,
  LogIn,
  LayoutGrid,
  Gift
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export const Navbar: React.FC = () => {
  const { items } = useQuote();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const checkAuth = () => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      })
      .catch(() => setUser(null));
  };

  useEffect(() => {
    checkAuth();
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } finally {
      setUser(null);
      setAccountDropdownOpen(false);
      router.push('/login');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCatalogDropdownOpen(false);
      }
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setAccountDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCatalogDropdownOpen(false);
    setAccountDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Branding', href: '/branding' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isCatalogRoute =
    pathname === '/products' ||
    pathname.startsWith('/products/') ||
    pathname === '/gift-sets' ||
    pathname === '/bags' ||
    pathname.startsWith('/catalog-viewer');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E5E7EB]'
          : 'bg-white border-b border-[#E5E7EB]'
      }`}
    >
      {/* Top Dark Utility Bar matching reference */}
      <div className="bg-[#0B111E] text-white/75 text-[10px] py-1.5 border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between gap-4">
          <div className="truncate font-medium tracking-wider uppercase">
            Direct Factory Corporate Gifting &amp; Executive Carrywear &bull; Bengaluru Atelier &bull; 100% In-House Branding
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0 font-medium text-white/85">
            <a href="tel:+919900020456" className="hover:text-[#E8B43A] transition-colors">+91 99000 20456</a>
            <span className="text-white/30">&bull;</span>
            <a href="mailto:enquiry@globrandslifestyle.com" className="hover:text-[#E8B43A] transition-colors">enquiry@globrandslifestyle.com</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Presentation */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-white border border-[#E5E7EB] shadow-2xs flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
              <img
                src="/globrands-emblem-clean.png"
                alt="Globrands Lifestyle Logo"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-sm leading-none font-sans">
                <span className="text-[#0876B4]">GLOBRANDS</span>{' '}
                <span className="text-[#E8B43A]">LIFESTYLE</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#667085] font-semibold mt-0.5 font-mono">
                Corporate Gifting &amp; Bags
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            {/* Unified Catalogues Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCatalogDropdownOpen(!catalogDropdownOpen)}
                className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isCatalogRoute || catalogDropdownOpen
                    ? 'text-[#0876B4] bg-[#0876B4]/8 font-semibold'
                    : 'text-[#101828] hover:text-[#0876B4] hover:bg-[#F5F7FA]'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-[#0876B4]" />
                <span>Catalogues</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#667085] transition-transform duration-200 ${catalogDropdownOpen ? 'rotate-180' : ''}`} />
                {isCatalogRoute && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0876B4] rounded-full" />
                )}
              </button>

              {catalogDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border border-[#E5E7EB] rounded-2xl shadow-xl p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50 text-left">
                  <div className="px-2.5 pt-1.5 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#667085]">
                    Product Collections
                  </div>

                  <Link
                    href="/products"
                    className={`flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F7FA] transition-colors group text-left ${
                      pathname === '/products' ? 'bg-[#0876B4]/6' : ''
                    }`}
                    onClick={() => setCatalogDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                      <LayoutGrid className="w-4 h-4 text-[#101828]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#101828] group-hover:text-[#0876B4]">
                        All Products Catalogue
                      </p>
                      <p className="text-[11px] text-[#667085]">
                        183+ Verified Corporate SKUs
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/gift-sets"
                    className={`flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F7FA] transition-colors group text-left ${
                      pathname === '/gift-sets' ? 'bg-[#0876B4]/6' : ''
                    }`}
                    onClick={() => setCatalogDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                      <Gift className="w-4 h-4 text-[#E8B43A]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#101828] group-hover:text-[#0876B4]">
                        Executive Gift Sets
                      </p>
                      <p className="text-[11px] text-[#667085]">
                        Curated 5-in-1, 4-in-1 &amp; Bamboo Hampers
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/bags"
                    className={`flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F7FA] transition-colors group text-left ${
                      pathname === '/bags' ? 'bg-[#0876B4]/6' : ''
                    }`}
                    onClick={() => setCatalogDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4 text-[#0876B4]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#101828] group-hover:text-[#0876B4]">
                        Bags &amp; Backpacks
                      </p>
                      <p className="text-[11px] text-[#667085]">
                        Ninja Gear &amp; ADMA London Carrywear
                      </p>
                    </div>
                  </Link>

                  <div className="my-1.5 border-t border-[#E5E7EB]" />

                  <div className="px-2.5 pt-1 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#667085]">
                    Digital PDF Flipbooks
                  </div>

                  <Link
                    href="/catalog-viewer?type=bags"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F7FA] transition-colors group text-left"
                    onClick={() => setCatalogDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4 text-[#0876B4]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#101828] group-hover:text-[#0876B4]">
                        Bag PDF Catalogue
                      </p>
                      <p className="text-[11px] text-[#667085]">
                        36 Pages &bull; Ninja Gear &amp; ADMA
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/catalog-viewer?type=gifts"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F7FA] transition-colors group text-left"
                    onClick={() => setCatalogDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4 text-[#E8B43A]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#101828] group-hover:text-[#0876B4]">
                        All-in-One Gifting PDF
                      </p>
                      <p className="text-[11px] text-[#667085]">
                        146 Pages &bull; Hampers, Bottles, Tech
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium tracking-tight rounded-lg whitespace-nowrap transition-all ${
                    isActive
                      ? 'text-[#0876B4] font-semibold bg-[#0876B4]/8'
                      : 'text-[#101828] hover:text-[#0876B4] hover:bg-[#F5F7FA]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0876B4] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right-Side Action Area (Minimal) */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Account Dropdown */}
            <div className="relative" ref={accountRef}>
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border cursor-pointer ${
                  user
                    ? 'bg-blue-50 text-[#0876B4] border-blue-200 hover:bg-blue-100'
                    : 'bg-white text-[#101828] border-[#E5E7EB] hover:bg-[#F5F7FA]'
                }`}
                title="Account & Admin Portal"
              >
                {user ? (
                  <>
                    <Building2 className="w-3.5 h-3.5 text-[#0876B4]" />
                    <span className="max-w-[80px] truncate">{user.name?.split(' ')[0] || 'User'}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </>
                ) : (
                  <>
                    <User className="w-3.5 h-3.5 text-[#667085]" />
                    <span className="hidden sm:inline">Account</span>
                  </>
                )}
                <ChevronDown className={`w-3 h-3 text-[#667085] transition-transform ${accountDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {accountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-[#E5E7EB] rounded-2xl shadow-xl p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50 text-left">
                  {user ? (
                    <>
                      <div className="p-3 border-b border-neutral-100 mb-1">
                        <p className="font-bold text-xs text-[#101828]">{user.name}</p>
                        <p className="text-[11px] text-[#667085] truncate">{user.email}</p>
                        {user.company_name && (
                          <p className="text-[10px] text-[#0876B4] font-medium mt-0.5">{user.company_name}</p>
                        )}
                      </div>

                      {user.role === 'admin' && (
                        <Link
                          href="/admin"
                          onClick={() => setAccountDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-purple-700 hover:bg-purple-50 transition-colors"
                        >
                          <ShieldCheck className="w-4 h-4 text-purple-600" />
                          <span>Admin Console</span>
                        </Link>
                      )}

                      <Link
                        href="/quote"
                        onClick={() => setAccountDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-[#101828] hover:bg-[#F5F7FA] transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <ShoppingBag className="w-4 h-4 text-[#0876B4]" />
                          <span>My Quote Requests</span>
                        </span>
                        {mounted && totalItems > 0 && (
                          <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold bg-[#E8B43A] text-[#0B111E] rounded-full">
                            {totalItems}
                          </span>
                        )}
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="p-2.5 border-b border-neutral-100 mb-1">
                        <p className="font-bold text-xs text-[#101828]">Corporate Portal</p>
                        <p className="text-[11px] text-[#667085]">Sign in to manage bulk RFQs &amp; orders</p>
                      </div>

                      <Link
                        href="/login"
                        onClick={() => setAccountDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-[#101828] hover:bg-[#F5F7FA] transition-colors"
                      >
                        <LogIn className="w-4 h-4 text-[#0876B4]" />
                        <span>Sign In</span>
                      </Link>

                      <Link
                        href="/register"
                        onClick={() => setAccountDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#667085] hover:bg-[#F5F7FA] transition-colors"
                      >
                        <UserPlus className="w-4 h-4 text-emerald-600" />
                        <span>Create Corporate Account</span>
                      </Link>

                      <Link
                        href="/quote"
                        onClick={() => setAccountDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-[#101828] hover:bg-[#F5F7FA] transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <ShoppingBag className="w-4 h-4 text-[#0876B4]" />
                          <span>My RFQ Basket</span>
                        </span>
                        {mounted && totalItems > 0 && (
                          <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold bg-[#E8B43A] text-[#0B111E] rounded-full">
                            {totalItems}
                          </span>
                        )}
                      </Link>

                      <div className="pt-1 border-t border-neutral-100 mt-1">
                        <Link
                          href="/admin"
                          onClick={() => setAccountDropdownOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-[#E8B43A] hover:bg-amber-50/50 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#E8B43A]" />
                            <span>Admin Console</span>
                          </span>
                          <span className="text-[10px] text-[#667085] font-normal">Demo</span>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#101828] hover:text-[#0876B4] rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer ml-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#E5E7EB] space-y-2 animate-in fade-in duration-200 text-left bg-white">
            <div className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#667085]">
              Catalogues &amp; Collections
            </div>
            {[
              { label: 'All Products Catalogue', href: '/products' },
              { label: 'Executive Gift Sets', href: '/gift-sets' },
              { label: 'Bags & Backpacks', href: '/bags' },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#0876B4]/10 text-[#0876B4] font-bold'
                      : 'text-[#101828] hover:bg-[#F5F7FA]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="grid grid-cols-2 gap-2 px-1 pb-2 border-b border-[#E5E7EB]">
              <Link
                href="/catalog-viewer?type=bags"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5F7FA] text-xs font-bold text-[#101828]"
              >
                <FileText className="w-4 h-4 text-[#0876B4]" />
                <span>Bags PDF (36p)</span>
              </Link>
              <Link
                href="/catalog-viewer?type=gifts"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5F7FA] text-xs font-bold text-[#101828]"
              >
                <BookOpen className="w-4 h-4 text-[#E8B43A]" />
                <span>Gifts PDF (146p)</span>
              </Link>
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#0876B4]/10 text-[#0876B4] font-bold'
                      : 'text-[#101828] hover:bg-[#F5F7FA]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </header>
  );
};
