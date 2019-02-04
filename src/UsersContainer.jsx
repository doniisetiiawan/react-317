import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { fromJS } from 'immutable';

import Users from './Users';
import { fetchUsers } from './api';

class UsersContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  state = {
    data: fromJS({
      users: [],
    }),
  };

  componentDidMount() {
    const { match: { params }, location: { search } } = this.props;

    const desc = params.desc === 'desc'
      || !!new URLSearchParams(search).get('desc');

    fetchUsers(desc).then((users) => {
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
