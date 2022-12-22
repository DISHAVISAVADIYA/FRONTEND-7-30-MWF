import React from "react";
const logo = 'logo.jpg';

function Impact() {
  return (
    <React.Fragment>
      <header>
      <nav>
        <div className="logo">
      <img src={logo} alt="logo"/>
        </div>
        <div className="menu">
          <ul>
          <li>home</li>
          <li>about</li>
          <li>team</li>
          <li>portfolio</li>
          <li>blog</li>
          <li>service</li>
          </ul>

        </div>
      </nav>
      <div className="content">
    <h1>Welcome to the Impact</h1>
    <p>
    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
    </p>
    <button>Get Started</button>
    <button><i className=" fa fa-th "></i> 
     Watch Video</button>

      </div>
      <div className="card">
        <div className="c1">
          <i className="fa fa-television"></i>
          <h3>lorem ipsum</h3>
        </div>
        <div className="c1">
        <i className="fa fa-book"></i>
          <h3>lorem ipsum</h3>
        </div>
        <div className="c1">
        <i className="fa fa-diamond"></i>
          <h3>lorem ipsum</h3>
        </div>
        <div className="c1">
        <i className="fa fa-arrows-alt"></i>
          <h3>lorem ipsum</h3>
        </div>

      </div>
      </header>
    </React.Fragment>
        
     
  );
}

export default Impact;
