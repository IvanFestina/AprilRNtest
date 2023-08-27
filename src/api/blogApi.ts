import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "./mainTypes";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts"
    }),
    getPost: builder.query<Post, number>({
      query: (id: number) => `/posts/${id}`
    })
  })
});

export const { useGetPostsQuery, useGetPostQuery } = blogApi;
