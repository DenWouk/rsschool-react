import { AppStateInterface } from '../types/types';

export const initialState: AppStateInterface = {
  searchValue: localStorage.getItem('searchValue') || 'news',
  page: Number(localStorage.getItem('page')) || 1,
  pageSize: 10,
};
