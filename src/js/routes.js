import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './containers/App';
import Base from './containers/Base.js';

function authenticate(nextState, replaceState) {
  /* do Authenticate
  ...
  replaceState(null, '/login);
  */
  replaceState('/');
}

export const history = hashHistory;

export default class Root extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Base} />
        </Route>
      </Router>
    );
  }
}
