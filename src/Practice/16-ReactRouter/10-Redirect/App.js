import React, {useState} from "react";
import {Link, Switch, Route, Redirect} from 'react-router-dom';

function App() {       
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/private">Private</Link>

            <Switch>
                <Route exact path="/">
                    <h1>Home Page, anyone is allowed here</h1>
                </Route>
                <Route path="/private">
                    { isLoggedIn 
                      ? <h1>Protected page, must be logged in to be here</h1> : <Redirect to="/login" />
                    }                    
                </Route>
                <Route path="/login">
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                </Route>

            </Switch>
        </div>
    )
}

export default App