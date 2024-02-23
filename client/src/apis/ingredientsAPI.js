// src/app/services/ingredients.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ingredientsApi = createApi({
  reducerPath: "ingredientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/app/ingredients/",
  }),
  endpoints: (builder) => ({
    // Get all Base Types
    getAllBaseType: builder.query({
      query: () => "get_all_base_types",
    }),
    // Delete Base Type by ID
    deleteBaseType: builder.mutation({
      query: (id) => ({
        url: `delete_base_type/${id}`,
        method: "DELETE",
      }),
    }),
    // Create new Base Type
    createBaseType: builder.mutation({
      query: (newBaseType) => ({
        url: "create_base_type",
        method: "POST",
        body: newBaseType,
      }),
    }),

    // Get all Sauce Types
    getAllSauceType: builder.query({
      query: () => "get_all_sauces",
    }),
    // Delete Sauce Type by ID
    deleteSauceType: builder.mutation({
      query: (id) => ({
        url: `delete_sauce/${id}`,
        method: "DELETE",
      }),
    }),
    // Create new Sauce Type
    createSauceType: builder.mutation({
      query: (newSauceType) => ({
        url: "create_sauce_type",
        method: "POST",
        body: newSauceType,
      }),
    }),

    // Get all Toppings
    getAllTopping: builder.query({
      query: () => "get_all_toppings",
    }),
    // Delete Topping by ID
    deleteToppingType: builder.mutation({
      query: (id) => ({
        url: `delete_topping/${id}`,
        method: "DELETE",
      }),
    }),
    // Create new Topping
    createTopping: builder.mutation({
      query: (newTopping) => ({
        url: "create_toppings",
        method: "POST",
        body: newTopping,
      }),
    }),

    // Get all Cheese Types
    getAllCheeseType: builder.query({
      query: () => "get_all_cheese_type",
    }),
    // Delete Cheese Type by ID
    deleteCheeseType: builder.mutation({
      query: (id) => ({
        url: `delete_cheese_type/${id}`,
        method: "DELETE",
      }),
    }),
    // Create new Cheese Type
    createCheeseType: builder.mutation({
      query: (newCheeseType) => ({
        url: "create_cheese_type",
        method: "POST",
        body: newCheeseType,
      }),
    }),
  }),
});

export const {
  useGetAllBaseTypeQuery,
  useDeleteBaseTypeMutation,
  useCreateBaseTypeMutation,
  useGetAllSauceTypeQuery,
  useDeleteSauceTypeMutation,
  useCreateSauceTypeMutation,
  useGetAllToppingQuery,
  useDeleteToppingTypeMutation,
  useCreateToppingMutation,
  useGetAllCheeseTypeQuery,
  useDeleteCheeseTypeMutation,
  useCreateCheeseTypeMutation,
} = ingredientsApi;