import React, {Component} from 'react';
import  classes from './Yog.css';
import PropTypes from 'prop-types';



class Yog extends Component {

    constructor(props) {

        super(props)
        console.log('[Yog.js] Inside Constructor ', props);
    }

    componentWillMount() {
        console.log('[Yog.js] Inside the ComponentWillMount()')
    }

    componentDidMount() {
        console.log('[Yog.js] Inside the ComponentDidMount');
        if(this.props.position === 0)
        this.inputElement.focus();
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
                <input ref={(inp)=>{this.inputElement = inp}}
                    type="text" onChange={this.props.changed} />
            </div>
        );
    }
}

Yog.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    changed:PropTypes.func
}



export default Yog;