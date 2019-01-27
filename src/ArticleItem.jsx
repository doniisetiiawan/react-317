/* eslint-disable react/prop-types */
import React from 'react';

export default ({ article, onClickToggle, onClickRemove }) => (
  <li key={article.id}>
    <a
      href={`#${article.id}`}
      title="Toggle Summary"
      onClick={() => onClickToggle(article.id)}
    >{article.title}
    </a>
    &nbsp;
    <a
      href={`#${article.id}`}
      title="Remove"
      onClick={() => onClickRemove(article.id)}
    >&#10007;
    </a>
    <p style={{ display: article.display }}>{article.summary}</p>
  </li>
);
