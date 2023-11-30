import { Link } from 'react-router-dom';
import './Main.css';

export function Main() {
  return (
    <div className="main-page-container">
      <h2>Main Page</h2>
      <Link to={'uncontrolled-form'}>
        <button className="btn main-page-btn">Uncontrolled Form</button>
      </Link>
      <Link to={'react-hook-form'}>
        <button className="btn main-page-btn">React Hook Form</button>
      </Link>
    </div>
  );
}
