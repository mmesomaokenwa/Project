import { calculateDiscountPrice } from '@/lib/utils'
import { SuggestedProduct } from '@/types'
import Image from 'next/image'
import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { RiHeartAdd2Line } from 'react-icons/ri'

const ProductCard = ({ product }: { product: SuggestedProduct }) => {
  const discountedPrice = calculateDiscountPrice(product.price, product.discountPercentage)
  return (
    <div className="bg-white flex flex-col border gap-2">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="w-full aspect-square"
      />
      <div className="bg-green-500/50 w-full h-2" />
      <div className="px-4 pb-4 grid gap-6">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">
              Drink / <span className="text-gray-500 font-medium">pizza</span>
            </p>
            <h4 className="text-lg font-medium">{product.title}</h4>
          </div>
          <RiHeartAdd2Line className="text-yellow-400 size-8" />
        </div>
        <div className="flex items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-2">
            <p className="text-green-500 text-base font-medium">
              <span className="line-through">N</span>
              {discountedPrice.toFixed(0)}
            </p>
            <p className="text-gray-400 line-through">N{product.price}</p>
          </div>
          <ul className="flex">
            {Array.from({ length: product.rating }).map((_, index) => (
              <BsStarFill key={index} className="text-yellow-500" />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductCard