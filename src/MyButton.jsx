import React, { Component } from 'react';
import PropTypes from 'prop-types';

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

class MyButton extends Component {
  static defaultProps = {
    children: null,
  };

  static propTypes = {
    children: PropTypes.node,
  };

  onClicks = (e) => {
    console.log('clicked', e.currentTarget.style);

    fetchData().then(() => {
      console.log('callback', e.currentTarget.style);
    });
  };

  render() {
    const { children } = this.props;
    return (
      <button type="button" onClick={this.onClicks}>{children}</button>
    );
  }
}

export default MyButton;
