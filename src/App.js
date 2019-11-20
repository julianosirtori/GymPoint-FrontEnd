import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalSyle from './styles/global';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalSyle />
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
