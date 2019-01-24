import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    first: 'loading...',
    second: 'loading...',
    third: 'loading...',
    fourth: 'loading...',
    doneMessage: 'finished',
  };

  render() {
    const { state } = this;

    setTimeout(() => {
      this.setState({ first: 'done!' });
    }, 1000);
    setTimeout(() => {
      this.setState({ second: 'done!' });
    }, 2000);
    setTimeout(() => {
      this.setState({ third: 'done!' });
    }, 3000);
    setTimeout(() => {
      this.setState(() => ({
        ...state,
        fourth: state.doneMessage,
      }));
    }, 4000);

    return (
      <ul>
        {Object.keys(state)
          .filter(key => key !== 'doneMessage')
          .map(key => (
            <li key={key}>
              <strong>{key}: </strong>
              {state[key]}
            </li>
          ))}
      </ul>
    );
  }
}

export default MyComponent;
