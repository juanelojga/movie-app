import axios from 'axios';

import { SearchMovieResponse } from '../definitions.d';
import {
  MOVIE_DISCOVER_URL,
  SEARCH_MOVIES_URL,
  MOVIE_API_CONFIG
} from '../constants';

export const discoverMovies = async (): Promise<SearchMovieResponse> => {
  const { data } = await axios.get(MOVIE_DISCOVER_URL, MOVIE_API_CONFIG);
  return data;
};

export const searchMovies = async (
  _: unknown,
  query: string
): Promise<SearchMovieResponse> => {
  const { data } = await axios.get(SEARCH_MOVIES_URL, {
    ...MOVIE_API_CONFIG,
    params: { query }
  });
  return data;
};
