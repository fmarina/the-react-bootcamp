import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Products from './products/Products';
import ProductDetail from './products/ProductDetail';

function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/products"><Products/></Route>
                <Route path="/products/:idProduct"><ProductDetail/></Route>
            </Switch>
        </div>
    );
}

export default App;