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
    <div>
      <h2 className="text-center">
        Our <span> Showroom</span>
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{showroom.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showroom;
