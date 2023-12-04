import { FormFieldsInterface } from '../../types/types';
import './FormDataCard.css';

export function FormDataCard(props: FormFieldsInterface) {
  return (
    <div className="form-data-card">
      <span className="data-card-item">Name: {props.name}/</span>
      <span className="data-card-item">Age: {props.age}/</span>
      <span className="data-card-item">Gen.: {props.gender}/</span>
      <span className="data-card-item">Ctry: {props.country}/</span>
      <span className="data-card-item">Email: {props.email}</span>
    </div>
  );
}
