import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { BrowserRouter } from 'react-router-dom';

describe('SearchBar', () => {
  test('renders without error', () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );

    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });

  // test('handles input change', () => {
  //   render(
  //     <BrowserRouter>
  //       <SearchBar />
  //     </BrowserRouter>
  //   );

  //   const searchInput: HTMLInputElement =
  //     screen.getByPlaceholderText(/search/i);

  //   fireEvent.change(searchInput, { target: { value: 'test' } });
  //   expect(searchInput.value).toBe('test');
  // });

  test('clears input value', () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );

    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/search/i);

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(screen.getByTestId('clear-button'));

    expect(searchInput.value).toBe('');
  });

  test('focuses on input', () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText(/search/i);

    fireEvent.click(screen.getByTestId('clear-button'));

    expect(document.activeElement).toBe(searchInput);
  });
});
