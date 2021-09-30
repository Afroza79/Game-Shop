import React from 'react';

const Cart = (props) => {
    return (
        <div className="quantity-container">
            <p>{ props.item.title}</p>
            <p className="quantity">{props.item.quantity}</p>
        </div>
    )
};

export default Cart;