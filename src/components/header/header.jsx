import "./header.style.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase";
import {useContext} from "react";
import {UserContext} from "../../contexts/user-context";

const Header = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    console.log("currentUser -> ", currentUser);
    // function to handle signout
    const handleSignOut = () => {
        try {
            signOutUser().then(setCurrentUser(null));
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className="option" onClick={handleSignOut}>
                        Sign Out
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
