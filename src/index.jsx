import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './MyComponent';

ReactDOM.render(
  <section>
    <MyComponent label="Regular values" max={20} value={10} />

    <MyComponent label="String Values" max="20" value="10" />

    <MyComponent
      label={Number.MAX_SAFE_INTEGER}
      max={new Date()}
      value={10}
    />
  </section>,
  document.getElementById('root'),
);
