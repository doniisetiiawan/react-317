import React from 'react';
import PropTypes from 'prop-types';

import ArticleItem from './ArticleItem';

function createLog(log) {
  return () => console.warn(`${log}is not defined`);
}

function ArticleList(props) {
  const { articles, onClickToggle, onClickRemove } = props;
  return (
    <ul>
      {articles.map(article => (
        <ArticleItem
          key={article.id}
          article={article}
          onClickToggle={onClickToggle}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  onClickRemove: PropTypes.func,
  onClickToggle: PropTypes.func,
};

ArticleList.defaultProps = {
  articles: [],
  onClickRemove: createLog('onClickRemove'),
  onClickToggle: createLog('onClickToggle'),
};

export default ArticleList;
