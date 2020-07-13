import React from 'react';
import productsData from './productsData';
import {useParams} from 'react-router-dom';

function ProductDetail() {
    const {idProduct} = useParams();
    const product = productsData.find(product => product.id === idProduct);

    return (
        <div>
            <h1>Product Detail Page</h1>
            <h2>{product.name} - ${product.price}</h2>
            <h4>{product.description}</h4>
        </div>
    );
}

export default ProductDetail;