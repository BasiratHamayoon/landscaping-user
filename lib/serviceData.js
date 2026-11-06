import { navMenus } from './navData';

const serviceImages = {
  'landscaping': 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80&auto=format&fit=crop',
  'indoor-landscaping': 'https://images.unsplash.com/photo-1545165375-7c5f3e738034?w=1200&q=80&auto=format&fit=crop',
  'hardscaping': 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80&auto=format&fit=crop',
  'indoor-plant-maintenance': 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200&q=80&auto=format&fit=crop',
  'garden-maintenance': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80&auto=format&fit=crop',
  'irrigation-system': 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&q=80&auto=format&fit=crop',
  'outdoors-living-structure': 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80&auto=format&fit=crop',
  'swimming-pool-service': 'https://images.unsplash.com/photo-1519955266818-0231b63402b2?w=1200&q=80&auto=format&fit=crop',
};

const serviceShortDescriptions = {
  'landscaping': 'Transform your outdoor spaces with our comprehensive landscaping solutions tailored for Dubai\'s unique climate and lifestyle.',
  'indoor-landscaping': 'Bring nature indoors with stunning interior landscapes designed for homes, offices, and commercial spaces across the UAE.',
  'hardscaping': 'Create durable and elegant outdoor structures with our expert hardscaping, paving, and stonework services.',
  'indoor-plant-maintenance': 'Keep your indoor plants thriving year-round with our professional care, pruning, and maintenance programs.',
  'garden-maintenance': 'Year-round garden care to keep your outdoor spaces lush, healthy, and beautifully maintained in every season.',
  'irrigation-system': 'Smart irrigation solutions designed to conserve water while keeping your landscape perfectly hydrated across Dubai.',
  'outdoors-living-structure': 'Design and build stunning pergolas, gazebos, shade structures, and outdoor living spaces for year-round enjoyment.',
  'swimming-pool-service': 'Complete swimming pool landscaping, renovation, and maintenance services for residential and commercial properties.',
};

function ensureSlug(item) {
  if (item.slug) return item.slug;
  return item.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const serviceCategories = navMenus.services.categories.map(cat => ({
  ...cat,
  slug: ensureSlug(cat),
  image: serviceImages[cat.slug || ensureSlug(cat)] || serviceImages['landscaping'],
  shortDescription: serviceShortDescriptions[cat.slug || ensureSlug(cat)] || '',
  subItems: (cat.subItems || []).map(sub => ({
    ...sub,
    slug: ensureSlug(sub),
  })),
}));

export function getServiceBySlug(slug) {
  return serviceCategories.find(s => s.slug === slug) || null;
}

export function getSubServiceBySlug(parentSlug, subSlug) {
  const parent = getServiceBySlug(parentSlug);
  if (!parent) return null;
  const sub = parent.subItems?.find(s => s.slug === subSlug);
  if (!sub) return null;
  return {
    ...sub,
    parentSlug,
    parentName: parent.name,
    image: parent.image,
    shortDescription: parent.shortDescription,
  };
}