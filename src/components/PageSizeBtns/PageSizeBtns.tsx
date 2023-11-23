import { useAppDispatch } from '../../redux/hooks';
import { handleCardsPerPage } from '../../redux/appSlice';
import './PageSizeBtns.css';

export function PageSizeBtns() {
  const dispatch = useAppDispatch();

  const cardsPerPage = [10, 20, 50];

  return (
    <div className="cards-qty-btns" data-testid="page-size-btns">
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
