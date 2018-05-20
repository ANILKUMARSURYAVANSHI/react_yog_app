import React from 'react';
import  classes from './Yog.css';



const yog = (props) => {
    const style = {
        '@media(min-width: 500px)':{
                width:'450px'
        }
    }


    return (

        <div className={classes.Yog} style={style}>
            <p onClick={props.click} >Daily do yoga {props.name} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>);
}

export default yog;