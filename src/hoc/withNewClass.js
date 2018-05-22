import React from 'react';

const withNewClass = (WrappedComponent, className)=>{
    return (props) => (
        <div className={className}>
            <WrappedComponent/>

        </div>
    )
}

export default  withNewClass;