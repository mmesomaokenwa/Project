"use client";

import { CartProduct } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  products: CartProduct[]
  totalQuantity: number
  totalPrice: number
}

const initialState: InitialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingProduct = state.products.find(product => product.id === action.payload.id)
      
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity
        existingProduct.price += action.payload.price
      } else {
        state.products = [...state.products, action.payload]
      }
      state.totalQuantity += action.payload.quantity
      state.totalPrice += action.payload.price
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingProduct = state.products.find((product) => product.id === action.payload)

      if (!existingProduct) return
      state.products = state.products.filter(product => product.id !== action.payload)
      state.totalQuantity -= existingProduct.quantity
      state.totalPrice -= existingProduct.price
    }
  }
})

export default cartSlice
export const cartSliceActions = cartSlice.actions