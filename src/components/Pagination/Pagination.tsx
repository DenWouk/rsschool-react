// import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { handlePagination } from '../../store/appSlice';
import './Pagination.css';

export function Pagination(): JSX.Element {
  const state = useAppSelector((store) => store.app);
  const dispatch = useAppDispatch();

  // const [, setSearchParams] = useSearchParams();

  const limitResults = 100;
  const pages = [...Array(limitResults / state.pageSize).keys()];

  // async function displayArticles(): Promise<void> {
  //   context.searchValue
  //     ? context.setArticles([
  //         ...(await getData(
  //           context.searchValue,
  //           context.page,
  //           context.pageSize
  //         )),
  //       ])
  //     : context.setArticles([
  //         ...(await getData('news', context.page, context.pageSize)),
  //       ]);
  // }

  // async function handlePagination(btnNumber: number): Promise<void> {
  //   localStorage.setItem('page', String(btnNumber));

  //   context.setPage(btnNumber);
  //   setSearchParams({
  //     search: context.searchValue,
  //     page: String(context.page),
  //   });

  //   displayArticles();
  // }

  return (
    <div className="pagination-container">
      {pages.map((el) => (
        <button
          className="btn pagination-btn"
          key={el + 1}
          onClick={(): void => {
            dispatch(handlePagination(el + 1));
          }}
        >
          {el + 1}
        </button>
      ))}
    </div>
  );
}
