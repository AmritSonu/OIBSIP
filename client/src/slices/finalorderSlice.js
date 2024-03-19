import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order_status: "Pending...",
  order: [],
  customer_details: {},
  totalPrice: "",
};

const finalorderSlice = createSlice({
  name: "finalorderSlice",
  initialState,
  reducers: {
    setOrderStatus: (state, action) => {
      state.order_status = action.payload;
    },
    addOrder: (state, action) => {
      state.order = action.payload;
    },
    removeOrder: (state, action) => {
      state.order = state.order.filter((order) => order.id !== action.payload);
    },
    setCustomerDetails: (state, action) => {
      state.customer_details = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const {
  setOrderStatus,
  addOrder,
  removeOrder,
  setCustomerDetails,
  setTotalPrice,
} = finalorderSlice.actions;

export default finalorderSlice.reducer;
