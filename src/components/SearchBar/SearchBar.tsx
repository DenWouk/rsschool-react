import { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import { useRouter } from "next/router";
import "./SearchBar.css";

export function SearchBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [searchValue, setSearchValue] = useState(router.query.search || "");

  function handleSearch() {
    const searchValue = inputRef.current?.value
      ? inputRef.current.value
      : "news";

    if (inputRef.current) {
      router.push({
        query: {
          search: searchValue,
          limit: router.query.limit || "10",
          page: "1",
        },
      });
    }
  }

  function onInputFocus(): void {
    inputRef.current?.focus();
  }

  function onInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
  }

  function onInputClear(): void {
    setSearchValue("");
    onInputFocus();
  }

  return (
    <form className="search-bar" data-testid="search-bar">
      <input
        className="search-bar-text"
        type="search"
        placeholder="Search..."
        autoFocus
        value={searchValue}
        ref={inputRef}
        onChange={onInputChange}
      />
      <input
        className="search-bar-cancel"
        data-testid="clear-button"
        readOnly
        type="button"
        style={{ backgroundImage: "url(/cancel.svg)" }}
        onClick={onInputClear}
      />
      <input
        className="search-bar-submit"
        readOnly
        type="submit"
        value=""
        style={{ backgroundImage: "url(/search.svg)" }}
        onClick={(event: SyntheticEvent) => {
          event.preventDefault();
          handleSearch();
        }}
      />
    </form>
  );
}
