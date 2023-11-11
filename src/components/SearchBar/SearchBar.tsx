import { ChangeEvent, useContext, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../../api/getData';
import { AppContext } from '../../store/appContext';
import './SearchBar.css';

export function SearchBar() {
  const context = useContext(AppContext);

  const [, setSearchParams] = useSearchParams();

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    displayArticles();
  }, [context.page, context.pageSize]);

  function onInputChange(event: ChangeEvent<HTMLInputElement>): void {
    context.setSearchValue(event.target.value);
  }

  function onInputClear(): void {
    context.setSearchValue('');
    localStorage.setItem('searchValue', '');

    onInputFocus();
  }

  function onInputFocus(): void {
    inputRef.current?.focus();
  }

  async function displayArticles(): Promise<void> {
    context.searchValue
      ? context.setArticles([
          ...(await getData(
            context.searchValue,
            context.page,
            context.pageSize
          )),
        ])
      : context.setArticles([
          ...(await getData('news', context.page, context.pageSize)),
        ]);
  }

  function handleSearch(): void {
    localStorage.setItem('page', String(1));
    localStorage.setItem('searchValue', context.searchValue);

    context.setPage(1);
    setSearchParams({ search: context.searchValue, page: String(1) });

    displayArticles();
  }

  return (
    <form className="search-bar">
      <input
        className="search-bar-text"
        type="text"
        placeholder="Search..."
        autoFocus
        onChange={onInputChange}
        value={context.searchValue}
        ref={inputRef}
      />
      <input
        className="search-bar-cancel"
        readOnly
        type="button"
        style={{ backgroundImage: 'url(/cancel.svg)' }}
        onClick={onInputClear}
      />
      <input
        className="search-bar-submit"
        readOnly
        type="submit"
        value=""
        style={{ backgroundImage: 'url(/search.svg)' }}
        onClick={handleSearch}
      />
    </form>
  );
}
