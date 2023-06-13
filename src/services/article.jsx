import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
  params: {
    url: "https://time.com/6266679/musk-ai-open-letter/",
    length: "3",
  },
  headers: {
    "X-RapidAPI-Key": "485599e14cmsha15c411f90a57d1p1fb1e8jsn241be3c1eb6c",
    "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
  },
};

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `test`,
    }),
  }),
});
