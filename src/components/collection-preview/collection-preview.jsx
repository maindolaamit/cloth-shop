import ProductCard from "../product-card/product-card";
import "./collection-preview.scss";

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map(item => {
                        const product = {category: title.toUpperCase(), ...item};
                        return <ProductCard key={item.id} product={product}/>
                    })
                }
            </div>
        </div>
    );
};

export default CollectionPreview;
