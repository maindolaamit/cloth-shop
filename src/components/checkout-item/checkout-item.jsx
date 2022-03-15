import './checkout-item.style.scss';
import {CartContext} from "../../contexts/cart-context";
import {useContext} from "react";

const CheckoutItem = ({cartItem}) => {
    const {addItem, removeItem, deleteItem} = useContext(CartContext);
    const deleteItemHandler = () => deleteItem(cartItem);
    const addItemHandler = () => addItem(cartItem);
    const removeItemHandler = () => removeItem(cartItem);

    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className={'checkout-item-container'}>
            <div className={'image-container'}>
                <img src={imageUrl} alt={name}/>}>
            </div>
            <span className={'name'}>{name}</span>
            <span className={'quantity'}>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
               <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className={'price'}>{price}</span>
            <div className={'remove-button'} onClick={deleteItemHandler}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;