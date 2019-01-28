/* eslint-disable react/prop-types */
import React from 'react';

export default ({
  clicks,
  disabled,
  text,
  onClick,
}) => (
  <section>
    <p>{clicks} clicks</p>
    <button type="button" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  </section>
);
