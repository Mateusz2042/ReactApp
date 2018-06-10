import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Main from './containers/Main';
import store from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
  , document.getElementById('root'),
);
