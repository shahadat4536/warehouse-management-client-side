import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  // const [email, setEmail] = useState(" ");
  // const [password, setPassword] = useState(" ");
  // const [confirmPassword, setConfirmPassword] = useState(" ");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // const handleEmail = (event) => {
  //   const email = event.target.email.value;
  //   setEmail(email);
  // };
  // const handlePassword = (event) => {
  //   const password = event.target.password.value;
  //   setPassword(password);
  // };
  const handleConfirmPassword = (e) => {};

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div
        className="px-3 py-3  container shadow-lg rounded-3 auth"
        width={"350px"}
      >
        <div className="mt-5 mb-5">
          <h1 className="text-center mt-5 mb-5">Sign Up</h1>
          <SocialSignIn></SocialSignIn>
        </div>

        <div>
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control type="password" />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              className="w-100 mx-auto px-auto"
              variant="primary"
              type="submit"
            >
              Sign Up
            </Button>
            <div className="">
              <p className="text-center mt-2 text-decoration-none">
                Already have an account?
                <Link className="text-decoration-none ms-2" to="/signin">
                  Sign In
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
