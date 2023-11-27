import Link from "next/link";
import "./error-page.css";

export function Page404(): JSX.Element {
  return (
    <>
      <Link className="btn error-page-btn" href={"/"}>
        <h3>Go to main page</h3>
      </Link>
      <h2>404 Page not found...</h2>
    </>
  );
}
