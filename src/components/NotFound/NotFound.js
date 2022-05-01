import React from "react";
import notFound from "../../asset/image/notfound.png";

const NotFound = () => {
  return (
    <div className="text-center">
      <img className="my-5 w-50" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
