import React from 'react';

import '../css/App.css';
import Caller from './Caller';
import logo from '../cowtown-logo.jpg';

const App = () => (
  <div className="App">
    <header className="App-header">
      <a
        className="App-link"
        href="https://www.cowtownskateboards.com/search.cfm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="App-logo" src={logo} alt="cowtown-logo" />
      </a>
      <Caller />
      <a
        className="App-link"
        href="https://www.cowtownskateboards.com/search.cfm"
        target="_blank"
        rel="noopener noreferrer"
      >
        Or you can search yourself
      </a>
    </header>
  </div>
);
export default App;
