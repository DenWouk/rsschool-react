import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './appState';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    onInputChange(state, action) {
      state.searchValue = action.payload;
    },
    onInputClear(state) {
      state.searchValue = '';
    },
    handleSearch(state) {
      localStorage.setItem('page', String(1));
      localStorage.setItem('searchValue', state.searchValue);
    },
    handleCardsPerPage(state, action: PayloadAction<number>) {
      localStorage.setItem('page', String(1));
      localStorage.setItem('cardsPerPage', String(action.payload));

      state.page = 1;
      state.pageSize = action.payload;
    },
    handlePagination(state, action: PayloadAction<number>) {
      localStorage.setItem('page', String(action.payload));

      state.page = action.payload;
    },
  },
});

export const {
  onInputChange,
  onInputClear,
  handleSearch,
  handleCardsPerPage,
  handlePagination,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
