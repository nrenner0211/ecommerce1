import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ShopContext } from '../../context/ShopContext';
import { PRODUCTS } from '../../products';
import { CartItem } from '../cart/CartItem';
import './styles/Cart.scss';

export const Cart = () => {
    const { cartItems, getTotalItemCount } = useContext(ShopContext);
    const totalAmount = getTotalItemCount();
    const navigate = useNavigate();

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

{ totalAmount > 0 ?
            <div className='checkout'>
                <p>Subtotal: ${totalAmount}</p>
                <button onClick={() => navigate('/')}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
: <h1>Your cart is empty!</h1> }
        </div>
    )
};
