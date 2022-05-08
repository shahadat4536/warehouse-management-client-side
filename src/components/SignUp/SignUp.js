import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignIn from "../SocialSignIn/SocialSignIn";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import PageTitle from "../PageTitle/PageTitle";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    createUserWithEmailAndPassword,
    creatUeser,
    createLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let errorElement;

  if (user) {
    navigate(from, { replace: true });
  }

  if (createError?.message === "Firebase: Error (auth/email-already-in-use).") {
    errorElement = <p className="text-danger text-center">Email Already Use</p>;
  }

  // console.log(error, createError);

  const handleSignUp = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    // const phoneNumber = event.target.number.value;
    // console.log(name, email, password, phoneNumber);

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);

      //----------------------------------------------------------------//
      // fetch("http://localhost:5000/users", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     name,
      //     email,
      //     password,
      //     phoneNumber,
      //   }),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //   });
    } else {
      toast.error("Those passwords didn’t match. Try again.");
    }
  };
  return (
    <div>
      <PageTitle title="SignUp"></PageTitle>
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
            {/* <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control name="confirmPassword" type="password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name="number" type="text" />
            </Form.Group> */}
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            {errorElement}
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
