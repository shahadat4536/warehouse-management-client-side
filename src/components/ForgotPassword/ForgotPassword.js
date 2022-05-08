import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import PageTitle from "../PageTitle/PageTitle";

const ForgotPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const [resetError, setResetError] = useState();
  let errorElement;
  //   if (error) {

  //     }
  //   if (sending) {
  //     navigate("/signin");
  //   }

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    sendPasswordResetEmail(email);
    event.target.reset();
    toast("Send Email");

    // if (error) {
    //   toast("Send Email");
    // }
    // if (!error) {

    // }
  };
  // console.log(error);
  return (
    <div>
      <PageTitle title="Forgot Password"></PageTitle>
      <div
        className="px-3 py-3 mt-5 my-auto mx-auto container shadow-lg rounded-3 auth"
        width={"350px"}
      >
        <div>
          <Form onSubmit={handleResetPassword}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" required />
            </Form.Group>

            <Button
              className="w-100 mx-auto px-auto my-3"
              variant="primary"
              type="submit"
            >
              Reset Password
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
