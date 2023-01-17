//this code snippet was generated in the RAPIDAPI extension. Steps:
// 1. We add the URL and pass the necessary headers
// 2. Once the data is successfully fetched, we can click in "Request Snippet"

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// createApi allows us to:
// 1. set a reducerPath
// 2. set a baseQuery = baseUrl + endpoints

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  // since, all the API fetching will happen here, we pass the base url
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1", //base query, different end points will be added to it
    prepareHeaders: (headers) => {
      //here, I'm passing the headers
      headers.set(
        "X-RapidAPI-Key",
        "90995ab742mshf46662c22c46b0ap13e658jsn43f862dd5c4a"
      );

      return headers;
    },
  }),

  // and here, we pass all the other queries
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }), //query 1 = Top charts
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }), //query 2: Song Details
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`, //query 3: Related Songs to our current page
    }),
  }),
});

// then, we can export this hook to where we want to fetch the data
// to get the hoook, we need to go use{hookName}Query
export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
