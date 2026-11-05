'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { ShoppingCart, Check } from 'lucide-react';
import { addToCart } from '@/redux/actions/cartActions';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const onSale = product.oldPrice && product.oldPrice > product.price;
  const discount = onSale
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-[0_6px_24px_rgb(0,0,0,0.07)] transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
            !product.inStock ? 'opacity-70 grayscale' : ''
          }`}
        />

        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {onSale && (
            <span className="px-2 py-0.5 bg-red-500 text-white text-[9px] font-bold uppercase tracking-wider rounded-full">
              -{discount}%
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-0.5 bg-gray-900 text-white text-[9px] font-bold uppercase tracking-wider rounded-full">
              Sold Out
            </span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className={`w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider shadow-lg transition-colors ${
              added
                ? 'bg-green-600 text-white'
                : product.inStock
                ? 'bg-white text-darkText hover:bg-primary hover:text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {added ? <Check size={12} /> : <ShoppingCart size={12} />}
            {added ? 'Added' : product.inStock ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-[13px] font-semibold text-darkText line-clamp-2 min-h-[36px] leading-snug group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <div className="flex items-baseline gap-1.5 mt-2 pt-2 border-t border-gray-100">
          <span className="text-sm font-bold text-primary">
            AED {product.price.toFixed(2)}
          </span>
          {onSale && (
            <span className="text-[11px] text-gray-400 line-through">
              AED {product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}