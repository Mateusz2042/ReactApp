import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Main from './containers/Main';
import store from './store/configureStore';
import Router from './utils/Router';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
  , document.getElementById('root'),
);
