import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalSyle from './styles/global';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalSyle />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
