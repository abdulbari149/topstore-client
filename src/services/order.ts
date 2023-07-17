import api from ".";
import { APIResponse, GetOrderHistoryQuery, OrderCheckoutMutation } from "./types";

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    orderCheckout: builder.mutation<APIResponse, OrderCheckoutMutation>({
      query: (data) => ({
        url: "/order",
        body: {
          cart_ids: data.cart_item_ids,
          carrier: 'tcs',
          address: data.shipping_details.address_1 + ' ' + data.shipping_details.address_2,
          city: data.shipping_details.city,
          country: data.shipping_details.country,
          state: data.shipping_details.state,
          postalCode: data.shipping_details.zipCode,
        },
        method: "POST",
      }),
      invalidatesTags: ["Order"]
    }),
    getOrderHistory: builder.query<APIResponse, {}>({
      query: (args) => ({
        url: "/order",
        method: "GET"
      }),
      providesTags: ["Order"] 
    })
  }),
});
export const { useOrderCheckoutMutation, useGetOrderHistoryQuery } = orderApi;
