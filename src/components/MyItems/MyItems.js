import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import MyItemData from "../MyItemData/MyItemData";
import PageTitle from "../PageTitle/PageTitle";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const [myItem, setMyItem] = useState({});
  // console.log(myItems);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = ` https://mysterious-fjord-04184.herokuapp.com/myitem?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    getOrders();
  }, [user]);
  //---------------------------delete-------------------------//
  const handleDelete = (id) => {
    // console.log(id);
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
    <div className="my-5">
      <PageTitle title="MyItem"></PageTitle>
      <h2 className="text-center text-lg-end pb-3 col-sm-12 col-lg-7">
        My
        <span className="ms-2 text-info">Item</span>
      </h2>

      <div className="row row-cols-1 row-cols-md-3 g-5 mx-auto my-5 pb-5 ">
        {myItems.map((myItem) => (
          <MyItemData
            handleDelete={handleDelete}
            key={myItem._id}
            myItem={myItem}
          ></MyItemData>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
