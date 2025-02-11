import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  mainImage: string;
  categories: Array<any>;
  sizes: Array<any>;
  colors: Array<any>;
  otherImages: string;
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api/";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Array<Product>, void>({
      query: () => "get-all-products",
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `get-all-products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
