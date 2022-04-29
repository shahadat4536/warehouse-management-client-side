import React from "react";
import useItems from "../../hook/useItems";

const HomeSectionItems = () => {
  const [items, setItems] = useItems;
  return (
    <div>
      {items.map((item) => console.log(item))}
      <h2>Items</h2>
    </div>
  );
};

export default HomeSectionItems;
