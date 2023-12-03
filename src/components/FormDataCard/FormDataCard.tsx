import './FormDataCard.css';

interface FormDataProps {
  name: string;
  age: string;
}

export function FormDataCard(props: FormDataProps) {
  return (
    <div className="form-data-card">
      <span>{props.name}</span>
      <span>{props.age}</span>
    </div>
  );
}
