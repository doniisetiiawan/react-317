import React, { Component } from 'react';

import reverse from './reverse';

class MyList extends Component {
  state = {
    items: ['angular', 'ember', 'react'],
  };

  onReverseClick = reverse.bind(this);

  render() {
    const { state: { items }, onReverseClick } = this;

    return (
      <section>
        <button type="button" onClick={onReverseClick}>Reverse</button>
        <ul>
          {items.map((v, i) => <li key={i}>{v}</li>)}
        </ul>
      </section>
    );
  }
}

export default MyList;
