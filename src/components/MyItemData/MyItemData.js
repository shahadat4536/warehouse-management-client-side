import React from "react";

const MyItemData = ({ myItem, handleDelete }) => {
  let quantity2;
  if (myItem?.quantity <= 0) {
    quantity2 = "Sold Out";
  } else {
    quantity2 = myItem?.quantity;
  }
  return (
    <div>
      <div className="col position-relative">
        <div className="card h-100">
          <img src={myItem.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>{myItem.productName}</td>
                </tr>
                <tr>
                  <th scope="row">Description</th>
                  <td className="text-justify">{myItem.description}</td>
                </tr>
                <tr>
                  <th scope="row">Price</th>
                  <td>{myItem.price}</td>
                </tr>
                <tr>
                  <th scope="row">Supplier</th>
                  <td>{myItem.supplierName}</td>
                </tr>
                <tr>
                  <th scope="row">Quantity</th>
                  <td>{quantity2}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="btn btn-danger mx-auto w-100 text-white mt-2 "
              onClick={() => handleDelete(myItem._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItemData;
