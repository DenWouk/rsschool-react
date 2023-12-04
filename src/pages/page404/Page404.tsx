import { Link } from 'react-router-dom';
import './Page404.css';

export function Page404() {
  return (
    <div>
      <h2>Page not found...</h2>
      <Link to={'/'}>
        <button className="btn 404-page-btn">To main page</button>
      </Link>
    </div>
  );
}
