import React from 'react';
import PropTypes from 'prop-types';

const MyButton = ({ disabled, text }) => (
  <button type="button" disabled={disabled}>{text}</button>
);

MyButton.defaultProps = {
  disabled: false,
  text: 'My Button',
};

MyButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

export default MyButton;
