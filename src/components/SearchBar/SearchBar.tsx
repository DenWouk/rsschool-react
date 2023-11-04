import { Component, ChangeEvent, RefObject, createRef } from 'react';
import { PropsConstructor, Article } from '../../types/types';
import { getData } from '../../api/getData';
import { Card } from '../Card/Card';
import './SearchBar.css';

export class SearchBar extends Component<PropsConstructor> {
  inputRef: RefObject<HTMLInputElement>;

  state: {
    value: string;
    results: [];
  };

  constructor(props: PropsConstructor) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputClear = this.onInputClear.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.inputRef = createRef();

    this.state = {
      value: localStorage.getItem('value') ?? '',
      results: [],
    };
  }

  componentDidMount(): void {
    this.handleSearch();
  }

  componentDidUpdate(): void {
    localStorage.setItem('value', this.state.value);
  }

  onInputChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: event.target.value });
  }

  onInputClear(): void {
    this.setState({ value: '' });
    this.onInputFocus();
  }

  onInputFocus(): void {
    this.inputRef.current?.focus();
  }

  async handleSearch() {
    const data = this.state.value
      ? await getData(this.state.value.trim())
      : await getData('NASA');

    this.setState({
      results: data.articles,
    });
  }

  render(): JSX.Element {
    const data: Article[] = this.state.results;

    return (
      <>
        <form className="search-bar">
          <input
            className="search-bar-text"
            type="text"
            placeholder="Search..."
            autoFocus
            onChange={this.onInputChange}
            value={this.state.value}
            ref={this.inputRef}
          />
          <input
            className="search-bar-cancel"
            readOnly
            type="button"
            style={{ backgroundImage: 'url(/cancel.svg)' }}
            onClick={this.onInputClear}
          />
          <input
            className="search-bar-submit"
            readOnly
            type="submit"
            value=""
            style={{ backgroundImage: 'url(/search.svg)' }}
            onClick={this.handleSearch}
          />
        </form>
        <div className="cards">
          {data.length ? (
            data.map((el) => <Card {...el} key={el.title} />)
          ) : (
            <div className="no-data-message">
              Sorry, no data. Try changing the request...
            </div>
          )}
        </div>
      </>
    );
  }
}
