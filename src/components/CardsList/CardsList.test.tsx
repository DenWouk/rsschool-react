import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardsList } from './CardsList';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

describe('CardsList', () => {
  test('should display the loader when data loading', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CardsList />
        </Provider>
      </MemoryRouter>
    );

    const loader = screen.getByText(/loading/i);
    expect(loader).toBeInTheDocument();
  });
});
