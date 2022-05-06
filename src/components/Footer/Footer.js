import React from "react";
import "./Footer.css";
import whatsapp from "../../asset/icon/whatsapp-brands.svg";
import messenger from "../../asset/icon/facebook-messenger-brands.svg";
import phone from "../../asset/icon/phone-solid.svg";
import copyright from "../../asset/icon/copyright-solid.svg";

const Footer = () => {
  return (
    <div className=" bg-dark h-5 mb-2 py-2 row  px-5">
      <div className="col-8">
        <p className="text-white">
          <img
            className="me-2 "
            style={{ width: "20px" }}
            src={copyright}
            alt=""
            srcset=""
          />
          Copyright 2021 Buraq Bike Warehouse Developed by{" "}
          <a href="" target="_blank">
            <span className="text-info">Max Web Service limited</span>
          </a>
        </p>
      </div>
      <div className="col-4">
        <p>
          <span className="text-white me-2">Contact</span>
          <a
            href=" https://api.whatsapp.com/send/?phone=%2B8801954704007&text&app_absent=0"
            target="_blank"
          >
            <img
              style={{ width: "20px" }}
              className="me-2"
              src={whatsapp}
              alt=""
              srcset=""
            />
          </a>
          <img
            style={{ width: "20px" }}
            className="me-2"
            src={messenger}
            alt=""
            srcset=""
          />
          <img
            style={{ width: "20px" }}
            className="me-2"
            src={phone}
            alt=""
            srcset=""
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
