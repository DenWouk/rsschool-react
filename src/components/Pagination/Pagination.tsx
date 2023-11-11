import { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../../api/getData';
import { AppContext } from '../../store/appContext';
import './Pagination.css';

export function Pagination(): JSX.Element {
  const context = useContext(AppContext);

  const [, setSearchParams] = useSearchParams();

  useEffect((): void => {
    handlePagination(context.page);
  }, [context.page]);

  const limitResults = 100;
  const pages = [...Array(limitResults / context.pageSize).keys()];

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

  async function handlePagination(btnNumber: number): Promise<void> {
    localStorage.setItem('page', String(btnNumber));

    context.setPage(btnNumber);
    setSearchParams({
      search: context.searchValue,
      page: String(context.page),
    });

    displayArticles();
  }

  return (
    <div className="pagination-container">
      {pages.map((el) => (
        <button
          className="btn pagination-btn"
          key={el + 1}
          onClick={(): void => {
            handlePagination(el + 1);
          }}
        >
          {el + 1}
        </button>
      ))}
    </div>
  );
}
