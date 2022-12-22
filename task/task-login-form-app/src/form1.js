import React from "react";
const logo = 'logo.jpg';

function Form1() {
  return (
  <React.StrictMode>
    <div className="main">
      <div className="logo">
      <div className="image">
    <img src= {logo} alt="logo" />  
      </div>
    <p className="name">CleanMyCar</p>
    <p className="des">India's First Waterless <br></br>Car Cleaning Company</p>
 </div>
      <form>
      <h4>Need Help?</h4>
      <h2>Log in</h2>
      <label>Email</label><br/>
      <input type="email" placeholder="abc@gmail.com" />
      <br/>
      <label>Password</label><br/>
      <input placeholder="Enter Your Password" />
      <div className="forgot">forgot Password?</div>

      <input  type='submit' value="login" className="submit"/>
      </form>

    </div>
  </React.StrictMode>
  );
}

export default Form1;
