import React from 'react';
import PropTypes from 'prop-types';

function createLog(log) {
  return () => console.warn(`${log} is not defined`);
}

function AddArticle(props) {
  const {
    name,
    title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd,
  } = props;

  return (
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
}

AddArticle.propTypes = {
  name: PropTypes.string,
  onChangeSummary: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onClickAdd: PropTypes.func,
  summary: PropTypes.string,
  title: PropTypes.string,
};

AddArticle.defaultProps = {
  name: 'Articles',
  onChangeSummary: createLog('onChangeSummary'),
  onChangeTitle: createLog('onChangeTitle'),
  onClickAdd: createLog('onClickAdd'),
  summary: 'summary',
  title: 'title',
};

export default AddArticle;
