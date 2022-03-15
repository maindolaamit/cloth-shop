import './cart-icon.style.scss';
import {ReactComponent as ShoppingCartIcon} from "../../assets/shopping-bag.svg";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart-context";

const CartIcon = () => {
    const {itemsCount, toggleHidden} = useContext(CartContext);
    return (
        <div className="cart-icon-container" onClick={toggleHidden}>
            <ShoppingCartIcon className="shopping-icon"/>
            <span className="item-count">{itemsCount}</span>
        </div>
    );
};

export default CartIcon;