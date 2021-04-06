import React, { useReducer, useEffect, useContext } from 'react';
// import data from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext();

const initialValues = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_CART', payload: id })
    }

    // const increase = (id) => {
    //     dispatch({ type: 'INCREASE', payload: id })
    // }


    const fetchData = async () => {
        dispatch({ type: 'LOADING' })
        const res = await fetch(url);
        const cart = await res.json();
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
    }

    const tonggle = (id, type) => {
        dispatch({ type: 'TOGGLE_CART', payload: { id, type } })

    }

    // const decrease = (id) => {
    //     dispatch({ type: 'DECREASE', payload: id })
    // }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        dispatch({ type: 'GET_TOTAL' })
    }, [state.cart])

    return (<AppContext.Provider
        value={{
            ...state,
            clearCart,
            removeItem,
            // increase,
            // decrease,
            tonggle
        }}>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };
