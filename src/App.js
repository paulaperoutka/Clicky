import React, { Component } from 'react';
// import logo from './logo.svg';

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

  shuffle = array => {
    for (let i=array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  click = name => {
    const minion = this.state.clicked.indexOf
  }

  render() {
    return (
      <div className = "wrapper">
        <Navbar>
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        </Navbar>
        <Jumbotron />
        <div className = "container">
          {
          this.state.minions.map(minion => (
            <Card 
              name ={minion.name}
              source = {minion.source}
              click = {this.click}
              score = {this.state.score}
            />
          ))
        }
        </div>
      </div>
    );
  }
}

export default App;

