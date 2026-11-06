'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { serviceCategories } from '@/lib/serviceData';

export default function ServiceSidebar({ currentSlug }) {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-50 rounded-xl p-5 border border-gray-100">
      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
        Our Services
      </h4>
      <ul className="space-y-1">
        {serviceCategories.map(service => {
          const isActive = currentSlug === service.slug;
          return (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                {service.name}
              </Link>
              {isActive && service.subItems?.length > 0 && (
                <ul className="ml-3 mt-1 space-y-0.5 border-l-2 border-emerald-200 pl-3">
                  {service.subItems.map(sub => {
                    const isSubActive = pathname === `/services/${service.slug}/${sub.slug}`;
                    return (
                      <li key={sub.slug}>
                        <Link
                          href={`/services/${service.slug}/${sub.slug}`}
                          className={`block px-2 py-1.5 rounded text-xs transition-colors ${
                            isSubActive
                              ? 'text-emerald-700 font-semibold bg-emerald-50'
                              : 'text-gray-500 hover:text-emerald-600'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}