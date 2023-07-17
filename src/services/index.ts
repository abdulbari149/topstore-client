import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/api`,
    async prepareHeaders(headers, api) {
      const token = localStorage.getItem('access_token');
      console.log(token);
      if (!token) return headers;
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Cart", "CartItem", "Order", "User", "Product"],
  endpoints: (builder) => ({}),
});
export default api;
