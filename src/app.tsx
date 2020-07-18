import React, { useState } from 'react';
import { LinearProgress, Typography } from '@material-ui/core';

import AppBar from './components/app-bar';
import Header from './components/header';
import Movies from './components/movies';
import useDiscoverMovies from './hooks/use-discover-movies';
import useSearchMovies from './hooks/use-search-movies';

enum QueryStatus {
  LOADING = 'loading',
  ERROR = 'error'
}

const App: React.FunctionComponent = () => {
  const [query, setQuery] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const {
    data: discoverMoviesData,
    status: discoverMoviesStatus,
    error: discoverMoviesError
  } = useDiscoverMovies();

  const {
    data: searchMoviesData,
    status: searchMoviesStatus,
    error: searchMoviesError
  } = useSearchMovies(query);

  const showResults = () => {
    if (
      discoverMoviesStatus === QueryStatus.LOADING ||
      searchMoviesStatus === QueryStatus.LOADING
    ) {
      return <LinearProgress />;
    }

    if (
      discoverMoviesStatus === QueryStatus.ERROR ||
      searchMoviesStatus === QueryStatus.ERROR
    ) {
      return (
        <Typography component="h6" align="center" color="error">
          Error: {discoverMoviesError?.message || searchMoviesError?.message}
        </Typography>
      );
    }

    if (!query && discoverMoviesData) {
      return <Movies data={discoverMoviesData} ratingFilterValue={rating} />;
    }

    if (query && searchMoviesData) {
      return <Movies data={searchMoviesData} ratingFilterValue={rating} />;
    }

    return null;
  };

  return (
    <div>
      <AppBar />
      <main>
        <Header handleQueryMovies={setQuery} handleFilterByRating={setRating} />
        {showResults()}
      </main>
    </div>
  );
};

export default App;
