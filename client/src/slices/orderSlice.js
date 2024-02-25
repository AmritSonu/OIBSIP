// src/features/orderSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  pizzaId: null,
  crustId: null,
  sauceId: null,
  cheeseId: null,
  toppingIds: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPizzaId: (state, action) => {
      state.pizzaId = action.payload;
    },
    setCrustId: (state, action) => {
      state.crustId = action.payload;
    },
    setSauceId: (state, action) => {
      state.sauceId = action.payload;
    },
    setCheeseId: (state, action) => {
      state.cheeseId = action.payload;
    },
    addToppingId: (state, action) => {
      state.toppingIds.push(action.payload);
    },
    removeToppingId: (state, action) => {
      state.toppingIds = state.toppingIds.filter((id) => id !== action.payload);
    },
    resetOrder: () => initialState,
  },
});

export const {
  setPizzaId,
  setCrustId,
  setSauceId,
  setCheeseId,
  addToppingId,
  removeToppingId,
  resetOrder,
} = orderSlice.actions;

export const selectOrder = (state) => state.order;
export default orderSlice.reducer;