// import React, {Component} from "react"
// import React, {PureComponent} from 'react';
import React from 'react';
import Child from "./Child"

//cambiamos Class Component a Functional Component para poder usar React.MEMO()
export default React.memo(function Parent() {
    console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a Parent Component</p>
            <Child />
            <Child />
        </div>
    );
});

// class Parent extends PureComponent {
//     render() {    
//         console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
//         return <div>  <p>I'm a Parent Component</p> <Child /> <Child /> </div>
//     }
// }
