import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileapi = createApi({
  reducerPath: "profileapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateProfile: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/profile/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useProfileQuery, useUpdateProfileMutation } = profileapi;
