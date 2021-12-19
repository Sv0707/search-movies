import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MoviesList.module.css";
import defaultImage from "../../images/defaultImage.jpg";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies &&
        movies.map(({ id, poster_path, title }) => (
          <li className={s.item} key={id}>
            <Link
              className={s.link}
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              <img
                src={
                  poster_path
                    ? `https://www.themoviedb.org/t/p/original/${poster_path}`
                    : defaultImage
                }
                alt={title}
                className={s.image}
              />
              <p className={s.title}>{title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MoviesList;
