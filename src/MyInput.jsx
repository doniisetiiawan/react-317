/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import PropTypes from 'prop-types';
import { getState, setState } from './store';

function onChanges(e) {
  setState(getState().set('filterValue', e.target.value));
}

const MyInput = ({ value, placeholder }) => (
  <input
    autoFocus
    value={value}
    placeholder={placeholder}
    onChange={onChanges}
  />
);

MyInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default MyInput;
