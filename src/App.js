import React, { Component } from 'react';
import logo from './logo.svg';

import minions from "./minions.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

import './App.css';

class App extends Component {
  state = {
    message: "Click a minion to start the game!",
    score: 0,
    topScore: 0,
    minions: minions,
    clicked: []
  }

  render() {
    return (
      <div className = "wrapper">
        <Navbar>
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        </Navbar>
      </div>
    );
  }
}

export default App;
