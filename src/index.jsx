import React from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './MyComponent';

ReactDOM.render(
  <section>
    <MyComponent
      myArray={['first', 'second', 'third']}
      myNumber={99}
    />

    <MyComponent myArray={[]} myNumber={100} />
  </section>,
  document.getElementById('root'),
);
