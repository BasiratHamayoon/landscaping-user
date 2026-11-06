import { notFound } from 'next/navigation';
import { serviceCategories, getServiceBySlug } from '@/lib/serviceData';
import { getServiceDescription } from '@/lib/serviceDescriptions';
import ServiceDetailView from '@/components/services/ServiceDetailView';

export const dynamicParams = true;

export function generateStaticParams() {
  return serviceCategories.map(service => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const serviceData = getServiceBySlug(service);
  if (!serviceData) return { title: 'Service Not Found | Royal Plantscape' };
  return {
    title: `${serviceData.name} | Royal Plantscape - Dubai`,
    description: serviceData.shortDescription,
  };
}

export default async function ServicePage({ params }) {
  const { service } = await params;
  const serviceData = getServiceBySlug(service);
  if (!serviceData) notFound();

  const description = getServiceDescription(service);

  return <ServiceDetailView service={serviceData} description={description} isSubService={false} />;
}