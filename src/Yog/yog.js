import React from 'react';

const yog = (props) => {
    return (
        <div>
    <p>Daily do yoga {props.name} for atleast {Math.floor(Math.random() * 100)} Minutes</p>
    <p>{props.children}</p>
    </div>);
}

export default yog;