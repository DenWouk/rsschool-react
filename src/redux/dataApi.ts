import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppStateInterface, ResponceDataInterface } from '../types/types';

const API_URL = 'https://newsapi.org/v2/everything/';
const API_KEY = '1f4be37456c047d0bfe7091ceaa25eab';

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
