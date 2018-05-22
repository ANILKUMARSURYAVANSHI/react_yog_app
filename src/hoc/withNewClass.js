import React from 'react';

const withNewClass = (WrappedComponent, className)=>{
    return (props) => (
        <div className={className}>
            <WrappedComponent  {...props} />

        </div>
    )
}

export default  withNewClass;