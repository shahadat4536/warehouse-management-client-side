import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [isReload, item]);

  const handleQuantity = (event) => {
    event.preventDefault();
    const previousQuantity = item.quantity;
    const currentQuantity = event.target.quantity.value;
    const quantity = Number(currentQuantity) + Number(previousQuantity);
    const updateQuantity = { quantity };

    const url = `http://localhost:5000/item/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(updateQuantity),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsReload(!isReload);
        event.target.reset();
      });
  };
  // 1 click 1 item out
  const handleDelivered = () => {
    const previousQuantity = item.quantity;

    const oneItemDelivered = Number(previousQuantity) - 1;
    const deliveredQuantity = { oneItemDelivered };

    const url = `http://localhost:5000/item/${id}`;
    fetch(url, {
      method: "PATCH",
      body: JSON.stringify(deliveredQuantity),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsReload(!isReload);
      });
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-5 container mx-auto w-100 d-flex justify-content-center align-items-center">
      <div className="col ">
        <div className="card h-100">
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <th scope="row">Name</th>
                  <td>{item.productName}</td>
                </tr>
                <tr>
                  <th scope="row">Description</th>
                  <td className="text-justify">{item.description}</td>
                </tr>
                <tr>
                  <th scope="row">Price</th>
                  <td>{item.price}</td>
                </tr>
                <tr>
                  <th scope="row">Supplier</th>
                  <td>{item.supplierName}</td>
                </tr>
                <tr>
                  <th scope="row">Quantity</th>
                  <td>{item.quantity}</td>
                </tr>
              </tbody>
            </table>
            <form onSubmit={handleQuantity}>
              <input className="mx-auto w-100" type="number" name="quantity" />
              <input
                className="btn btn-info mx-auto w-100 text-decoration-none text-white mt-2"
                type="submit"
                value="Update Quantity"
              />
            </form>
            <button
              onClick={handleDelivered}
              className="btn btn-info mx-auto w-100 text-decoration-none text-white mt-2"
            >
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
