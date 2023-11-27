import { useRouter } from "next/router";
import "./Pagination.css";

export function Pagination(): JSX.Element {
  const router = useRouter();
  const pageSize = router.query.limit || "10";

  const limitResults = 100;
  const pages = [...Array(limitResults / Number(pageSize)).keys()];

  function handlePagination(value: string) {
    router.push({
      query: {
        search: router.query.search || "news",
        limit: pageSize,
        page: value,
      },
    });
  }

  return (
    <div className="pagination-container" data-testid="pagination">
      {pages.map((el) => (
        <button
          className="btn pagination-btn"
          data-testid={`pagination-btn${el + 1}`}
          key={el + 1}
          onClick={() => handlePagination(String(el + 1))}
        >
          {el + 1}
        </button>
      ))}
    </div>
  );
}
