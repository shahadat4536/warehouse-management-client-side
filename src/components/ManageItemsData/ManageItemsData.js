import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../hook/useItems";

const ManageItemsData = ({ item, handleDelete }) => {
  const {
    productName,
    description,
    supplierName,
    quantity,
    price,
    image,
    _id,
  } = item;
  return (
    <div>
      <h2 className="text-center">
        {productName}
        <Link to={`/update/${_id}`}>Update</Link>
        <button onClick={() => handleDelete(_id)}>X</button>
      </h2>
    </div>
  );
};

export default ManageItemsData;
/***
 * <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>


         <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
 */
