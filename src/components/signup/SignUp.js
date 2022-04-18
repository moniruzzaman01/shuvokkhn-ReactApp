import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spineer from "../spinner/Spineer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [authUser, authLoading, authError] = useAuthState(auth);
  const from = location?.state?.from?.pathname || "/";

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(email, password);
  };

  const handleGoogleSignIn = () => {
    console.log("clicked");
    signInWithGoogle();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  if (authLoading) {
    return <Spineer></Spineer>;
  }
  if (authUser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="signup-container">
      <h1 className="my-5">Create account here.</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" className="form-control" />
        </div>
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
          Have an account?{" "}
          <Link style={{ textDecoration: "none" }} to="/login">
            Back to login page.
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
          onClick={handleSignUp}
          type="submit"
          className="btn btn-dark d-block mx-auto my-1"
        >
          SignUp
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

export default SignUp;
