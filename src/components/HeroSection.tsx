import React from 'react'
import ProductHeroCard from './ProductHeroCard';
import { FaLeftRight } from 'react-icons/fa6';
import { HeroProduct } from '@/types';
import Image from 'next/image';

const HeroSection = ({id, title, price, intro, description, images, thumbnail, rating, TotalReviews, discountPercentage
}: HeroProduct) => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto p-4 py-16">
        <p className="text-sm text-gray-400 mb-2">
          Drinks / Non-alcoholic / Chicken Republic
        </p>
        <div className="flex flex-col md:flex-row md:items-start gap-20">
          <div className="flex flex-col items-center gap-4 flex-1">
            <Image
              src={thumbnail}
              alt={title}
              width={500}
              height={500}
              className="w-full aspect-square bg-gray-200 rounded-xl object-cover"
            />
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2">
                {images.slice(0, 3).map((image, index) =>
                  index !== images.slice(0, 3).length - 1 ? (
                    <>
                      <Image
                        src={image}
                        alt={title}
                        width={100}
                        height={100}
                        className="size-20 bg-gray-200 rounded-xl object-cover"
                      />
                      <FaLeftRight className="text-green-500" />
                    </>
                  ) : (
                    <Image
                      src={image}
                      alt={title}
                      width={100}
                      height={100}
                      className="size-20 bg-gray-200 rounded-xl object-cover"
                    />
                  )
                )}
              </div>
              <button className="w-full p-3 bg-yellow-400 text-white border-none outline-none rounded-lg cursor-pointer hover:bg-yellow-500 transition">
                Add more toppings
              </button>
            </div>
          </div>
          <ProductHeroCard id={id} title={title} description={description} price={price} rating={rating} reviews={TotalReviews} intro={intro} discountPercentage={discountPercentage}  />
        </div>
      </div>
    </div>
  );
}

export default HeroSection