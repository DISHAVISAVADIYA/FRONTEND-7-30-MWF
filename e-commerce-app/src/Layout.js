import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Component/Footer";

export default function Layout() {
  return (
    <>
      <div className="container-fluid pt-2">
        {/* first line */}
        <div className="row first-line">
          <div className="col-4">
            <i className="bi bi-telephone"></i>
            <b>1400 210 1120</b>
          </div>

          <div className="col-4">
            <input type="text" placeholder="serach here " />
          </div>

          <div className="col-4 social-icon">
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-google"></i>
            <b>cart</b>
            <i className="bi bi-cart"></i>
          </div>
        </div>
        {/* header-nav */}
        <div className="row pt-1">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link to="#" className="navbar-brand">
                Sharadhha ecommerce
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/Home"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/Women"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Women's product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/Men"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Men's product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/Kids"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Kid's product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/Offer"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Offer
                    </Link>
                  </li>

          
                  <li className="dropdown">
                    <Link to="/Account" className=" dropdown-toggle nav-link active " data-bs-toggle="dropdown" > Account </Link>

                    <ul className=" dropdown-menu bg-info">
                 <Link to="/Sign"  className="nav-link active"> <li className="dropdown-list"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign in</li></Link>
                  <li className="dropdown-list"><Link to="/Sign in"  className="nav-link active">Log in</Link></li>
                    </ul>
                  </li>






                  <li className="nav-item">
                    <Link
                      to="/Contact"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Outlet />

          <Footer />
        </div>
      </div>
    </>
  );
}
