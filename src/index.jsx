import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Echo from './Echo';

ReactDOM.render(
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" render={() => <App />} />
      <Route
        exact
        path="/echo/:msg?"
        render={() => (
          <App>
            <Echo />
          </App>
        )}
      />
    </Fragment>
  </BrowserRouter>,
  document.getElementById('root'),
);
