import React, { useState, useContext } from 'react';
import data from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isOpenSideBar, setIsOpenSideBar] = useState(false);
    const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
    const [page, setPage] = useState({ page: '', links: [] });
    const [location, setLocation] = useState({})


    const openSideBar = () => {
        return setIsOpenSideBar(true);
    }

    const closeSideBar = () => {
        return setIsOpenSideBar(false);
    }

    const closeSubmenu = () => {
        return setIsOpenSubmenu(false);
    }

    const openSubmenu = (text, conrdinates) => {
        const page = data.find(item => item.page === text);
        setPage(page);
        setLocation(conrdinates)
        setIsOpenSubmenu(true);
    }

    return (
        <AppContext.Provider value={{
            isOpenSideBar,
            openSideBar,
            closeSideBar,
            openSubmenu,
            closeSubmenu,
            location,
            isOpenSubmenu,
            page,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }