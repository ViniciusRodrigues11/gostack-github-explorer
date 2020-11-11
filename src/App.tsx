import React from 'react';

import CreateGlobalStyle from './styles/global';
import Routes from './routes/index'

function App() {
  return (
    <>
      <Routes />
      <CreateGlobalStyle />
    </>
  );
}

export default App;
