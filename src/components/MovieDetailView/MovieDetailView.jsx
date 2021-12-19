import React from "react";
import { useState, useEffect } from "react";
// import s from "./MovieDetailView.module.css";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "../../services/api";

const MovieDetailView = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviesById(movieId)
      .then((results) => setMovie(results))
      .catch((error) => console.log(error));
  }, [movieId]);

  return <p>Информация о фильме</p>;
};

export default MovieDetailView;
