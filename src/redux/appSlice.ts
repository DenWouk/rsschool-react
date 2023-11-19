import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './appState';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getSearchParams(state, action) {
      state.searchValue = action.payload;
      state.pageSize = action.payload;
      state.page = action.payload;
    },
    handleSearch(state, action) {
      state.searchValue = action.payload;
      state.page = 1;

      localStorage.setItem('page', String(1));
      localStorage.setItem('searchValue', state.searchValue);
    },
    handleCardsPerPage(state, action: PayloadAction<number>) {
      state.page = 1;
      state.pageSize = action.payload;

      localStorage.setItem('page', String(1));
      localStorage.setItem('cardsPerPage', String(action.payload));
    },
    handlePagination(state, action: PayloadAction<number>) {
      state.page = action.payload;

      localStorage.setItem('page', String(action.payload));
    },
  },
});

export const {
  getSearchParams,
  handleSearch,
  handleCardsPerPage,
  handlePagination,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
