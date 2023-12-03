import { DataListInterface, FormFieldsInterface } from '../types/types';

export const formInitialState: FormFieldsInterface = {
  name: '',
  age: '',
  female: false,
  male: false,
  country: '',
  image: '',
  email: '',
  password1: '',
  password2: '',
  rules: false,
};

export const dataListInitialState: DataListInterface = {
  list: [],
};
