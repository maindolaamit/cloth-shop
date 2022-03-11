import "./customer-button.scss";

const CustomerButton = ({ children, isGoogleSignedIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignedIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomerButton;
