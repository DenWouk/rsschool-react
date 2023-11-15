import { render } from '@testing-library/react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  test('should render the app', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
