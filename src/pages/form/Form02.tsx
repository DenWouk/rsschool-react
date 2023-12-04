import { Link } from 'react-router-dom';
import './FormPages.css';

export function Form02() {
  return (
    <div className="form-container">
      <h3 className="page-title">React Hook Form</h3>

      <Link to={'/'}>
        <button className="btn form-page-btn">To main page</button>
      </Link>
    </div>
  );
}
