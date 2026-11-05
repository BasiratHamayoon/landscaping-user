'use client';

import { useParams } from 'next/navigation';
import CategoryView from '@/components/products/CategoryView';

export default function CategoryPage() {
  const { category } = useParams();
  return <CategoryView categorySlug={category} />;
}