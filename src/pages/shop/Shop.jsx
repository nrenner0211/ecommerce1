import React from 'react';

import { PRODUCTS } from '../../products';
import { Product } from './Product';
import "./styles/Shop.scss";

export const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1>NikiCodes Shop</h1>
            </div>
            <div className='products'>
                {PRODUCTS.map((product) => (
                    <Product data={product}/>                
                ))}
            </div>
        </div>
    )
}
