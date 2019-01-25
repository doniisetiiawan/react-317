import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyButton extends Component {
  static defaultProps = {
    children: null,
  };

  static propTypes = {
    children: PropTypes.node,
  };

  static onClick() {
    console.log('clicked');
  }

  render() {
    const { children } = this.props;
    return (
      <button onClick={MyButton.onClick}>{children}</button>
    );
  }
}

export default MyButton;
