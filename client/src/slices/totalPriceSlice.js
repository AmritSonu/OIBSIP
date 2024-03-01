import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
};

const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { updateTotalPrice } = totalPriceSlice.actions;

export default totalPriceSlice.reducer;
