import React from 'react';

const Home = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;

/* Props
{
    history: {
        length: 32, 
        action: "POP", 
        location: {
            pathname: "/", 
            search: "", 
            hash: "", 
            state: null
        }, 
        createHref: createHref(location), 
        push: push(path, state), 
        replace: replace(path, state), 
        go: go(n), 
        goBack: goBack(), 
        goForward: goForward(), 
        block: block(prompt), 
        listen: listen(listener)
    }, 
    location: {
        pathname: "/", 
        search: "", 
        hash: "", 
        state: null
    }, 
    match: {
        path: "/", 
        url: "/", 
        isExact: true, 
        params: {}
    }, 
    staticContext: null
}
*/