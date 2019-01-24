import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    heading: 'React awesomesauce {busy}',
    content: 'loading...',
  };

  render() {
    const { heading, content } = this.state;

    setTimeout(() => {
      this.setState({
        heading: 'React Awesomesauce',
        content: 'Done!',
      });
    }, 3000);

    return (
      <main>
        <h1>{heading}</h1>
        <p>
          {content}
        </p>
      </main>
    );
  }
}

export default MyComponent;
