import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../hook/useItems";

const ManageItemsData = ({ item, handleDelete }) => {
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
    <div>
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
            <button
              className="btn btn-danger mx-auto w-100 text-white mt-2 "
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItemsData;
/***
 * <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>


         <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
 */
