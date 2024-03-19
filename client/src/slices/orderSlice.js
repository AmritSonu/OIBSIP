// orderSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  PizzaName: "",
  pizzaId: null,
  crustId: null,
  sauceId: null,
  cheeseId: null,
  toppingIds: [],
  toppings: [],
  totalPrice: 0,
  pizzaSize: "normal",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPizzaName: (state, action) => {
      state.PizzaName = action.payload;
    },
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
      const { id, price, name } = action.payload;
      const newToppingId = id;
      if (state.toppingIds.length < 4) {
        const toppingCount = state.toppingIds.filter(
          (id) => id === newToppingId
        ).length;
        if (toppingCount < 1) {
          state.toppingIds.push(newToppingId);
          state.toppings.push({ id, name, price }); // Add topping details
          state.totalPrice += price; // Add the price to the total
        }
      }
    },
    removeToppingId: (state, action) => {
      const removedToppingId = action.payload;
      const removedToppingIndex = state.toppings.findIndex(
        (topping) => topping.id === removedToppingId
      );

      if (removedToppingIndex !== -1) {
        const removedTopping = state.toppings[removedToppingIndex];
        state.toppings.splice(removedToppingIndex, 1);
        state.toppingIds = state.toppings.map((topping) => topping.id);
        state.totalPrice -= removedTopping.price;
      }
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setPizzaSize: (state, action) => {
      state.pizzaSize = action.payload;
    },
    resetOrder: () => initialState,
  },
});

export const {
  setPizzaName,
  setPizzaId,
  setCrustId,
  setSauceId,
  setCheeseId,
  addToppingId,
  removeToppingId,
  updateTotalPrice,
  setPizzaSize,
  resetOrder,
} = orderSlice.actions;

export const selectOrder = (state) => state.order;
export const selectCheeseId = (state) => state.order.cheeseId;
export const totalPizzaPrice = (state) => state.order.totalPrice;
export default orderSlice.reducer;
