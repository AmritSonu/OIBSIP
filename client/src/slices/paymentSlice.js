import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orderId: null,
  paymentStatus: null,
};
const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setOrderId: (state, action) => {
      state.orderId = action.payload;
    },
    setPaymentStatus: (state, action) => {
      state.paymentStatus = action.payload;
    },
  },
});

export const { setOrderId, setPaymentStatus } = paymentSlice.actions;
export default paymentSlice.reducer;