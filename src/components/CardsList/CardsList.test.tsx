import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AppProvider } from '../../redux/appContext';
import { CardsList } from './CardsList';
import {
  articlesMockData,
  contextEmptyMockData,
  contextMockData,
} from '../../tests/testsMockData';

describe('CardsList', () => {
  test('should render a list of cards when there is data', () => {
    render(
      <AppProvider value={contextMockData}>
        <CardsList />
      </AppProvider>
    );

    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(articlesMockData.length);
  });

  test('should display "Sorry, no data." when there is no data', () => {
    render(
      <AppProvider value={contextEmptyMockData}>
        <CardsList />
      </AppProvider>
    );

    const errorMessage = screen.getByText(
      'Sorry, no data. Try changing the request...'
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
