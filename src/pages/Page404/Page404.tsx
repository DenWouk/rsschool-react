import { Link } from 'react-router-dom';
import './Page404.css';

export function Page404(): JSX.Element {
  return (
    <>
      <Link className="btn error-page-btn" to="/">
        <h3>Go to main page</h3>
      </Link>
      <h2>404 Page not found...</h2>
    </>
  );
}
