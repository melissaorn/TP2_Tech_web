import { createSlice } from "@reduxjs/toolkit";

const initialState = { bouquets: [] };

const bouquetSlice = createSlice({
  name: "bouquets",
  initialState,
  reducers: {
    setBouquets: (state, action) => {
      state.bouquets = action.payload;
    }
  },
});

export const { setBouquets } = bouquetSlice.actions;
export default bouquetSlice.reducer;
