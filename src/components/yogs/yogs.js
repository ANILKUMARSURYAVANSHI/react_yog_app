import React , { Component } from 'react';
import Yog from './Yog/yog';


class Yogs extends Component {


    constructor(props) {

        super(props)
        console.log('[Yogs.js] Inside Constructor ', props);
    }

    componentWillMount() {
        console.log('[Yogs.js] Inside the ComponentWillMount()')
    }

    componentDidMount() {
        console.log('[Yogs.js] Inside the ComponentDidMount')
    }

    render(){
        console.log('[Yogs.js] Inside render()')
        return (
            this.props.yogs.map((yog,index)=> {
                return <Yog click={() => this.props.clicked(index)} name={yog.name} key={yog.id}
                            changed={(event) => this.props.changed(event, yog.id)}/>
            }))
    }

}





export default  Yogs;