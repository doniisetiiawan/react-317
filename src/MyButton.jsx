/* eslint-disable react/prop-types */
import React from 'react';

export default ({ disabled, text }) => (
  <button type="button" disabled={disabled}>{text}</button>
);
