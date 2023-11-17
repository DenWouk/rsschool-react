import { Pagination } from '../../components/Pagination/Pagination';
import { CardsList } from '../../components/CardsList/CardsList';
import { PageSizeBtns } from '../../components/PageSizeBtns/PageSizeBtns';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import './MainPage.css';

export function MainPage(): JSX.Element {
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
