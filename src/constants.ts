const { REACT_APP_MOVIE_DB_API_TOKEN } = process.env;

export const MOVIE_DISCOVER_URL = '/discover/movie';
export const SEARCH_MOVIES_URL = '/search/movie';
export const MOVIE_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const MOVIE_NO_IMAGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

export const MOVIE_API_CONFIG = {
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 5000,
  headers: { Authorization: `Bearer ${REACT_APP_MOVIE_DB_API_TOKEN}` }
};
