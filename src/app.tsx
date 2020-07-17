import React from 'react';

import AppBar from './components/app-bar';
import Jumbotron from './components/jumbotron';
import Movies from './components/movies';

const App: React.FunctionComponent = () => {
  return (
    <>
      <AppBar />
      <main>
        <Jumbotron />
        <Movies />
      </main>
    </>
  );
};

export default App;
