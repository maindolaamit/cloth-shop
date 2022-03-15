import "./sign-up.scss";
import {useState} from "react";
import FormInput from "../../ui/form-input/form-input";
import CustomButton from "../../ui/custom-button/custom-button";
import {createUserWithEmail} from "../../utils/firebase";
import {useNavigate} from "react-router-dom";

const defaultFormFeilds = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SignUpComponent = (props) => {
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFeilds);
    const {displayName, email, password, confirmPassword} = formFields;
    const resetFields = () => {
        setFormFields(defaultFormFeilds);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        if (password.length < 6) {
            alert("password must be at least 6 characters");
            return;
        }
        //
        try {
            const {user} = await createUserWithEmail(email, password);
            // reset the fields
            resetFields();
            navigate("/"); // Take user to homepage after sign up
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    type="text"
                    name="displayName"
                    label="Display Name"
                    value={displayName}
                    onChange={handleChange}
                    required="required"
                />
                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    value={email}
                    onChange={handleChange}
                    required="required"
                />
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    value={password}
                    onChange={handleChange}
                    required="required"
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required="required"
                />
                <div className="buttons">
                    <CustomButton type="submit" onClick={handleSubmit}>Sign Up</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignUpComponent;
