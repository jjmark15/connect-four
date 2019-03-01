import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard/GameBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Connect Four
          </h1>
        </header>
        <div className="App-game">
          <GameBoard/>
        </div>
      </div>
    );
  }
}

export default App;
