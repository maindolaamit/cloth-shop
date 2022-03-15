import "./customer-button.scss";

const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const CustomButton = ({children, buttonType, ...otherProps}) => {
    return (
        <button
            className={`${BUTTON_TYPE_CLASS[buttonType]} custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
