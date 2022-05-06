import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useItems from "../../hook/useItems";
import ManageItemsData from "../ManageItemsData/ManageItemsData";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import PageTitle from "../PageTitle/PageTitle";
import MyItems from "../MyItems/MyItems";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = ` https://mysterious-fjord-04184.herokuapp.com/items`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = ` https://mysterious-fjord-04184.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
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
    <div className="mt-5">
      {/* <h2 className="text-center ">
        Manage
        <span className="ms-2 text-info">ITEM</span>
      </h2> */}

      <div className="row">
        <h2 className="text-sm-center text-lg-end pb-3 col-sm-12 col-lg-7">
          Manage
          <span className="ms-2 text-info">ITEM</span>
        </h2>

        <Link
          to="/additems"
          className=" text-decoration-none col-sm-12 col-lg-5 text-sm-center text-lg-end "
        >
          <button className=" btn btn-info  text-white">Add New Item</button>
        </Link>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-5 mx-auto my-5 pb-5 ">
        {items.map((item) => (
          <ManageItemsData
            item={item}
            handleDelete={handleDelete}
          ></ManageItemsData>
        ))}

        <PageTitle title="Manage Items"></PageTitle>
      </div>
    </div>
  );
};

export default ManageItems;
/**
 * <table class="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
      </table>




      <div className="row row-cols-1container mx-auto ">
      {items.map((item) => (
        <ManageItemsData item={item}></ManageItemsData>
      ))}
    </div>
 */
