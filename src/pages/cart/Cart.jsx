import React, { useContext } from 'react';

import { ShopContext } from '../../context/ShopContext';
import { PRODUCTS } from '../../products';
import { CartItem } from '../cart/CartItem';
import './styles/Cart.scss';

export const Cart = () => {
    const { cartItems } = useContext(ShopContext);

    return (
        <div className='cart'>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>
                    }
                })}
            </div>
        </div>
    )
};
