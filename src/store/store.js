import { configureStore } from "@reduxjs/toolkit";
import bouquetReducer from "./bouquetSlice";

export const store = configureStore({
  reducer: { bouquets: bouquetReducer },
});
