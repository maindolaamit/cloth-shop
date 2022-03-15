import "./header.style.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase";
import {useContext} from "react";
import {UserContext} from "../../contexts/user-context";
import CartIcon from "../cart-icon/cart-icon";
import {CartContext} from "../../contexts/cart-context";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = () => {
    const {currentUser} = useContext(UserContext);
    const {isHidden} = useContext(CartContext);
    console.log("currentUser -> ", currentUser);

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                <Link className="nav-link" to="/shop">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className="nav-link" onClick={signOutUser}>
                        Sign Out
                    </div>
                ) : (
                    <Link className="nav-link" to="/signin">
                        Sign In
                    </Link>
                )}
                <CartIcon/>
            </div>
            {!isHidden && <CartDropdown/>}
        </div>
    );
};

export default Header;
