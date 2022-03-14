import "./sign-up.scss";
import {useState} from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import {useNavigate} from "react-router-dom";

const SignUpComponent = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
            console.log("Creating user with email: " + email);
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, {displayName});
            setDisplayName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/"); // Take user to homepage after sign up
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "confirmPassword") {
            setConfirmPassword(value);
        } else if (name === "displayName") {
            setDisplayName(value);
        }
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
                ></FormInput>
                <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    value={email}
                    onChange={handleChange}
                    required="required"
                ></FormInput>
                <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    value={password}
                    onChange={handleChange}
                    required="required"
                ></FormInput>
                <FormInput
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required="required"
                ></FormInput>
                <div className="buttons">
                    <CustomButton type="submit" onClick={handleSubmit}>Sign Up</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignUpComponent;
