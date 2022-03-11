import "./sign-in.style.scss";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    console.log(email, password);
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleChange = event => {
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
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        ></input>
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        ></input>
        <label>Password</label>
        <input type="submit" value="Submit Form"></input>
      </form>
    </div>
  );
};

export default SignIn;
