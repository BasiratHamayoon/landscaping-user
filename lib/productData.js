import { navMenus } from './navData';

const u = (id) => `https://images.unsplash.com/${id}?w=600&q=80&auto=format&fit=crop`;

const categoryMeta = {
  'indoor-plant': {
    image: u('photo-1485955900006-10f4d324d411'),
    description: 'Air-purifying and decorative plants for homes and offices',
  },
  'outdoor-plants': {
    image: u('photo-1416879595882-3373a0480b5b'),
    description: 'Heat-tolerant plants perfect for UAE gardens and villas',
  },
  'bundle-combos': {
    image: u('photo-1512428813834-c702c7702b78'),
    description: 'Curated plant sets at special combo prices',
  },
  'artificial-plant-grass': {
    image: u('photo-1466692476868-aef1dfb1e735'),
    description: 'Zero-maintenance greenery that stays fresh all year',
  },
  pots: {
    image: u('photo-1509423350716-97f9360b4e09'),
    description: 'Ceramic, fiberglass and decorative planters',
  },
  'garden-accessories': {
    image: u('photo-1520412099551-62b6bafeb5bb'),
    description: 'Tools and essentials for every gardener',
  },
  'fresh-flowers': {
    image: u('photo-1490750967868-88aa4486c946'),
    description: 'Beautiful hand-made flower arrangements delivered in Dubai',
  },
  'fertilizer-insecticides': {
    image: u('photo-1501004318641-b39e6451bec6'),
    description: 'Keep your plants healthy, green and pest-free',
  },
};

export const productCategories = navMenus.products.categories.map((cat) => ({
  ...cat,
  image: categoryMeta[cat.slug]?.image ?? u('photo-1485955900006-10f4d324d411'),
  description: categoryMeta[cat.slug]?.description ?? '',
}));

