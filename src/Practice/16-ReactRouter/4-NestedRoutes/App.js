import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/profile/Profile';
import Footer from './components/Footer';

import Setting from './pages/profile/Setting';
import Info from './pages/profile/Info';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route path="/profile/info">
                    <Info/>
                </Route>
                <Route path="/profile/settings">
                    <Setting/>
                </Route>
            </Switch>

            <Footer />
        </div>    
    );
}

export default App;