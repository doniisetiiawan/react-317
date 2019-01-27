import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import cuid from 'cuid';

function createLog(log) {
  return () => console.warn(`${log} is not defined`);
}

class MyFeature extends Component {
  static defaultProps = {
    addArticle: createLog('onChangeSummary'),
    articleList: createLog('onChangeSummary'),
  };

  static propTypes = {
    addArticle: PropTypes.func,
    articleList: PropTypes.func,
  };

  state = {
    data: fromJS({
      articles: [
        {
          id: cuid(),
          title: 'Article 1',
          summary: 'Article 1 Summary',
          display: 'none',
        },
        {
          id: cuid(),
          title: 'Article 2',
          summary: 'Article 2 Summary',
          display: 'none',
        },
        {
          id: cuid(),
          title: 'Article 3',
          summary: 'Article 3 Summary',
          display: 'none',
        },
        {
          id: cuid(),
          title: 'Article 4',
          summary: 'Article 4 Summary',
          display: 'none',
        },
      ],
      title: '',
      summary: '',
    }),
  };

  get data() {
    const { data } = this.state;
    return data;
  }

  set data(data) {
    this.setState({ data });
  }

  onChangeTitle = (e) => {
    this.data = this.data.set('title', e.target.value);
  };

  onChangeSummary = (e) => {
    this.data = this.data.set('summary', e.target.value);
  };

  onClickAdd = () => {
    this.data = this.data
      .update('articles', a => a.push(
        fromJS({
          id: cuid(),
          title: this.data.get('title'),
          summary: this.data.get('summary'),
          display: 'none',
        }),
      ))
      .set('title', '')
      .set('summary', '');
  };

  onClickToggle = (id) => {
    const index = this.data
      .get('articles')
      .findIndex(a => a.get('id') === id);

    this.data = this.data.update('articles', articles => articles.update(index, a => a.update('display', display => (display ? '' : 'none'))));
  };

  onClickRemove = (id) => {
    const index = this.data
      .get('articles')
      .findIndex(a => a.get('id') === id);

    this.data = this.data.update('articles', a => a.delete(index));
  };

  render() {
    const {
      articles,
      title,
      summary,
    } = this.data.toJS();
    const {
      props: { addArticle, articleList },
      onClickAdd,
      onClickToggle,
      onClickRemove,
      onChangeTitle,
      onChangeSummary,
    } = this;

    return (
      <section>
        {addArticle({
          title,
          summary,
          onChangeTitle,
          onChangeSummary,
          onClickAdd,
        })}
        {articleList({ articles, onClickToggle, onClickRemove })}
      </section>
    );
  }
}

export default MyFeature;
