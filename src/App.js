import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        FrontEnd (React): Proyecto Mision TIC, Ciclo 3 (App  de seguimiento de las ventas de un producto y/o servicio en una empresa).
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React v{ React .version }
        </a>
      </header>
    </div>
  );
}

export default App;
