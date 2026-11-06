'use client';

import Link from 'next/link';

export default function ServiceContactCard() {
  return (
    <div className="bg-emerald-700 rounded-xl p-5 text-white mt-5">
      <h4 className="font-bold text-lg font-playfair mb-2">Need a Quote?</h4>
      <p className="text-emerald-100 text-sm leading-relaxed mb-4">
        Get in touch with our team for a free consultation and customized quote for your project.
      </p>
      <div className="space-y-2 mb-4">
        <a
          href="tel:+971501234567"
          className="flex items-center gap-2 text-sm text-emerald-100 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +971 50 123 4567
        </a>
        <a
          href="mailto:info@royalplantscape.com"
          className="flex items-center gap-2 text-sm text-emerald-100 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          info@royalplantscape.com
        </a>
      </div>
      <Link
        href="/contact"
        className="block w-full text-center bg-white text-emerald-700 font-semibold text-sm py-2.5 rounded-lg hover:bg-emerald-50 transition-colors"
      >
        Request Free Quote
      </Link>
      <a
        href="https://wa.me/971501234567"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-green-500 text-white font-semibold text-sm py-2.5 rounded-lg mt-2 hover:bg-green-600 transition-colors"
      >
        WhatsApp Us
      </a>
    </div>
  );
}