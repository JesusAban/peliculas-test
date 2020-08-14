import React from 'react';
//Routes
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import routes from './routes';
//Redux
import { configureStore } from './store';
import { Provider as StoreProvider } from 'react-redux';
//Estilos
import './App.css';

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });
const store = configureStore();

function App() {

  return (
    <StoreProvider store={ store }>
      <Router history={history}>
        {renderRoutes(routes)}
      </Router>
    </StoreProvider>
  );
}

export default App;
