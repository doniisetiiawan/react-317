import React, { Component } from 'react';

class MyInput extends Component {
  static onChange() {
    console.log('changed');
  }

  static onBlur() {
    console.log('blurred');
  }

  render() {
    return (
      <input onChange={MyInput.onChange} onBlur={MyInput.onBlur} />
    );
  }
}

export default MyInput;
