import { configureStore } from '@reduxjs/toolkit'
import markersReducer from './reducers/markersReducer'
import sidebarReducer from './reducers/sidebarReducer'

export default configureStore({
  reducer: {
    markers: markersReducer,
    sidebar: sidebarReducer
  },
})