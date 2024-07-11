import { createSlice } from "@reduxjs/toolkit";

export interface AddToDoInterface {
  id?: number;
  text: string;
}

const initialState: AddToDoInterface[] = [
  { id: 1, text: "Buy Milk" },
  { id: 2, text: "Go to college" },
];

const AddToDoSlice = createSlice({
  name: "addToDo",
  initialState,
  reducers: {
    addItem: (state, actions) => {
      return (state = [...state, actions.payload]);
    },
    removeItem: (state, actions) => {
      return (state = state.filter((item) => item.id != actions.payload));
    },
  },
});

export const AddToDoReducer = AddToDoSlice.reducer;
export const { addItem, removeItem } = AddToDoSlice.actions;
