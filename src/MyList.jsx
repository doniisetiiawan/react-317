/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyList extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.array,
  };

  onClick = (id) => {
    const { items } = this.props;
    const { name } = items.find(i => i.id === id);
    console.log('clicked', `"${name}"`);
  };

  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(({ id, name }) => (
          <li key={id} onClick={() => this.onClick(id)} role="list">{name}</li>
        ))}
      </ul>
    );
  }
}

export default MyList;
