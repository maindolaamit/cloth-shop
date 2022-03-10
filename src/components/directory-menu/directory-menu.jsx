import './directory-menu.style.css'
import MenuItem from '../../components/menu-items/menu-items';

const DirectoryMenu = () => {
    

    return (
        <div className="directory-menu">
            <MenuItem title="HATS" />
            <MenuItem title="SNEAKERS" />
            <MenuItem title="HATS" />
            <MenuItem title="MEN'S" />
            <MenuItem title="WOMEN'S" />
        </div>
    );
};

export default DirectoryMenu;