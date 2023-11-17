import { ArticleInterface } from '../types/types';

interface AppStateInterface {
  searchValue: string;
  page: number;
  pageSize: number;
  articles: ArticleInterface[];
}

export const initialState: AppStateInterface = {
  searchValue: localStorage.getItem('searchValue') || '',
  page: Number(localStorage.getItem('page')) || 1,
  pageSize: 10,
  articles: [],
};
