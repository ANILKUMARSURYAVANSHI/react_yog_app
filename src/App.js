import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Yog from './Yog/yog';

class App extends Component {
  render() {
    return (

    <div>
      <Yog name="Bhashtrika" />
      <Yog name="Anulom Vilom" >  New Yog</Yog>
      </div>

      //React.createElement('div',null,React.createElement('h1',{className:'App'},'anil'))
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
