import React, { Component } from 'react';
import  myClasses from './App.css';
import Yogs from '../components/yogs/yogs';

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
        color:'white'
    }

    let btnClasses = '';


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

      yogs = (
        <div>
          <Yogs
              yogs={this.state.yogs}
              clicked={this.deleteYog}
              changed={this.someNameHandler}

          />

         
        </div> 
      )
        btnClasses = myClasses.Red
    }

    return (

      <div className={myClasses.App}>
          <p className={myClasses.red}> This is working Example</p>
        <button className={btnClasses} onClick={this.toggleYog} >Switch Yog</button>
       
       
        {yogs}
      </div>



    );
  }
}

export default App;