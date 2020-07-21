import React from 'react';

/* Challenge: Write a higher-order component that passes a new prop to the given component called "favoriteNumber" and includes your own, personal, favorite number. 
Then, in App.js, render that favorite number to the screen*/

export const withFavoriteNumber = (component) => {
    const Component = component;
    return (props) => {
        return <Component favNum={27} {...props} />        
    }
}
