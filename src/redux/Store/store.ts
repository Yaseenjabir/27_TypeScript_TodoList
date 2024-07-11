import { Store, configureStore } from "@reduxjs/toolkit";
import { AddToDoReducer } from "../Slices/AddToDoSlice";

const store: Store = configureStore({
  reducer: {
    AddToDoReducer: AddToDoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
