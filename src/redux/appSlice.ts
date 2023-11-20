import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './appState';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearchValueParam(state, action) {
      state.searchValue = action.payload;
    },
    setPageNumParam(state, action) {
      state.page = action.payload;
    },
    setPageSizeParam(state, action) {
      state.pageSize = action.payload;
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
  setSearchValueParam,
  setPageNumParam,
  setPageSizeParam,
  handleSearch,
  handleCardsPerPage,
  handlePagination,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
