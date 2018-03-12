import React, { Component } from 'react';
import './App.css';
import { CounterContainer } from './components/counterContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counterSum: 0
    }
  }
  addCounter() {
    this.setState({
      counterSum: this.state.counterSum + 1
    })
  }


  returnContainer() {
    const arrComponents = [];
    for (let i = 0; i < this.state.counterSum; i++) {
      arrComponents.push(<CounterContainer key={i} counterCount={this.state.counterSum} createCounter={this.addCounter.bind(this)} />)
    }
    return arrComponents;
  }

  render() {
    return (
      <div>
        {!this.state.counterSum && (<input type="button" onClick={this.addCounter.bind(this)} value="Add Counter" />)}
        {this.returnContainer()}
      </div>
    );
  }
}

export default App;
