import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dataListInitialState } from './states';
import { FormFieldsInterface } from '../types/types';

const dataListSlice = createSlice({
  name: 'data-list',
  initialState: dataListInitialState,
  reducers: {
    addData(state, action: PayloadAction<FormFieldsInterface[]>) {
      state.list = action.payload;
    },
  },
});

export const { addData } = dataListSlice.actions;

export const dataListReducer = dataListSlice.reducer;
