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

  let quantity2;
  if (item?.quantity <= 0) {
    quantity2 = "Sold Out";
  } else {
    quantity2 = item?.quantity;
  }
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
                <td>{quantity2}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link className="text-decoration-none " to={`/update/${_id}`}>
          <button className="btn btn-info rounded-bottom mx-auto w-100 text-white">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeSectionItemsData;
