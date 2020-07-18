const { REACT_APP_MOVIE_DB_API_TOKEN } = process.env;

export const MOVIE_DISCOVER_URL = '/discover/movie';
export const SEARCH_MOVIES_URL = '/search/movie';

export const AXIOS_CONFIG = {
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 5000,
  headers: { Authorization: `Bearer ${REACT_APP_MOVIE_DB_API_TOKEN}` }
};
