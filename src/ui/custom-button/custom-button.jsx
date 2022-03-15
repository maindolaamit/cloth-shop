import "./customer-button.scss";

const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

const CustomButton = ({children, buttonType, ...otherProps}) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
