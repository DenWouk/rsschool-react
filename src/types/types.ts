export interface FormFieldsInterface {
  name: string;
  age: number;
  gender: string;
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
