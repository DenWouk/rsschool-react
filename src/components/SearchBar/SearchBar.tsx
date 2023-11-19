import { ChangeEvent, SyntheticEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  handleSearch,
  onInputChange,
  onInputClear,
} from '../../redux/appSlice';
import './SearchBar.css';

export function SearchBar() {
  const state = useAppSelector((store) => store.app);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement | null>(null);

  function onInputFocus(): void {
    inputRef.current?.focus();
  }

  return (
    <form className="search-bar" data-testid="search-bar">
      <input
        className="search-bar-text"
        type="search"
        placeholder="Search..."
        autoFocus
        value={state.searchValue}
        ref={inputRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          dispatch(onInputChange(event.target.value))
        }
      />
      <input
        className="search-bar-cancel"
        data-testid="clear-button"
        readOnly
        type="button"
        style={{ backgroundImage: 'url(/cancel.svg)' }}
        onClick={(): void => {
          dispatch(onInputClear());
          onInputFocus();
        }}
      />
      <input
        className="search-bar-submit"
        readOnly
        type="submit"
        value=""
        style={{ backgroundImage: 'url(/search.svg)' }}
        onClick={(event: SyntheticEvent) => {
          event.preventDefault();
          dispatch(handleSearch());
        }}
      />
    </form>
  );
}
