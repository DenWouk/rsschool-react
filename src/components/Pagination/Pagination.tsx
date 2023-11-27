import './Pagination.css';

export function Pagination(): JSX.Element {

  const limitResults = 100;
  const pages = [...Array(limitResults / 10).keys()];

  return (
    <div className="pagination-container" data-testid="pagination">
      {pages.map((el) => (
        <button
          className="btn pagination-btn"
          data-testid={`pagination-btn${el + 1}`}
          key={el + 1}
          onClick={(): void => {
            // dispatch(handlePagination(el + 1));
          }}
        >
          {el + 1}
        </button>
      ))}
    </div>
  );
}
