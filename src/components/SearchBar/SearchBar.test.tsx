import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  test('renders without error', () => {
    render(<SearchBar />);

    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText('Search');

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput.nodeValue).toBe('test');
  });

  test('clears input value', () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText('Search');

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(screen.getByTestId('clear-button'));

    expect(searchInput.nodeValue).toBe('');
  });

  test('focuses on input', () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText('Search');

    fireEvent.click(screen.getByTestId('focus-button'));

    expect(document.activeElement).toBe(searchInput);
  });
});
