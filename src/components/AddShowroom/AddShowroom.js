import React from "react";
import { Button, Form } from "react-bootstrap";
import PageTitle from "../PageTitle/PageTitle";

const AddShowroom = () => {
  const handleAddShowroom = (event) => {
    event.preventDefault();
    const showroomImage = event.target.sImage.value;
    const address = event.target.address.value;
    const number = event.target.number.value;
    const map = event.target.map.value;
    console.log(showroomImage, address, number, map);
    fetch("http://localhost:5000/showrooms", {
      method: "POST",
      body: JSON.stringify({
        showroomImage,
        address,
        number,
        map,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        event.target.reset();
      });
  };
  return (
    <div className="my-5">
      <PageTitle title="AddShowroom"></PageTitle>

      <h2 className="text-sm-center text-lg-end pb-3 col-sm-12 col-lg-7">
        Add
        <span className="ms-2 text-info">Showroom</span>
      </h2>

      <Form
        onSubmit={handleAddShowroom}
        className="px-3 py-3 mt-5 container shadow-lg rounded-3"
        width={"350px"}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Showroom Image</Form.Label>
          <Form.Control name="sImage" type="text" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Number</Form.Label>
          <Form.Control name="number" type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Map</Form.Label>
          <Form.Control name="map" type="text" required />
        </Form.Group>

        <Button
          className="w-100 mx-auto px-auto"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddShowroom;
