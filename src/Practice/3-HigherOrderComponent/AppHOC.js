import React from 'react';
import {withPointlessHOC} from './withPointlessHOC';
import {withExtraPropAdded} from './withExtraPropAdded';

const AppHOC = (props) => {
    console.log(props); //-> {anotherProp : "Blah blah blah"}
    return (
        <div>Hello World!</div>
    );
}

// const PointlessHOC = withPointlessHOC(AppHOC);
const ExtraPropComponent = withExtraPropAdded(AppHOC);
export default ExtraPropComponent;