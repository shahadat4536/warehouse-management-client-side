import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/myitem?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getOrders();
  }, [user]);
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
