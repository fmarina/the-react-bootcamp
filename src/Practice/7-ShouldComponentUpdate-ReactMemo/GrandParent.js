// import React, {Component} from "react"
import React, {PureComponent} from 'react';
import Parent from "./Parent"

class GrandParent extends PureComponent {         
    // shouldComponentUpdate(nextProps, nextState) {     
    //     if(nextProps.count === this.props) {
    //         return false; 
    //     }
    //     return true;
    // }

    render() {
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
        return (
            <div>
                <p>I'm a GrandParent Component</p>
                <Parent />
                <Parent />
            </div>
        )
    }
}

export default GrandParent