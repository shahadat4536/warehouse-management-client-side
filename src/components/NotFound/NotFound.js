import React from "react";
import notFound from "../../asset/image/notfound.png";
import PageTitle from "../PageTitle/PageTitle";

const NotFound = () => {
  return (
    <div className="text-center">
      <PageTitle title="404"></PageTitle>
      <img className="my-5 w-50" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
