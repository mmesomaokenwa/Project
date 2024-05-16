'use client'

import { useAppDispatch } from '@/redux-store/hooks'
import { cartSliceActions } from '@/redux-store/store-slices/cartSlice'
import { CartProduct } from '@/types'
import React from 'react'

type BtnProps = {
  children: React.ReactNode
  className?: string
  product: CartProduct
}

const AddToCartBtn = ({ children, className, product }: BtnProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(cartSliceActions.addToCart({ ...product }));
  }
  return (
    <button className={`w-full p-3 bg-green-500 text-white border-none outline-none rounded-lg cursor-pointer hover:bg-green-600 transition ${className && className}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default AddToCartBtn