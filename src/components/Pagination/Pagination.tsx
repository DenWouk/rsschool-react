import './Pagination.css';

interface PaginationProps {
  pageNumbersBtns: JSX.Element[];
}

export function Pagination(props: PaginationProps): JSX.Element {
  return <div className="pagination-container">{props.pageNumbersBtns}</div>;
}
