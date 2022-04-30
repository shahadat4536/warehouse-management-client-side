import React from "react";

const ManageItemsData = ({ item }) => {
  const { productName, description, supplierName, quantity, price, image } =
    item;
  return (
    <tbody>
      <tr>
        <td>{productName}</td>
        <td>{supplierName}</td>
        <td>{quantity}</td>
        <td>{price}</td>
      </tr>
    </tbody>
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
