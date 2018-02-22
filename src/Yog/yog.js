import React from 'react';

const yog = (props) => {
    return <p>Daily do yoga {props.name} for atleast {Math.floor(Math.random() * 100)} Minutes</p>
}

export default yog;