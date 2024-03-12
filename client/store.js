// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { ingredientsApi } from "./src/apis/ingredientsAPI";
import { authApi } from "./src/apis/authAPI";
import { pizzasApi } from "./src/apis/pizzasAPI";
import { orderApi } from "./src/apis/orderAPI";
import orderReducer from "./src/slices/orderSlice";
import basketSlice from "./src/slices/basketSlice";
export const store = configureStore({
  reducer: {
    [ingredientsApi.reducerPath]: ingredientsApi.reducer,
    [pizzasApi.reducerPath]: pizzasApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    order: orderReducer,
    basket: basketSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ingredientsApi.middleware,
      pizzasApi.middleware,
      orderApi.middleware,
      authApi.middleware
    ),
});
setupListeners(store.dispatch);
