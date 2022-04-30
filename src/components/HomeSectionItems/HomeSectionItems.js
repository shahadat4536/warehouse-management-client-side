import React from "react";
import useItems from "../../hook/useItems";
import HomeSectionItemsData from "../HomeSectionItemsData/HomeSectionItemsData";

const HomeSectionItems = () => {
  const [items] = useItems([]);
  console.log(items);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-5 container mx-auto ">
      {items.slice(0, 6).map((item) => (
        <HomeSectionItemsData item={item}></HomeSectionItemsData>
      ))}
    </div>
  );
};

export default HomeSectionItems;
