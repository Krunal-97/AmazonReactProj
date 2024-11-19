import React, { useState } from "react";
import "../../styles/Login.css";
import header_logo from "../../images/amazon_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={header_logo} />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail:</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password:</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signin}
            type="submit"
            className="login_signin_button"
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={register}
          type="submit"
          className="login_register_button"
        >
          Create Amzon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
