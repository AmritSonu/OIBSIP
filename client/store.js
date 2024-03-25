// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { ingredientsApi } from "./src/apis/ingredientsAPI";
import { authApi } from "./src/apis/authAPI";
import { pizzasApi } from "./src/apis/pizzasAPI";
import orderReducer from "./src/slices/orderSlice";
import basketSlice from "./src/slices/basketSlice";
import finalorderSlice from "./src/slices/finalorderSlice";
import { ordersApi } from "./src/apis/orderAPI";
export const store = configureStore({
  reducer: {
    [ingredientsApi.reducerPath]: ingredientsApi.reducer,
    [pizzasApi.reducerPath]: pizzasApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    order: orderReducer,
    basket: basketSlice,
    finalorder: finalorderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ingredientsApi.middleware,
      pizzasApi.middleware,
      ordersApi.middleware,
      authApi.middleware
    ),
});
setupListeners(store.dispatch);
