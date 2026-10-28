'use client';

import {
  Clock3,
  CheckCircle2,
  Wallet,
  Headphones,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Clock3,
    title: 'Reliable Same Day Service',
    desc: 'No problem finalizing results. It only takes a few seconds to reserve a same-day appointment through our website or by calling us.',
    badgeBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-700',
  },
  {
    icon: CheckCircle2,
    title: 'Complete Work',
    desc: 'We are available in homes, gardens, flats, villas, and offices — wherever you require us across Dubai.',
    badgeBg: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    desc: 'Never be surprised by cost again. When you book through our website, you pay clear and reasonable prices.',
    badgeBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-700',
  },
  {
    icon: Headphones,
    title: 'Our Support',
    desc: 'Our support staff are consistently available to respond to inquiries and offer assistance whenever you need us.',
    badgeBg: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Soft ambient background glows */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-4 border border-primary/20">
            <Sparkles size={12} className="text-amber-500" />
            Why Choose Us
          </div>

          <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-darkText leading-tight mb-4">
            Why Customers Prefer{' '}
            <span className="text-primary">Our Service?</span>
          </h2>

          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Experience lush results with Royal Plantscape. We specialize in
            sustainable landscaping, detailed garden care, and expert plant care
            trusted across Dubai.
          </p>
        </div>

        {/* Feature Cards — always visible, no GSAP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl border border-gray-200 p-6 md:p-7
                           shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                           hover:shadow-[0_16px_40px_rgba(31,90,31,0.12)]
                           hover:border-primary/40 hover:-translate-y-1.5
                           transition-all duration-300"
              >
                <span className="absolute top-4 right-5 text-xs font-bold text-gray-300 group-hover:text-primary transition-colors">
                  0{i + 1}
                </span>

                <div
                  className={`w-14 h-14 rounded-2xl border ${item.badgeBg}
                              flex items-center justify-center mb-5
                              group-hover:scale-110 group-hover:rotate-3
                              transition-transform duration-300 shadow-sm`}
                >
                  <Icon size={26} className={item.iconColor} strokeWidth={2} />
                </div>

                <h3 className="text-sm md:text-[15px] font-bold text-gray-900 mb-2.5 leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {item.desc}
                </p>

                <div className="mt-5 h-0.5 w-8 bg-gray-200 group-hover:w-14 group-hover:bg-primary transition-all duration-300 rounded-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-xs text-gray-600 font-medium">
            Ready to experience the Royal Plantscape difference?
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold tracking-wider px-6 py-3 rounded-md transition shadow-md"
          >
            BOOK A FREE SITE VISIT
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}