// import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { handlePagination } from '../../redux/appSlice';
import './Pagination.css';

export function Pagination(): JSX.Element {
  const state = useAppSelector((store) => store.app);
  const dispatch = useAppDispatch();

  const limitResults = 100;
  const pages = [...Array(limitResults / state.pageSize).keys()];

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
