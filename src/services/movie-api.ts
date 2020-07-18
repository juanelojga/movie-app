import axios from 'axios';

import { Movies } from '../definitions.d';
import {
  MOVIE_DISCOVER_URL,
  SEARCH_MOVIES_URL,
  AXIOS_CONFIG
} from '../constants';

export const discover = async (): Promise<Movies> => {
  const { data } = await axios.get(MOVIE_DISCOVER_URL, AXIOS_CONFIG);
  return data;
};

export const search = async (query: string): Promise<Movies> => {
  const { data } = await axios.get(SEARCH_MOVIES_URL, {
    ...AXIOS_CONFIG,
    params: { query }
  });
  return data;
};
