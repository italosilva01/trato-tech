import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    changeCar: (state, { payload }) => {
      const item = state.some((item) => item.id === payload);
      if (!item) {
        return [...state, { id: payload, quantity: 1 }];
      }
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { changeCar } = carSlice.actions;
export default carSlice.reducer;
