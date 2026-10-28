'use client';

import { useState } from 'react';
import { Plus, Minus, Sparkles, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What makes your landscape design services unique?',
    answer:
      'Royal Plantscape blends creative design with practical horticulture tailored to Dubai’s climate. We use premium plants, sustainable irrigation, and custom layouts that fit your lifestyle — not one-size-fits-all templates. Every project is planned for beauty, durability, and low long-term maintenance.',
  },
  {
    question: 'How can I book your services?',
    answer:
      'Booking is simple. Click “Get Free Quote” or “Book a Free Site Visit” on our website, fill in the short enquiry form, or message us on WhatsApp. You can also call us directly. We’ll confirm your appointment, visit your property, and share a clear plan and pricing — often with same-day options available.',
  },
  {
    question: 'Do you offer both residential and commercial landscaping service?',
    answer:
      'Yes. We serve private villas, apartments, and gardens as well as offices, compounds, hotels, and commercial outdoor spaces across Dubai. From indoor plantscaping and garden maintenance to full hardscape, pools, and outdoor living structures — our team handles both residential and commercial projects.',
  },
  {
    question: 'Can you create custom landscape design plans?',
    answer:
      'Absolutely. Custom design is at the core of what we do. After a site visit we prepare tailored landscape plans covering layout, plant selection, irrigation, lighting, hardscape, and outdoor living features. You’ll review the concept with us before any work begins so the final result matches your vision and budget.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-4 border border-primary/20">
            <HelpCircle size={12} className="text-amber-500" />
            Support
          </div>

          <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-darkText leading-tight mb-4">
            Frequently Asked{' '}
            <span className="text-primary">Questions</span>
          </h2>

          <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            Have questions about Royal Plantscape? Find the answers here.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-primary/30 shadow-[0_8px_30px_rgba(31,90,31,0.08)]'
                    : 'bg-gray-50/80 border-gray-100 hover:border-gray-200'
                }`}
              >
                {/* Question row — clickable */}
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5"
                >
                  <span
                    className={`text-sm md:text-[15px] font-semibold leading-snug pr-2 transition-colors ${
                      isOpen ? 'text-primary' : 'text-darkText'
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Minus icon */}
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-primary text-white rotate-0'
                        : 'bg-white text-primary border border-gray-200'
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={16} strokeWidth={2.5} />
                    ) : (
                      <Plus size={16} strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {/* Answer — smooth height reveal */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-transparent">
                      <span className="block pt-1 border-t border-gray-100/80 pt-4">
                        {faq.answer}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom help strip */}
        <div className="mt-10 md:mt-12 text-center rounded-2xl bg-gray-50 border border-gray-100 px-6 py-6">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <Sparkles size={14} className="text-amber-500" />
            <p className="text-sm font-semibold text-darkText">
              Still have a question?
            </p>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Our team is happy to help with bookings, custom designs, and site visits.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold tracking-wider px-6 py-3 rounded-md transition shadow-md"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}