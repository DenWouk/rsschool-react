import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AppProvider } from '../../store/appContext';
import { CardsList } from './CardsList';

describe('CardsList', () => {
  test('should render a list of cards when there is data', () => {
    const articles = [
      {
        author: 'author1',
        content: 'content1',
        description: 'description1',
        publishetAt: 'publishetAt1',
        source: {
          id: null,
          name: 'name1',
        },
        title: 'title1',
        url: 'url1',
        urlToImage: 'urlToImage1',
      },
      {
        author: 'author2',
        content: 'content2',
        description: 'description2',
        publishetAt: 'publishetAt2',
        source: {
          id: null,
          name: 'name2',
        },
        title: 'title2',
        url: 'url2',
        urlToImage: 'urlToImage2',
      },
    ];

    const context = {
      searchValue: 'searchValue',
      setSearchValue: () => {},
      page: 1,
      setPage: () => {},
      pageSize: 10,
      setPageSize: () => {},
      articles: articles,
      setArticles: () => {},
    };

    render(
      <AppProvider value={context}>
        <CardsList />
      </AppProvider>
    );

    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(articles.length);
  });

  test('should display "Sorry, no data." when there is no data', () => {
    const articles = []!;

    const context = {
      searchValue: 'searchValue',
      setSearchValue: () => {},
      page: 1,
      setPage: () => {},
      pageSize: 10,
      setPageSize: () => {},
      articles: articles,
      setArticles: () => {},
    };

    render(
      <AppProvider value={context}>
        <CardsList />
      </AppProvider>
    );

    const errorMessage = screen.getByText(
      'Sorry, no data. Try changing the request...'
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
