import { Link } from 'react-router-dom';
import './Form.css';

export function Form01() {
  return (
    <div>
      <h2>Form 01</h2>
      <Link to={'/'}>
        <button className="btn form-page-btn">To main page</button>
      </Link>
    </div>
  );
}
