import React, { Fragment } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import One from './one';
import Two from './two';

export default () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" render={() => <Redirect to="one" />} />
      <One />
      <Two />
    </Fragment>
  </BrowserRouter>
);
