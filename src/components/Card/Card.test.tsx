import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { articlesMockData } from '../../tests/testsMockData';
import { Card } from './Card';

describe('Card', () => {
  test('should render the card', () => {
    render(<Card {...articlesMockData[0]} {...{ openCard() {} }} />);

    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  test('render the card component with given props', () => {
    render(<Card {...articlesMockData[0]} {...{ openCard() {} }} />);

    expect(screen.getByText(articlesMockData[0].title)).toBeInTheDocument();
    expect(
      screen.getByText(articlesMockData[0].description)
    ).toBeInTheDocument();
  });

  //   test('calls openCard function when card is clicked', () => {
  //     render(<Card {...articlesMockData[0]} {...{ openCard() {} }} />);

  //     screen.getByRole('article').click();

  //     expect().toHaveBeenCalledTimes(1);
  //   });
});
