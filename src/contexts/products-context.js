import {createContext, useState} from "react";
import SHOP_DATA from "../data/shop.data";

export const ProductsContext = createContext(
    {
        products: [],
        setProducts: {}
    }
);

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([SHOP_DATA]);
    const value = {products};
    return (
        <ProductsProvider value={value}>
            {children}
        </ProductsProvider>
    );
};