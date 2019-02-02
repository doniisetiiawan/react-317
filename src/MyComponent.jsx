import React from 'react';
import PropTypes from 'prop-types';

const levels = new Array(10).fill(null).map((v, i) => i + 1);

const userShape = {
  name: PropTypes.string,
  age: PropTypes.number,
};

const MyComponent = ({ level, user }) => (
  <section>
    <p>{level}</p>
    <p>{user.name}</p>
    <p>{user.age}</p>
  </section>
);

MyComponent.propTypes = {
  level: PropTypes.oneOf(levels).isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

export default MyComponent;
