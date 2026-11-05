'use client';

import { useParams } from 'next/navigation';
import CategoryView from '@/components/products/CategoryView';

export default function SubCategoryPage() {
  const { category, subCategory } = useParams();
  return <CategoryView categorySlug={category} subSlug={subCategory} />;
}