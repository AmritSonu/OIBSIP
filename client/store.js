// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { ingredientsApi } from "./src/apis/ingredientsAPI";
import { razorpayApi } from "./src/apis/razorpayAPI";
import { pizzasApi } from "./src/apis/pizzasAPI";
import { orderApi } from "./src/apis/orderAPI";
import orderReducer from "./src/slices/orderSlice";
import basketSlice from "./src/slices/basketSlice";
import paymentReducer from "./src/slices/paymentSlice";
export const store = configureStore({
  reducer: {
    [ingredientsApi.reducerPath]: ingredientsApi.reducer,
    [pizzasApi.reducerPath]: pizzasApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [razorpayApi.reducerPath]: razorpayApi.reducer,
    order: orderReducer,
    basket: basketSlice,
    payment: paymentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ingredientsApi.middleware,
      pizzasApi.middleware,
      orderApi.middleware,
      razorpayApi.middleware
    ),
});
setupListeners(store.dispatch);
