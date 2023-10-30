import { Component } from 'react';
import { SearchFilmsResults } from '../../types/types';
// import './Card.css';

export class Card extends Component<SearchFilmsResults> {
  render() {
    const props = this.props;

    return (
      <div className="card">
        <object
          className="card__img"
          data={`https://image.tmdb.org/t/p/w200/${props.poster_path}`}
          data-testid="poster-path"
        >
          No Poster
        </object>
        <p className="card__title" data-testid="card-title">
          {props.title}
        </p>
        <p className="card__raiting" data-testid="card-raiting">
          Raiting: {props.vote_average}
        </p>
      </div>
    );
  }
}
