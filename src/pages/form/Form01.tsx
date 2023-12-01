import { Link } from 'react-router-dom';
import './FormPages.css';
import { Form } from '../../components/Form/Form ';

export interface FormFieldsInterface {
  name: string;
  age: string;
  female: boolean;
  male: boolean;
  country: string;
  image: boolean;
  email: string;
  password1: string;
  password2: string;
  rules: boolean;
}

export function Form01() {
  function onSubmit(formFields: FormFieldsInterface) {
    console.log(formFields);
  }

  return (
    <div className="form-container">
      <h2>Form 01</h2>
      <Link to={'/'}>
        <button className="btn form-page-btn">To main page</button>
      </Link>
      <Form onSubmit={onSubmit} />
    </div>
  );
}
