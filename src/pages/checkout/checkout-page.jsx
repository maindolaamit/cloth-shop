import './checkout-page.style.scss';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart-context";
import CheckoutItem from "../../components/checkout-item/checkout-item";


const CheckoutPage = () => {
    const {cart, cartTotal} = useContext(CartContext);
    return (
        <div className={'checkout-container'}>
            <div className={'checkout-header'}>
                <div className={'header-block'}>
                    <span>Product</span>
                </div>
                <div className={'header-block'}>
                    <span>Description</span>
                </div>
                <div className={'header-block'}>
                    <span>Quantity</span>
                </div>
                <div className={'header-block'}>
                    <span>Price</span>
                </div>
                <div className={'header-block'}>
                    <span>Remove</span>
                </div>
            </div>
            {cart.map(cartItem => {
                const cartItemKey = cartItem.category + cartItem.id;
                return <CheckoutItem key={cartItemKey} cartItem={cartItem}></CheckoutItem>
            })}
            <div className={'total'}>TOTAL : {cartTotal}</div>
        </div>
    );
};

export default CheckoutPage;