import React , { Component } from 'react';
import Yog from './Yog/yog';


class Yogs extends Component {

    render(){
        return (
            this.props.yogs.map((yog,index)=> {
                return <Yog click={() => this.props.clicked(index)} name={yog.name} key={yog.id}
                            changed={(event) => this.props.changed(event, yog.id)}/>
            }))
    }

}





export default  Yogs;