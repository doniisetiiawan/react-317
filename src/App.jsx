import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import UsersHeader from './users/UsersHeader';
import UsersMain from './users/UsersMain';
import GroupsHeader from './groups/GroupsHeader';
import GroupsMain from './groups/GroupsMain';

const App = () => (
  <BrowserRouter>
    <section>
      <nav>
        <NavLink
          exact
          to="/"
          style={{ padding: '0 10px' }}
          activeStyle={{ fontWeight: 'bold' }}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/users"
          style={{ padding: '0 10px' }}
          activeStyle={{ fontWeight: 'bold' }}
        >
          Users
        </NavLink>
        <NavLink
          exact
          to="/groups"
          style={{ padding: '0 10px' }}
          activeStyle={{ fontWeight: 'bold' }}
        >
          Groups
        </NavLink>
        <header>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/users" component={UsersHeader} />
          <Route exact path="/groups" component={GroupsHeader} />
        </header>
        <main>
          <Route exact path="/users" component={UsersMain} />
          <Route exact path="/groups" component={GroupsMain} />
        </main>
      </nav>
    </section>
  </BrowserRouter>
);

export default App;
