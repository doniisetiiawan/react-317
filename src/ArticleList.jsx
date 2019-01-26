import React from 'react';
import PropTypes from 'prop-types';


function createLog(log) {
  return () => console.warn(`${log}is not defined`);
}

function ArticleList(props) {
  const { articles, onClickToggle, onClickRemove } = props;
  return (
    <ul>
      {articles.map(i => (
        <li key={i.id}>
          <a
            href={`#${i.id}`}
            title="Toggle Summary"
            onClick={() => onClickToggle(i.id)}
          >{i.title}
          </a>
          &nbsp;
          <a
            href={`#${i.id}`}
            title="Remove"
            onClick={() => onClickRemove(i.id)}
          >&#10007;
          </a>
          <p style={{ display: i.display }}>{i.summary}</p>
        </li>
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
  onClickRemove: createLog('createLog'),
  onClickToggle: createLog('onClickToggle'),
};

export default ArticleList;
