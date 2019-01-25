import React, { Component, Fragment } from 'react';

class App extends Component {
  state = {
    first: 0,
    second: 0,
    third: 0,
  };

  onClick = name => () => {
    this.setState(state => ({
      ...state,
      [name]: state[name] + 1,
    }));
  };

  render() {
    const { first, second, third } = this.state;

    return (
      <Fragment>
        <button type="button" onClick={this.onClick('first')}>First {first}</button>
        <button type="button" onClick={this.onClick('second')}>Second {second}</button>
        <button type="button" onClick={this.onClick('third')}>Third {third}</button>
      </Fragment>
    );
  }
}

export default App;
