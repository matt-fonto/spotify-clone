//this code snippet was generated in the RAPIDAPI extension. Steps:
// 1. We add the URL and pass the necessary headers
// 2. Once the data is successfully fetched, we can click in "Request Snippet"

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
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

  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
