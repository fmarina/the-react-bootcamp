import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/portfolio/Portfolio'
import PortfolioDetail from './pages/portfolio/PortfolioDetail';

import {Switch, Route} from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Switch>
                    <Route exact path="/"> <Home/> </Route>
                    <Route exact path="/portfolio"> <Portfolio/> </Route>
                    <Route path="/portfolio/:id"> <PortfolioDetail/> </Route>
                    <Route path="/contact"> <Contact/> </Route>
                </Switch>

            </main>
            <Footer />            
        </div>
    );

}

export default App;