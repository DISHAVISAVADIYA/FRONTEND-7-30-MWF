import React from "react";
import Slick from "./Slick";
export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row ">
            <div className="col-md-6 border-end border-2 border-white">
              <h2>cultivate your brand</h2>
            </div>
            <div className="col-md-6   pt-5">
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti ratione cumque harum! Distinctio saepe exercitationem
                maiores aperiam vo
              </p>
              <div className="text-center">
            
                <button className="btn btn-outline-info " type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
      <Slick/>
      </div>
      </header>

    </>
  );
}
