import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const razorpayApi = createApi({
  reducerPath: "razorpayApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/payment" }), // Adjust the base URL accordingly
  endpoints: (builder) => ({
    getOrderId: builder.mutation({
      query: (body) => ({
        url: "/orders",
        method: "POST",
        body,
      }),
    }),
    paymentCallback: builder.mutation({
      query: (body) => ({
        url: "/payment-callback",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useGetOrderIdMutation, usePaymentCallbackMutation } =
  razorpayApi;
