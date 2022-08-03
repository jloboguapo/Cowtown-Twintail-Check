import React from 'react';

import '../css/App.css';
import Caller from './Caller';

const App = () => (
  <div className="App">
    <header className="App-header">
      <a
        className="App-link"
        href="https://www.cowtownskateboards.com/search.cfm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="App-logo"
          src="https://i0.wp.com/azpx.com/wp-content/uploads/2016/07/cowtown.jpg?resize=744%2C744&ssl=1"
          alt="cowtown-logo"
        />
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
