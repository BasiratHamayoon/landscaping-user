'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ServiceCard({ service }) {
  const subCount = service.subItems?.length || 0;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {subCount > 0 && (
          <span className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {subCount} Services
          </span>
        )}
        <h3 className="absolute bottom-3 left-4 right-4 text-white font-semibold text-lg font-playfair">
          {service.name}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {service.shortDescription}
        </p>
        <span className="inline-flex items-center gap-1 mt-3 text-emerald-700 text-sm font-medium group-hover:gap-2 transition-all">
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}