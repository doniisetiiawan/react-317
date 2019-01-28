/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';

import MyUser from './MyUser';

const myUser = ReactDOM.render(
  <MyUser />,
  document.getElementById('root'),
);

myUser.setState({
  modified: new Date(),
  first: 'first1',
  last: 'last1',
});

myUser.setState({
  first: 'First2',
  last: 'Last2',
});
