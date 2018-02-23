import React from 'react';
import './Yog.css';

const yog = (props) => {
    return (
        <div className="Yog">
            <p onClick={props.click} >Daily do yoga {props.name} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>);
}

export default yog;