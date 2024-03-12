import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [], // Array to hold selected pizzas in the basket
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.pizzas.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      const pizzaIdToRemove = action.payload;
      state.pizzas = state.pizzas.filter(
        (pizza) => pizza._id !== pizzaIdToRemove
      );
    },
    clearBasket: (state) => {
      state.pizzas = [];
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;
export const selectBasket = (state) => state.basket.pizzas;
export default basketSlice.reducer;