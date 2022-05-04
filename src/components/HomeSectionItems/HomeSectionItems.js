import React from "react";
import useItems from "../../hook/useItems";
import HomeSectionItemsData from "../HomeSectionItemsData/HomeSectionItemsData";

const HomeSectionItems = () => {
  const [items] = useItems([]);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-5 mx-auto my-5 pb-5 ">
      {items.slice(0, 6).map((item) => (
        <HomeSectionItemsData key={item._id} item={item}></HomeSectionItemsData>
      ))}
    </div>
  );
};

export default HomeSectionItems;
