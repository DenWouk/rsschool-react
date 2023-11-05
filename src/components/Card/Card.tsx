import { Article } from '../../types/types';
import './Card.css';

interface CardProps {
  openCard(): void;
}

export function Card(props: Article & CardProps): JSX.Element {
  return (
    <div className="card" onClick={props.openCard}>
      <object
        className="card-img"
        data={props.urlToImage}
        data-testid="poster-path"
      >
        No image
      </object>

      <div className="card-text">
        <p className="card-title">{props.title}</p>

        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
