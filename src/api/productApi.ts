import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Product } from "../types"

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
  }),
})

export const { useGetProductsQuery } = productApi
