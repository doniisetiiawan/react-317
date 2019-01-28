import React, { Component } from 'react';
import { fromJS } from 'immutable';

class MyList extends Component {
  state = {
    data: fromJS({
      items: new Array(5000).fill(null).map((v, i) => i),
    }),
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.data !== nextState.data;
  }

  get data() {
    const { data } = this.state;
    return data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    const items = this.data.get('items');
    return (
      <ul>
        {items.map(i => <li key={i}>{i}</li>)}
      </ul>
    );
  }
}

export default MyList;
