import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

const users = [
  'user 1',
  'user 2',
];
const groups = [
  'group 1',
  'group 2',
];

ReactDOM.render(
  <section>
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>

    <ErrorBoundary>
      <MyComponent users={users} />
      <hr />
    </ErrorBoundary>

    <ErrorBoundary>
      <MyComponent groups={groups} />
      <hr />
    </ErrorBoundary>

    <ErrorBoundary>
      <MyComponent users={users} groups={groups} />
    </ErrorBoundary>

    <ErrorBoundary>
      <MyComponent users={0} groups={0} />
    </ErrorBoundary>
  </section>,
  document.getElementById('root'),
);
