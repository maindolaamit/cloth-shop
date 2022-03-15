import "./sign-in.style.scss";
import {useState} from "react";
import FormInput from "../../ui/form-input/form-input";
import CustomButton from "../../ui/custom-button/custom-button";
import {signInWithEmail, signInWithGoogle} from "../../utils/firebase";

const defaultFormFields = {
    email: '',
    password: '',
};
const SignIn = () => {
        const [formFields, setFormFields] = useState(defaultFormFields);
        const {email, password} = formFields;
        const resetFormFields = () => {
            setFormFields(defaultFormFields);
        };
        const handleSignInWithGoogle = async () => {
            try {
                await signInWithGoogle();
                resetFormFields();
            } catch (e) {
                console.log(e);
            }
        };
        const handleSignInWithEmail = async (event) => {
            event.preventDefault();
            try {
                await signInWithEmail(email, password);
                resetFormFields();
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
