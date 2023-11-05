import { Link } from 'react-router-dom';
import './Page404.css';

export function Page404(): JSX.Element {
  return (
    <>
      <Link to="/">Main page</Link>
      <h2>404 Page not found...</h2>
    </>
  );
}
