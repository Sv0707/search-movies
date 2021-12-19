import React from "react";
import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../services/api";
import s from "./Reviews.module.css";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results))
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <div>
      {reviews?.length > 0 ? (
        <ul className={s.list}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className={s.item}>
                <p className={s.author}>Author: {author}</p>
                <p className={s.text}>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>'We don`t have any Reviews for this movie.'</p>
      )}
    </div>
  );
};

export default Reviews;
