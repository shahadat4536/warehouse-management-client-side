import React from "react";
import aprila from "../../asset/Brand/aprila.jpg";
import bajaj from "../../asset/Brand/bajaj.jpg";
import benelli from "../../asset/Brand/benelli.jpg";
import hero from "../../asset/Brand/hero.jpg";
import kawasaki from "../../asset/Brand/kawasaki.jpg";
import tvs from "../../asset/Brand/tvs.jpg";
import yamaha from "../../asset/Brand/yamaha.jpg";
import suzuki from "../../asset/Brand/suzuki.jpg";

const Brand = () => {
  return (
    <div className="container">
      <h2 className="text-center text-lg-end pb-3 col-sm-12 col-lg-7">
        Available
        <span className="ms-2 text-info">Brand</span>
      </h2>
      <div className="text-center row my-3">
        <img className="col-6 col-lg-3" src={aprila} alt="" srcset="" />
        <img className="col-6 col-lg-3" src={bajaj} alt="" srcset="" />
        <img className="col-6 col-lg-3" src={benelli} alt="" srcset="" />
        <img className="col-6 col-lg-3" src={hero} alt="" srcset="" />
        <img className="col-6 col-lg-3" src={kawasaki} alt="" srcset="" />
        <img className="col-6 col-lg-3" src={tvs} alt="" srcset="" />
        <img className="col-6 col-lg-3" src={yamaha} alt="" srcset="" />
        <img className="col-6 col-lg-3" src={suzuki} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Brand;
