import React, { Component } from 'react';
import { fromJS } from 'immutable';

import Users from './Users';
import { fetchUsers } from './api';

class UsersContainer extends Component {
  state = {
    data: fromJS({
      users: [],
    }),
  };

  componentDidMount() {
    fetchUsers().then((users) => {
      this.data = this.data.set('users', users);
    });
  }

  get data() {
    const { data } = this.state;
    return data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    return (
      <Users {...this.data.toJS()} />
    );
  }
}

export default UsersContainer;
