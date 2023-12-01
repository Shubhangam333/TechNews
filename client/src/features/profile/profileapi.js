import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileapi = createApi({
  reducerPath: "profileapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    profile: builder.mutation({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useProfileMutation } = profileapi;
