import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './MyComponent';

ReactDOM.render(
  <section>
    <MyComponent level={10} user={{ name: 'Name', age: 32 }} />

    <MyComponent user={{ name: 'Name', age: 32, online: false }} />

    <MyComponent level={11} user={{ name: 'Name', age: '32' }} />
  </section>,
  document.getElementById('root'),
);
