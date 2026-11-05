'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  ShoppingBag, 
  MessageCircle, 
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
  LogIn
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
    { label: 'Products', href: '/products', hasChevron: true },
    { label: 'Gift Sets', href: '/gift-sets', hasChevron: true },
    { label: 'Bags', href: '/bags', hasChevron: true },
    { label: 'Branding', href: '/branding', hasChevron: false },
    { label: 'Solutions', href: '/solutions', hasChevron: true },
    { label: 'About', href: '/about', hasChevron: false },
    { label: 'Contact', href: '/contact', hasChevron: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E5E7EB]'
          : 'bg-white border-b border-[#E5E7EB]'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
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
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center gap-1 px-3 py-1.5 text-[13px] font-semibold tracking-tight rounded-lg transition-all ${
                    isActive
                      ? 'text-[#0876B4] font-bold bg-[#0876B4]/8'
                      : 'text-[#101828] hover:text-[#0876B4] hover:bg-[#F5F7FA]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasChevron && (
                    <ChevronDown className="w-3 h-3 text-[#667085] opacity-75" />
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0876B4] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Catalogues Dropdown */}
            <div className="relative ml-1" ref={dropdownRef}>
              <button
                onClick={() => setCatalogDropdownOpen(!catalogDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  pathname.startsWith('/catalog-viewer') || catalogDropdownOpen
                    ? 'text-[#0876B4] bg-[#0876B4]/8 font-bold'
                    : 'text-[#101828] hover:text-[#0876B4] hover:bg-[#F5F7FA]'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-[#0876B4]" />
                <span>Catalogues</span>
                <ChevronDown className={`w-3 h-3 text-[#667085] transition-transform duration-200 ${catalogDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {catalogDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-[#E5E7EB] rounded-2xl shadow-xl p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50 text-left">
                  <Link
                    href="/catalog-viewer?type=bags"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F5F7FA] transition-colors group text-left"
                    onClick={() => setCatalogDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4 text-[#0876B4]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#101828] group-hover:text-[#0876B4]">
                        Bag Catalogue
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
                        All-in-One Gifting
                      </p>
                      <p className="text-[11px] text-[#667085]">
                        146 Pages &bull; Hampers, Bottles, Tech
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right-Side Action Area */}
          <div className="flex items-center gap-2.5">
            
            {/* WhatsApp B2B Desk */}
            <a
              href="https://wa.me/919900020456?text=Hi%20Globrands%20Lifestyle,%20I%20am%20interested%20in%20your%20Corporate%20Gifting%20and%20Bag%20Catalogues."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors"
              title="Chat with B2B Sales on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Account Dropdown */}
            <div className="relative" ref={accountRef}>
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border cursor-pointer ${
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
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#101828] hover:bg-[#F5F7FA] transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#0876B4]" />
                        <span>My Quote Requests</span>
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
                        <p className="text-[11px] text-[#667085]">Sign in to manage bulk RFQs & orders</p>
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

            {/* Bulk RFQ Cart Button */}
            <Link
              href="/quote"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101828] hover:bg-[#0876B4] text-white text-xs font-semibold tracking-tight transition-all shadow-xs cursor-pointer"
              title="View Bulk RFQ Basket"
            >
              <FileText className="w-3.5 h-3.5 text-white/90" />
              <span>Request RFQ</span>
              {mounted && totalItems > 0 && (
                <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] font-black bg-[#E8B43A] text-[#101828] rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

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

            <div className="pt-2 border-t border-[#E5E7EB] grid grid-cols-2 gap-2 px-1">
              <Link
                href="/catalog-viewer?type=bags"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5F7FA] text-xs font-bold text-[#101828]"
              >
                <Briefcase className="w-4 h-4 text-[#0876B4]" />
                <span>Bags (36p)</span>
              </Link>
              <Link
                href="/catalog-viewer?type=gifts"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F5F7FA] text-xs font-bold text-[#101828]"
              >
                <BookOpen className="w-4 h-4 text-[#E8B43A]" />
                <span>Gifts (146p)</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
