// src/apis/pizzasAPI.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pizzasApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/app/" }),

  endpoints: (builder) => ({
    getPizzas: builder.query({
      query: () => "get_pizzas",
    }),
    getPizzaById: builder.query({
      query: (id) => `get_pizza/${id}`,
    }),
  }),
});
export const { useGetPizzasQuery, useGetPizzaByIdQuery } = pizzasApi;
