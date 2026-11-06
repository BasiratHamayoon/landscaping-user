import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Royal Plantscape - Dubai Landscaping',
  description: 'Learn about Royal Plantscape, Dubai\'s premier landscaping and gardening company. Our story, mission, values, and the team behind your green spaces.',
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[340px] md:h-[440px]">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80&auto=format&fit=crop"
          alt="Beautiful garden landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-3">
            About Royal Plantscape
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            Dubai\'s trusted partner in creating extraordinary outdoor and indoor green spaces since 2015.
          </p>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-white">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Royal Plantscape Landscape & Gardening Works LLC was founded with a simple yet ambitious vision: to transform Dubai\'s arid landscape into a thriving tapestry of green spaces that enhance the quality of life for residents and businesses across the UAE.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What began as a small team of passionate horticulturists working out of a modest nursery in Al Quoz has grown into one of Dubai\'s most respected full-service landscaping companies. Today, we employ over 150 skilled professionals — landscape architects, irrigation engineers, stonemasons, plant specialists, and dedicated gardeners — who share a common love for creating beautiful, sustainable outdoor environments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Over the years, we have completed more than 2,000 projects across Dubai\'s most prestigious communities, from Palm Jumeirah villas and Arabian Ranches estates to Downtown Dubai corporate towers and Dubai Hills family gardens. Every project, regardless of size, receives the same level of dedication, creativity, and attention to detail that has become our hallmark.
            </p>
          </div>
          <div className="lg:w-[480px] shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[360px] md:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80&auto=format&fit=crop"
                alt="Royal Plantscape team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-emerald-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white font-playfair mb-1">2000+</p>
            <p className="text-emerald-200 text-sm">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white font-playfair mb-1">150+</p>
            <p className="text-emerald-200 text-sm">Team Members</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white font-playfair mb-1">9+</p>
            <p className="text-emerald-200 text-sm">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white font-playfair mb-1">98%</p>
            <p className="text-emerald-200 text-sm">Client Satisfaction</p>
          </div>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-3">
            Our Mission & Vision
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 font-playfair mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              To deliver exceptional landscaping and gardening solutions that transform outdoor and indoor spaces into sustainable, beautiful environments. We are committed to exceeding client expectations through innovative design, premium materials, expert craftsmanship, and unwavering dedication to customer satisfaction across every project we undertake in the UAE.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 font-playfair mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              To be the most trusted and innovative landscaping company in the Middle East, setting the standard for sustainable green space design and maintenance. We envision a Dubai where every home, office, and public space is enriched by thoughtfully designed landscapes that conserve water, support biodiversity, and create lasting beauty for generations to come.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-3">
            Why Choose Royal Plantscape
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine decades of horticultural expertise with cutting-edge design and sustainable practices to deliver landscapes that stand the test of time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Expert Team',
              desc: 'Our team includes certified landscape architects, irrigation engineers, and master gardeners with deep knowledge of UAE climate conditions.',
              icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
            },
            {
              title: 'Sustainable Practices',
              desc: 'Water-wise irrigation, native plant selection, and eco-friendly materials are at the core of every project we design and build.',
              icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            },
            {
              title: 'End-to-End Service',
              desc: 'From initial consultation and 3D design to construction, planting, and ongoing maintenance — we handle everything under one roof.',
              icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
            },
            {
              title: 'Premium Quality',
              desc: 'We source the finest plant specimens, natural stones, and construction materials from trusted suppliers across the UAE and internationally.',
              icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
            },
            {
              title: 'On-Time Delivery',
              desc: 'We respect your time and budget. Our project management team ensures every milestone is met on schedule without compromising quality.',
              icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
            },
            {
              title: 'After-Care Support',
              desc: 'Our relationship doesn\'t end at handover. We offer comprehensive maintenance contracts and warranty support to keep your landscape thriving.',
              icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let us bring your vision to life. Contact Royal Plantscape today for a free consultation and discover how we can transform your space.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+971586453671"
              className="px-8 py-3 border-2 border-emerald-600 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Call +971 58 645 3671
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}