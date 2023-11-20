import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('SearchBar', () => {
  test('renders without error', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });

  test('clears input value', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      </Provider>
    );

    const searchInput: HTMLInputElement =
      screen.getByPlaceholderText(/search/i);

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(screen.getByTestId('clear-button'));

    expect(searchInput.value).toBe('');
  });

  test('focuses on input', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(/search/i);

    fireEvent.click(screen.getByTestId('clear-button'));

    expect(document.activeElement).toBe(searchInput);
  });
});