export const allProducts = [
  { id: 1, title: 'Monstera Deliciosa', slug: 'monstera-deliciosa', category: 'indoor-plant', subCategory: 'tall-indoor', price: 185, oldPrice: 220, image: u('photo-1485955900006-10f4d324d411'), inStock: true },
  { id: 2, title: 'Snake Plant Laurentii', slug: 'snake-plant-laurentii', category: 'indoor-plant', subCategory: 'indoor-air-purifying', price: 95, oldPrice: null, image: u('photo-1509423350716-97f9360b4e09'), inStock: true },
  { id: 3, title: 'Peace Lily', slug: 'peace-lily', category: 'indoor-plant', subCategory: 'bedroom-plant', price: 75, oldPrice: 90, image: u('photo-1501004318641-b39e6451bec6'), inStock: true },
  { id: 4, title: 'Golden Pothos Hanging Basket', slug: 'golden-pothos-hanging', category: 'indoor-plant', subCategory: 'indoor-hanging', price: 65, oldPrice: null, image: u('photo-1512428813834-c702c7702b78'), inStock: true },
  { id: 5, title: 'ZZ Plant', slug: 'zz-plant', category: 'indoor-plant', subCategory: 'office-tabletop', price: 85, oldPrice: null, image: u('photo-1520412099551-62b6bafeb5bb'), inStock: true },
  { id: 6, title: 'Fiddle Leaf Fig', slug: 'fiddle-leaf-fig', category: 'indoor-plant', subCategory: 'tall-indoor', price: 245, oldPrice: 290, image: u('photo-1485955900006-10f4d324d411'), inStock: false },
  { id: 7, title: 'Echeveria Succulent Trio', slug: 'echeveria-succulent-trio', category: 'indoor-plant', subCategory: 'indoor-succulents-cactus', price: 55, oldPrice: null, image: u('photo-1459411552884-841db9b3cc2a'), inStock: true },
  { id: 8, title: 'Preserved Moss Wall Panel', slug: 'preserved-moss-wall-panel', category: 'indoor-plant', subCategory: 'green-wall-moss-wall', price: 450, oldPrice: 520, image: u('photo-1466692476868-aef1dfb1e735'), inStock: true },
  { id: 9, title: 'Rubber Plant', slug: 'rubber-plant', category: 'indoor-plant', subCategory: 'indoor-evergreen', price: 120, oldPrice: null, image: u('photo-1501004318641-b39e6451bec6'), inStock: true },
  { id: 10, title: 'Areca Palm', slug: 'areca-palm', category: 'indoor-plant', subCategory: 'best-selling-indoor', price: 160, oldPrice: 195, image: u('photo-1512428813834-c702c7702b78'), inStock: true },
  { id: 11, title: 'Bougainvillea', slug: 'bougainvillea', category: 'outdoor-plants', subCategory: null, price: 45, oldPrice: null, image: u('photo-1416879595882-3373a0480b5b'), inStock: true },
  { id: 12, title: 'Young Date Palm', slug: 'young-date-palm', category: 'outdoor-plants', subCategory: null, price: 650, oldPrice: 750, image: u('photo-1466692476868-aef1dfb1e735'), inStock: false },
  { id: 13, title: 'Frangipani Tree', slug: 'frangipani-tree', category: 'outdoor-plants', subCategory: null, price: 140, oldPrice: null, image: u('photo-1416879595882-3373a0480b5b'), inStock: true },
  { id: 14, title: 'Office Green Bundle (3 Plants)', slug: 'office-green-bundle', category: 'bundle-combos', subCategory: null, price: 299, oldPrice: 360, image: u('photo-1512428813834-c702c7702b78'), inStock: true },
  { id: 15, title: 'Starter Plant Combo', slug: 'starter-plant-combo', category: 'bundle-combos', subCategory: null, price: 179, oldPrice: null, image: u('photo-1485955900006-10f4d324d411'), inStock: true },
  { id: 16, title: 'Artificial Grass 35mm (per sqm)', slug: 'artificial-grass-35mm', category: 'artificial-plant-grass', subCategory: null, price: 55, oldPrice: 70, image: u('photo-1466692476868-aef1dfb1e735'), inStock: true },
  { id: 17, title: 'Artificial Olive Tree 150cm', slug: 'artificial-olive-tree', category: 'artificial-plant-grass', subCategory: null, price: 380, oldPrice: null, image: u('photo-1520412099551-62b6bafeb5bb'), inStock: false },
  { id: 18, title: 'White Matte Ceramic Pot', slug: 'white-matte-ceramic-pot', category: 'pots', subCategory: null, price: 75, oldPrice: null, image: u('photo-1509423350716-97f9360b4e09'), inStock: true },
  { id: 19, title: 'Tall Fiberglass Planter', slug: 'tall-fiberglass-planter', category: 'pots', subCategory: null, price: 320, oldPrice: 380, image: u('photo-1485955900006-10f4d324d411'), inStock: true },
  { id: 20, title: 'Garden Tool Set (5 Pcs)', slug: 'garden-tool-set', category: 'garden-accessories', subCategory: null, price: 110, oldPrice: null, image: u('photo-1416879595882-3373a0480b5b'), inStock: true },
  { id: 21, title: 'Metal Watering Can 2L', slug: 'metal-watering-can', category: 'garden-accessories', subCategory: null, price: 45, oldPrice: 60, image: u('photo-1520412099551-62b6bafeb5bb'), inStock: true },
  { id: 22, title: 'Red Rose Bouquet', slug: 'red-rose-bouquet', category: 'fresh-flowers', subCategory: null, price: 199, oldPrice: null, image: u('photo-1490750967868-88aa4486c946'), inStock: true },
  { id: 23, title: 'White Orchid Arrangement', slug: 'white-orchid-arrangement', category: 'fresh-flowers', subCategory: null, price: 260, oldPrice: 300, image: u('photo-1490750967868-88aa4486c946'), inStock: true },
  { id: 24, title: 'Organic Plant Fertilizer 1kg', slug: 'organic-plant-fertilizer', category: 'fertilizer-insecticides', subCategory: null, price: 35, oldPrice: null, image: u('photo-1501004318641-b39e6451bec6'), inStock: true },
  { id: 25, title: 'Neem Oil Spray 500ml', slug: 'neem-oil-spray', category: 'fertilizer-insecticides', subCategory: null, price: 30, oldPrice: null, image: u('photo-1459411552884-841db9b3cc2a'), inStock: false },
];

export const getCategoryBySlug = (slug) => productCategories.find((cat) => cat.slug === slug);