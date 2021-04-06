import React from 'react';
import { useGlobalContext } from './context';

const CartItems = ({ id, title, price, img, amount }) => {

    const { removeItem, tonggle } = useGlobalContext();

    return (
        <div className="cart-item">
            <div className="box-header">
                <img src={img} alt={title} />
                <div className="box-body">
                    <h2>{title}</h2>
                    <span>${price}</span>
                    <button className="btn-delete-cart" onClick={() => removeItem(id)}>remove</button>
                </div>
            </div>
            <div className="amount">
                <button className="amount-btn" onClick={() => tonggle(id, 'inc')}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path>
                    </svg>
                </button>
                <span>{amount}</span>
                <button className="amount-btn" onClick={() => tonggle(id, 'dec')}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CartItems;