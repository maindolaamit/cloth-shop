import CustomButton from '../../ui/custom-button/custom-button';
import './cart-dropdown.style.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <CustomButton type="button">GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropdown;