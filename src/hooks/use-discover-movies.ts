import { useQuery } from 'react-query';

import { discoverMovies } from '../services/movie-api';

const useDiscoverMovies = () => {
  return useQuery('discover', discoverMovies);
};

export default useDiscoverMovies;
