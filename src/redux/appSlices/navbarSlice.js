import { createSlice } from '@reduxjs/toolkit'

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    nav: ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help']
  },
  reducers: {
    incremented: state => {
      state.nav = []
    },
  }
})

export default navbarSlice.reducer