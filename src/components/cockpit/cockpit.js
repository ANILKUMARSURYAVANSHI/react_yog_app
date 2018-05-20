import  React from 'react';

import myClasses from './Cockpit.css';

const Cockpit = (props)=>{

    let btnClasses = '';

    if(props.showYogs){
        btnClasses = myClasses.Red;
    }

    return (
        <div className={myClasses.Cockpit}>
            <p className={myClasses.red}> This is working Example</p>
            <button className={btnClasses} onClick={props.clicked} >Switch Yog</button>
        </div>

    );

}

export default  Cockpit;