import { Component } from 'react';
import { fromJS } from 'immutable';

class BaseComponent extends Component {
  state = {
    data: fromJS({
      name: 'Mark',
      enabled: false,
      placeholder: '',
    }),
  };

  get data() {
    const { data } = this.state;
    return data;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    return null;
  }
}

export default BaseComponent;
