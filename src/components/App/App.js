import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Appbar from "../Appbar/Appbar";
import Loader from "../Loader/Loader";
import "./App.css";


const App = () => {

  const HomePage = lazy(() => import ("../../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */));
  const MoviesDetailPage = lazy(() => import ("../../pages/MoviesDetailPage/MoviesDetailPage"/* webpackChunkName: "movies-detail-page" */));
  const MoviesPage = lazy(() => import ("../../pages/MoviesPage/MoviesPage"/* webpackChunkName: "movies-page" */));

  return (
    <div>
      <Appbar />
      <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
        <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
        <MoviesDetailPage />
        </Route>

        <Redirect to="/" />
      </Switch>
      </Suspense>
    </div>
  );
};

export default App;
