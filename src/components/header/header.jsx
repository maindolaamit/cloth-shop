import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import {useContext} from "react";
import CurrentUserCtx from "../../contexts/current-user/current-user";

const Header = () => {
  const currentUser = useContext(CurrentUserCtx);
  console.log(currentUser);
  // function to handle signout
  const handleSignOut = () => {
    console.log("Signing out...");
    auth
      .signOut()
      .then(() => {
        console.log("signed out successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
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
