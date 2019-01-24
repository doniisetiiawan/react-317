import React from 'react';
import logo from './logo.svg';
import './App.css';

import MySection from './MySection';
import MyButton from './MyButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MySection>
        <MyButton>My Button Text</MyButton>
      </MySection>
    </div>
  );
}

export default App;