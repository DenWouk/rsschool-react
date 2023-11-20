import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  test('render pagination btns', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Pagination />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId('pagination-btn1')).toBeInTheDocument();
  });
});
