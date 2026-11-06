import { notFound } from 'next/navigation';
import { serviceCategories, getServiceBySlug, getSubServiceBySlug } from '@/lib/serviceData';
import { getServiceDescription } from '@/lib/serviceDescriptions';
import ServiceDetailView from '@/components/services/ServiceDetailView';

export const dynamicParams = true;

export function generateStaticParams() {
  const params = [];
  serviceCategories.forEach(service => {
    if (service.subItems && service.subItems.length > 0) {
      service.subItems.forEach(sub => {
        if (sub.slug) {
          params.push({
            service: service.slug,
            subService: sub.slug,
          });
        }
      });
    }
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { service, subService } = await params;
  const sub = getSubServiceBySlug(service, subService);
  if (!sub) return { title: 'Service Not Found | Royal Plantscape' };
  return {
    title: `${sub.name} | Royal Plantscape - Dubai`,
    description: `${sub.name} services by Royal Plantscape in Dubai, UAE.`,
  };
}

export default async function SubServicePage({ params }) {
  const { service, subService } = await params;
  const parent = getServiceBySlug(service);
  if (!parent) notFound();

  const sub = getSubServiceBySlug(service, subService);
  if (!sub) notFound();

  const description = getServiceDescription(subService) || getServiceDescription(service);

  return <ServiceDetailView service={sub} description={description} isSubService={true} />;
}