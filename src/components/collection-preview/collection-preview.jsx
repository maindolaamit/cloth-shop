import ProductCard from "../../ui/product-card/product-card";
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <ProductCard key={id} {...otherProps}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
