import { useAppDispatch } from '../../store/hooks';
import { handleCardsPerPage } from '../../store/appSlice';
import './PageSizeBtns.css';

export function PageSizeBtns() {
  const dispatch = useAppDispatch();

  // const [, setSearchParams] = useSearchParams();

  const cardsPerPage = [10, 20, 50];

  // function handleCardsQtyBtns(qty: number): void {
  //   localStorage.setItem('page', String(1));
  //   localStorage.setItem('cardsPerPage', String(qty));

  //   state.setPage(1);
  //   state.setPageSize(qty);

  //   setSearchParams({ search: context.searchValue, page: String(1) });

  //   getData(context.searchValue, context.page, qty);
  // }

  return (
    <div className="cards-qty-btns">
      <span className="cards-qty-title">Quantity per page:</span>
      {cardsPerPage.map((el) => (
        <button
          className="btn cards-qty-btn"
          key={el}
          onClick={() => dispatch(handleCardsPerPage(el))}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
