import {createContext, useState} from "react";
import SHOP_DATA from "../data/shop.data";

export const ProductsContext = createContext({products: []});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([SHOP_DATA]);
    return <ProductsProvider value={{products}}>{children}</ProductsProvider>
};