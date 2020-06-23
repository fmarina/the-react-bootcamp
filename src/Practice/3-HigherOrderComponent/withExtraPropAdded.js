import React from 'react';

export const withExtraPropAdded = (component) => {
    const Component = component;
    return (props) => {
        return (
            <Component anotherProp="Blah blah blah" {...props}/>
        );
    }
}
