import "./sign-in.style.scss";
import { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    console.log(email, password);
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
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
        <CustomButton type="submit">sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle}>sign in with Google</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
