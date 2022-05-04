import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeSectionItemsData = ({ item }) => {
  const {
    productName,
    description,
    supplierName,
    quantity,
    price,
    image,
    _id,
  } = item;
  return (
    <div className="col position-relative">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <table class="table table-striped table-hover">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{productName}</td>
              </tr>
              <tr>
                <th scope="row">Description</th>
                <td className="text-justify">{description}</td>
              </tr>
              <tr>
                <th scope="row">Price</th>
                <td>{price}</td>
              </tr>
              <tr>
                <th scope="row">Supplier</th>
                <td>{supplierName}</td>
              </tr>
              <tr>
                <th scope="row">Quantity</th>
                <td>{quantity}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-info mx-auto w-100 ">
            <Link
              className="text-decoration-none text-white"
              to={`/update/${_id}`}
            >
              Update
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionItemsData;
