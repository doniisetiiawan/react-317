import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import UsersContainer from './UsersContainer';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/users/:desc?" component={UsersContainer} />
  </BrowserRouter>,
  document.getElementById('root'),
);
