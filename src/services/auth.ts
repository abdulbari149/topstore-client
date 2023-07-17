import { APIResponse, LoginMutation, MeQuery, RegisterMutation, RegisterResponse } from "./types";
import api from "./index";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<APIResponse, LoginMutation>({
      query: (args) => ({
        url: "/auth/login",
        method: "POST",
        body: args,
      }),
      async onQueryStarted(arg, api) {
        const { data } = await api.queryFulfilled;
        localStorage.setItem('access_token', data.data.tokens.access_token);
      }, 
    }),
    register: builder.mutation<RegisterResponse, RegisterMutation>({
      query: (args) => ({
        url: "/auth/register",
        method: "POST",
        body: args,
      }),
      async onQueryStarted(arg, api) {
        const { data } = await api.queryFulfilled;
        console.log(data.data.tokens);
        localStorage.setItem('access_token', data.data.tokens.access_token);
      },  
    }),
    me: builder.query<APIResponse, MeQuery>({
      query: ({ id }) => ({
        url: `/users/get/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
