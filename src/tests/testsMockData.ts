import { configureStore } from '@reduxjs/toolkit';
import { dataApi } from '../redux/dataApi';
import { appReducer } from '../redux/appSlice';

export const articlesMockData = [
  {
    author: 'author1',
    content: 'content1',
    description: 'description1',
    publishetAt: 'publishetAt1',
    source: {
      id: null,
      name: 'name1',
    },
    title: 'title1',
    url: 'url1',
    urlToImage: 'urlToImage1',
  },
  {
    author: 'author2',
    content: 'content2',
    description: 'description2',
    publishetAt: 'publishetAt2',
    source: {
      id: null,
      name: 'name2',
    },
    title: 'title2',
    url: 'url2',
    urlToImage: 'urlToImage2',
  },
];

export const articlesEmptyMockData = [];

export const stateMockData = {
  searchValue: 'searchValue',
  page: 1,
  pageSize: 10,
  articles: articlesMockData,
};

export const stateEmptyMockData = {
  searchValue: 'searchValue',
  page: 1,
  pageSize: 10,
  articles: articlesEmptyMockData,
};

export const testStore = () => {
  const store = configureStore({
    reducer: {
      app: appReducer,
      [dataApi.reducerPath]: dataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dataApi.middleware),
  });

  return store;
};
