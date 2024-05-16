import React from 'react'
import ProductCard from './ProductCard'
import { SuggestedProduct } from '@/types';

const SuggestedProducts = ({ products }: { products: SuggestedProduct[] }) => {
  return (
    <div className="w-full bg-[#FEFAFA]">
      <div className="max-w-6xl mx-auto p-4 py-16 flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">Suggested for you</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
          {[...products, ...products].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestedProducts