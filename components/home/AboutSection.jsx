'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CheckCircle2, ArrowRight, Award, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  'Climate-Smart & Native UAE Plants',
  'Turnkey Villa & Commercial Solutions',
  '3D Landscape Design & Visualization',
  'Dedicated Maintenance & Aftercare Support',
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Left Image reveal & scale
      tl.from('.about-img-box', {
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
        .from(
          '.about-img-inner',
          {
            scale: 1.15,
            duration: 1.2,
            ease: 'power2.out',
          },
          '-=0.9'
        )
        // Floating badge pop
        .from(
          '.about-stat-card',
          {
            scale: 0.7,
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          '-=0.5'
        )
        // Right side content stagger
        .from(
          '.about-tag',
          { y: 20, opacity: 0, duration: 0.4 },
          '-=0.4'
        )
        .from(
          '.about-heading',
          { y: 25, opacity: 0, duration: 0.5 },
          '-=0.3'
        )
        .from(
          '.about-p',
          { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        )
        .from(
          '.about-feature-item',
          { y: 15, opacity: 0, duration: 0.4, stagger: 0.08 },
          '-=0.2'
        )
        .from(
          '.about-cta',
          { y: 20, opacity: 0, duration: 0.4, clearProps: 'all' },
          '-=0.2'
        );

      // Soft continuous float for the stat card
      gsap.to('.about-stat-card', {
        y: -6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image Showcase with Floating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="about-img-box relative w-full h-[380px] sm:h-[460px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="about-img-inner relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=85"
                  alt="Best Landscape Designer in Dubai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="about-stat-card absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-[240px]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Award size={26} className="text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold font-serif-elegant text-darkText leading-none">
                  10+ Years
                </p>
                <p className="text-[11px] text-gray-500 font-medium mt-1 leading-tight">
                  Excellence in Dubai Landscaping
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Copy & Features */}
          <div className="lg:col-span-6">
            {/* Tag */}
            <div className="about-tag inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 border border-primary/15">
              <Sparkles size={12} className="text-accent" />
              About Royal Plantscape
            </div>

            {/* Heading */}
            <h2 className="about-heading font-serif-elegant text-3xl md:text-4xl lg:text-4xl font-bold text-darkText leading-tight mb-5">
              Best Landscape Designer in <span className="text-primary">Dubai, UAE</span>
            </h2>

            {/* Body Paragraphs */}
            <p className="about-p text-sm text-gray-600 mb-4 leading-relaxed">
              Looking for a trusted landscape designer in Dubai? Royal Plantscape creates elegant,
              climate-smart outdoor spaces for villas, townhouses, hotels, offices, and commercial
              properties across the Emirates.
            </p>
            <p className="about-p text-sm text-gray-600 mb-6 leading-relaxed">
              Whether you need a luxury villa garden, poolside landscape, balcony greenery, or complete
              landscape renovation, Royal Plantscape brings plants, structure, and detail together with
              unmatched professional care.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="about-feature-item flex items-center gap-2.5 text-xs font-semibold text-darkText"
                >
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="about-cta flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold tracking-wider px-6 py-3.5 rounded-md transition shadow-md hover:shadow-lg"
              >
                <span>BOOK A SITE VISIT</span>
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-darkText hover:text-primary transition py-2 px-1"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}