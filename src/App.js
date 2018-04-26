import React, { Component } from 'react';
// import logo from './logo.svg';

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

import minions from "./minions.json";

import './App.css';

class App extends Component {
  state = {
    message: "Click a minion to start the game!",
    score: 0,
    topScore: 0,
    minions: minions,
    clicked: []
  }

  click = name => {
    const minion = this.state.clicked.indexOf(name);
      console.log(minion);
    if (minion === -1 && this.state.score < 11) {
      const correct = name;
      console.log(name);
      this.setState({
        message: "Clicked and scored! But can you do it again?",
        score: this.state.score + 1,
        topScore: this.state.score > this.state.topScore ? 
          this.state.score 
          :
          this.state.topScore,
        minions: minions,
        clicked: this.state.clicked.concat(correct)
      });
      console.log(this.state);
    } else if (minion === -1 && this.state.score === 11) {
      console.log(name);
      this.setState({
        message: "You win! Click to try again",
        score: 0,
        topScore: 12,
        minions: minions,
        clicked: []
      });
      console.log(this.state);
    } else {
      this.setState({
        message: "Nope! Back to square one...",
        score: 0,
        topScore: this.state.score > this.state.topScore ? 
          this.state.score 
          :
          this.state.topScore,
        minions: minions,
        clicked: []
      });
      console.log(this.state);
    }
    this.shuffle(minions);
  }

  shuffle = array => {
    for (let i=array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  

  render() {
    console.log(this.state);
    return (
      <div className = "wrapper">
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <div className = "container">
          {
          this.state.minions.map(minion => (
            <Card 
              name ={minion.name}
              source = {minion.source}
              click = {this.click}
            />
          ))
        }
        </div>
      </div>
    );
  }
}

export default App;

