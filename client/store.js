// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { ingredientsApi } from "./src/apis/ingredientsAPI";
import { pizzasApi } from "./src/apis/pizzasAPI";
import { orderApi } from "./src/apis/orderAPI";
import orderReducer from "./src/slices/orderSlice";

export const store = configureStore({
  reducer: {
    [ingredientsApi.reducerPath]: ingredientsApi.reducer,
    [pizzasApi.reducerPath]: pizzasApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    order: orderReducer, // Add the order reducer to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ingredientsApi.middleware,
      pizzasApi.middleware,
      orderApi.middleware
    ),
});
setupListeners(store.dispatch);
