import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userslice'


export const store = configureStore({
  reducer: {
    userInfo: userSlice
  },
})