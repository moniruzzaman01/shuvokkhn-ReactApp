import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spineer from "../spinner/Spineer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = () => {
    signInWithEmailAndPassword(email, password);
  };

  const handleGoogleSignIn = () => {
    console.log("clicked");
    signInWithGoogle();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-container">
      <h1 className="my-5">Please Login Here.</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            onBlur={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onBlur={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <p>
          New in Shuvokkhon?{" "}
          <Link style={{ textDecoration: "none" }} to="/signup">
            Create an account.
          </Link>
        </p>

        {error || error1 ? (
          <p className="text-danger">
            {error?.message}
            {error1?.message}
          </p>
        ) : (
          ""
        )}
        {loading || loading1 ? <Spineer /> : ""}
        <button
          onClick={handleLogin}
          type="submit"
          className="btn btn-dark d-block mx-auto my-1"
        >
          Login
        </button>
      </form>
      <div style={{ display: "flex", alignItems: "center" }} className="my-3">
        <div className="separator"></div>
        <p style={{ marginBottom: "1px", padding: "0 5px" }}>or</p>
        <div className="separator"></div>
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-dark d-block mx-auto my-1"
      >
        googleSignIn
      </button>
    </div>
  );
};

export default Login;
