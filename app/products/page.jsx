import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { productCategories, allProducts } from '@/lib/productData';

export const metadata = {
  title: 'Products | Royal Plantscape - Dubai, UAE',
  description: 'Shop indoor plants, outdoor plants, pots, artificial grass and garden accessories in Dubai.',
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-primary/5 px-8 sm:px-12 lg:px-20 xl:px-28 py-10 md:py-14">
        <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <span className="text-darkText font-medium">Products</span>
        </nav>
        <h1
          className="text-3xl md:text-4xl font-bold text-darkText"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Our Products
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Browse our full range of plants, planters and garden essentials delivered across Dubai.
        </p>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productCategories.map((cat) => {
            const count = allProducts.filter((p) => p.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group relative h-[280px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <span className="text-[11px] uppercase tracking-wider text-white/70">
                    {count} {count === 1 ? 'Product' : 'Products'}
                  </span>
                  <h3
                    className="text-lg font-bold mt-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {cat.name}
                  </h3>
                  {cat.description && (
                    <p className="text-xs text-white/80 mt-1 line-clamp-2">{cat.description}</p>
                  )}
                  <span className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all">
                    Shop Now
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}