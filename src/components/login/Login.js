import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <p>
          New in Shuvokkhon?{" "}
          <Link style={{ textDecoration: "none" }} to="/signup">
            Create an account.
          </Link>
        </p>
        <button type="submit" className="btn btn-dark d-block mx-auto my-1">
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
