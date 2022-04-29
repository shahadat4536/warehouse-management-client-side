import React from "react";
import google from "../../asset/icon/google.png";
import github from "../../asset/icon/GitHub.png";

const SocialSignIn = () => {
  return (
    <div className="d-flex justify-content-around">
      <img src={google} width={"20px"} alt="" srcset="" />
      <img src={github} width={"20px"} alt="" srcset="" />
    </div>
  );
};

export default SocialSignIn;
