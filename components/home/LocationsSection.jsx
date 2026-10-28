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
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Content & Locations */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5 border border-primary/20">
              <Map size={12} className="text-amber-500" />
              Service Areas
            </div>

            <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-darkText leading-tight mb-4">
              Locations We <span className="text-primary">Serve</span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
              Anywhere in Dubai, our services reach you fast. Whether you need an urgent garden cleanup, landscape design, or routine maintenance, our expert teams are stationed across the city to provide prompt and reliable service.
            </p>

            {/* Location Chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {locations.map((loc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 text-gray-700 hover:text-emerald-800 text-xs font-medium px-3.5 py-2 rounded-lg transition-colors cursor-default"
                >
                  <MapPin size={14} className="text-primary/70" />
                  {loc}
                </div>
              ))}
              
              {/* Highlighted "All Locations" Chip */}
              <div className="flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm cursor-default">
                <Sparkles size={14} className="text-accent" />
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

          {/* RIGHT: Google Map Embed */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 group">
            {/* Overlay hint that fades on hover */}
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
            
            {/* Map floating UI card */}
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-64 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-xl z-20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-darkText">Dubai HQ</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Fast Dispatch</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}