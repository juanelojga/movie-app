import { useQuery } from 'react-query';

import { searchMovies } from '../services/movie-api';

const useSearchMovies = (query: string) => {
  return useQuery(['search', query], searchMovies, { enabled: !!query });
};

export default useSearchMovies;
