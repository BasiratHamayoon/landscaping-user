import Link from 'next/link';
import Image from 'next/image';
import { areaList } from '@/lib/areaData';

export const metadata = {
  title: 'Areas We Serve | Royal Plantscape - Dubai Landscaping',
  description: 'Royal Plantscape provides professional landscaping and gardening services across all major communities in Dubai, UAE.',
};

export default function AreaWeServePage() {
  return (
    <div>
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80&auto=format&fit=crop"
          alt="Dubai skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-3">
            Areas We Serve
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            Professional landscaping and gardening services across all major communities in Dubai and the UAE.
          </p>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-3">
            Serving Dubai\'s Premier Communities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No matter where you are in Dubai, our team of landscaping professionals is ready to transform your outdoor and indoor spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areaList.map(area => (
            <Link
              key={area.slug}
              href={`/area-we-serve/${area.slug}`}
              className="group relative rounded-2xl overflow-hidden h-[220px] md:h-[260px] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={area.image}
                alt={area.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-emerald-900/80 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-white font-semibold text-lg font-playfair">
                    {area.name}
                  </h3>
                </div>
                <p className="text-white/70 text-sm line-clamp-2 group-hover:text-white/90 transition-colors">
                  {area.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-4">
            Don\'t See Your Area?
          </h2>
          <p className="text-gray-600 mb-6">
            We serve all communities across Dubai, Sharjah, and the wider UAE. If your area isn\'t listed above, contact us and we\'ll be happy to discuss your landscaping needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+971501234567"
              className="px-8 py-3 border-2 border-emerald-600 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Call +971 50 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}