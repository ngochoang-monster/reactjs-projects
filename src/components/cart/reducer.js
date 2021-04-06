const reducer = (state, action) => {
    if (action.type === "CLEAR_CART") {
        return { ...state, cart: [] }
    }

    if (action.type === "REMOVE_CART") {
        const newCart = state.cart.filter(item => item.id !== action.payload)
        return { ...state, cart: newCart }
    }

    // if (action.type === "INCREASE") {
    //     let tempCart = state.cart.map((item) => {
    //         if (item.id === action.payload) {
    //             return { ...item, amount: item.amount + 1 }
    //         }
    //         return item;
    //     })

    //     return { ...state, cart: tempCart };
    // }

    // if (action.type === "DECREASE") {
    //     let tempCart = state.cart.map((item) => {
    //         if (item.id === action.payload) {
    //             return { ...item, amount: item.amount - 1 }
    //         }
    //         return item;
    //     }).filter(item => item.amount !== 0)

    //     return { ...state, cart: tempCart };
    // }

    if (action.type === "GET_TOTAL") {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            return {
                ...cartTotal,
                amount: cartTotal.amount + cartItem.amount,
                total: cartTotal.total + cartItem.price * cartItem.amount,
            };
        }, {
            total: 0,
            amount: 0,
        })

        return { ...state, total: total.toFixed(2), amount };
    }

    if (action.type === "LOADING") {
        return { ...state, loading: true };
    }

    if (action.type === "DISPLAY_ITEMS") {
        return { ...state, loading: false, cart: action.payload };
    }

    if (action.type === "TOGGLE_CART") {
        let tempCart = state.cart.map(cartItem => {
            if (action.payload.id === cartItem.id) {
                if (action.payload.type === 'inc') {
                    return { ...cartItem, amount: cartItem.amount + 1 };
                }

                if (action.payload.type === 'dec') {
                    return { ...cartItem, amount: cartItem.amount - 1 };
                }
            }

            return cartItem;
        }).filter(cartItem => cartItem.amount !== 0)

        return { ...state, cart: tempCart }
    }
}

export default reducer;