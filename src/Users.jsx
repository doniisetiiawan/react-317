import React from 'react';
import PropTypes from 'prop-types';

const Users = ({ users }) => (
  <ul>
    {users.map(i => <li key={i}>{i}</li>)}
  </ul>
);

Users.propTypes = {
  users: PropTypes.array,
};

Users.defaultProps = {
  users: [],
};

export default Users;
