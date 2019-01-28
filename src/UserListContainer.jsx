import React, { Component } from 'react';
import { fromJS } from 'immutable';
import ReactDOM from 'react-dom';

import { users } from './api';
import UserList from './UserList';

const onClickCancel = (e) => {
  e.preventDefault();

  ReactDOM.render(<p>Cancelled</p>, document.getElementById('root'));
};

class UserListContainer extends Component {
  state = {
    data: fromJS({
      error: null,
      loading: 'loading...',
      users: [],
    }),
  };

  componentDidMount() {
    this.job = users();

    this.job.then(
      (result) => {
        this.data = this.data
          .set('loading', null)
          .set('error', null)
          .set('users', fromJS(result.users));
      },
      (error) => {
        if (!error.cancelled) {
          this.data = this.data
            .set('loading', null)
            .set('error', error);
        }
      },
    );
  }

  componentWillUnmount() {
    this.job.cancel();
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
      <UserList onClickCancel={onClickCancel} {...this.data.toJS()} />
    );
  }
}

export default UserListContainer;
