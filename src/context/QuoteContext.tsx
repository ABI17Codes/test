'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

export interface QuoteItem {
  product: Product;
  quantity: number;
  customization: string;
}

interface QuoteContextType {
  items: QuoteItem[];
  addToQuote: (product: Product, quantity?: number, customization?: string) => void;
  removeFromQuote: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  activeProductModal: Product | null;
  setActiveProductModal: (prod: Product | null) => void;
  activeCatalogModal: { open: boolean; type: 'bags' | 'gifts'; page: number } | null;
  setActiveCatalogModal: (modal: { open: boolean; type: 'bags' | 'gifts'; page: number } | null) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [activeCatalogModal, setActiveCatalogModal] = useState<{ open: boolean; type: 'bags' | 'gifts'; page: number } | null>(null);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('globrands_rfq_items');
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
    setIsLoaded(true);
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('globrands_rfq_items', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items, isLoaded]);

  const addToQuote = (product: Product, quantity = 50, customization = 'Laser Engraved Logo') => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, quantity, customization }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromQuote = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity: Math.max(10, quantity) } : i))
    );
  };

  const clearQuote = () => setItems([]);

  return (
    <QuoteContext.Provider
      value={{
        items,
        addToQuote,
        removeFromQuote,
        updateQuantity,
        clearQuote,
        isDrawerOpen,
        setIsDrawerOpen,
        activeProductModal,
        setActiveProductModal,
        activeCatalogModal,
        setActiveCatalogModal,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) throw new Error('useQuote must be used within QuoteProvider');
  return context;
};
