import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getData } from '../../api/getData';
import { AppContext } from '../../store/appContext';
import './PageSizeBtns.css';

export function PageSizeBtns() {
  const context = useContext(AppContext);
  const [, setSearchParams] = useSearchParams();

  const cardsPerPage = [10, 20, 50];

  function handleCardsQtyBtns(qty: number): void {
    localStorage.setItem('localStoragePage', String(1));
    localStorage.setItem('localStorageCardsCardsPerPage', String(qty));

    context.setPage(1);
    context.setPageSize(qty);

    setSearchParams({ search: context.searchValue, page: String(1) });

    getData(context.searchValue, context.page, qty);
  }
  return (
    <div className="cards-qty-btns">
      <span className="cards-qty-title">Quantity per page:</span>
      {cardsPerPage.map((el) => (
        <button
          className="btn cards-qty-btn"
          key={el}
          onClick={(): void => handleCardsQtyBtns(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
