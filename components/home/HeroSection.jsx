'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MessageCircle, Leaf, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const container = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // Soft image zoom on load
      gsap.fromTo(
        '.hero-image',
        { scale: 1.12 },
        { scale: 1, duration: 2.2, ease: 'power2.out' }
      );

      // Gradient panel slide-in
      tl.from('.hero-gradient', {
        x: -80,
        opacity: 0,
        duration: 1,
      });

      // Staggered text reveal
      tl.from(
        '.hero-tag',
        { y: 24, opacity: 0, duration: 0.55 },
        '-=0.55'
      )
        .from(
          '.hero-title-line',
          { y: 50, opacity: 0, duration: 0.7, stagger: 0.12 },
          '-=0.35'
        )
        .from(
          '.hero-desc',
          { y: 28, opacity: 0, duration: 0.55 },
          '-=0.35'
        )
        .from(
          '.hero-btn',
          {
            y: 24,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            clearProps: 'all',
          },
          '-=0.25'
        )
        .from(
          '.hero-badge',
          { scale: 0.8, opacity: 0, duration: 0.5 },
          '-=0.35'
        );

      // Gentle floating badge
      gsap.to('.hero-badge', {
        y: -8,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, container);

    return () => ctx.revert();
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative w-full h-[560px] md:h-[680px] flex items-center overflow-hidden bg-white"
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 hero-image will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1800&q=85"
          alt="Luxury landscape design Dubai"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Soft dark edge on right for depth */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-transparent pointer-events-none" />

      {/* Left White Gradient Panel */}
      <div className="hero-gradient absolute inset-y-0 left-0 w-full md:w-[68%] bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-xl">
          {/* Small badge */}
          <div className="hero-badge inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-primary/15">
            <Sparkles size={12} className="text-accent" />
            Dubai&apos;s Trusted Landscape Partner
          </div>

          <p className="hero-tag text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Landscape Design & Maintenance in UAE
          </p>

          <h1 className="font-serif-elegant text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-darkText leading-[1.12] mb-5">
            <span className="hero-title-line block">Transform Your</span>
            <span className="hero-title-line block">
              Outdoor Space
              <span className="text-primary">.</span>
            </span>
          </h1>

          <p className="hero-desc text-sm md:text-[15px] text-gray-600 mb-8 max-w-md leading-relaxed">
            We design, build and maintain exceptional landscapes that elevate your
            lifestyle and add lasting value — for villas, hotels and commercial
            properties across Dubai.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="hero-btn group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold tracking-wider px-6 py-3.5 rounded-md transition shadow-md hover:shadow-lg"
            >
              <Leaf size={15} />
              GET FREE QUOTE
              <ArrowRight
                size={14}
                className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />
            </Link>

            <a
              href="https://wa.me/971586453671"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-darkText text-xs font-bold tracking-wider px-6 py-3.5 rounded-md transition shadow-md"
            >
              <MessageCircle size={15} />
              WHATSAPP NOW
            </a>

            <Link
              href="/services"
              className="hero-btn inline-flex items-center gap-2 bg-white/90 hover:bg-white text-darkText border border-gray-200 hover:border-primary/40 text-xs font-bold tracking-wider px-5 py-3.5 rounded-md transition shadow-sm backdrop-blur-sm"
            >
              Explore Our Projects
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mini trust row */}
          <div className="hero-btn mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-gray-500 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Free Site Visit
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              24/7 Support
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Dubai-Wide Service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}