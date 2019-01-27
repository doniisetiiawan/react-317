/* eslint-disable react/prop-types */
import React from 'react';

import ArticleItem from './ArticleItem';

export default ({ articles, onClickToggle, onClickRemove }) => (
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
