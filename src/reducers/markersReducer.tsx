import { createSlice } from '@reduxjs/toolkit'
import { TMarker } from '../types';

const markers: TMarker[] = JSON.parse(window.localStorage.getItem('markers') || '[]');

export const markersReducer = createSlice({
  name: 'markersReducer',
  initialState: {
    markers: markers
  },
  reducers: {
    addMarker: (state, action) => {
      state.markers = [...state.markers, action.payload];
    },
    changeVisibleInfo: (state, action) => {
      const { id, isVisible } = action.payload;
      const newMarkers: TMarker[] = state.markers.map((marker: TMarker) => marker.id === id ? { ...marker, isVisibleInfo: isVisible } : marker)
      state.markers = newMarkers;
    }
  },
})

export const { addMarker, changeVisibleInfo } = markersReducer.actions
export default markersReducer.reducer
