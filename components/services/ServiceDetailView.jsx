'use client';

import Link from 'next/link';
import Image from 'next/image';
import ServiceSidebar from './ServiceSidebar';
import ServiceContactCard from './ServiceContactCard';

export default function ServiceDetailView({ service, description, isSubService }) {
  const breadcrumbParent = isSubService
    ? { name: service.parentName, slug: service.parentSlug }
    : null;

  return (
    <div>
      <section className="relative h-[340px] md:h-[420px]">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end px-8 sm:px-12 lg:px-20 xl:px-28 pb-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            {breadcrumbParent && (
              <>
                <span>/</span>
                <Link href={`/services/${breadcrumbParent.slug}`} className="hover:text-white transition-colors">
                  {breadcrumbParent.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-white font-medium">{service.name}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white font-playfair mb-2">
            {service.name}
          </h1>
          {description?.tagline && (
            <p className="text-white/80 text-base md:text-lg max-w-2xl">
              {description.tagline}
            </p>
          )}
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-white">
        <div className="flex items-start gap-8">
          <aside className="hidden lg:block w-72 shrink-0 sticky top-28 self-start">
            <ServiceSidebar currentSlug={isSubService ? service.parentSlug : service.slug} />
            <ServiceContactCard />
          </aside>

          <article className="flex-1 max-w-4xl">
            {description?.intro && (
              <div className="mb-10">
                {description.intro.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4 text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {!isSubService && service.subItems?.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-6">
                  What We Offer
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.subItems.map(sub => (
                    <Link
                      key={sub.slug}
                      href={`/services/${service.slug}/${sub.slug}`}
                      className="group p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all"
                    >
                      <h3 className="font-semibold text-gray-900 text-sm group-hover:text-emerald-700 transition-colors">
                        {sub.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 mt-2 text-xs text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {description?.sections && (
              <div className="space-y-10 mb-12">
                {description.sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-playfair mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-3">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Contact Royal Plantscape today for a free consultation and personalized quote.
                We\'ll bring your vision to life with expertise and passion.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+971501234567"
                  className="px-8 py-3 border-2 border-emerald-600 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}