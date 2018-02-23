import React, { Component } from 'react';

import './App.css';
import Yog from './Yog/yog';

class App extends Component {
  state = {
    yogs: [{
      name: 'Asan'
    },
    {
      name: 'Pranayam'
    }]
  }

  someHandler = (newval) => {

    console.log('11');
    this.setState({
      yogs: [
        { name: newval },
        { name: 'Niyam' }
      ]
    })

 
  }

  someNameHandler = (event) => {

    console.log('event')
    this.setState({
      yogs: [
        { name: 'Ya,' },
        { name: event.target.value }
      ]
    })

 
  }


  render() {
    const style = {
      backgroundColor: 'red',
      border: '1px solid blue'
    }
    return (
       
      <div>
        <button style={style} onClick={this.someHandler.bind(this, 'Samathi')} >Switch Yog</button>
        <p >{this.state.yogs[0].name}</p>
        <Yog click={this.someHandler.bind(this,'Dhyan')} name={this.state.yogs[0].name} />
        <Yog changed={this.someNameHandler} name={this.state.yogs[1].name} >  New Yog</Yog>
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
