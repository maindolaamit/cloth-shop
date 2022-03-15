import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({
    cart: [],
    isHidden: true,
    toggleHidden: () => {
    },
    addItem: () => {
    },
    removeItem: () => {
    },
    deleteItem: () => {
    },
    clearCart: () => {
    },
    itemsCount: 0,
});


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [hidden, setHidden] = useState(true);
    const [itemsCount, setItemsCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const toggleHidden = () => {
        setHidden(!hidden);
    };

    const clearCart = () => {
        setCart([]);
        setItemsCount(0);
    };

    const addItem = (newItem) => {
        console.log(cart);
        const foundItem = cart.find(cartItem => newItem.id === cartItem.id && newItem.category === cartItem.category);
        if (foundItem) {
            const newCart = cart.map(cartItem => (cartItem.id === newItem.id && cartItem.category === newItem.category) ?
                {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
            setCart(newCart);
        } else {
            const newCart = [...cart, {...newItem, quantity: 1}];
            setCart(newCart);
            setItemsCount(newCart.length);
        }
    };

    const removeItem = (item) => {
        let newCart = cart.map(cartItem => {
            if (cartItem.id === item.id) {
                return {...cartItem, quantity: cartItem.quantity - 1};
            }
            return cartItem;
        }).filter(cartItem => cartItem.quantity > 0)
        setCart(newCart);
        setItemsCount(newCart.length);
    };

    const deleteItem = (item) => {
        const newCart = cart.filter(cartItem => cartItem.id !== item.id);
        if (newCart.length < cart.length) {
            setCart(newCart);
            setItemsCount(newCart.length);
        }
    };

    useEffect(() => {
        const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(cartTotal);
    }, [cart]);

    const value = {
        cart,
        isHidden: hidden,
        toggleHidden,
        addItem,
        removeItem,
        deleteItem,
        clearCart,
        itemsCount,
        cartTotal
    };
    return (<CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>)
};
