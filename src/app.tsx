import React from 'react';

import AppBar from './components/app-bar';
import Jumbotron from './components/jumbotron';
import Movies from './components/movies';
import useDiscoverMovies from './hooks/use-discover-movies';

const App: React.FunctionComponent = () => {
  const { data, isSuccess } = useDiscoverMovies();

  return (
    <>
      <AppBar />
      <main>
        <Jumbotron />
        {data && <Movies data={data} />}
      </main>
    </>
  );
};

export default App;
