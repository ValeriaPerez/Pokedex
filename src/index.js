import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Pokedex from './app/containers/Pokedex';
import PokedexBuild from './app/containers/PokedexBuild';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';

import './app/styles/main.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={PokedexBuild}/>
      <Route path="/pokedex" component={Pokedex}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
