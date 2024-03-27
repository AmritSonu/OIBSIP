import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PizzaName: "",
  pizzaId: null,
  crust_name: null,
  sauce_name: null,
  cheese_name: null,
  topping_names: [],
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
    setCrust: (state, action) => {
      state.crust_name = action.payload;
    },
    setSauce: (state, action) => {
      state.sauce_name = action.payload;
    },
    setCheese: (state, action) => {
      state.cheese_name = action.payload;
    },
    addToppingName: (state, action) => {
      const { topping_name, topping_price } = action.payload;
      // console.log(topping_name, topping_price);
      if (state.topping_names.length < 4) {
        const toppingCount = state.topping_names.filter(
          (name) => name === topping_name
        ).length;
        if (toppingCount < 1) {
          state.topping_names.push(topping_name);
          state.totalPrice += topping_price;
        }
      }
    },
    removeToppingName: (state, action) => {
      const { topping_name, topping_price } = action.payload;
      const index = state.topping_names.indexOf(topping_name);
      if (index !== -1) {
        state.topping_names.splice(index, 1);
        state.totalPrice -= topping_price;
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
  setCrust,
  setSauce,
  setCheese,
  addToppingName,
  removeToppingName,
  updateTotalPrice,
  setPizzaSize,
  resetOrder,
} = orderSlice.actions;

export const selectOrder = (state) => state.order;
export const selectcheese_name = (state) => state.order.cheese_name;
export const selectsauce_name = (state) => state.order.sauce_name;
export const totalPizzaPrice = (state) => state.order.totalPrice;
export default orderSlice.reducer;
