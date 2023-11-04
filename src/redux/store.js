import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "./sliceFilter";
import { tasksSlice } from "./sliceTasks";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    filters: filtersSlice.reducer,
  },
});