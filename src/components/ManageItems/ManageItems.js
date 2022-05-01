import React, { useEffect, useState } from "react";
import useItems from "../../hook/useItems";
import ManageItemsData from "../ManageItemsData/ManageItemsData";

const ManageItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/items`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `http://localhost:5000/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          }
        });
    }
  };
  return (
    <div>
      {items.map((item) => (
        <ManageItemsData
          item={item}
          handleDelete={handleDelete}
        ></ManageItemsData>
      ))}
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
