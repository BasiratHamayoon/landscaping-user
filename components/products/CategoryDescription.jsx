'use client';

import { Leaf } from 'lucide-react';

export default function CategoryDescription({ description }) {
  if (!description) return null;

  return (
    <section className="bg-gradient-to-b from-white to-primary/5 px-8 sm:px-12 lg:px-20 xl:px-28 py-14 md:py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">
            About This Category
          </span>
        </div>

        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-darkText mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {description.heading}
        </h2>

        <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
          {description.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {description.sections?.map((section, idx) => (
          <div key={idx} className="mt-10">
            <h3
              className="text-xl md:text-2xl font-bold text-darkText mb-5"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {section.title}
            </h3>
            <div className="space-y-5">
              {section.items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                    <Leaf size={15} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-darkText mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-[14px] leading-relaxed text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}