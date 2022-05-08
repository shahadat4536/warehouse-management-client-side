import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../hook/useItems";
import HomeSectionItemsData from "../HomeSectionItemsData/HomeSectionItemsData";

const HomeSectionItems = () => {
  const [items] = useItems([]);
  return (
    <div className="">
      <div className="row row-cols-1 row-cols-md-3 g-5 mx-auto mt-5 pb-5 ">
        {items.slice(0, 6).map((item) => (
          <HomeSectionItemsData
            key={item._id}
            item={item}
          ></HomeSectionItemsData>
        ))}
      </div>
      <Link to="/manageitems" className=" text-decoration-none  mb-5">
        <button className=" btn btn-info text-white w-100">Manage Item</button>
      </Link>
    </div>
  );
};

export default HomeSectionItems;
