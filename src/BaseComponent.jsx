/* eslint-disable jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { fromJS } from 'immutable';

class BaseComponent extends Component {
  state = {
    data: fromJS({
      items: [],
    }),
  };

  get data() {
    const { data } = this.state;
    return data;
  }

  set data(data) {
    this.setState({ data });
  }

  onClick = id => () => {
    this.data = this.data.update('items', items => items.update(
      items.indexOf(items.find(i => i.get('id') === id)),
      item => item.update('done', d => !d),
    ));
  };

  render() {
    const { items } = this.data.toJS();

    return (
      <ul>
        {items.map(i => (
          <li
            key={i.id}
            onClick={() => this.onClick(i.id)}
            style={{
              cursor: 'pointer',
              textDecoration: i.done ? 'line-through' : 'none',
            }}
          >
            {i.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default BaseComponent;
