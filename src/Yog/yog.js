import React from 'react';
import  classes from  './Yog.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'



const yog = (props) => {
    const style = {
        '@media(min-width: 500px)':{
                width:'450px'
        }
    }
    const rnd = Math.random();
    if(rnd>0.7){
        throw new Error('Some went Wrong')
    }
    return (
        <ErrorBoundary key={props.id} >
        <div className={classes.Yog} style={style}>
            <p onClick={props.click} >Daily do yoga {props.name} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
        </ErrorBoundary>);
}

export default yog;