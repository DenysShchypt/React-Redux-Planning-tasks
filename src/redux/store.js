import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "./sliceFilter";
import { tasksReducer} from "./sliceTasks";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersSlice.reducer,
  },
});