// src/apis/orderAPI.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/app/" }),

  endpoints: (builder) => ({
    submitOrder: builder.mutation({
      query: (orderData) => ({
        url: "create_order",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useSubmitOrderMutation } = orderApi;
