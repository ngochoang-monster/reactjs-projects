import React, { useState, useContext } from 'react';


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenSideBar, setIsOpenSideBar] = useState(false);

    const openModal = () => {
        return setIsOpenModal(true);
    }
    const closeModal = () => {
        return setIsOpenModal(false);
    }
    const openSideBar = () => {
        return setIsOpenSideBar(true);
    }
    const closeSideBar = () => {
        return setIsOpenSideBar(false);
    }

    return (
        <AppContext.Provider value={{
            isOpenModal,
            isOpenSideBar,
            openModal,
            closeModal,
            openSideBar,
            closeSideBar
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalScope = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };