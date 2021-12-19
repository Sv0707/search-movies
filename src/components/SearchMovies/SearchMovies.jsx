import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import s from "./SearchMovies.module.css";

const SearchMovies = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const location = useLocation();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({ ...location, search: `?query=${search}` });
    reset();
  };

  const reset = () => {
    setSearch("");
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <input
        className={s.SearchFormInput}
        type="text"
        value={search}
        onChange={handleInputChange}
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
        Search
      </button>
    </form>
  );
};

export default SearchMovies;
