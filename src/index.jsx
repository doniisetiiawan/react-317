import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import MyComponent from './MyComponent';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={MyComponent} />
  </BrowserRouter>,
  document.getElementById('root'),
);
