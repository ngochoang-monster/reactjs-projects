import React from 'react';
import { useGlobalContext } from './context';
import CartItems from './CartItems';

const CartContainer = () => {
    const { total, cart, clearCart, loading } = useGlobalContext();

    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <main className="container-cart">
                <div className="cart-header">
                    <h1>Your Bag</h1>
                </div>
                <div className="cart-body-empty">
                    <h3 className="emty-cart">is currently empty</h3>
                </div>
            </main>
        )
    }

    return (
        <main className="container-cart">
            <div className="cart-header">
                <h1>Your Bag</h1>
            </div>
            <div className="cart-center">
                {
                    cart.map((item, i) => {
                        return <CartItems key={i} {...item} />
                    })
                }
            </div>
            <div className="cart-footer">
                <h2>Total</h2>
                <div className="total-price">
                    <h2>
                        ${total}
                    </h2>
                </div>
            </div>
            <div className="clear-cart">
                <button className="btn-clear-cart" onClick={clearCart}>
                    Clear cart
                </button>
            </div>
        </main>
    )
}

export default CartContainer;