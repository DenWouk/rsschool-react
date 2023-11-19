import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppStateInterface, ResponceDataInterface } from '../types/types';

const API_URL = 'https://newsapi.org/v2/everything/';
const API_KEY = '0f3f7d182c0840a4997f1f88ea60397c';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getData: build.query<ResponceDataInterface, AppStateInterface>({
      query: ({ searchValue, page, pageSize }) =>
        `?q=${searchValue}&sortBy=relevancy&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useGetDataQuery } = dataApi;
