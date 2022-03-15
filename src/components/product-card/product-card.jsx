import './product-card.scss';
import CustomButton from "../../ui/custom-button/custom-button";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart-context";

const ProductCard = ({product}) => {
    const {addItem} = useContext(CartContext);
    const {name, price, imageUrl} = product;
    const addProductToCart = () => {
        addItem(product);
    };

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={{name}}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton buttonType="inverted" onClick={addProductToCart}>Add to Cart</CustomButton>
        </div>
    );
}

export default ProductCard;