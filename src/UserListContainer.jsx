import React, { Component } from 'react';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';

import { users } from './api';
import UserList from './UserList';

class UserListContainer extends Component {
  static defaultProps = {
    loading: 'loading...',
  };

  static propTypes = {
    loading: PropTypes.string,
  };

  state = {
    data: fromJS({
      error: null,
      users: [],
    }),
  };

  componentDidMount() {
    users().then(
      (result) => {
        this.data = this.data
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

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
      data: prevState.data.set(
        'loading',
        prevState.data.get('users').size === 0 ? nextProps.loading : null,
      ),
    };
  }

  render() {
    return (
      <UserList {...this.data.toJS()} />
    );
  }
}

export default UserListContainer;
