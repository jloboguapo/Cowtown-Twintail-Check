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
        href="https://www.cowtownskateboards.com/shoes/mens-cid-10?Start=17&viewall=1&SortBy=PriceL&Brand=Show%20All%20Brands&Size=12"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to search yourself with a headstart
      </a>
    </header>
  </div>
);
export default App;
