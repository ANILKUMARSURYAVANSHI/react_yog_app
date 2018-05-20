import React, {Component} from 'react';
import  classes from './Yog.css';



class Yog extends Component {

    constructor(props) {

        super(props)
        console.log('[Yog.js] Inside Constructor ', props);
    }

    componentWillMount() {
        console.log('[Yog.js] Inside the ComponentWillMount()')
    }

    componentDidMount() {
        console.log('[Yog.js] Inside the ComponentDidMount')
    }


    render(){

        console.log('[yog.js] inside the render()')
        const style = {
            '@media(min-width: 500px)':{
                width:'450px'
            }
        }
        return (
            <div className={classes.Yog} style={style}>
                <p onClick={this.props.click} >Daily do yoga {this.props.name} </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} />
            </div>
        );
    }
}



export default Yog;