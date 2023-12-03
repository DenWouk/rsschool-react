import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { formInitialState } from './states';
import { FormFieldsInterface } from '../types/types';

const formSlice = createSlice({
  name: 'form',
  initialState: formInitialState,
  reducers: {
    onSubmit(state, action: PayloadAction<FormFieldsInterface>) {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.female = action.payload.female;
      state.male = action.payload.male;
      state.country = action.payload.country;
      state.image = action.payload.image;
      state.email = action.payload.email;
      state.password1 = action.payload.password1;
      state.password2 = action.payload.password2;
      state.rules = action.payload.rules;
    },
  },
});

export const { onSubmit } = formSlice.actions;

export const formReducer = formSlice.reducer;
