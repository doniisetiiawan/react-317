import React from 'react';
import ReactDOM from 'react-dom';

import cond from './cond';
import MyComponent from './MyComponent';

const ComposedVisible = cond(MyComponent, () => true);
const ComposedHidden = cond(MyComponent, () => false);

ReactDOM.render(
  <section>
    <h1>Visible</h1>
    <ComposedVisible />
    <h1>Hidden</h1>
    <ComposedHidden />
  </section>,
  document.getElementById('root'),
);
