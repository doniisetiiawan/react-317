import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyButton extends Component {
  static defaultProps = {
    children: null,
  };

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <button onClick={() => console.log('clicked')}>{children}</button>
    );
  }
}

export default MyButton;
