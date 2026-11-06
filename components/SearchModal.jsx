'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { X, Search, ArrowRight, Leaf } from 'lucide-react';
import { navMenus } from '@/lib/navData';

const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase().trim();
    const matched = [];

    navMenus.products?.categories?.forEach((cat) => {
      if (cat.name.toLowerCase().includes(q)) {
        matched.push({
          type: 'Product Category',
          name: cat.name,
          href: `/products/${cat.slug}`,
        });
      }
      cat.subItems?.forEach((sub) => {
        if (sub.name.toLowerCase().includes(q)) {
          matched.push({
            type: 'Product',
            name: sub.name,
            href: `/products/${cat.slug}/${sub.slug}`,
            parent: cat.name,
          });
        }
      });
    });

    navMenus.services?.categories?.forEach((cat) => {
      if (cat.name.toLowerCase().includes(q)) {
        matched.push({
          type: 'Service',
          name: cat.name,
          href: `/services/${cat.slug}`,
        });
      }
      cat.subItems?.forEach((sub) => {
        if (sub.name.toLowerCase().includes(q)) {
          matched.push({
            type: 'Service',
            name: sub.name,
            href: `/services/${cat.slug}/${sub.slug}`,
            parent: cat.name,
          });
        }
      });
    });

    navMenus.areaWeServe?.items?.forEach((area) => {
      const areaName = typeof area === 'string' ? area : area.name;
      if (areaName.toLowerCase().includes(q)) {
        matched.push({
          type: 'Area',
          name: areaName,
          href: `/area-we-serve/${toSlug(areaName)}`,
        });
      }
    });

    const pages = [
      { name: 'Home', href: '/' },
      { name: 'Products', href: '/products' },
      { name: 'Services', href: '/services' },
      { name: 'Areas We Serve', href: '/area-we-serve' },
      { name: 'Contact Us', href: '/contact' },
    ];
    pages.forEach((page) => {
      if (page.name.toLowerCase().includes(q)) {
        matched.push({ type: 'Page', name: page.name, href: page.href });
      }
    });

    setResults(matched.slice(0, 10));
  }, [query]);

  const handleSelect = (href) => {
    onClose();
    router.push(href);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 flex items-start justify-center pt-[12vh] px-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <Search size={20} className="text-gray-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, services, areas..."
              className="flex-1 text-base text-gray-900 placeholder-gray-400 outline-none bg-transparent"
            />
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          </div>

          {query.trim().length > 0 && query.trim().length < 2 && (
            <div className="px-5 py-8 text-center text-sm text-gray-400">
              Type at least 2 characters to search
            </div>
          )}

          {query.trim().length >= 2 && results.length === 0 && (
            <div className="px-5 py-8 text-center">
              <p className="text-sm text-gray-500 mb-1">No results found for</p>
              <p className="text-sm font-semibold text-gray-900">
                &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Try searching for products, services, or areas
              </p>
            </div>
          )}

          {results.length > 0 && (
            <div className="max-h-[50vh] overflow-y-auto py-2">
              {results.map((result, i) => (
                <button
                  key={`${result.href}-${i}`}
                  onClick={() => handleSelect(result.href)}
                  className="w-full flex items-center gap-3 px-5 py-3 hover:bg-emerald-50 transition-colors text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-emerald-100 flex items-center justify-center shrink-0 transition-colors">
                    {result.type === 'Area' ? (
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ) : (
                      <Leaf size={14} className="text-emerald-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {result.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {result.type}
                      {result.parent ? ` in ${result.parent}` : ''}
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-gray-300 group-hover:text-emerald-600 transition-colors shrink-0"
                  />
                </button>
              ))}
            </div>
          )}

          {query.trim().length === 0 && (
            <div className="px-5 py-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Quick Links
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'Indoor Plants', href: '/products/indoor-plant' },
                  { name: 'Landscaping', href: '/services/landscaping' },
                  { name: 'Garden Maintenance', href: '/services/garden-maintenance' },
                  { name: 'Pots & Planters', href: '/products/pots' },
                  { name: 'Irrigation Systems', href: '/services/irrigation-system' },
                  { name: 'Artificial Plants', href: '/products/artificial-plant-grass' },
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleSelect(link.href)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors text-left"
                  >
                    <ArrowRight size={12} className="text-gray-300" />
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="px-5 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-3 text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono">
                  Esc
                </kbd>
                to close
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono">
                  ↵
                </kbd>
                to select
              </span>
            </div>
            <span className="text-[11px] text-gray-400">
              {results.length > 0 && `${results.length} results`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}