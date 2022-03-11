import { useEffect, useState } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  console.log(SHOP_DATA);
  const [collections] = useState(SHOP_DATA);
  console.log(collections);

  return (
    <div className="shop-page">
      {collections.map(({id, ...otherProps}) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
