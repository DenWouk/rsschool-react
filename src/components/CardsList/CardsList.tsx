import { Card } from '../Card/Card';
import { useAppSelector } from '../../redux/hooks';
import { useGetDataQuery } from '../../redux/dataApi';
import './CardsList.css';

export function CardsList(): JSX.Element {
  const state = useAppSelector((store) => store.app);
  const { data, isLoading } = useGetDataQuery({ ...state });

  if (isLoading) {
    return <h2 className="cards-loader">Loading...</h2>;
  }

  return (
    <div className="cards" data-testid="cards">
      {data?.articles.length ? (
        data?.articles.map((el, i) => (
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
