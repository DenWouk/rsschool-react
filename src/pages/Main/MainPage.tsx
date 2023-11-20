import { Pagination } from '../../components/Pagination/Pagination';
import { CardsList } from '../../components/CardsList/CardsList';
import { PageSizeBtns } from '../../components/PageSizeBtns/PageSizeBtns';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import './MainPage.css';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import {
  setPageNumParam,
  setPageSizeParam,
  setSearchValueParam,
} from '../../redux/appSlice';
import { initialState } from '../../redux/appState';

export function MainPage(): JSX.Element {
  const state = useAppSelector((store) => store.app);

  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('q' || initialState.searchValue);
    const page = Number(searchParams.get('page' || initialState.page));
    // const pageSize = Number(searchParams.get('pageSize' || initialState.pageSize));

    dispatch(setSearchValueParam(query));
    dispatch(setPageNumParam(page));
    dispatch(setPageSizeParam(10));
  }, []);

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
