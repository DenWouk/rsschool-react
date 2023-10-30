import { Component, ReactNode } from 'react';
import './ErrorBoundaryBtn.css';

interface State {
  hasError: boolean;
}

export class ErrorBoundaryBtn extends Component {
  state: State = { hasError: false };

  callError(): void {
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      throw new Error();
    }
    return (
      <button className="error-boundary-btn" onClick={() => this.callError()}>
        Error Boundary Button
      </button>
    );
  }
}
