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
    <div>
      <h2>My Items:{myItems.length}</h2>
    </div>
  );
};

export default MyItems;
