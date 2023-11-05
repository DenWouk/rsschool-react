import { ChangeEvent, useState, useRef, useEffect } from 'react';
import { Article } from '../../types/types';
import { getData } from '../../api/getData';
import { Card } from '../../components/Card/Card';
import { Pagination } from '../../components/Pagination/Pagination';
import './MainPage.css';

export function MainPage(): JSX.Element {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('localStorageValue') ?? ''
  );
  const [page, setPage] = useState(
    Number(localStorage.getItem('localStoragePage')) || 1
  );
  const [pageSize, setPageSize] = useState(
    Number(localStorage.getItem('localStorageCardsQty')) || 10
  );
  const [articles, setArticles] = useState<Article[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect((): void => {
    handleSearch();
  }, [page, pageSize]);

  const cardsQty = [10, 20, 50];
  const pages: number[] = [...Array(100 / pageSize).keys()];

  function onInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
    localStorage.setItem('localStorageValue', event.target.value);
  }

  function onInputClear(): void {
    setSearchValue('');
    localStorage.setItem('localStorageValue', '');

    onInputFocus();
  }

  function onInputFocus(): void {
    inputRef.current?.focus();
  }

  function handleCardsQtyBtns(qty: number): void {
    setPageSize(qty);
    localStorage.setItem('localStorageCardsQty', String(qty));

    handleSearch();
  }

  function handlePagination(btnNumber: number): void {
    setPage(btnNumber);
    localStorage.setItem('localStoragePage', String(btnNumber));

    handleSearch();
  }

  async function handleSearch(): Promise<void> {
    const data = searchValue
      ? await getData(searchValue.trim(), page, pageSize)
      : await getData('NASA', page, pageSize);

    setArticles([...data.articles]);
  }

  return (
    <>
      <form className="search-bar">
        <input
          className="search-bar-text"
          type="text"
          placeholder="Search..."
          autoFocus
          onChange={onInputChange}
          value={searchValue}
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

      <div className="cards-qty-btns">
        {cardsQty.map((el) => (
          <button
            className="cards-qty-btn"
            key={el}
            onClick={(): void => handleCardsQtyBtns(el)}
          >
            {el}
          </button>
        ))}
      </div>

      <Pagination
        pageNumbersBtns={pages.map((el) => (
          <button
            className="pagination-btn"
            key={el + 1}
            onClick={(): void => handlePagination(el + 1)}
          >
            {el + 1}
          </button>
        ))}
      />

      <div className="cards">
        {articles.length ? (
          articles.map((el) => (
            <Card
              {...el}
              key={el.title}
              openCard={() => console.log(el.author)}
            />
          ))
        ) : (
          <div className="no-data-message">
            Sorry, no data. Try changing the request...
          </div>
        )}
      </div>
    </>
  );
}
