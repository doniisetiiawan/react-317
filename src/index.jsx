import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import MyList from './MyList';

const items = [
  { id: 0, name: 'First' },
  { id: 1, name: 'Second' },
  { id: 2, name: 'Third' },
];

ReactDOM.render(
  <MyList items={items} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
