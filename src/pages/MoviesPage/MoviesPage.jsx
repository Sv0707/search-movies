import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import s from "./MoviesPage.module.css";
import { fetchSearchMovies } from "../../services/api";
import SearchMovies from "../../components/SearchMovies/SearchMovies";
import MoviesList from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (query === "") return;
    else {
      fetchSearchMovies(query)
        .then(({ results }) => setMovies(results))
        .catch((error) => console.log(error));
    }
  }, [query]);

  return (
    <div className={s.searchFormBlock}>
      <SearchMovies />
      {movies && location.search !== "" && <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
