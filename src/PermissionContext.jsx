/* eslint-disable react/no-unused-state */
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = createContext('permissions');

export class PermissionProvider extends Component {
  static defaultProps = {
    children: null,
  };

  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    first: true,
    second: false,
    third: true,
  };

  render() {
    const { state } = this;
    const { children } = this.props;
    return (
      <Provider value={state}>{children}</Provider>
    );
  }
}

const PermissionConsumer = ({ name, children }) => (
  <Consumer>{value => value[name] && children}</Consumer>
);

PermissionConsumer.defaultProps = {
  children: null,
  name: 'first',
};

PermissionConsumer.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

export { PermissionConsumer };
