import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { countryInitialState } from './states';

const countriesSlice = createSlice({
  name: 'country',
  initialState: countryInitialState,
  reducers: {
    setCountry(state, action: PayloadAction<string[]>) {
      state.countries = action.payload;
    },
  },
});

export const { setCountry } = countriesSlice.actions;

export const countriesReducer = countriesSlice.reducer;
