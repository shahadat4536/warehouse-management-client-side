import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import PageTitle from "../PageTitle/PageTitle";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
import "./SignIn.css";
const SignIn = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  // const [user] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, signUser, signLoading, signError] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  let errorElement;

  if (signError?.message === `Firebase: Error (auth/user-not-found).`) {
    errorElement = <p className="text-danger text-center">User Not Found</p>;
  }

  if (signError?.message === `Firebase: Error (auth/wrong-password).`) {
    errorElement = (
      <p className="text-danger text-center">Your Password Wrong</p>
    );
  }

  if (user) {
    const url = `https://warehouse-management-server-side-oftd.onrender.com/login`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: user?.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.token);
        navigate(from, { replace: true });
      });
  }

  return (
    <div
      className="px-3 py-3 mt-5 container shadow-lg rounded-3 auth"
      width={"350px"}
    >
      <PageTitle title="Sign In"></PageTitle>
      <div className="mt-5 mb-5">
        <h1 className="text-center mt-5 mb-5">Sign In</h1>
        <SocialSignIn></SocialSignIn>
      </div>

      <div>
        <Form onSubmit={handleSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Password{" "}
              <Link className="text-danger" to="/forgetpassword">
                Forget Password
              </Link>
            </Form.Label>
            <Form.Control name="password" type="password" />
          </Form.Group>

          {errorElement}
          <Button
            className="w-100 mx-auto px-auto"
            variant="primary"
            type="submit"
          >
            Sign In
          </Button>
          <div className="mx-auto">
            <p className="text-center mt-2 ">
              Not a member?
              <Link className="text-decoration-none  ms-2" to="/signup">
                Sign up now
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
