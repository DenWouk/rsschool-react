import { Card } from "../Card/Card";
import { ArticleInterface } from "@/types/types";
import "./CardsList.css";

interface CardsListProps {
  cards: ArticleInterface[] | undefined;
}

export function CardsList({ cards }: CardsListProps): JSX.Element {
  return (
    <div className="cards" data-testid="cards">
      {cards?.length ? (
        cards.map((el, i) => (
          <Card
            key={el.title + i}
            urlToImage={el.urlToImage}
            title={el.title}
            description={el.description}
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
