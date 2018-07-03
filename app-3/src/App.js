import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterData: '',
      list: ['learn React',
       'learn HTML/CSS', 
       'learn SQL Database', 
       'learn flex Box'],
    };
  }

  updateInput(filter) {
    this.setState({ filterData: filter });
  }

  render() {
    let arrayData = this.state.list.filter((element, index) => {
      return element.includes(this.state.filterData) }).map( (element, index) => {
        return <h2 key={ index }>{ element }</h2>
      })

    return (
      <div className="App">
      <input type='text' onChange={ (e) => this.updateInput(e.target.value ) }/>

          { arrayData }

        </div>
    );
  }
}
export default App;
