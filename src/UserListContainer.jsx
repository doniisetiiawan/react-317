import React, { Component } from 'react';
import { fromJS } from 'immutable';

import { users } from './api';
import UserList from './UserList';

class UserListContainer extends Component {
  state = {
    data: fromJS({
      error: null,
      loading: 'loading...',
      users: [],
    }),
  };

  componentDidMount() {
    users().then(
      (result) => {
        this.data = this.data
          .set('loading', null)
          .set('error', null)
          .set('users', fromJS(result.users));
      },
      (error) => {
        this.data = this.data
          .set('loading', null)
          .set('error', error);
      },
    );
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
      <UserList {...this.data.toJS()} />
    );
  }
}

export default UserListContainer;
