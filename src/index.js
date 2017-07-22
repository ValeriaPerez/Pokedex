import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Pokedex from './app/containers/Pokedex';
import Valeria from './app/containers/Valeria';
import PokedexBuild from './app/containers/PokedexBuild';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';

import './app/styles/main.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Valeria}/>
      <Route path="/poke" component={PokedexBuild}/>
      <Route path="/pokedex" component={Pokedex}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
