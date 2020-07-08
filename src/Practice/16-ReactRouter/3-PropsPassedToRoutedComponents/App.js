import React from "react";
import {Link, Switch, Route} from 'react-router-dom';

import Home from './Home';

function App() {    
    return (
        <div>
            <Link to="/">Home</Link>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    )
}

export default App;