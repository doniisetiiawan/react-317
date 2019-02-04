import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import First from './First';
import Second from './Second';

const App = () => (
  <BrowserRouter>
    <section>
      <nav>
        <p>
          <Link to="first">First</Link>
        </p>
        <p>
          <Link to="second">Second</Link>
        </p>
      </nav>
      <section>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
      </section>
    </section>
  </BrowserRouter>
);

export default App;
