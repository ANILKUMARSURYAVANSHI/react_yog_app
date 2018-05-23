import React, {Component} from 'react';

const withNewClass = (WrappedComponent, className)=>{
    // return (props) => (
    //     <div className={className}>
    //         <WrappedComponent  {...props} />
    //
    //     </div>
    // )

    const WithNewClass =  class extends Component {
        render(){
            return (
                <div className={className}>
                           <WrappedComponent ref={this.props.forwardedRef}  {...this.props} />

                       </div>
            )
        }
    }

    return React.forwardRef((props, ref)=>{
            return  <WithNewClass {...props} forwarded={ref}  />
    })


}

export default  withNewClass;