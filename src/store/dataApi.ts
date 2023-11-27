import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { AppStateInterface, ResponceDataInterface } from "../types/types";

const API_URL = "https://newsapi.org/v2/everything/";
const API_KEY = "0f3f7d182c0840a4997f1f88ea60397c";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    getData: build.query<ResponceDataInterface, AppStateInterface>({
      query: ({ searchValue, pageSize, page }) => ({
       url: `?q=${searchValue}&sortBy=relevancy&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`
      }),
    }),
  }),
});

export const {
  useGetDataQuery,
  util: { getRunningQueriesThunk },
} = dataApi;

export const { getData } = dataApi.endpoints;
