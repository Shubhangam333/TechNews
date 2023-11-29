import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authapi = createApi({
  reducerPath: "authapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    emailVerification: builder.query({
      query: (verificationToken) => ({
        url: `/verify/${verificationToken}`,
        method: "GET",
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useEmailVerificationQuery,
} = authapi;
