import  React from 'react';
import Aux from '../../hoc/aux'

import myClasses from './Cockpit.css';

const Cockpit = (props)=>{

    let btnClasses = '';

    if(props.showYogs){
        btnClasses = myClasses.Red;
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={myClasses.red}> This is working Example</p>
            <button className={btnClasses} onClick={props.clicked} >Switch Yog</button>
        </Aux>

    );

}

export default  Cockpit;