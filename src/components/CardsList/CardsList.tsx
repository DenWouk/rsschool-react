import { Card } from '../Card/Card';
import './CardsList.css';
import { useAppSelector } from '../../store/hooks';

export function CardsList(): JSX.Element {
  const state = useAppSelector((store) => store.app);

  return (
    <div className="cards">
      {state.articles.length ? (
        state.articles.map((el, i) => (
          <Card
            {...el}
            key={el.title + i}
            openCard={() => console.log(el.author)}
          />
        ))
      ) : (
        <div className="no-data-message">
          Sorry, no data. Try changing the request...
        </div>
      )}
    </div>
  );
}
