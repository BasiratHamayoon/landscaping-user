import HeroSection from '@/components/home/HeroSection';
import BrandsSection from '@/components/home/BrandsSection';
import AboutSection from '@/components/home/AboutSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LocationsSection from '@/components/home/LocationsSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import FAQSection from '@/components/home/FAQSection';

export const metadata = {
  title: 'Royal Plantscape | Landscape Design & Maintenance in Dubai, UAE',
  description:
    'Transform your outdoor space with professional landscape design, garden maintenance and more in Dubai, UAE.',
};

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <BrandsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <LocationsSection />
      <ProjectsSection />
      <FAQSection />
    </div>
  );
}