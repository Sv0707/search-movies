import React from "react";
import { useState, useEffect } from "react";
import { fetchMovieCast } from "../../services/api";
import defaultImage from "../../images/defaultImage.jpg";
import s from "../Cast/Cast.module.css";

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(({ cast }) => setCast(cast))
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <div>
      {cast?.length > 0 ? (
        <ul className={s.list}>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id} className={s.item}>
                <img
                  className={s.image}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : defaultImage
                  }
                  alt={name}
                />
                <p className={s.name}>{name}</p>
                <p className={s.name}>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any Cast info for this movie.</p>
      )}
    </div>
  );
};

export default Cast;
