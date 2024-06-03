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
    changeQuantity: (state, { payload }) => {
      state = state.map((itemInCar) => {
        if (itemInCar.id === payload.id) itemInCar.quantity += payload.quantity;
        return itemInCar;
      });
    },
    resetCar: () => initialState,
  },
});

export const { changeCar, changeQuantity, resetCar } = carSlice.actions;
export default carSlice.reducer;
