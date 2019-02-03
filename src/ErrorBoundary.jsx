import { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  static defaultProps = {
    children: null,
  };

  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    error: null,
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error === null) {
      return children;
    }
    console.error(error);
    return null;
  }
}

export default ErrorBoundary;
