import React from 'react';
import phone from './public/images/phone.svg';
import { useGlobalContext } from './context';



const Main = () => {
    const { closeSubmenu } = useGlobalContext();
    return (
        <div className="main-stripe" onMouseOver={closeSubmenu}>
            <div className="submain">
                <h1>
                    Payments <br />infrastructure <br />
                    for the internet
                </h1>
                <p>
                    Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                </p>
                <button className="btn-submit">
                    <a href="https://stripe.com">Submit</a>
                </button>
            </div>
            <img src={phone} alt="phone" className="phone hide" />
        </div >
    )
}


export default Main;