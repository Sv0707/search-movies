import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const KEY = 'd97e8b48bad78e14f6e3a90e7c0c0c71';
const PAGE = 1;

export const fetchTrendingMovies = async () => {

  const res = await axios
        .get(
            `${URL}/trending/movie/day?api_key=${KEY}&page=${PAGE}`);
    return res.data;
};

export const fetchMoviesById = async (id) => {

  const res = await axios
        .get(
            `${URL}/movie/${id}?api_key=${KEY}&language=en-US`);
    return res.data;
};

export const fetchSearchMovies = async (query) => {

  const res = await axios
        .get(
            `${URL}/search/movie?api_key=${KEY}&query=${query}&page=1&language=en-US`);
    return res.data;
};

export const fetchMovieReviews = async (id) => {

  const res = await axios
        .get(
            `${URL}/movie/${id}/reviews?api_key=${KEY}&page=${PAGE}`);
    return res.data;
};

export const fetchMovieCast = async (id) => {

  const res = await axios
        .get(
            `${URL}/movie/${id}/credits?api_key=${KEY}&page=${PAGE}`);
    return res.data;
};



