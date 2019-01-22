import React from 'react';
import PropTypes from 'prop-types';

function MySection(props) {
  const { children } = props;
  return (
    <section>
      <h2>My Section</h2>
      {children}
    </section>
  );
}

MySection.defaultProps = {
  children: null,
};

MySection.propTypes = {
  children: PropTypes.node,
};

export default MySection;
