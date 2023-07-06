import { createSlice } from '@reduxjs/toolkit'

export const sidebarReducer = createSlice({
  name: 'sidebarReducer',
  initialState: {
    isShow: false,
  },
  reducers: {
    changeVisibleSidebar: (state) => {
      state.isShow = !state.isShow
    }
  },
})
export const { changeVisibleSidebar } = sidebarReducer.actions

export default sidebarReducer.reducer
