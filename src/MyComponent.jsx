import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ myHeader, myContent }) => (
  <section>
    <header>{myHeader}</header>
    <main>{myContent}</main>
  </section>
);

MyComponent.propTypes = {
  myContent: PropTypes.node.isRequired,
  myHeader: PropTypes.element.isRequired,
};

export default MyComponent;
