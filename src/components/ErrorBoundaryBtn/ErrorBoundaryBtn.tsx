import { useState } from 'react';
import './ErrorBoundaryBtn.css';

export function ErrorBoundaryBtn(): JSX.Element {
  const [error, setError] = useState(false);

  function callError(): void {
    setError(true);
  }

  if (error) {
    throw new Error();
  }

  return (
    <button className="error-boundary-btn" onClick={(): void => callError()}>
      Error Boundary Button
    </button>
  );
}
