import { useState } from "react";
import "./directory-menu.style.css";
import MenuItem from "../../components/menu-items/menu-items";

const DirectoryMenu = () => {
  const [section, setSection] = useState([
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
      size: "large",
    },
  ]);

  return (
    <div className="directory-menu">
      {section.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default DirectoryMenu;
