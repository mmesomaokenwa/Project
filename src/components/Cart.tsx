'use client'

import { useAppSelector } from '@/redux-store/hooks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BsCart } from 'react-icons/bs'

const Cart = () => {
  const cart = useAppSelector(state => state.cart)
  const pathname: string = usePathname()
  const isActive: boolean = pathname === '/cart'
  return (
    <Link
      href={"/cart"}
      className={`mr-3 flex justify-between items-center gap-3 bg-white-500 p-2 rounded transition-colors hover:text-green-500 ${
        isActive && "text-green-500"
      }`}
    >
      <div className="relative">
        <BsCart />
        <span className="absolute -right-2 -top-2 text-green-500 rounded-full bg-transparent text-xs hidden md:block">
          {cart.totalQuantity}
        </span>
      </div>
      <span>Cart</span>
      <span className="text-green-500 block md:hidden ml-auto">{cart.totalQuantity}</span>
    </Link>
  );
}

export default Cart