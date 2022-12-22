import React from "react";
const logo = './logo.jpg';

function Employee() {
  return (
   <React.StrictMode>
    <div className="main">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h2>Welcome</h2>
        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text  </p>
      <button className="button">Login</button>
      </div>
{/* right */}
      <div className="right">
      <div className="employee">
        <span style={{background:'white'}}>Employee</span>
        <span style={{color:'white'}}>Help</span>
      </div>
      <h1>Apply as a Employee</h1>
    <form>
      <div className="one">
     <input type='text' placeholder="First Name" className="input"/>
      <input type='text' placeholder="Last Name" className="input"/>
      <input type='Password' placeholder="Password" className="input"/>
      <input type='Password' placeholder="Confirm Password" className="input"/>
      <input type="radio" className="radio"/>Male
      <input type="radio" className="radio"/>Female

      </div>
      <div className="second">
    <input type='email' placeholder="Your Email" className="input"/>
      <input type='text' placeholder="Your Phone" className="input"/>
      <input type='text' placeholder="Loren ipsum" className="input"/>
      <input type='text' placeholder="Address" className="input"/>
      <button className="btn">Submit</button>

      </div>

    </form>
      </div>
    </div>
   </React.StrictMode>
  );
}

export default Employee;
