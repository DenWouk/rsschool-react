import { configureStore } from '@reduxjs/toolkit';
import { dataListReducer } from './dataListSlice';
import { countriesReducer } from './countrySlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    dataList: dataListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
