import { Component } from 'react';
import { Article } from '../../types/types';
import './Card.css';

export class Card extends Component<Article> {
  render() {
    const props = this.props;

    return (
      <div className="card">
        <object
          className="card-img"
          data={props.urlToImage}
          data-testid="poster-path"
        >
          No image
        </object>

        <div className="card-text">
          <p className="card-title" data-testid="card-title">
            {props.title}
          </p>

          <p className="card-description" data-testid="card-description">
            {props.description}
          </p>
        </div>
      </div>
    );
  }
}
