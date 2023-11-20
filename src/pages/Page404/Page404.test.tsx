import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page404 } from './Page404';

describe('NotFound Page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    );
  });

  test('The 404 page is displayed when navigating to an invalid route', () => {
    const text = screen.getByText(/404 Page not found/i);
    expect(text).toBeInTheDocument();
  });
});
