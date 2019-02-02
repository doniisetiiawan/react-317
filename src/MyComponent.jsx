import React from 'react';

import BaseComponent from './BaseComponent';

class MyComponent extends BaseComponent {
  componentDidMount() {
    this.data = this.data.merge({
      placeholder: 'Enter a name...',
      enabled: true,
    });
  }

  render() {
    const { name, enabled, placeholder } = this.data.toJS();

    return (
      <label htmlFor="my-input">
        Name:
        <input
          type="text"
          id="my-input"
          disabled={!enabled}
          placeholder={placeholder}
          value={name}
          onChange={this.onChanges}
        />
      </label>
    );
  }

  onChanges = ({ target: { value } }) => {
    this.data = this.data.set('name', value);
  }
}

export default MyComponent;
