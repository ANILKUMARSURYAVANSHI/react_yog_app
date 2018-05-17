import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import Yog from './Yog/yog';

class App extends Component {
  state = {
    yogs: [{
      name: 'Asan', id: 'tt' 
    },
    {
      name: 'Pranayam', id: 'jy'
    }],
    showYog:false
  }

  someHandler = (newval) => {

    console.log('11');
    this.setState({
      yogs: [
        { name: newval,id:'tt' },
        { name: 'Niyam',id:'jy'}
      ]
    })

 
  }

  someNameHandler = (event,yogId) => {

    console.log('event');
    const yogIndex = this.state.yogs.findIndex(y=> { return y.id === yogId});

    let  yog = {...this.state.yogs[yogIndex]};
    yog.name = event.target.value;

    let yogs = [ ...this.state.yogs];
    yogs[yogIndex] = yog; 

    this.setState({
      yogs: yogs
    })

 
  }

  toggleYog =()=>{
    const showStatus = this.state.showYog;
    this.setState({showYog: !showStatus})
  }

  deleteYog=(yogIndex)=>{
   //let  yogs =  this.state.yogs;
   let  yogs =  [...this.state.yogs];  //immutable method
   yogs.splice(yogIndex,1);
   this.setState({yogs:yogs});
  }


  render() {
    const style = {
      backgroundColor: 'green',
      border: '1px solid blue',
        color:'white',
        ':hover':{
          backgroundColor:'lightGreen',
            color:'black'
        }
    }

    //Adding dynamic classes
      const classes = [];

    if(this.state.yogs.length >= 2){
      classes.push('red');
    }
    if(this.state.yogs.length <= 1){
      classes.push('bold');
    }

     
    let yogs = null;
    if(this.state.showYog){
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
          color:'black'
      }
      yogs = (
        <div>
          {this.state.yogs.map((yog,index)=>{
            return <Yog  click={() => this.deleteYog(index)} name={yog.name} key={yog.id} changed={(event)=>this.someNameHandler(event,yog.id)} />
          })}
         
        </div> 
      )
    }

    return (
       
      <div>
          <p className={classes}> This is working Example</p>
        <button style={style} onClick={this.toggleYog} >Switch Yog</button>
       
       
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

export default Radium(App);
