import React from "react";
import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import s from "./MoviesDetailPage.module.css";
import {
  useParams,
  NavLink,
  useRouteMatch,
  useLocation,
  Route,
  useHistory,
} from "react-router-dom";
import { fetchMoviesById } from "../../services/api";

const MoviesDetailPage = () => {
  const Reviews = lazy(() =>
    import("../../components/Reviews/Reviews" /* webpackChunkName: "reviews" */)
  );

  const Cast = lazy(() =>
    import("../../components/Cast/Cast" /* webpackChunkName: "cast" */)
  );

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  useEffect(() => {
    fetchMoviesById(movieId)
      .then(setMovie)
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <>
      <button type="button" className={s.button} onClick={onGoBack}>
        Go back
      </button>
      {movie && (
        <>
          <div className={s.movieBlock}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className={s.poster}
            />
            <div className={s.descriptionBlock}>
              <h2 className={s.title}>{movie.title}</h2>
              <p>Vote_average: {movie.vote_average}</p>
              <h3 className={s.title}>Overview</h3>
              <p>{movie.overview}</p>
              <h3 className={s.title}>Genres</h3>
              <p>
                {movie.genres.map((genre) => (
                  <span key={genre.id} className={s.genres}>
                    {genre.name}
                  </span>
                ))}
              </p>
              <hr />
            </div>
          </div>
          <div>
            <div className={s.infoBlock}>
              <h3 className={s.info}>Additional Information</h3>
              <NavLink
                to={{
                  pathname: url + "/cast",
                  state: { ...location.state, id: movie.Id },
                }}
                className={s.link}
                activeClassName={s.linkActive}
              >
                Cast
              </NavLink>

              <NavLink
                to={{
                  pathname: url + "/reviews",
                  state: { ...location.state, id: movie.Id },
                }}
                className={s.link}
                activeClassName={s.linkActive}
              >
                Reviews
              </NavLink>
            </div>
            <hr />
            <Suspense fallback={<h2>Loading...</h2>}>
              <Route path="/movies/:movieId/cast">
                <Cast movieId={movieId} />
              </Route>
              <Route path="/movies/:movieId/reviews">
                <Reviews movieId={movieId} />
              </Route>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};

export default MoviesDetailPage;
