import React from "react";
import { useState, useEffect } from "react";
import MoviesGallery from "../../components/MoviesList/MoviesList";
import { fetchTrendingMovies } from "../../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(({ results }) => setMovies(results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <MoviesGallery movies={movies} />
    </div>
  );
};

export default HomePage;
