import React, { Component } from 'react';

import MyList from './MyList';

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['first', 'second', 'third']);
    }, 2000);
  });
}

class MyContainer extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetchData().then(items => this.setState({ items }));
  }

  render() {
    return <MyList {...this.state} />;
  }
}

export default MyContainer;
