import { ChangeEvent, useState, useRef, useEffect } from 'react';
import { Article } from '../../types/types';
import { getData } from '../../api/getData';
import { Card } from '../Card/Card';
import './SearchBar.css';

export function SearchBar(): JSX.Element {
  const [value, setValue] = useState(
    localStorage.getItem('localStorageValue') ?? ''
  );
  const [articles, setArticles] = useState<Article[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect((): void => {
    handleSearch();
  }, []);

  function onInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
    localStorage.setItem('localStorageValue', event.target.value);
  }

  function onInputClear(): void {
    setValue('');
    localStorage.setItem('localStorageValue', '');

    onInputFocus();
  }

  function onInputFocus(): void {
    inputRef.current?.focus();
  }

  async function handleSearch() {
    const data = value ? await getData(value.trim()) : await getData('NASA');

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
          value={value}
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
      <div className="cards">
        {articles.length ? (
          articles.map((el) => <Card {...el} key={el.title} />)
        ) : (
          <div className="no-data-message">
            Sorry, no data. Try changing the request...
          </div>
        )}
      </div>
    </>
  );
}
