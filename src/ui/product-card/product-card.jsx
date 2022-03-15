import './product-card.scss';
import CustomButton from "../custom-button/custom-button";

const ProductCard = ({name, price, imageUrl}) => {
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={{name}}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton buttonType="inverted"></CustomButton>
        </div>
    );
}

export default ProductCard;