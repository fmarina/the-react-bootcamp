import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>

                    <Switch>
                        <Route exact path="/"> <Home/> </Route>
                        <Route path="/about"> <About/> </Route>
                        <Route path="/contact"> <Contact/> </Route>
                    </Switch>
                </nav>
            </header>
        </div>
    );
}

export default App;