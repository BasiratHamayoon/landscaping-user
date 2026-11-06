'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Truck,
  Mail,
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Leaf,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartCount, showCart } from '@/redux/actions/cartActions';
import { navMenus } from '@/lib/navData';
import SearchModal from '@/components/SearchModal';

const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const productsMenu = navMenus.products;
  const servicesMenu = navMenus.services;
  const areasMenu = navMenus.areaWeServe;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setActiveCategory(null);
    setMobileSubmenu(null);
  }, [pathname]);

  const closeDropdown = () => {
    setActiveDropdown(null);
    setActiveCategory(null);
  };

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const navLinkClass = (active) =>
    `block px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
      active ? 'text-primary' : 'text-darkText hover:text-primary'
    }`;

  const renderCategoryDropdown = (menu, key, basePath) => (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(key)}
      onMouseLeave={closeDropdown}
    >
      <Link href={menu.href} className={navLinkClass(isActive(menu.href))}>
        {menu.label}
      </Link>

      {activeDropdown === key && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 w-[250px]">
            {menu.categories.map((cat) => {
              const hasSub = cat.subItems && cat.subItems.length > 0;
              return (
                <div
                  key={cat.slug}
                  className="relative"
                  onMouseEnter={() => setActiveCategory(cat.slug)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <Link
                    href={`${basePath}/${cat.slug}`}
                    className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors ${
                      activeCategory === cat.slug
                        ? 'bg-primary/5 text-primary'
                        : 'text-darkText hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    <span>{cat.name}</span>
                    {hasSub && (
                      <ChevronRight
                        size={14}
                        className="text-gray-400 flex-shrink-0"
                      />
                    )}
                  </Link>

                  {hasSub && activeCategory === cat.slug && (
                    <div className="absolute left-full top-0 pl-2">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 w-[270px] max-h-[70vh] overflow-y-auto">
                        {cat.subItems.map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`${basePath}/${cat.slug}/${sub.slug}`}
                            className="block px-4 py-2 text-sm text-darkText hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  const renderMobileCategoryMenu = (menu, key, basePath) => (
    <div className="border-b border-gray-100">
      <div className="flex items-center">
        <Link
          href={menu.href}
          className="flex-1 py-3 text-sm font-medium text-darkText"
        >
          {menu.label}
        </Link>
        <button
          onClick={() =>
            setMobileSubmenu(mobileSubmenu === key ? null : key)
          }
          className="p-3"
        >
          <ChevronDown
            size={16}
            className={`transition-transform ${
              mobileSubmenu === key ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
      {mobileSubmenu === key && (
        <div className="pl-4 pb-3 space-y-1">
          {menu.categories.map((cat) => (
            <div key={cat.slug}>
              <Link
                href={`${basePath}/${cat.slug}`}
                className="block py-2 text-sm text-gray-700 hover:text-primary"
              >
                {cat.name}
              </Link>
              {cat.subItems && cat.subItems.length > 0 && (
                <div className="pl-4 space-y-0.5">
                  {cat.subItems.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`${basePath}/${cat.slug}/${sub.slug}`}
                      className="block py-1.5 text-xs text-gray-500 hover:text-primary"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="w-full sticky top-0 z-[999]">
      <div className="bg-primary text-white text-xs py-1.5 px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+971501234567"
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <Phone size={11} />
              <span className="hidden sm:inline">+971 50 123 4567</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5">
              <Truck size={11} />
              Free Delivery on Orders Above AED 200
            </span>
          </div>
          <a
            href="mailto:info@royalplantscape.ae"
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
          >
            <Mail size={11} />
            <span className="hidden sm:inline">info@royalplantscape.ae</span>
          </a>
        </div>
      </div>

      <nav
        className={`bg-white px-8 sm:px-12 lg:px-20 xl:px-28 transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center">
              <Leaf size={18} className="text-white" />
            </div>
            <div className="leading-tight">
              <span
                className="text-base md:text-lg font-bold text-darkText tracking-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                ROYAL PLANTSCAPE
              </span>
              <span className="block text-[9px] md:text-[10px] text-gray-400 tracking-[0.15em] uppercase -mt-0.5">
                Landscape & Gardening
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className={navLinkClass(isActive('/'))}>
              HOME
            </Link>

            {renderCategoryDropdown(productsMenu, 'products', '/products')}
            {renderCategoryDropdown(servicesMenu, 'services', '/services')}

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('areas')}
              onMouseLeave={closeDropdown}
            >
              <Link
                href={areasMenu.href}
                className={navLinkClass(isActive(areasMenu.href))}
              >
                {areasMenu.label}
              </Link>

              {activeDropdown === 'areas' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 w-[480px] overflow-hidden">
                    <div className="px-5 py-3 border-b border-gray-100 bg-primary/5">
                      <p className="text-[11px] font-bold text-primary uppercase tracking-wider">
                        Areas We Serve in Dubai
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 p-3">
                      {areasMenu.items.map((area) => (
                        <Link
                          key={area}
                          href={`/area-we-serve/${toSlug(area)}`}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-darkText whitespace-nowrap hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          <MapPin
                            size={12}
                            className="text-primary flex-shrink-0"
                          />
                          {area}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={areasMenu.href}
                      className="flex items-center justify-center gap-1.5 px-5 py-3 border-t border-gray-100 text-xs font-semibold text-primary uppercase tracking-wider hover:bg-primary/5 transition-colors"
                    >
                      View All Areas
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={navLinkClass(isActive('/contact'))}
            >
              CONTACT US
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-darkText"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => dispatch(showCart())}
              className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-darkText"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center px-1">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-darkText"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[104px] bg-white z-[998] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            <Link
              href="/"
              className="block py-3 text-sm font-medium text-darkText border-b border-gray-100"
            >
              HOME
            </Link>

            {renderMobileCategoryMenu(productsMenu, 'products', '/products')}
            {renderMobileCategoryMenu(servicesMenu, 'services', '/services')}

            <div className="border-b border-gray-100">
              <div className="flex items-center">
                <Link
                  href={areasMenu.href}
                  className="flex-1 py-3 text-sm font-medium text-darkText"
                >
                  {areasMenu.label}
                </Link>
                <button
                  onClick={() =>
                    setMobileSubmenu(
                      mobileSubmenu === 'areas' ? null : 'areas'
                    )
                  }
                  className="p-3"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileSubmenu === 'areas' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {mobileSubmenu === 'areas' && (
                <div className="grid grid-cols-2 gap-x-2 pb-3">
                  {areasMenu.items.map((area) => (
                    <Link
                      key={area}
                      href={`/area-we-serve/${toSlug(area)}`}
                      className="flex items-center gap-1.5 py-2 text-xs text-gray-600 hover:text-primary"
                    >
                      <MapPin
                        size={11}
                        className="text-primary flex-shrink-0"
                      />
                      {area}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block py-3 text-sm font-medium text-darkText border-b border-gray-100"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}