import React from 'react';

const Callout = (props) => {
    console.log(props);
    return (
        <div className="callout">
            {props.children}
        </div>
    );
}

export default Callout;