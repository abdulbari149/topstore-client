import { Product } from "../pages/Product/type";
import api from "./index";
import { APIResponse, GetProductByIdQuery, GetProductQuery } from "./types";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<APIResponse<Product[]>, GetProductQuery>({
      query: (args) => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getProductById: builder.query<APIResponse, GetProductByIdQuery>({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductByIdQuery, useGetProductsQuery } = productApi;
