import { FormEventHandler } from 'react';
import { FormFieldsInterface } from '../../types/types';
import './Form.css';

type FormFields = {
  name: HTMLInputElement;
  age: HTMLInputElement;
  female: HTMLInputElement;
  male: HTMLInputElement;
  country: HTMLInputElement;
  image: HTMLInputElement;
  email: HTMLInputElement;
  password1: HTMLInputElement;
  password2: HTMLInputElement;
  rules: HTMLInputElement;
};

interface FormPropsInterface {
  onSubmit: (data: FormFieldsInterface) => void;
}

export function Form({ onSubmit }: FormPropsInterface) {
  const handleSubmit: FormEventHandler<HTMLFormElement & FormFields> = (
    event
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    const {
      name,
      age,
      female,
      male,
      country,
      image,
      email,
      password1,
      password2,
      rules,
    } = form;

    onSubmit({
      name: name.value,
      age: age.value,
      female: female.checked,
      male: male.checked,
      country: country.value,
      image: image.value,
      email: email.value,
      password1: password1.value,
      password2: password2.value,
      rules: rules.checked,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label">
        Name
        <input className="form-input" name="name" type="text" required />
      </label>

      <label className="form-label">
        Age
        <input name="age" type="text" />
      </label>

      <label className="form-label">
        Gender Female <input name="female" type="radio" />
        Male <input name="male" type="radio" />
      </label>

      <label className="form-label">
        Country
        <input name="country" type="text" autoComplete="" />
      </label>

      <label className="form-label">
        Image
        <input name="image" />
      </label>

      <label className="form-label">
        e-mail
        <input name="email" />
      </label>

      <label className="form-label">
        Password
        <input name="password1" />
      </label>

      <label className="form-label">
        Repeat pass.
        <input name="password2" />
      </label>

      <label className="form-label">
        Rules
        <input name="rules" type="checkbox" />
      </label>

      <input type="reset" value={'Reset'} />

      <input type="submit" value={'Submit'} onClick={() => handleSubmit} />
    </form>
  );
}
