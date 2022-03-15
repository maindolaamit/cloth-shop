import {createContext, useState} from "react";

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

        const toggleHidden = () => {
            setHidden(!hidden);
        };

        const clearCart = () => {
            setCart([]);
            setItemsCount(0);
        };

        const itemExists = (id) => {
            return cart.find(item => item.id === id);
        };

        const addItem = (item) => {
            let foundItem = itemExists(item.id);
            if (foundItem) {
                const newCart = [...cart, {...item, quantity: 1}];
                setCart(newCart);
                setItemsCount(newCart.length);
            } else {
                setCart(...cart, item);
                setItemsCount(itemsCount + 1);
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

        const value = {
            cart,
            isHidden: hidden,
            addItem,
            removeItem,
            deleteItem,
            clearCart,
            itemsCount,
        };
        return (<CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>)
    }
;
