import { Link } from 'react-router-dom';
import './FormPages.css';

export function Form02() {
  return (
    <div className="form-container">
      <h2>Form 02</h2>
      <Link to={'/'}>
        <button className="btn form-page-btn">To main page</button>
      </Link>
    </div>
  );
}
