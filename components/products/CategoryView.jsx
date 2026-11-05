'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { SlidersHorizontal, X, ChevronRight, PackageSearch } from 'lucide-react';
import { allProducts, getCategoryBySlug } from '@/lib/productData';
import { getCategoryDescription } from '@/lib/categoryDescriptions';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import CategoryDescription from './CategoryDescription';

export default function CategoryView({ categorySlug, subSlug = null }) {
  const category = getCategoryBySlug(categorySlug);
  const activeSub = category?.subItems?.find((s) => s.slug === subSlug) ?? null;

  const description = useMemo(() => {
    if (subSlug) {
      return getCategoryDescription(subSlug) ?? getCategoryDescription(categorySlug);
    }
    return getCategoryDescription(categorySlug);
  }, [categorySlug, subSlug]);

  const categoryProducts = useMemo(
    () => allProducts.filter((p) => p.category === categorySlug),
    [categorySlug]
  );

  const scopedProducts = useMemo(
    () => (subSlug ? categoryProducts.filter((p) => p.subCategory === subSlug) : categoryProducts),
    [categoryProducts, subSlug]
  );

  const maxPrice = useMemo(() => {
    const highest = Math.max(0, ...categoryProducts.map((p) => p.price));
    return Math.ceil(highest / 100) * 100 || 100;
  }, [categoryProducts]);

  const [stockFilter, setStockFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, maxPrice]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setPriceRange([0, maxPrice]);
  }, [maxPrice]);

  const filteredProducts = useMemo(
    () =>
      scopedProducts.filter((p) => {
        if (stockFilter === 'in-stock' && !p.inStock) return false;
        if (stockFilter === 'out-of-stock' && p.inStock) return false;
        return p.price >= priceRange[0] && p.price <= priceRange[1];
      }),
    [scopedProducts, stockFilter, priceRange]
  );

  const inStockCount = scopedProducts.filter((p) => p.inStock).length;
  const outOfStockCount = scopedProducts.length - inStockCount;

  const resetAll = () => {
    setStockFilter('all');
    setPriceRange([0, maxPrice]);
  };

  if (!category || (subSlug && !activeSub)) {
    return (
      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-24 text-center">
        <PackageSearch size={48} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-darkText mb-2">Category not found</h2>
        <p className="text-sm text-gray-500 mb-6">The category you are looking for does not exist.</p>
        <Link
          href="/products"
          className="inline-block px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to Products
        </Link>
      </section>
    );
  }

  const filterProps = {
    stockFilter,
    onStockChange: setStockFilter,
    priceRange,
    onPriceChange: setPriceRange,
    maxPrice,
    inStockCount,
    outOfStockCount,
  };

  const tabClass = (active) =>
    `px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
      active
        ? 'bg-primary text-white border-primary shadow-sm'
        : 'bg-white text-darkText border-gray-200 hover:border-primary hover:text-primary'
    }`;

  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 px-8 sm:px-12 lg:px-20 xl:px-28 py-10 md:py-12 border-b border-gray-100">
        <nav className="flex items-center flex-wrap gap-1.5 text-xs text-gray-500 mb-3">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <Link href="/products" className="hover:text-primary">Products</Link>
          <ChevronRight size={12} />
          {activeSub ? (
            <>
              <Link href={`/products/${category.slug}`} className="hover:text-primary">
                {category.name}
              </Link>
              <ChevronRight size={12} />
              <span className="text-darkText font-medium">{activeSub.name}</span>
            </>
          ) : (
            <span className="text-darkText font-medium">{category.name}</span>
          )}
        </nav>
        <h1
          className="text-3xl md:text-4xl font-bold text-darkText"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {activeSub ? activeSub.name : category.name}
        </h1>
        {category.description && !activeSub && (
          <p className="text-sm text-gray-600 mt-2 max-w-2xl">{category.description}</p>
        )}
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-10">
        {category.subItems && category.subItems.length > 0 && (
          <div className="mb-10">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
              Browse {category.name}
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link href={`/products/${category.slug}`} scroll={false} className={tabClass(!subSlug)}>
                All
              </Link>
              {category.subItems.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/products/${category.slug}/${sub.slug}`}
                  scroll={false}
                  className={tabClass(subSlug === sub.slug)}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-start gap-8">
          <aside className="hidden lg:block w-60 flex-shrink-0 sticky top-28 self-start">
            <ProductFilters {...filterProps} />
          </aside>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                Showing{' '}
                <span className="font-semibold text-darkText">{filteredProducts.length}</span>{' '}
                {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <button
                onClick={() => setFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-xs font-semibold text-darkText hover:border-primary hover:text-primary transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl">
                <PackageSearch size={36} className="mx-auto text-gray-300 mb-3" />
                <p className="text-sm text-gray-500 mb-4">No products match your filters.</p>
                <button
                  onClick={resetAll}
                  className="px-5 py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <CategoryDescription description={description} />

      {filtersOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[1000] lg:hidden"
          onClick={() => setFiltersOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-[1001] lg:hidden overflow-y-auto transform transition-transform duration-300 ${
          filtersOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h3 className="text-sm font-bold text-darkText uppercase tracking-wider">Filters</h3>
          <button
            onClick={() => setFiltersOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-5">
          <ProductFilters {...filterProps} />
          <button
            onClick={() => setFiltersOpen(false)}
            className="mt-5 w-full py-3 bg-primary text-white text-sm font-semibold rounded-lg uppercase tracking-wider"
          >
            Show {filteredProducts.length} Products
          </button>
        </div>
      </div>
    </>
  );
}