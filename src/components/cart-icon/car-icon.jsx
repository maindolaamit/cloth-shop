import './cart-icon.styles.scss';
import {ReactComponent as ShoppingCartIcon} from "../../assets/shopping-cart.svg";

const CartIcon = () => {
    return (
        <div className="cart-icon-container">
            <ShoppingCartIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;