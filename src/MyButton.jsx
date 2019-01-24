import React from 'react';
import PropTypes from 'prop-types';

function MyButton(props) {
  const { disabled, text } = props;
  return (
    <button type="button" disabled={disabled}>{text}</button>
  );
}

MyButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

MyButton.defaultProps = {
  disabled: false,
  text: 'My Button',
};

export default MyButton;
