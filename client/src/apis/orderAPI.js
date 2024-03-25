import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base URL for your API
const baseURL = "http://127.0.0.1:3000/app";

// Define an API slice
export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => "get_all_orders",
    }),
    updateOrderStatus: builder.mutation({
      query: ({ orderId, order_status }) => ({
        url: `update_order_status/${orderId}`,
        method: "PUT",
        body: { order_status },
      }),
    }),
    getDeliveredOrders: builder.query({
      query: () => "get_all_delivered_orders",
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
  useGetDeliveredOrdersQuery,
} = ordersApi;
