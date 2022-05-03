import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Update from "../Update/Update";

const Delivered = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);
  const handleDelivered = () => {
    const previousQuantity = item.quantity;

    const oneItemDelivered = Number(previousQuantity) - 1;
    const deliveredQuantity = { oneItemDelivered };

    const url = `http://localhost:5000/item/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(deliveredQuantity),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      });
  };
  return (
    <div>
      <button
        onClick={handleDelivered}
        className="btn btn-info mx-auto w-100 text-decoration-none text-white mt-2"
      >
        Delivered
      </button>
    </div>
  );
};

export default Delivered;
