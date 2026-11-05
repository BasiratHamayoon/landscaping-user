'use client';

import { MapPin, Map, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const locations = [
  'The Springs',
  'The Meadows',
  'Dubai Marina',
  'Jumeirah',
  'Mirdif',
  'Arabian Ranches',
  'Downtown Dubai',
  'Al Barsha',
  'Jumeirah Park',
];

export default function LocationsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden border-t border-gray-50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="px-8 sm:px-12 lg:px-20 xl:px-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5 border border-primary/20">
              <Map size={12} className="text-amber-500" />
              Service Areas
            </div>

            <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-darkText leading-tight mb-4">
              Locations We <span className="text-primary">Serve</span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
              Anywhere in Dubai, our services reach you fast. Whether you need an urgent garden cleanup, landscape design, or routine maintenance, our expert teams are stationed across the city to provide prompt and reliable service.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {locations.map((loc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 text-gray-700 hover:text-emerald-800 text-[11px] font-medium px-3 py-1.5 rounded-lg transition-colors cursor-default"
                >
                  <MapPin size={12} className="text-primary/70" />
                  {loc}
                </div>
              ))}
              
              <div className="flex items-center gap-1 bg-primary text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm cursor-default">
                <Sparkles size={12} className="text-accent" />
                All Dubai Locations
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-primary hover:text-primary-dark text-xs font-bold tracking-wider transition-colors"
            >
              CHECK SERVICE AVAILABILITY IN YOUR AREA
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="relative w-full h-[320px] md:h-[400px] lg:h-[440px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3012030229!2d54.947287526927106!3d25.076381466775672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-0 grayscale-[20%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
              title="Dubai Service Areas Map"
            />
            
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-56 bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-gray-100 shadow-xl z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-darkText">Dubai HQ</h4>
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider">Fast Dispatch</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}