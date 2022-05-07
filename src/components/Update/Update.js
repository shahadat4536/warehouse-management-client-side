import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageTitle from "../PageTitle/PageTitle";

const Update = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isReload, setIsReload] = useState(false);
  const [isReload2, setIsReload2] = useState(false);

  useEffect(() => {
    const url = `https://mysterious-fjord-04184.herokuapp.com/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [isReload, isReload2]);

  const handleQuantity = (event) => {
    event.preventDefault();
    const previousQuantity = item.quantity;
    const currentQuantity = event.target.quantity.value;
    if (currentQuantity < 0) {
      alert("Please Enter Positive Number");
      event.target.reset();
    } else {
      const quantity = Number(currentQuantity) + Number(previousQuantity);
      const updateQuantity = { quantity };

      const url = `https://mysterious-fjord-04184.herokuapp.com/item/${id}`;
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
          toast.success("Quantity Update Successful", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };
  // 1 click 1 item out
  const handleDelivered = () => {
    const previousQuantity = item.quantity;

    const oneItemDelivered = Number(previousQuantity) - 1;
    const deliveredQuantity = oneItemDelivered.toString();
    console.log(JSON.stringify({ deliveredQuantity }));

    if (item?.quantity <= 0) {
      return;
    } else {
      const url = `https://mysterious-fjord-04184.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "PATCH",
        body: JSON.stringify({ deliveredQuantity }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setIsReload2(!isReload2);
          toast.success("Delivered", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };
  let quantity2;
  if (item?.quantity <= 0) {
    quantity2 = "Sold Out";
  } else {
    quantity2 = item?.quantity;
  }

  return (
    <div className="mt-5 ">
      <PageTitle title="Update"></PageTitle>

      <div className="row">
        <h2 className="text-sm-center text-lg-end pb-3 col-sm-12 col-lg-7">
          Update
          <span className="ms-2 text-info">ITEM</span>
        </h2>

        <Link
          to="/manageitems"
          className=" text-decoration-none col-sm-12 col-lg-5 text-sm-center text-lg-end "
        >
          <button className=" btn btn-info  text-white">Manage Item</button>
        </Link>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-5 mx-auto w-100 d-flex justify-content-center align-items-center">
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
                    {<td>{quantity2}</td>}
                  </tr>
                </tbody>
              </table>
              <form onSubmit={handleQuantity}>
                <input
                  className="mx-auto w-100"
                  type="number"
                  name="quantity"
                  required
                />
                <input
                  className="btn btn-info mx-auto w-100 text-decoration-none text-white mt-2"
                  type="submit"
                  value="Update Quantity"
                />
              </form>
              <button
                onClick={handleDelivered}
                className="btn btn-success mx-auto w-100 text-decoration-none text-white mt-2"
              >
                Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
