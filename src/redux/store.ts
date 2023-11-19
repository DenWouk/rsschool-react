import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './appSlice';
import { dataApi } from './dataApi';

export const store = configureStore({
  reducer: {
    app: appReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
