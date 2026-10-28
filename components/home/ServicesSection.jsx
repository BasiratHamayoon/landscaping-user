'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Data structure based exactly on your screenshots
const serviceCategories = [
  {
    category: 'Garden Maintenance',
    items: [
      { title: 'Smart Garden Care', sub: 'From AED 99.00/h', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', link: '/services/garden-maintenance/smart-care' },
      { title: 'Lawn Mowing', sub: 'From AED 99.00/h', img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&q=80', link: '/services/garden-maintenance/lawn-mowing' },
      { title: 'Expert Shrub Care', sub: 'AED 99.00/h', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80', link: '/services/garden-maintenance/shrub-care' },
      { title: 'Tree Trimming', sub: 'From AED 590.00', img: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb147fc?w=600&q=80', link: '/services/garden-maintenance/tree-trimming' },
    ],
  },
  {
    category: 'Outdoor Designing / Free Site Visit',
    items: [
      { title: 'Landscape Design', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80', link: '/services/landscaping/landscape-design' },
      { title: 'Poolscape Design', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1576013551627-11971f64b424?w=600&q=80', link: '/services/landscaping/poolscape' },
      { title: 'Plantscape Design', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1598228723654-410d32152011?w=600&q=80', link: '/services/landscaping/plantscape' },
      { title: 'Landscape Lighting Design', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80', link: '/services/landscaping/lighting' },
    ],
  },
  {
    category: 'Hardscape',
    items: [
      { title: 'Paving & Walkways', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80', link: '/services/hardscaping' },
      { title: 'Stone Walls & Cladding', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', link: '/services/hardscaping' },
      { title: 'Steps & Terraces', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', link: '/services/hardscaping' },
      { title: 'Water Features', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1543335552-87f58d0ba96c?w=600&q=80', link: '/services/hardscaping' },
    ],
  },
  {
    category: 'Outdoors Living Structures / Free Site Visit',
    items: [
      { title: 'Wooden Pergolas and Gazebos', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80', link: '/services/outdoors-living-structure' },
      { title: 'Aluminium Pergolas and Gazebos', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1599629954294-14df9ec8bc9d?w=600&q=80', link: '/services/outdoors-living-structure' },
      { title: 'Outdoor Kitchens', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1587313632739-c894c2576b50?w=600&q=80', link: '/services/outdoors-living-structure' },
      { title: 'Outdoor Seating Area', sub: 'Get a Free Consultation', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', link: '/services/outdoors-living-structure' },
    ],
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Main section title animation
      gsap.from('.svc-main-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      });

      // Animate each category group separately when it scrolls into view
      const groups = gsap.utils.toArray('.svc-group');
      
      groups.forEach((group) => {
        const title = group.querySelector('.svc-cat-title');
        const cards = group.querySelectorAll('.svc-card');

        gsap.from(title, {
          x: -20,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
          },
        });

        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 80%',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <h2 className="svc-main-title font-serif-elegant text-3xl md:text-5xl font-bold text-darkText mb-3">
            Our Services
          </h2>
          <div className="svc-main-title w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Iterate over Service Categories */}
        <div className="space-y-16 md:space-y-20">
          {serviceCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="svc-group">
              
              {/* Category Heading (Underlined like screenshots) */}
              <div className="mb-6 flex items-center justify-between">
                <h3 className="svc-cat-title text-lg md:text-2xl font-bold text-darkText underline underline-offset-8 decoration-primary decoration-2">
                  {group.category}
                </h3>
                <Link
                  href="/services"
                  className="hidden sm:flex items-center gap-1 text-[11px] font-bold tracking-widest uppercase text-gray-400 hover:text-primary transition"
                >
                  View All <ArrowRight size={14} />
                </Link>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {group.items.map((item, itemIdx) => (
                  <Link
                    href={item.link}
                    key={itemIdx}
                    className="svc-card group block overflow-hidden"
                  >
                    {/* Image Container with rounded corners & hover scale */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                      />
                      {/* Dark gradient overlay on hover for luxury feel */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                    </div>

                    {/* Content below image */}
                    <div className="pt-4">
                      <h4 className="text-sm md:text-[15px] font-bold text-darkText group-hover:text-primary transition-colors duration-300 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[11px] md:text-xs text-gray-500 mt-1.5 font-medium tracking-wide">
                        {item.sub}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12 text-center sm:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-darkText hover:text-primary hover:border-primary text-xs font-bold tracking-wider px-6 py-3 rounded-md transition"
          >
            EXPLORE ALL SERVICES <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}