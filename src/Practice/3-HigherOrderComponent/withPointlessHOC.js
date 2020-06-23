import React from 'react';
// HOC: a function that takes a component as its first argument and returns a new component that wraps the given component, providing extra capabilities to it.

export const withPointlessHOC = (component) => {
    const Component = component;
    return (props) => {
        return (
            <Component {...props}/>
        );
    }
}
