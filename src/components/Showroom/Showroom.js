import React, { useEffect, useState } from "react";
import AddShowroom from "../AddShowroom/AddShowroom";

const Showroom = () => {
  const [showrooms, setShowrooms] = useState([]);

  useEffect(() => {
    const url = `https://mysterious-fjord-04184.herokuapp.com/showroom`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setShowrooms(data));
  }, []);
  return (
    <div className="my-5">
      <h2 className="text-center text-lg-end pb-3 col-sm-12 col-lg-7">
        Our
        <span className="ms-2 mb-3 text-info">Showroom</span>
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {showrooms.map((showroom) => (
          <div className="col">
            <div className="card h-100">
              <img
                src={showroom.showroomImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Address: {showroom.address}</p>
                <p className="card-text">Phone: {showroom.number}</p>
              </div>
              <button className="btn btn-info mx-auto w-100 ">
                <a
                  className="text-decoration-none text-white"
                  target="_blank"
                  href="https://goo.gl/maps/AwDQ5SvUnZou6q3GA"
                >
                  Google Map
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showroom;
