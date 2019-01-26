import React from 'react';
import PropTypes from 'prop-types';

function createLog(log) {
  return () => console.warn(`${log}is not defined`);
}

function ArticleItem(props) {
  const { article, onClickToggle, onClickRemove } = props;

  return (
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
}

ArticleItem.propTypes = {
  article: PropTypes.object,
  onClickRemove: PropTypes.func,
  onClickToggle: PropTypes.func,
};

ArticleItem.defaultProps = {
  article: [],
  onClickRemove: createLog('onClickRemove'),
  onClickToggle: createLog('onClickToggle'),
};

export default ArticleItem;
