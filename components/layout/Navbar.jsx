'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingCart, Menu, X, ChevronRight, Leaf } from 'lucide-react';
import { navMenus } from '@/lib/navData';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const navRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
        setActiveCategory(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      setActiveCategory(null);
    } else {
      setActiveMenu(menu);
      setActiveCategory(null);
    }
  };

  const handleCategoryClick = (e, slug) => {
    e.stopPropagation();
    setActiveCategory(activeCategory === slug ? null : slug);
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white text-[11px] font-medium tracking-wider">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-1">
          <a href="tel:+971586453671" className="hover:text-accent transition">
            Book Now : +971 58 645 3671
          </a>
          <span className="hidden sm:block">Free Delivery Above 199 AED</span>
          <a href="mailto:support@royalplantscape.com" className="hover:text-accent transition">
            support@royalplantscape.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/Home"
          className="flex items-center gap-2 group"
          onClick={() => setActiveMenu(null)}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary-dark transition">
            <Leaf size={22} className="text-accent" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-elegant font-bold text-base leading-tight text-primary tracking-wide">
              ROYAL PLANTSCAPE
            </span>
            <span className="text-[9px] tracking-widest text-gray-500 uppercase">
              Landscape & Gardening
            </span>
          </div>
        </Link>

        {/* Desktop Nav — NO chevron icons on parent links */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <Link
              href="/Home"
              onClick={() => setActiveMenu(null)}
              className="text-xs font-bold tracking-widest-xl text-darkText hover:text-primary transition"
            >
              HOME
            </Link>
          </li>

          {/* PRODUCTS */}
          <li className="relative">
            <button
              onClick={() => handleMenuClick('products')}
              className={`text-xs font-bold tracking-widest-xl py-2 cursor-pointer transition ${
                activeMenu === 'products' ? 'text-primary' : 'text-darkText hover:text-primary'
              }`}
            >
              {navMenus.products.label}
            </button>

            {activeMenu === 'products' && (
              <ul className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                {navMenus.products.categories.map((cat) => (
                  <li key={cat.slug} className="relative">
                    <button
                      onClick={(e) => handleCategoryClick(e, cat.slug)}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between transition cursor-pointer ${
                        activeCategory === cat.slug
                          ? 'text-primary bg-gray-50'
                          : 'text-darkText hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      <span className="uppercase tracking-wider">{cat.name}</span>
                      {cat.subItems?.length > 0 && <ChevronRight size={14} />}
                    </button>

                    {activeCategory === cat.slug && cat.subItems?.length > 0 && (
                      <ul className="absolute top-0 left-full ml-1 w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                        {cat.subItems.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={`/products/${cat.slug}/${sub.slug}`}
                              onClick={() => setActiveMenu(null)}
                              className="block px-4 py-2 text-xs text-darkText hover:text-primary hover:bg-gray-50 transition"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* OUR SERVICE */}
          <li className="relative">
            <button
              onClick={() => handleMenuClick('services')}
              className={`text-xs font-bold tracking-widest-xl py-2 cursor-pointer transition ${
                activeMenu === 'services' ? 'text-primary' : 'text-darkText hover:text-primary'
              }`}
            >
              {navMenus.services.label}
            </button>

            {activeMenu === 'services' && (
              <ul className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                {navMenus.services.categories.map((cat) => (
                  <li key={cat.slug} className="relative">
                    <button
                      onClick={(e) => handleCategoryClick(e, cat.slug)}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center justify-between transition cursor-pointer ${
                        activeCategory === cat.slug
                          ? 'text-primary bg-gray-50'
                          : 'text-darkText hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      <span className="uppercase tracking-wider">{cat.name}</span>
                      {cat.subItems?.length > 0 && <ChevronRight size={14} />}
                    </button>

                    {activeCategory === cat.slug && cat.subItems?.length > 0 && (
                      <ul className="absolute top-0 left-full ml-1 w-72 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50 max-h-80 overflow-y-auto">
                        {cat.subItems.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={`/services/${cat.slug}/${sub.slug}`}
                              onClick={() => setActiveMenu(null)}
                              className="block px-4 py-2 text-xs text-darkText hover:text-primary hover:bg-gray-50 transition"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* AREA WE SERVE — same dropdown style as Products/Services */}
          <li className="relative">
            <button
              onClick={() => handleMenuClick('areaWeServe')}
              className={`text-xs font-bold tracking-widest-xl py-2 cursor-pointer transition ${
                activeMenu === 'areaWeServe' ? 'text-primary' : 'text-darkText hover:text-primary'
              }`}
            >
              {navMenus.areaWeServe.label}
            </button>

            {activeMenu === 'areaWeServe' && (
              <ul className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50 max-h-96 overflow-y-auto">
                {navMenus.areaWeServe.items.map((area) => (
                  <li key={area}>
                    <Link
                      href={`/area-we-serve/${area.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setActiveMenu(null)}
                      className="block px-4 py-2.5 text-xs text-darkText hover:text-primary hover:bg-gray-50 transition"
                    >
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* CONTACT US */}
          <li>
            <Link
              href="/contact"
              onClick={() => setActiveMenu(null)}
              className="text-xs font-bold tracking-widest-xl text-darkText hover:text-primary transition"
            >
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden lg:block text-darkText hover:text-primary cursor-pointer">
            <Search size={18} />
          </button>
          <button aria-label="Account" className="hidden lg:block text-darkText hover:text-primary cursor-pointer">
            <User size={18} />
          </button>
          <button aria-label="Cart" className="text-darkText hover:text-primary relative cursor-pointer">
            <ShoppingCart size={18} />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-darkText cursor-pointer"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-80 max-w-full bg-white overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-sm text-primary">Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <nav className="p-4 space-y-1">
              <Link
                href="/Home"
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-xs font-bold tracking-wider text-darkText"
              >
                HOME
              </Link>

              {/* Products Mobile */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'products' ? null : 'products')}
                  className="w-full flex items-center justify-between py-2.5 text-xs font-bold tracking-wider text-darkText"
                >
                  PRODUCTS
                  <ChevronRight
                    size={14}
                    className={`transition ${mobileSubmenu === 'products' ? 'rotate-90 text-primary' : ''}`}
                  />
                </button>
                {mobileSubmenu === 'products' && (
                  <div className="pl-3 pb-2 space-y-1 border-l-2 border-primary/20">
                    {navMenus.products.categories.map((cat) => (
                      <div key={cat.slug}>
                        <p className="text-[11px] font-semibold text-primary uppercase py-1">{cat.name}</p>
                        {cat.subItems?.map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/products/${cat.slug}/${sub.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="block pl-2 py-1 text-[11px] text-gray-600 hover:text-primary"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Mobile */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
                  className="w-full flex items-center justify-between py-2.5 text-xs font-bold tracking-wider text-darkText"
                >
                  OUR SERVICE
                  <ChevronRight
                    size={14}
                    className={`transition ${mobileSubmenu === 'services' ? 'rotate-90 text-primary' : ''}`}
                  />
                </button>
                {mobileSubmenu === 'services' && (
                  <div className="pl-3 pb-2 space-y-1 border-l-2 border-primary/20">
                    {navMenus.services.categories.map((cat) => (
                      <div key={cat.slug}>
                        <p className="text-[11px] font-semibold text-primary uppercase py-1">{cat.name}</p>
                        {cat.subItems?.map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/services/${cat.slug}/${sub.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="block pl-2 py-1 text-[11px] text-gray-600 hover:text-primary"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Area We Serve Mobile */}
              <div>
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'area' ? null : 'area')}
                  className="w-full flex items-center justify-between py-2.5 text-xs font-bold tracking-wider text-darkText"
                >
                  AREA WE SERVE
                  <ChevronRight
                    size={14}
                    className={`transition ${mobileSubmenu === 'area' ? 'rotate-90 text-primary' : ''}`}
                  />
                </button>
                {mobileSubmenu === 'area' && (
                  <div className="pl-3 pb-2 space-y-1 border-l-2 border-primary/20">
                    {navMenus.areaWeServe.items.map((area) => (
                      <Link
                        key={area}
                        href={`/area-we-serve/${area.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 text-[11px] text-gray-600 hover:text-primary"
                      >
                        {area}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-xs font-bold tracking-wider text-darkText"
              >
                CONTACT US
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}