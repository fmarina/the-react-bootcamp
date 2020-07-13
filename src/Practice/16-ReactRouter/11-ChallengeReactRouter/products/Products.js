import React from 'react';
import productsData from './productsData';
import {Link} from 'react-router-dom';

function Products() {
    const products = productsData.map(product => (
        <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>        
    ));

    return (
        <div>
            <h1>Products Page</h1>
            <ul>{products}</ul>
        </div>
    );
}

export default Products;