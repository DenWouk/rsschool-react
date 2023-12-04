import { FormEventHandler, useState } from 'react';
import { FormFieldsInterface } from '../../types/types';
import { CountriesList } from '../CountriesList/CountriesList';
import './Form.css';

type FormFields = {
  name: HTMLInputElement;
  age: HTMLInputElement;
  gender: HTMLInputElement;
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
  const [image, setImage] = useState<string>('');
  const [, setImageFile] = useState<File>();

  const handleSubmit: FormEventHandler<HTMLFormElement & FormFields> = (
    event
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    const {
      name,
      age,
      gender,
      country,
      image,
      email,
      password1,
      password2,
      rules,
    } = form;

    onSubmit({
      name: name.value.charAt(0).toUpperCase() + name.value.slice(1),
      age: Math.abs(Number(age.value)),
      gender: gender.value,
      country: country.value,
      image: image.value,
      email: email.value,
      password1: password1.value,
      password2: password2.value,
      rules: rules.checked,
    });
  };

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0] instanceof File) {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label">
        Name
        <input
          className="form-input"
          name="name"
          type="text"
          autoFocus
          required
        />
      </label>

      <label className="form-label">
        Age
        <input className="form-input" name="age" type="number" required />
      </label>

      <label className="form-label">
        <span className="form-label-title">Gender</span>
        <div className="form-radio-btns">
          Female{' '}
          <input
            className="radio-btn"
            name="gender"
            type="radio"
            value="female"
            required
          />
          Male{' '}
          <input
            className="radio-btn"
            name="gender"
            type="radio"
            value="male"
            required
          />
        </div>
      </label>

      <label className="form-label">
        Country
        <input
          className="form-input"
          name="country"
          type="text"
          list="countries"
          autoComplete="off"
          required
        />
        <CountriesList />
      </label>

      <label className="form-label">
        Image
        <input
          name="image"
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={(event) => handleFile(event)}
        />
        {image && (
          <img className="form-image-preview" src={image} alt="image" />
        )}
      </label>

      <label className="form-label">
        Email
        <input className="form-input" name="email" type="email" required />
      </label>

      <label className="form-label">
        Password
        <input className="form-input" name="password1" required />
      </label>

      <label className="form-label">
        Password
        <input
          className="form-input"
          name="password2"
          placeholder="Confirm password"
          required
        />
      </label>

      <label className="form-label">
        I Agree to Privacy Policy
        <input
          className="form-checkbox"
          name="rules"
          type="checkbox"
          required
        />
      </label>

      <input
        className="form-submit-btn"
        type="submit"
        value={'Submit'}
        onClick={() => handleSubmit}
      />
    </form>
  );
}
