import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import GlobalSyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalSyle />
    </Router>
  );
}

export default App;
