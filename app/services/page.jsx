import { serviceCategories } from '@/lib/serviceData';
import ServiceCard from '@/components/services/ServiceCard';

export const metadata = {
  title: 'Our Services | Royal Plantscape - Dubai Landscaping',
  description: 'Explore Royal Plantscape\'s full range of landscaping, gardening, irrigation, and outdoor living services in Dubai and the UAE.',
};

export default function ServicesPage() {
  return (
    <div>
      <section className="relative h-[300px] md:h-[380px] bg-emerald-900">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-3">
            Our Services
          </h1>
          <p className="text-emerald-100 text-base md:text-lg max-w-2xl">
            Comprehensive landscaping and gardening solutions tailored for Dubai\'s unique climate and lifestyle.
          </p>
        </div>
      </section>

      <section className="px-8 sm:px-12 lg:px-20 xl:px-28 py-12 md:py-16 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceCategories.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}