import React from "react";
import useItems from "../../hook/useItems";
import ManageItemsData from "../ManageItemsData/ManageItemsData";

const ManageItems = () => {
  const [items] = useItems([]);
  return (
    <div>
      <table class="table row row-cols-1 container mx-auto ">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
      </table>
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
