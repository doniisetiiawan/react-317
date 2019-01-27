/* eslint-disable react/prop-types */
import React from 'react';

export default ({
  name,
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}) => (
  <header>
    <h1>{name}</h1>
    <input
      placeholder="Title"
      value={title}
      onChange={onChangeTitle}
    />
    <input
      placeholder="Summary"
      value={summary}
      onChange={onChangeSummary}
    />
    <button type="button" onClick={onClickAdd}>Add</button>
  </header>
);
