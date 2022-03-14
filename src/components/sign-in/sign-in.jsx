import "./sign-in.style.scss";
import {useState} from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {signInWithGoogle} from "../../firebase/firebase.utils";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        setEmail("");
        setPassword("");
    };

    const handleChange = (event) => {
        const {value, name} = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                ></FormInput>
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                ></FormInput>
                <div className="buttons">
                    <CustomButton type="submit">sign in</CustomButton>
                    <CustomButton type="button" isGoogleSignedIn onClick={signInWithGoogle}>
                        sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
