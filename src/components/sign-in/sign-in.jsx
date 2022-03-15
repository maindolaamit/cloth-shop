import "./sign-in.style.scss";
import {useContext, useState} from "react";
import FormInput from "../../ui/form-input/form-input";
import CustomButton from "../../ui/custom-button/custom-button";
import {signInWithEmail, signInWithGoogle} from "../../utils/firebase";
import {UserContext} from "../../contexts/user-context";
import {useNavigate} from "react-router-dom";

const defaultFormFields = {
    email: '',
    password: '',
};
const SignIn = () => {
        const navigate = useNavigate();
        const {setCurrentUser} = useContext(UserContext);
        const [formFields, setFormFields] = useState(defaultFormFields);
        const {email, password} = formFields;
        const resetFormFields = () => {
            setFormFields(defaultFormFields);
        };
        const handleSignInWithGoogle = async () => {
            try {
                const user = await signInWithGoogle();
                resetFormFields();
                setCurrentUser(user);
                // navigate("/home"); // Take user to homepage after sign in
            } catch (e) {
                console.log(e);
            }
        };
        const handleSignInWithEmail = async (event) => {
            event.preventDefault();
            try {
                const user = await signInWithEmail(email, password);
                resetFormFields();
                setCurrentUser(user);
                // navigate("/home"); // Take user to homepage after sign in
            } catch (error) {
                switch (error.code) {
                    case 'auth/wrong-password':
                        alert('incorrect password for email');
                        break;
                    case 'auth/user-not-found':
                        alert('no user associated with this email');
                        break;
                    default:
                        console.log(error);
                }
            }
        };

        const handleChange = (event) => {
            const {value, name} = event.target;
            setFormFields({...formFields, [name]: value});
        };

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSignInWithEmail}>
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                        label="Password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton type="button" buttonType={'google'} onClick={handleSignInWithGoogle}>
                            sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
;

export default SignIn;
