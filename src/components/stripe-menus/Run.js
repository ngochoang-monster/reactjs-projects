import React from 'react';
import Main from './Main';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Submenu from './Submenu';
import { AppProvider } from './context';


const Run = () => {

    return (
        <div className="box-main">
            <div className="container-main">
                <AppProvider>
                    <Navbar />
                    <SideBar />
                    <Main />
                    <Submenu />
                </AppProvider>
            </div>
        </div>
    )
}


export default Run;