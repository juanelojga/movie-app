import React from 'react';

import AppBar from './components/app-bar';
import Jumbotron from './components/jumbotron';

const App: React.FunctionComponent = () => {
  return (
    <>
      <AppBar />
      <main>
        <Jumbotron />
      </main>
    </>
  );
};

export default App;
