'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, BadgeCheck, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Al Maktoum',
    role: 'Villa Owner, Jumeirah',
    text: 'Royal Plantscape transformed our garden completely. Professional team, on-time delivery, and the plants are still thriving months later. Highly recommended!',
    rating: 5,
    date: '2 weeks ago',
  },
  {
    name: 'Sarah Johnson',
    role: 'Homeowner, Arabian Ranches',
    text: 'Excellent service from start to finish. Same-day booking, clear pricing, and beautiful landscaping work. Will definitely use them again for maintenance.',
    rating: 5,
    date: '1 month ago',
  },
  {
    name: 'Mohammed Hassan',
    role: 'Property Manager, Dubai Marina',
    text: 'We hired them for multiple buildings. Reliable, affordable, and the outdoor living spaces look premium. Their irrigation setup saved us a lot on water.',
    rating: 5,
    date: '3 weeks ago',
  },
  {
    name: 'Emily Chen',
    role: 'Resident, Palm Jumeirah',
    text: 'The artificial grass and pergola installation exceeded expectations. Clean workmanship and great after-support. Five stars from our family.',
    rating: 5,
    date: '5 days ago',
  },
  {
    name: 'Omar Farouk',
    role: 'Business Owner, Business Bay',
    text: 'Indoor plantscaping for our office was done perfectly. Staff are knowledgeable and polite. Royal Plantscape is our go-to green partner in Dubai.',
    rating: 5,
    date: '2 months ago',
  },
];

export default function TestimonialsSection() {
  const scrollerRef = useRef(null);

  const scrollByCard = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector('.testimonial-card');
    const amount = card ? card.offsetWidth + 20 : 280;

    gsap.to(el, {
      scrollLeft: el.scrollLeft + direction * amount,
      duration: 0.55,
      ease: 'power3.out',
    });
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="px-8 sm:px-12 lg:px-20 xl:px-28 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
              Testimonials
            </p>
            <h2 className="font-serif-elegant text-3xl md:text-4xl font-bold text-darkText leading-tight">
              What Our Customers Say
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-3 leading-relaxed">
              Real reviews from homeowners and businesses across Dubai who trust
              Royal Plantscape for landscaping and garden care.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => scrollByCard(-1)}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white text-darkText
                         flex items-center justify-center hover:bg-primary hover:text-white
                         hover:border-primary transition-colors shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => scrollByCard(1)}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white text-darkText
                         flex items-center justify-center hover:bg-primary hover:text-white
                         hover:border-primary transition-colors shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto pb-2 scroll-smooth
                     [scrollbar-width:none] [-ms-overflow-style:none]
                     [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="testimonial-card shrink-0 w-[min(100%,280px)] md:w-[300px]
                         bg-gray-900 border border-gray-800 rounded-2xl p-5
                         shadow-[0_4px_24px_rgba(0,0,0,0.15)]
                         hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]
                         hover:border-gray-700
                         transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-white/10 text-white
                                  flex items-center justify-center text-xs font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-white truncate">{t.name}</p>
                    <p className="text-[10px] text-gray-400 truncate">{t.role}</p>
                  </div>
                </div>
                <span
                  className="shrink-0 w-6 h-6 rounded-full bg-gray-800 border border-gray-700
                             flex items-center justify-center text-[11px] font-bold
                             text-[#4285F4] shadow-sm"
                  title="Google review"
                >
                  G
                </span>
              </div>

              <div className="flex items-center gap-0.5 mb-2.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    size={12}
                    className="fill-[#FBBC04] text-[#FBBC04]"
                  />
                ))}
                <span className="ml-1.5 text-[9px] text-gray-500">{t.date}</span>
              </div>

              <p className="text-[11px] text-gray-300 leading-relaxed mb-3">
                {t.text}
              </p>

              <div className="flex items-center gap-1.5 text-[10px] text-gray-400 pt-2.5 border-t border-gray-800">
                <BadgeCheck size={12} className="text-[#4285F4] shrink-0" />
                <span>Posted on Google · Verified</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}