// src/app/services/ingredients.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ingredientsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/app/ingredients/",
  }),
  endpoints: (builder) => ({
    getAllBaseType: builder.query({
      query: () => "get_all_base_types",
    }),
    deleteBaseType: builder.mutation({
      query: (id) => ({
        url: `delete_base_type/${id}`,
        method: "DELETE",
      }),
    }),
    getAllSauceType: builder.query({
      query: () => "get_all_sauces",
    }),
    deleteSauceType: builder.mutation({
      query: (id) => ({
        url: `delete_sauce/${id}`,
        method: "DELETE",
      }),
    }),
    getAllTopping: builder.query({
      query: () => "get_all_toppings",
    }),
    deleteToppingType: builder.mutation({
      query: (id) => ({
        url: `delete_topping/${id}`,
        method: "DELETE",
      }),
    }),
    getAllCheeseType: builder.query({
      query: () => "get_all_cheese_type",
    }),
    deleteCheeseType: builder.mutation({
      query: (id) => ({
        url: `delete_cheese_type/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllBaseTypeQuery,
  useDeleteBaseTypeMutation,
  useGetAllSauceTypeQuery,
  useDeleteSauceTypeMutation,
  useGetAllToppingQuery,
  useDeleteToppingTypeMutation,
  useGetAllCheeseTypeQuery,
  useDeleteCheeseTypeMutation,
} = ingredientsApi;
