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
      query: ({ page, limit }) => ({
        url: `/posts?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Posts"],
    }),
    getSinglePostByTitle: builder.mutation({
      query: ({ titlename }) => ({
        url: "/post",
        method: "POST",
        body: JSON.stringify({ titlename }),
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getAllPostByCategory: builder.query({
      query: ({ category }) => ({
        url: `/posts/${category}`,
        method: "GET",
      }),
    }),
    searchPostByKeyword: builder.mutation({
      query: (keyword) => ({
        url: `/posts/search/${keyword}`,
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
  useGetSinglePostByTitleMutation,
  useGetAllPostByCategoryQuery,
  useSearchPostByKeywordMutation,
} = postapi;
