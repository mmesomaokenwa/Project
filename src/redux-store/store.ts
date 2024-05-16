'use client'

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./store-slices/userSlice";
import cartSlice from "./store-slices/cartSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch