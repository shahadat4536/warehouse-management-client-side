import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handleQuantity = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    console.log(quantity);
    const url = `http://localhost:5000/item/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        quantity,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        event.target.reset();
      });
  };
  return (
    <div className="row row-cols-1 row-cols-md-3 g-5 container mx-auto">
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
              <input
                type="number"
                name="quantity"
                placeholder="Update quantity"
              />
              <input type="submit" value="Update" />
            </form>
            <button className="btn btn-info mx-auto w-100">
              <Link
                className="text-decoration-none text-white"
                to={`/update/${item._id}`}
              >
                Update
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
