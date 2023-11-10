import { createContext } from 'react';
import { ArticleInterface } from '../types/types';

interface AppContextInterface {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  page: number;
  setPage: (page: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  articles: ArticleInterface[];
  setArticles: (articles: ArticleInterface[]) => void;
}

export const AppContext = createContext<AppContextInterface>({
  searchValue: '',
  setSearchValue: () => {},
  page: 1,
  setPage: () => {},
  pageSize: 1,
  setPageSize: () => {},
  articles: [],
  setArticles: () => {},
});

export const AppProvider = AppContext.Provider;
