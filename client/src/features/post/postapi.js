import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postapi = createApi({
  reducerPath: "postapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getAllTags: builder.query({
      query: () => ({
        url: "/tags",
        method: "GET",
      }),
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "/getAllCategories",
        method: "GET",
      }),
    }),
    createPost: builder.mutation({
      query: (formData) => ({
        url: "/create-post",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Posts"],
    }),
    getAllPost: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
      providesTags: ["Posts"],
    }),
    getSinglePostByTitle: builder.query({
      query: ({ titlename }) => ({
        url: `/post/${titlename}`,
        method: "GET",
      }),
    }),
    getAllPostByCategory: builder.query({
      query: ({ category }) => ({
        url: `/posts/${category}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllTagsQuery,
  useGetAllCategoriesQuery,
  useCreatePostMutation,
  useGetAllPostQuery,
  useGetSinglePostByTitleQuery,
  useGetAllPostByCategoryQuery,
} = postapi;
