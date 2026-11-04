'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Plus, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  RefreshCw, 
  X, 
  Check, 
  AlertCircle,
  MessageCircle,
  FileCheck2,
  Calendar,
  Lock,
  ExternalLink
} from 'lucide-react';

interface UserAccount {
  id: string;
  name: string;
  company_name: string;
  email: string;
  phone: string;
  role: 'client' | 'admin' | string;
  city?: string;
  gstin?: string;
  created_at?: string;
}

export default function AdminCustomersPage() {
  const [users, setUsers] = useState<UserAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    city: 'Bengaluru',
    gstin: '',
    password: 'Welcome@123',
    role: 'client'
  });

  const fetchUsers = () => {
    setLoading(true);
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        if (data.users) setUsers(data.users);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError('');
    setFormSuccess('');

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create user account');
      }

      setFormSuccess('Corporate account provisioned successfully!');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSuccess('');
        setFormData({
          name: '',
          companyName: '',
          email: '',
          phone: '',
          city: 'Bengaluru',
          gstin: '',
          password: 'Welcome@123',
          role: 'client'
        });
        fetchUsers();
      }, 1000);
    } catch (err: any) {
      setFormError(err.message || 'Something went wrong');
    } finally {
      setFormLoading(false);
    }
  };

  const filteredUsers = users.filter((u) => {
    const matchesRole = roleFilter === 'all' || u.role === roleFilter;
    const matchesSearch =
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.phone.includes(searchQuery) ||
      (u.city && u.city.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (u.gstin && u.gstin.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRole && matchesSearch;
  });

  const totalClients = users.filter((u) => u.role === 'client').length;
  const totalAdmins = users.filter((u) => u.role === 'admin').length;
  const verifiedGstins = users.filter((u) => u.gstin && u.gstin.trim().length > 0).length;

  const getWhatsAppLink = (user: UserAccount) => {
    const cleanPhone = user.phone.replace(/[^0-9]/g, '');
    const phoneWithCountry = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
    const text = encodeURIComponent(
      `Hello ${user.name},\n\nGreetings from Globrands Lifestyle Corporate Concierge! We are glad to have ${user.company_name} in our network. Do you have any upcoming bulk gifting, conference kit, or executive bag requirements we can assist with?`
    );
    return `https://wa.me/${phoneWithCountry}?text=${text}`;
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-neutral-900 flex items-center gap-2">
            <Users className="w-6 h-6 text-[#2563eb]" />
            Corporate Accounts Directory
          </h1>
          <p className="text-sm text-neutral-500 mt-1">
            Registered corporate clients, procurement managers, and system administrators.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111317] hover:bg-[#252830] text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 text-[#eddab4]" />
            <span>Add Corporate Client</span>
          </button>

          <button
            onClick={fetchUsers}
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
          <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Total Accounts</div>
          <div className="text-2xl font-black text-neutral-900 mt-1">{users.length}</div>
        </div>
        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/60 shadow-2xs">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" /> Corporate Buyers
          </div>
          <div className="text-2xl font-black text-blue-800 mt-1">{totalClients}</div>
        </div>
        <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 shadow-2xs">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
            <FileCheck2 className="w-3.5 h-3.5" /> GSTIN Registered
          </div>
          <div className="text-2xl font-black text-emerald-800 mt-1">{verifiedGstins}</div>
        </div>
        <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200/60 shadow-2xs">
          <div className="text-xs font-bold text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Admins
          </div>
          <div className="text-2xl font-black text-purple-800 mt-1">{totalAdmins}</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search company, buyer name, GSTIN..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-medium text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
          {[
            { label: 'All Accounts', value: 'all' },
            { label: 'Corporate Clients', value: 'client' },
            { label: 'System Admins', value: 'admin' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setRoleFilter(tab.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-colors cursor-pointer ${
                roleFilter === tab.value
                  ? 'bg-neutral-900 text-white shadow-2xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Corporate Accounts Directory Table */}
      <div className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-2xs">
        {loading ? (
          <div className="p-12 text-center text-neutral-400">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2 text-[#2563eb]" />
            <p className="text-sm font-medium">Loading corporate accounts...</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="p-12 text-center text-neutral-400">
            <Users className="w-10 h-10 mx-auto mb-2 text-neutral-300" />
            <p className="text-sm font-semibold text-neutral-600">No corporate accounts found</p>
            <p className="text-xs text-neutral-400 mt-1">Add a new client account using the button above.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-neutral-50/80 border-b border-neutral-200 text-neutral-500 font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Organization & Contact</th>
                  <th className="py-3 px-4">Account Type</th>
                  <th className="py-3 px-4">Work Email & Phone</th>
                  <th className="py-3 px-4">Location & GSTIN</th>
                  <th className="py-3 px-4">Created Date</th>
                  <th className="py-3 px-4 text-right">Quick Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredUsers.map((u) => {
                  const dateStr = u.created_at
                    ? new Date(u.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })
                    : 'Active';

                  return (
                    <tr key={u.id} className="hover:bg-neutral-50/70 transition-colors">
                      
                      {/* Organization & Contact */}
                      <td className="py-3.5 px-4">
                        <div className="font-extrabold text-neutral-900 flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-neutral-100 text-[#b88e3e] flex items-center justify-center font-bold text-xs shrink-0">
                            {u.company_name?.charAt(0) || 'C'}
                          </div>
                          <div>
                            <div>{u.company_name}</div>
                            <div className="text-[11px] font-normal text-neutral-500 mt-0.5">{u.name}</div>
                          </div>
                        </div>
                      </td>

                      {/* Role Badge */}
                      <td className="py-3.5 px-4">
                        {u.role === 'admin' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                            <ShieldCheck className="w-3 h-3" /> System Admin
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                            <Building2 className="w-3 h-3" /> Corporate Client
                          </span>
                        )}
                      </td>

                      {/* Email & Phone */}
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-neutral-900 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <a href={`mailto:${u.email}`} className="hover:text-[#2563eb] transition-colors">
                            {u.email}
                          </a>
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-0.5 flex items-center gap-1.5">
                          <Phone className="w-3 h-3 text-neutral-400 shrink-0" />
                          <span>{u.phone}</span>
                        </div>
                      </td>

                      {/* City & GSTIN */}
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-neutral-800 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-neutral-400" />
                          <span>{u.city || 'India'}</span>
                        </div>
                        {u.gstin ? (
                          <div className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 inline-block mt-0.5">
                            GST: {u.gstin}
                          </div>
                        ) : (
                          <div className="text-[10px] text-neutral-400 mt-0.5">GSTIN Unspecified</div>
                        )}
                      </td>

                      {/* Registered Date */}
                      <td className="py-3.5 px-4 text-neutral-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-neutral-400" />
                          <span>{dateStr}</span>
                        </div>
                      </td>

                      {/* Quick Contact Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={getWhatsAppLink(u)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                            title="Chat on WhatsApp"
                          >
                            <MessageCircle className="w-4 h-4 fill-emerald-100" />
                          </a>

                          <a
                            href={`mailto:${u.email}?subject=Globrands%20Lifestyle%20Corporate%20Gifting`}
                            className="p-1.5 text-neutral-500 hover:text-[#2563eb] hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                            title="Send Work Email"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
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

      {/* Add Corporate Client Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-neutral-900">
                    Provision Corporate Account
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Set up credentials and company profile for an enterprise buyer.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateUser} className="p-6 space-y-4 text-xs">
              
              {formError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {formSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{formSuccess}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Infosys Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">Contact Officer Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">Work Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="buyer@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">City / Region</label>
                  <input
                    type="text"
                    placeholder="e.g. Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">GSTIN (Optional)</label>
                  <input
                    type="text"
                    placeholder="29AAAAA0000A1Z5"
                    value={formData.gstin}
                    onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-mono uppercase focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-neutral-700 block mb-1">Account Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
                  >
                    <option value="client">Corporate Client / Buyer</option>
                    <option value="admin">System Administrator</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">Temporary Password</label>
                  <input
                    type="text"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs font-mono focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-2 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-neutral-200 text-neutral-700 font-bold hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="px-5 py-2 rounded-xl bg-[#2563eb] text-white font-bold hover:bg-[#1d4ed8] transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  {formLoading && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                  <span>Provision Account</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

