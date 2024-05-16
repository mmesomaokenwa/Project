'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
  id: string
  name: string
  email: string
  profileImage?: string
}

const initialState: InitialState = {
  id: '',
  name: '',
  email: '',
  profileImage: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<InitialState>) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.profileImage = action.payload.profileImage
    },
    updateUser: (state, action: PayloadAction<Partial<InitialState>>) => {
      state = {
        ...state,
        ...action.payload
      }
    },
    resetUser: () => initialState
  },
})

export default userSlice
export const userSliceActions = userSlice.actions