import React, { Component } from 'react';

class MyUser extends Component {
  state = {
    modified: new Date(),
    first: 'first',
    last: 'last',
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { modified } = this.state;
    return +nextState.modified > +modified;
  }

  render() {
    const { modified, first, last } = this.state;
    return (
      <section>
        <p>{modified.toLocaleString()}</p>
        <p>{first}</p>
        <p>{last}</p>
      </section>
    );
  }
}

export default MyUser;
