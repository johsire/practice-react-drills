import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  updateInput(val) {
    this.setState({ message: val });
  }

  render() {
    return (
      <div className="App">

      <h2> My React Practice Drills </h2>

      
      <input type='text' onChange={ (e) => this.updateInput(e.target.value ) } />

      <p> { this.state.message } </p>
        
        </div>
    );
  }
}

export default App;
