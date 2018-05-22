import React, { PureComponent } from 'react';
import  myClasses from './App.css';
import Yogs from '../components/yogs/yogs';
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from '../hoc/aux';
import WithNewClass from '../hoc/withNewClass';

class App extends PureComponent{

    constructor(props) {

        super(props)
        console.log('[App.js] Inside Constructor ', props);

        this.state = {
            yogs: [{
                name: 'Asan', id: 'tt'
            },
                {
                    name: 'Pranayam', id: 'jy'
                }],
            showYog: false
        }

    }

    componentWillMount() {
        console.log('[App.js] Inside the ComponentWillMount()')
    }

    componentDidMount() {
        console.log('[App.js] Inside the ComponentDidMount')
    }


    componentWillReceiveProps(props){
        console.log('[Update App.js] Inside the componentWillRevieveProps', props);

    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Update App.js] Inside the shouldComponentUpdate');

        return nextState.yogs !== this.state.yogs ||
            nextState.showYog !== this.state.showYog;

    }


    componentWillUpdate(nextProps, nextState){
        console.log('[Update App.js] Inside the componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('[Update App.js] Inside the componentDidUpdate');
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
      console.log('[App.js] Inside the render()')
    const style = {
      backgroundColor: 'green',
      border: '1px solid blue',
        color:'white'
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

      yogs = (
        <div>
          <Yogs
              yogs={this.state.yogs}
              clicked={this.deleteYog}
              changed={this.someNameHandler}
          />
         
        </div> 
      )

    }

    return (

        <Aux>
        <Cockpit appTitle={this.props.appTitle}
            showYogs={this.state.showYog}
            clicked={this.toggleYog}/>
        {yogs}
        </Aux>





    );
  }
}

export default WithNewClass(App,myClasses.App);
