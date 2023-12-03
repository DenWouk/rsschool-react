import { configureStore } from '@reduxjs/toolkit';
// import { formReducer } from './formSlice';
import { dataListReducer } from './dataListSlice';

export const store = configureStore({
  reducer: {
    // form: formReducer,
    dataList: dataListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
