export interface FormFieldsInterface {
  name: string;
  age: string;
  female: boolean;
  male: boolean;
  country: string;
  image: string;
  email: string;
  password1: string;
  password2: string;
  rules: boolean;
}

export interface DataListInterface {
  list: FormFieldsInterface[];
}
