import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  console.log(myItems);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = ` https://mysterious-fjord-04184.herokuapp.com/myitem?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getOrders();
  }, [user]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = ` https://mysterious-fjord-04184.herokuapp.com/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myItems.filter((myItem) => myItem._id !== id);
            setMyItems(remaining);
            toast.success("Delete Successful", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
    }
  };
  return (
    <div className="row row-cols-1 row-cols-md-3 g-5 mx-auto my-5 pb-5 ">
      {myItems.map((myItem) => (
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
                    <td>{myItem.quantity}</td>
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
      ))}
    </div>
  );
};

export default MyItems;
