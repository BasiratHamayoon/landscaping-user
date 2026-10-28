'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Eye, ExternalLink, MapPin } from 'lucide-react';

const categories = ['All', 'Residential', 'Hardscape & Pool', 'Outdoors Living', 'Commercial'];

const projects = [
  {
    id: 1,
    title: 'Luxury Villa Garden & Lawn Design',
    category: 'Residential',
    location: 'Palm Jumeirah',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=900&auto=format&fit=crop',
    link: '/projects',
  },
  {
    id: 2,
    title: 'Custom Wooden Pergola & Outdoor Lounge',
    category: 'Outdoors Living',
    location: 'Arabian Ranches',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
    link: '/projects',
  },
  {
    id: 3,
    title: 'Modern Resort Pool & Surrounding Hardscape',
    category: 'Hardscape & Pool',
    location: 'Emirates Hills',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=900&auto=format&fit=crop',
    link: '/projects',
  },
  {
    id: 4,
    title: 'Corporate Office Indoor Greenery Wall',
    category: 'Commercial',
    location: 'Downtown Dubai',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop',
    link: '/projects',
  },
  {
    id: 5,
    title: 'Automated Irrigation & Turf Installation',
    category: 'Residential',
    location: 'The Springs',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?q=80&w=900&auto=format&fit=crop',
    link: '/projects',
  },
  {
    id: 6,
    title: 'Bespoke Outdoor Kitchen & Lighting',
    category: 'Outdoors Living',
    location: 'Jumeirah Golf Estates',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900&auto=format&fit=crop',
    link: '/projects',
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-16 md:py-24 bg-gray-50/70 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-4 border border-primary/20">
            <Sparkles size={12} className="text-amber-500" />
            Our Portfolio
          </div>

          <h2 className="font-serif-elegant text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-darkText leading-tight mb-4">
            Our Latest <span className="text-primary">Projects</span>
          </h2>

          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Explore our recently completed landscape designs, custom pergolas, and garden transformations across Dubai.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clickable Projects Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(31,90,31,0.14)] transition-all duration-500 block"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Top Badge Tag */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {project.category}
                </div>

                {/* Top Right Quick View Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-md">
                  <ExternalLink size={15} />
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white transform group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-medium mb-1.5">
                    <MapPin size={12} />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold leading-snug group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 group-hover:text-white">
                    <span>View Project Details</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 bg-white hover:bg-primary text-darkText hover:text-white border border-gray-200 hover:border-primary text-xs font-bold tracking-wider px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/20"
          >
            VIEW ALL COMPLETED PROJECTS
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}