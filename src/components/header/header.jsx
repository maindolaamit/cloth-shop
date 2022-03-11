import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({authUser}) => {
  console.log(authUser);
  // function to handle singout
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
        {authUser ? (
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
