import React from 'react';
import Yog from './Yog/yog';


const Yogs = (props)=> props.yogs.map((yog,index)=>{
    return <Yog  click={() => props.clicked(index)} name={yog.name} key={yog.id} changed={(event)=>props.changed(event,yog.id)} />
})


export default  Yogs;