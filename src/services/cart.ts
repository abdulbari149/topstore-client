import {
  AddToCartMutation,
  APIResponse,
  DeleteCartItemMutation,
  UpdateQuantityMutation,
} from "./types";
import api from "./index";

const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCartItems: builder.query<APIResponse, {}>({
      query: () => ({
        url: `/cart/get-items`,
        method: "GET",
      }),
      providesTags: ['Cart'],
    }),
    updateQuantity: builder.mutation<APIResponse, UpdateQuantityMutation>({
      query: (args) => ({
        url: "/cart/update-item",
        body: {
          productId: args.productId,
          quantity: args.quantity,
        },
        method: "PATCH",
      }),
      invalidatesTags: ['Cart'],
    }),
    addToCart: builder.mutation<APIResponse, AddToCartMutation>({
      query: (args) => ({
        url: "/cart/add-item",
        body: args,
        method: "POST",
      }),
      invalidatesTags: ['Cart'],
    }),
    deleteCartItem: builder.mutation<APIResponse, DeleteCartItemMutation>({
      query: (args) => ({
        url: "/cart/remove-item",
        body: {
          productId: args.productId
        },
        method: "DELETE",
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});
export const {
  useGetCartItemsQuery,
  useUpdateQuantityMutation,
  useAddToCartMutation,
  useDeleteCartItemMutation,
} = cartApi;
