import React from 'react';
import Home from './Home';
import Sidebar from './Sidebar';
import Modal from './Modal';
import { AppProvider } from './context';

const Run = () => {
    return (
        <>
            <AppProvider>
                <Home />
                <Sidebar />
                <Modal />
            </AppProvider>
        </>
    )
}

export default Run;