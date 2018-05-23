import React , { Component } from 'react';
import Yog from './Yog/yog';


class Yogs extends Component {


    constructor(props) {

        super(props)
        console.log('[Yogs.js] Inside Constructor ', props);

        this.lastYogRef = React.createRef();
    }

    componentWillMount() {
        console.log('[Yogs.js] Inside the ComponentWillMount()')
    }

    componentDidMount() {
        console.log('[Yogs.js] Inside the ComponentDidMount')
        this.lastYogRef.current.focus();
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Update Yogs.js] Inside the shouldComponentUpdate');
       // return    true;
        return nextProps.yogs !== this.props.yogs;

    }

    componentWillReceiveProps(props){
        console.log('[Update Yogs.js] Inside the componentWillRevieveProps');

    }

    componentWillUpdate(nextProps, nextState){
        console.log('[Update Yogs.js] Inside the componentWillUpdate');
    }

    componentDidUpdate(){
        console.log('[Update Yogs.js] Inside the componentDidUpdate');
    }


    render(){
        console.log('[Yogs.js] Inside render()')
        return (
            this.props.yogs.map((yog,index)=> {
                return <Yog click={() => this.props.clicked(index)}
                            name={yog.name}
                            key={yog.id}
                            changed={(event) => this.props.changed(event, yog.id)}
                            position={index}
                            ref={this.lastYogRef}
                            authenticate={this.props.isAuthenticated}
                        />
            }))
    }

}





export default  Yogs;