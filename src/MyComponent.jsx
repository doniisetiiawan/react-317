import React from 'react';
import PropTypes from 'prop-types';

function First() {
  return (
    <p>First...</p>
  );
}

function Second() {
  return (
    <p>Second...</p>
  );
}

function MyComponent(props) {
  const { children } = props;
  return (
    <section>
      {children}
    </section>
  );
}

MyComponent.defaultProps = {
  children: null,
};

MyComponent.propTypes = {
  children: PropTypes.node,
};

MyComponent.First = First;
MyComponent.Second = Second;

export default MyComponent;
