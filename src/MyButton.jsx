import React from 'react';
import PropTypes from 'prop-types';

function MyButton(props) {
  const { children } = props;

  return <button type="button">{children}</button>;
}

MyButton.propTypes = {
  children: PropTypes.node,
};

MyButton.defaultProps = {
  children: null,
};

export default MyButton;
