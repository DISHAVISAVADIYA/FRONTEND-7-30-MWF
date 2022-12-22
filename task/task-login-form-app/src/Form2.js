import React from "react";
function Form2(){
    return(
        <React.Fragment>
            <div className="main">
            <div className="left">
        <h1>Login to Your Account</h1>
        <h3>login using social network</h3>
        <div className="social">
        <i className="fa fa-google"></i>
        <i className="fa fa-facebook"></i>
        <i className="fa fa-whatsapp"></i>
        </div>
        <div className="or">OR</div>
        <form>
            <input  type='email' placeholder="Email"/>
            <br />
            <input  type='password' placeholder="password"/>
            <br/>
            <button>signin </button>

        </form>
            </div>
            <div className="rightside">
                <div className="rc">
            <h1>
                NEW HERE?
            </h1>
            <p>sign uo and discover a great amount of new oppertunities!
            </p>
            <button>sign up</button>
            </div>
            </div>
            </div>
        </React.Fragment>
    );
}
export default Form2;