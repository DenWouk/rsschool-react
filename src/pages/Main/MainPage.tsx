import { Component } from 'react';
import { ErrorBoundaryBtn } from '../../components/ErrorBoundaryBtn/ErrorBoundaryBtn';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import './MainPage.css';

export class MainPage extends Component {
  render(): JSX.Element {
    return (
      <>
        <ErrorBoundaryBtn />
        <SearchBar />
      </>
    );
  }
}
