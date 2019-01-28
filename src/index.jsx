/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';

import MyList from './MyList';

function render() {
  const myList = ReactDOM.render(
    <MyList />,
    document.getElementById('root'),
  );

  myList.data = myList.data.setIn([
    'items',
    0,
  ], 0);
}

for (let i = 0; i < 100; i += 1) {
  render();
}
