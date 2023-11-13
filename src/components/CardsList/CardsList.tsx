import { useContext } from 'react';
import { AppContext, AppProvider } from '../../store/appContext';
import { Card } from '../Card/Card';
import './CardsList.css';

export function CardsList(): JSX.Element {
  const context = useContext(AppContext);

  return (
    <AppProvider value={context}>
      <div className="cards">
        {context?.articles.length ? (
          context.articles.map((el, i) => (
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
    </AppProvider>
  );
}
