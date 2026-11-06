import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { areaList, getAreaBySlug } from '@/lib/areaData';
import { serviceCategories } from '@/lib/serviceData';

export const dynamicParams = true;

export function generateStaticParams() {
  return areaList.map(area => ({
    area: area.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { area } = await params;
  const areaData = getAreaBySlug(area);
  if (!areaData) return { title: 'Area Not Found | Royal Plantscape' };
  return {
    title: `Landscaping Services in ${areaData.name} | Royal Plantscape - Dubai`,
    description: `Professional landscaping, gardening, and outdoor maintenance services in ${areaData.name}, Dubai. Contact Royal Plantscape for a free quote.`,
  };
}

export default async function AreaPage({ params }) {
  const { area } = await params;
  const areaData = getAreaBySlug(area);
  if (!areaData) notFound();

  return (
    <div>
      <section className="relative h-[340px] md:h-[420px]">
        <Image
          src={areaData.image}
          alt={areaData.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end px-8 sm:px-12 lg:px-20 xl:px-28 pb-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/area-we-serve" className="hover:text-white transition-colors">Areas We Serve</Link>
            <span>/</span>
            <span className="text-white font-medium">{areaData.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-6 h-6 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h1 className="text-3xl md:text-5xl font-bold text-white font-playfair">
              {areaData.name}
            </h1>
          </div>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            Landscaping & Gardening Services in {areaData.name}, Dubai
          </p>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-6">
            Landscaping Services in {areaData.name}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base mb-6">
            {areaData.description}
          </p>
          <p className="text-gray-700 leading-relaxed text-base mb-10">
            Our team of experienced landscape architects, horticulturists, and garden technicians are familiar with the specific soil conditions, microclimates, and community regulations in {areaData.name}. Whether you need a complete garden redesign, routine maintenance, a new irrigation system, or a stunning pool landscape, Royal Plantscape delivers exceptional results on time and within budget.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-6">
            Services Available in {areaData.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {serviceCategories.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-5 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all"
              >
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-emerald-700 transition-colors mb-1">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-xs line-clamp-2">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">
            Why Choose Royal Plantscape in {areaData.name}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Local Expertise</h4>
                <p className="text-gray-600 text-sm">We know {areaData.name}\'s soil, climate, and community guidelines inside out.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Fast Response</h4>
                <p className="text-gray-600 text-sm">Our teams are based near {areaData.name} for quick service and emergency callouts.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Licensed & Insured</h4>
                <p className="text-gray-600 text-sm">Fully licensed by Dubai Municipality with comprehensive insurance coverage.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Free Quotes</h4>
                <p className="text-gray-600 text-sm">No-obligation site visits and transparent pricing for all {areaData.name} projects.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-3">
              Ready to Transform Your {areaData.name} Property?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Contact Royal Plantscape today for a free consultation and personalized quote for your landscaping project in {areaData.name}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-10 bg-gray-50">
        <h2 className="text-xl font-bold text-gray-900 font-playfair mb-6 text-center">
          Other Areas We Serve
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {areaList
            .filter(a => a.slug !== areaData.slug)
            .map(a => (
              <Link
                key={a.slug}
                href={`/area-we-serve/${a.slug}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                {a.name}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}