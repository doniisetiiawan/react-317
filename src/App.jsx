import React, { Component } from 'react';

class App extends Component {
  state = { clicks: 0 };

  render() {
    const { clicks } = this.state;

    return (
      <section>
        <header>
          <h1>Hydrating the client...</h1>
        </header>
        <main>
          <p>Clicks {clicks}</p>
          <button
            type="button"
            onClick={() => this.setState(state => ({ clicks: state.clicks + 1 }))}
          >
            Click Me..
          </button>
        </main>
      </section>
    );
  }
}

export default App;
