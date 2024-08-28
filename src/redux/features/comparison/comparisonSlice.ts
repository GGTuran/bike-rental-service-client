

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ComparisonState {
  selectedBikes: string[];
}

const initialState: ComparisonState = {
  selectedBikes: [],
};

const comparisonSlice = createSlice({
  name: 'comparison',
  initialState,
  reducers: {
    addBikeToCompare: (state, action: PayloadAction<string>) => {
      if (!state.selectedBikes.includes(action.payload)) {
        state.selectedBikes.push(action.payload);
      }
    },
    removeBikeFromCompare: (state, action: PayloadAction<string>) => {
      state.selectedBikes = state.selectedBikes.filter(id => id !== action.payload);
    },
    clearComparison: (state) => {
      state.selectedBikes = [];
    },
  },
});

export const { addBikeToCompare, removeBikeFromCompare, clearComparison } = comparisonSlice.actions;

export default comparisonSlice.reducer;
