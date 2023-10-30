import { Component, ChangeEvent, RefObject, createRef } from 'react';
import { PropsConstructor, SearchFilmsResults } from '../../types/types';
import { getData } from '../../utils/getData';
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
    localStorage.setItem('value', this.state.value);
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
    const data = await getData(this.state.value.trim());

    this.setState({
      results: data.results,
    });
  }

  render(): JSX.Element {
    const data: SearchFilmsResults[] = this.state.results;

    return (
      <>
        <form className="search-bar">
          <input
            className="search-bar__text"
            type="text"
            placeholder="Search..."
            autoFocus
            onChange={this.onInputChange}
            value={this.state.value}
            ref={this.inputRef}
          />
          <input
            className="search-bar__cancel"
            readOnly
            style={{ backgroundImage: 'url(/cancel.svg)' }}
            onClick={this.onInputClear}
          />
          <input
            className="search-bar__submit"
            readOnly
            style={{ backgroundImage: 'url(/search.svg)' }}
            onClick={this.handleSearch}
          />
        </form>
        <div className="cards">
          {data.map((el, i) => (
            <Card {...el} key={i} />
          ))}
        </div>
      </>
    );
  }
}
