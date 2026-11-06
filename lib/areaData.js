import { navMenus } from './navData';

const areaImages = [
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80&auto=format&fit=crop',
];

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const areaDescriptions = {
  'mirdif': 'Mirdif is one of Dubai\'s most established residential communities, known for its spacious villas and lush family gardens. Royal Plantscape has been serving Mirdif homeowners for years, providing complete landscaping, garden maintenance, and irrigation solutions tailored to the community\'s mature villa plots.',
  'jumeirah': 'Jumeirah is Dubai\'s iconic beachfront neighborhood, home to some of the city\'s most prestigious villas and estates. Our team specializes in creating coastal-inspired landscapes that thrive in the salty sea breeze, featuring tropical palms, bougainvillea, and drought-tolerant Mediterranean plantings.',
  'palm-jumeirah': 'The Palm Jumeirah is Dubai\'s most exclusive island community, where luxury villas demand equally luxurious landscapes. We provide premium landscaping, pool area design, and ongoing garden maintenance for Palm residents who expect nothing less than perfection.',
  'arabian-ranches': 'Arabian Ranches is a master-planned golf community with hundreds of villas surrounded by desert-inspired landscapes. We help homeowners transform their standard developer gardens into personalized outdoor retreats with custom planting, hardscaping, and water features.',
  'dubai-hills': 'Dubai Hills Estate is one of Dubai\'s newest and most sought-after communities, featuring modern villas and townhouses with generous garden plots. Our team works with Dubai Hills residents to design contemporary landscapes that complement the community\'s clean architectural lines.',
  'downtown-dubai': 'Downtown Dubai is the heart of the city, home to the Burj Khalifa and Dubai Mall. We provide indoor landscaping, terrace gardens, and balcony greening solutions for Downtown\'s luxury apartments and penthouses, bringing nature into the urban skyline.',
  'business-bay': 'Business Bay is Dubai\'s premier commercial district, lined with office towers and mixed-use developments. We offer corporate indoor landscaping, green wall installations, and outdoor plaza maintenance for businesses looking to create healthier, more attractive work environments.',
  'dubai-marina': 'Dubai Marina is a vibrant waterfront community known for its towering skyscrapers and bustling promenade. We specialize in balcony gardens, rooftop terraces, and indoor plant installations for Marina residents who want to maximize their outdoor living spaces.',
  'jumeirah-village-circle': 'Jumeirah Village Circle (JVC) is a popular family-friendly community with a mix of villas, townhouses, and apartments. We provide affordable landscaping and garden maintenance packages designed for JVC\'s compact garden plots and shared community green spaces.',
  'al-barsha': 'Al Barsha is a well-established residential and commercial area near Mall of the Emirates. Our services in Al Barsha include villa garden makeovers, commercial property landscaping, and ongoing maintenance contracts for the area\'s diverse mix of properties.',
  'umm-suqeim': 'Umm Suqeim is a prestigious beachside neighborhood adjacent to Jumeirah, home to iconic landmarks and luxury residences. We create bespoke coastal gardens and outdoor living spaces that take full advantage of the area\'s sea views and breezy climate.',
  'al-quoz': 'Al Quoz is Dubai\'s creative and industrial hub, home to art galleries, warehouses, and an increasing number of residential lofts. We provide indoor landscaping, green wall installations, and courtyard garden designs for Al Quoz\'s unique mixed-use spaces.',
  'deira': 'Deira is one of Dubai\'s oldest and most vibrant commercial districts. We serve Deira\'s businesses and residential buildings with indoor plant maintenance, rooftop garden installations, and commercial landscaping solutions suited to the area\'s dense urban environment.',
  'bur-dubai': 'Bur Dubai is a historic district blending traditional architecture with modern developments. Our landscaping services in Bur Dubai include courtyard gardens, indoor greening for heritage-style buildings, and commercial landscape maintenance along the Creek.',
  'dubai-silicon-oasis': 'Dubai Silicon Oasis is a technology park and residential community in the heart of Dubai. We provide landscaping and garden maintenance for DSO\'s villas, townhouses, and corporate campuses, creating green spaces that enhance the community\'s modern lifestyle.',
  'dubai-sports-city': 'Dubai Sports City is a dynamic community built around world-class sporting venues. We maintain residential gardens, community green spaces, and commercial landscapes throughout Sports City, keeping the area\'s outdoor environments as active and vibrant as its residents.',
  'motor-city': 'Motor City is a unique automotive-themed community with spacious villas and apartment buildings. Our landscaping team creates family-friendly gardens, pool surrounds, and outdoor entertainment areas that complement Motor City\'s relaxed suburban lifestyle.',
  'dubai-creek-harbour': 'Dubai Creek Harbour is one of Dubai\'s most ambitious new waterfront developments. We are proud to be among the first landscaping companies serving this emerging community, designing contemporary gardens and green spaces for its early residents.',
};

export const areaList = (navMenus.areaWeServe?.items || []).map((item, index) => {
  const name = typeof item === 'string' ? item : item.name;
  const slug = typeof item === 'string' ? toSlug(item) : (item.slug || toSlug(item.name));
  return {
    name,
    slug,
    image: areaImages[index % areaImages.length],
    description: areaDescriptions[slug] || `Royal Plantscape provides professional landscaping, gardening, and outdoor maintenance services across ${name}, Dubai. From villa gardens and pool landscaping to irrigation systems and hardscaping, our experienced team delivers exceptional results tailored to the unique characteristics of ${name} and its surrounding neighborhoods.`,
  };
});

export function getAreaBySlug(slug) {
  return areaList.find(a => a.slug === slug) || null;
}