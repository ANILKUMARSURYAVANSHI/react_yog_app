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
    }],
    showYog:false
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

  toggleYog =()=>{
    const showStatus = this.state.showYog;
    this.setState({showYog: !showStatus})
  }


  render() {
    const style = {
      backgroundColor: 'red',
      border: '1px solid blue'
    }
     
    let yogs = null;
    if(this.state.showYog){
      yogs =(
        <div>
          <Yog click={this.someHandler.bind(this, 'Dhyan')} name={this.state.yogs[0].name} />
          <Yog changed={this.someNameHandler} name={this.state.yogs[1].name} >  New Yog</Yog>
        </div> 
      )
    }

    return (
       
      <div>
        {/* <button style={style} onClick={this.someHandler.bind(this, 'Samathi')} >Switch Yog</button> */}
        <button style={style} onClick={this.toggleYog} >Switch Yog</button>
        <p >{this.state.yogs[0].name}</p>
        {/* { this.state.showYog == true ?
        <div>
        <Yog click={this.someHandler.bind(this,'Dhyan')} name={this.state.yogs[0].name} />
        <Yog changed={this.someNameHandler} name={this.state.yogs[1].name} >  New Yog</Yog>
        </div>  : null
        } */}
        {yogs}
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
