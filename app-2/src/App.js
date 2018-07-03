import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ['learn React',
       'learn HTML/CSS', 
       'learn SQL Database', 
       'learn flex Box'],
    };
  }

  // updateInput(value) {
  //   this.setState({ list: value });
  // }

  render() {
    let arrayList = this.state.list.map((e, i) => {
      return (
        <h2 key={ i }>{ e } </h2>
      )
    });
    return (
      <div className="App">

        {/* <div className="App-header"> */}

          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <h2>My React Practice Drills</h2>

          { arrayList }

        </div>
       
      // </div>
    );
  }
}
export default App;
