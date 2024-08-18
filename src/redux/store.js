import { configureStore } from '@reduxjs/toolkit'
import navbarRducer from './appSlices/navbarSlice'

const store = configureStore({
  reducer: navbarRducer
})

export default store