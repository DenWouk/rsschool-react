import { Pagination } from '../../components/Pagination/Pagination';
import { CardsList } from '../../components/CardsList/CardsList';
import { PageSizeBtns } from '../../components/PageSizeBtns/PageSizeBtns';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import './MainPage.css';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';

export function MainPage(): JSX.Element {
  const state = useAppSelector((store) => store.app);

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      search: state.searchValue,
      limit: String(state.pageSize),
      page: String(state.page),
    });
  }, [state]);

  return (
    <>
      <div className="search-controls">
        <SearchBar />
        <PageSizeBtns />
        <Pagination />
      </div>

      <CardsList />
    </>
  );
}
