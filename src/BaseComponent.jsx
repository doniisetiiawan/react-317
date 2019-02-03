/* eslint-disable react/no-unused-prop-types,react/require-default-props,react/default-props-match-prop-types,react/prefer-stateless-function */
import { Component } from 'react';
import PropTypes from 'prop-types';

class BaseComponent extends Component {
  static defaultProps = {
    groups: [],
    users: [],
  };

  static propTypes = {
    groups: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
  };

  render() {
    return null;
  }
}

export default BaseComponent;
