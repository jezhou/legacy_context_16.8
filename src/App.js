import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nested from './Nested';
import NestedFunctional from './NestedFunctional';
import BrandingProvider from './BrandingProvider';

function App() {
  return (
    <BrandingProvider>
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
            <Nested/>
            <NestedFunctional/>
          </a>
        </header>
      </div>
    </BrandingProvider>
  );
}

export default App;
