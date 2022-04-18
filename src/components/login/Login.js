import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spineer from "../spinner/Spineer";
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetError, setResetError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [authUser, authLoading] = useAuthState(auth);
  const from = location?.state?.from?.pathname || "/";

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = () => {
    signInWithEmailAndPassword(email, password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("reset email sended");
      })
      .catch((error) => {
        setResetError(error);
      });
  };
  if (authLoading) {
    return <Spineer></Spineer>;
  }
  if (authUser) {
    navigate(from, { replace: true });
  }
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
        <p
          onClick={handleResetPassword}
          style={{
            color: "rgb(50,120,255)",
            cursor: "pointer",
          }}
        >
          Reset password
        </p>

        {error || error1 || resetError ? (
          <p className="text-danger">
            {error?.message}
            {error1?.message}
            {resetError?.message}
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
      <ToastContainer />
    </div>
  );
};

export default Login;
