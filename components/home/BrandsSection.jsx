'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Building2, Sparkles, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: 'JUMEIRAH HOTELS', type: 'Luxury Hospitality' },
  { name: 'SOFITEL LUXURY', type: '5-Star Resort' },
  { name: 'MAJID AL FUTTAIM', type: 'Retail & Mixed-Use' },
  { name: 'AL MARJAN ISLAND', type: 'Waterfront Development' },
  { name: 'RAK PROPERTIES', type: 'Residential Masterplan' },
  { name: 'DUBAI MUNICIPALITY', type: 'Government Projects' },
  { name: 'DUBAI SPORTS CITY', type: 'Sports Infrastructure' },
  { name: 'THE SEVENS', type: 'Stadium & Events' },
  { name: 'EMAAR PROPERTIES', type: 'Iconic Master Communities' },
  { name: 'NAKHEEL', type: 'Island & Coastal Estates' },
  { name: 'DAMAC', type: 'Luxury Villa Communities' },
  { name: 'MERAAS', type: 'Urban Destination Parks' },
];

export default function BrandsSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance ScrollTrigger Animation for Header
      gsap.from('.brands-header-item', {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // 2. Seamless Infinite Loop Marquee Animation
      const track = trackRef.current;
      if (track) {
        const totalWidth = track.scrollWidth / 2;

        tweenRef.current = gsap.to(track, {
          x: -totalWidth,
          duration: 35,
          ease: 'none',
          repeat: -1,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  const pauseMarquee = () => tweenRef.current?.pause();
  const resumeMarquee = () => tweenRef.current?.play();

  // Duplicate brands array for 100% seamless infinite loop
  const loopBrands = [...brands, ...brands];

  return (
    <section
      ref={containerRef}
      className="relative py-14 md:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white border-b border-gray-100 overflow-hidden"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Top Line Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 mb-10 text-center relative z-10">
        {/* Category Tag */}
        <div className="brands-header-item inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-3 border border-primary/15 shadow-xs">
          <Sparkles size={12} className="text-accent" />
          <span>Prestigious Clientele</span>
        </div>

        {/* Section Heading */}
        <h2 className="brands-header-item font-serif-elegant text-2xl sm:text-3xl md:text-4xl font-bold text-darkText leading-tight">
          Trusted by Leading <span className="text-primary">UAE Organizations</span>
        </h2>

        {/* Subtitle */}
        <p className="brands-header-item text-xs md:text-sm text-gray-500 mt-2.5 max-w-lg mx-auto font-medium leading-relaxed">
          Delivering award-winning landscape design, execution & grounds maintenance for premier hospitality, luxury developers, and municipal spaces across Dubai.
        </p>
      </div>

      {/* Marquee Viewport Container */}
      <div
        className="relative w-full overflow-hidden py-2"
        onMouseEnter={pauseMarquee}
        onMouseLeave={resumeMarquee}
      >
        {/* Smooth Gradient Edges Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-10 bg-gradient-to-r from-white via-white/90 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-10 bg-gradient-to-l from-white via-white/90 to-transparent" />

        {/* Continuous Animated Track */}
        <div
          ref={trackRef}
          className="flex w-max gap-4 sm:gap-6 will-change-transform px-4"
        >
          {loopBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="group shrink-0 h-20 sm:h-24 min-w-[200px] sm:min-w-[240px] px-5 sm:px-6
                         flex items-center justify-between
                         rounded-2xl border border-gray-200/80 bg-white/80 backdrop-blur-sm
                         shadow-[0_2px_10px_rgba(0,0,0,0.03)]
                         hover:border-primary/50 hover:bg-white hover:shadow-[0_12px_28px_rgba(31,90,31,0.12)]
                         hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col justify-center">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.12em] text-gray-700 group-hover:text-primary transition-colors duration-300 uppercase">
                  {brand.name}
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-300 mt-0.5">
                  {brand.type}
                </span>
              </div>

              {/* Glowing Icon Indicator on Hover */}
              <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 border border-gray-100 group-hover:border-primary/20">
                <Building2 size={15} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Hint */}
      <div className="mt-8 flex items-center justify-center gap-2 text-[11px] font-medium text-gray-400 tracking-wide">
        <ShieldCheck size={14} className="text-primary" />
        <span>Hover cards to pause continuous scroll · Verified Commercial Partners</span>
      </div>
    </section>
  );
}