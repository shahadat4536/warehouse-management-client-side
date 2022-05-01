import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
import "./SignIn.css";
const SignIn = () => {
  const navigate = useNavigate();

  let location = useLocation();
  // const [user] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  console.log(error);
  return (
    <div
      className="px-3 py-3 mt-5 container shadow-lg rounded-3 auth"
      width={"350px"}
    >
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
              <Link className="text-secondary" to="/forgetpassword">
                Forget Password
              </Link>
            </Form.Label>
            <Form.Control name="password" type="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
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
