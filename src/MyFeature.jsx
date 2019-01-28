import React, { Component } from 'react';
import { fromJS } from 'immutable';

import MyButton from './MyButton';

class MyFeature extends Component {
  static defaultProps = {
    text: 'A Button',
  };

  state = {
    data: fromJS({
      clicks: 0,
      disabled: false,
      text: '',
    }),
  };

  get data() {
    const { data } = this.state;
    return data;
  }

  set data(data) {
    this.setState({ data });
  }

  onClick = () => {
    this.data = this.data.update('clicks', c => c + 1);
  };

  static getDerivedStateFromProps({ disabled, text }, prevState) {
    return {
      ...prevState,
      data: prevState.data.set('disabled', disabled).set('text', text),
    };
  }

  render() {
    return (
      <MyButton onClick={this.onClick} {...this.data.toJS()} />
    );
  }
}

export default MyFeature;
