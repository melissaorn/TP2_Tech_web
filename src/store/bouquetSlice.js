import { createSlice } from "@reduxjs/toolkit";

const initialState = { bouquets: [] };

const bouquetSlice = createSlice({
  name: "bouquets",
  initialState,
  reducers: {
    setBouquets: (state, action) => { state.bouquets = action.payload; },
    toggleLike: (state, action) => {
      const bouquet = state.bouquets.find(b => b.id === action.payload);
      if (bouquet) bouquet.liked = !bouquet.liked;
    },
  },
});

export const { setBouquets, toggleLike } = bouquetSlice.actions;
export default bouquetSlice.reducer;
