import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const array = ['First', 'Second', 'Third'];

const object = {
  First: 1,
  Second: 2,
  Third: 3,
};

ReactDOM.render(
  <section>
    <h1>Array</h1>
    <ul>{array.map(i => <li key={i}>{i}</li>)}</ul>
    <h1>Object</h1>
    <ul>
      {Object.keys(object).map(i => (
        <li key={i}>
          <strong>{i}: </strong>
          {object[i]}
        </li>
      ))}
    </ul>
  </section>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
