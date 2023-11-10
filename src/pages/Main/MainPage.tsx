import { useState } from 'react';
import { ArticleInterface } from '../../types/types';
import { Pagination } from '../../components/Pagination/Pagination';
import { CardsList } from '../../components/CardsList/CardsList';
import { AppProvider } from '../../store/appContext';
import { PageSizeBtns } from '../../components/PageSizeBtns/PageSizeBtns';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import './MainPage.css';

export function MainPage(): JSX.Element {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('localStorageSearchValue') || ''
  );

  const [page, setPage] = useState(
    Number(localStorage.getItem('localStoragePage')) || 1
  );

  const [pageSize, setPageSize] = useState(
    Number(localStorage.getItem('localStorageCardsCardsPerPage')) || 10
  );

  const [articles, setArticles] = useState<ArticleInterface[]>([]);

  return (
    <AppProvider
      value={{
        searchValue,
        setSearchValue,
        page,
        setPage,
        pageSize,
        setPageSize,
        articles,
        setArticles,
      }}
    >
      <div className="search-controls">
        <SearchBar />
        <PageSizeBtns />
        <Pagination />
      </div>

      <CardsList />
    </AppProvider>
  );
}
