import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import UsersContainer from './UsersContainer';
import UserContainer from './UserContainer';

export default () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={UsersContainer} />
      <Route exact path="/users/:id" component={UserContainer} />
    </Fragment>
  </BrowserRouter>
);
