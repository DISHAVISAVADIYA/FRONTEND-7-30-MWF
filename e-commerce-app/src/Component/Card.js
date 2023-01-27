import React from "react";
import { Link } from "react-router-dom";

export default function Card(cloth) {
  return (
    <>
      <div className="cards pt-2 bg-light">
        <img className="card-img-top  " src={cloth.imgsrc} alt="image" />
        <div className="card-body text-center">
          <h5 className="card-title pt-2">{cloth.name}</h5>
          <p className="card-text pt-2">{cloth.price}</p>
          <Link to="#" className="btn btn-primary w-100 card-btn">
            {cloth.add}
          </Link>
        </div>
      </div>
    </>
  );
}
