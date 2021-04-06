import React from 'react';
import { AppProvider } from './context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';


const Run = () => {

    return (
        <AppProvider>
            <Navbar />
            <CartContainer />
        </AppProvider>
    )
}

export default Run;