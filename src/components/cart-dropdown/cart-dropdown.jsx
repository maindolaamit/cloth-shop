import CustomButton from '../../ui/custom-button/custom-button';
import './cart-dropdown.style.scss';
import CartItem from "../cart-item/cart-item";
import {CartContext} from "../../contexts/cart-context";
import {useContext} from "react";

const CartDropdown = () => {
    const {cart} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cart.length ?
                    cart.map(cartItem => {
                        const cartItemKey = cartItem.category + cartItem.id;
                        return <CartItem key={cartItemKey} cartItem={cartItem}/>
                    }) : <span className={'empty-message'}>Your cart is empty</span>
                }
            </div>
            <CustomButton type="button">GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropdown;